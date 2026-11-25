import assert from "node:assert/strict";

// Run against the local preview: node scripts/check-geo-preview.mjs [base URL]
if (process.argv.includes("--static")) {
  throw new Error("CMS pages render at runtime. Start Next.js or the Workers preview, then pass its URL.");
}
const base = process.argv[2] || "http://127.0.0.1:3000";
async function load(path) {
  const response = await fetch(new URL(path, base));
  assert.equal(response.status, 200, path);
  return response.text();
}
const towns = ["reisterstown", "owings-mills", "pikesville"];
const services = ["deck-building", "window-door-renewal", "bathroom-remodeling"];
const routes = towns.flatMap(town => [
  `/home-remodeling-${town}-md`,
  ...services.map(service => `/${service}-${town}-md`),
]);
const pages = new Map();
for (const path of ["/service-areas", ...routes, ...services.map(service => `/services/${service}`)]) {
  const html = await load(path);
  assert.equal((html.match(/<h1(?:\s|>)/g) || []).length, 1, `One H1: ${path}`);
  assert.doesNotMatch(html, /<meta\b(?=[^>]*\bname="(?:robots|googlebot|bingbot)")(?=[^>]*\bcontent="[^"]*\bnoindex\b)[^>]*>/i, `No noindex directive: ${path}`);
  const ids = [...html.matchAll(/\sid="([^"]+)"/g)].map(match => match[1]);
  assert.equal(new Set(ids).size, ids.length, `Unique element IDs: ${path}`);
  for (const [, href] of html.matchAll(/href="(\/[^"?#]+)[^"]*"/g)) {
    if (/^\/(?:home-remodeling|deck-building|window-door-renewal|bathroom-remodeling)-.*-md$/.test(href)) {
      assert(routes.includes(href), `Known geo link ${href} on ${path}`);
    }
  }
  pages.set(path, html);
}
for (const path of routes) {
  const html = pages.get(path);
  assert.match(html, /id="quote-city"/, `City field: ${path}`);
  assert(html.includes(`name="sourcePage" value="${path}"`), `Source page: ${path}`);
  assert(html.includes('href="#request-quote"'), `Local CTA: ${path}`);
}
for (const town of towns) {
  const hub = pages.get(`/home-remodeling-${town}-md`);
  for (const service of services) {
    const path = `/${service}-${town}-md`;
    assert(hub.includes(`href="${path}"`), `Hub links to ${path}`);
    assert(pages.get(`/services/${service}`).includes(`href="${path}"`), `General service links to ${path}`);
    assert(pages.get(path).includes(`href="/home-remodeling-${town}-md"`), `Backlink from ${path}`);
    assert.match(pages.get(path), new RegExp(`<option[^>]*selected=""[^>]*value="${service}"|<option[^>]*value="${service}"[^>]*selected=""`), `Selected service: ${path}`);
  }
}
const sitemap = await load("/sitemap.xml");
for (const path of routes) assert(!sitemap.includes(path), `Review page excluded from sitemap: ${path}`);
assert.equal((await fetch(new URL("/deck-building-unknown-town-md", base))).status, 404);
const invalid = new FormData();
invalid.set("city", "Reisterstown");
assert.equal((await fetch(new URL("/api/quote", base), { method: "POST", body: invalid })).status, 400);
console.log(`Passed: ${routes.length} preview pages, service and hub links, metadata, form context, sitemap, HTTP 404 and invalid form rejection.`);
