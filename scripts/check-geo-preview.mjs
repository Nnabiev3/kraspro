import assert from "node:assert/strict";

// Run against the local preview: node scripts/check-geo-preview.mjs [base URL]
if (process.argv.includes("--static")) {
  throw new Error("CMS pages render at runtime. Start Next.js or the Workers preview, then pass its URL.");
}
const base = process.argv[2] || "http://127.0.0.1:3000";
async function load(path) {
  const response = await fetch(new URL(path, base));
  assert.equal(response.status, 200, path);
  assert.doesNotMatch(response.headers.get("x-robots-tag") ?? "", /\bnoindex\b/i, path);
  return response.text();
}
const towns = ["reisterstown", "owings-mills", "pikesville"];
const additionalTowns = [
  "baltimore", "bel-air", "bethesda", "catonsville", "college-park", "columbia",
  "dundalk", "ellicott-city", "essex", "finksburg", "frederick", "glen-burnie",
  "hanover", "laurel", "lutherville-timonium", "mt-airy", "parkton", "phoenix",
  "rockville", "severn", "silver-spring", "sparks", "towson", "westminster",
];
const paintingService = "exterior-painting-carpentry";
const renewalService = "window-door-renewal";
const restorationService = "historic-window-restoration";
const houseRestorationService = "house-restoration";
const services = ["deck-building", paintingService, renewalService, restorationService, houseRestorationService, "power-washing", "basement-remodeling", "kitchen-remodeling", "bathroom-remodeling", "christmas-light-installation"];
const existingRoutes = towns.flatMap(town => [
  `/home-remodeling-${town}-md`,
  ...services.map(service => `/${service}-${town}-md`),
]);
const publishedRoutesByService = services.map(service => [
  service,
  [...towns, ...additionalTowns].map(town => `/${service}-${town}-md`),
]);
const publishedRoutes = new Set(publishedRoutesByService.flatMap(([, paths]) => paths));
const routes = [...new Set([...existingRoutes, ...publishedRoutes])];
const pages = new Map();
for (const path of ["/service-areas", ...routes, ...services.map(service => `/services/${service}`)]) {
  const html = await load(path);
  assert.equal((html.match(/<h1(?:\s|>)/g) || []).length, 1, `One H1: ${path}`);
  assert.doesNotMatch(html, /<meta\b(?=[^>]*\bname="(?:robots|googlebot|bingbot)")(?=[^>]*\bcontent="[^"]*\bnoindex\b)[^>]*>/i, `No noindex directive: ${path}`);
  const ids = [...html.matchAll(/\sid="([^"]+)"/g)].map(match => match[1]);
  assert.equal(new Set(ids).size, ids.length, `Unique element IDs: ${path}`);
  for (const [, href] of html.matchAll(/href="(\/[^"?#]+)[^"]*"/g)) {
    if (href.endsWith("-md") && ["home-remodeling", ...services].some(service => href.startsWith(`/${service}-`))) {
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
for (const [service, localRoutes] of publishedRoutesByService) {
  const descriptions = new Set();
  for (const path of localRoutes) {
    const html = pages.get(path);
    for (const overview of [`/services/${service}`, "/service-areas"]) {
      assert(pages.get(overview).includes(`href="${path}"`), `${overview} links to ${path}`);
    }
    assert.match(html, new RegExp(`<option[^>]*selected=""[^>]*value="${service}"|<option[^>]*value="${service}"[^>]*selected=""`), `Selected service: ${path}`);
    const description = html.match(/<meta name="description" content="([^"]+)"/)?.[1];
    assert(description, `Meta description: ${path}`);
    assert(!descriptions.has(description), `Unique description: ${path}`);
    descriptions.add(description);
    const canonical = html.match(/<link rel="canonical" href="([^"]+)"/)?.[1];
    assert(canonical && new URL(canonical).pathname === path, `Local canonical: ${path}`);
  }
}
const sitemap = await load("/sitemap.xml");
for (const path of routes) {
  assert.equal(sitemap.includes(path + "</loc>"), publishedRoutes.has(path), `Sitemap publication status: ${path}`);
}
for (const service of services) {
  assert.equal((await fetch(new URL(`/${service}-unknown-town-md`, base))).status, 404);
}
const serviceHub = await load("/services");
const linkCache = new Map(pages);
const rows = [];
const stripMarkup = html => html.replace(/<[^>]*>/g, " ").replace(/&#x27;/g, "'").replace(/&amp;/g, "&").replace(/\s+/g, " ").trim();
const projectGuides = [
  {
    slug: "basement-remodeling",
    label: "Basement Remodeling",
    heroAlt: city => `Finished lower-level design inspiration for Basement Remodeling in ${city}, MD`,
  },
  {
    slug: "kitchen-remodeling",
    label: "Kitchen Remodeling",
    heroAlt: city => `Illustrative Kitchen Remodeling design for ${city}, MD, with shaker cabinets and an island`,
  },
  {
    slug: "bathroom-remodeling",
    label: "Bathroom Remodeling",
    imagePath: "/images/projects/kraspro/shower-tiling.jpg",
    heroAlt: city => `Shower tile installation detail for Bathroom Remodeling in ${city}, MD`,
  },
  {
    slug: "christmas-light-installation",
    label: "Christmas Light Installation",
    heroAlt: city => `Warm white roofline and porch lights, a Christmas Light Installation example for ${city}, MD`,
  },
];

for (const { slug, label, heroAlt, imagePath = `/images/services/${slug}.jpg` } of projectGuides) {
  const overview = `/services/${slug}`;
  const localPaths = publishedRoutesByService.find(([service]) => service === slug)[1];
  assert.equal(localPaths.length, 27);
  assert(serviceHub.includes(`href="${overview}"`), `Service directory entry: ${slug}`);
  assert(serviceHub.includes(`href="${overview}#service-cities"`), `Service directory shortcut: ${slug}`);
  assert(pages.get(overview).includes('id="service-cities"'), `Service directory shortcut target: ${slug}`);
  assert.equal((await fetch(new URL(imagePath, base))).status, 200, `Hero image: ${slug}`);

  const titleSet = new Set();
  const openingSet = new Set();
  for (const path of localPaths) {
    const html = pages.get(path);
    const title = html.match(/<title>([^<]+)<\/title>/)?.[1];
    const description = html.match(/<meta name="description" content="([^"]+)"/)?.[1];
    assert(title && title.length >= 40 && title.length <= 65 && !titleSet.has(title), `Unique title of 40–65 characters: ${path}`);
    titleSet.add(title);
    assert(description && description.length >= 140 && description.length <= 165, `Description of 140–165 characters: ${path}`);
    const h1 = html.match(/<h1[^>]*>([^<]+)<\/h1>/)?.[1];
    const city = h1?.match(new RegExp(`^${label} in (.+), MD$`))?.[1];
    assert(city && title.includes(h1) && description.includes(city), `Local heading and metadata: ${path}`);
    const metas = Object.fromEntries([...html.matchAll(/<meta (?:name|property)="([^"]+)" content="([^"]+)"/g)].map(([, key, value]) => [key, value]));
    assert.equal(metas["og:title"], title);
    assert.equal(metas["og:description"], description);
    assert(metas["og:image"] && metas["twitter:image"], `Social images: ${path}`);
    assert.equal(metas["twitter:card"], "summary_large_image");
    assert.equal(metas["twitter:title"], title);
    assert.equal(metas["twitter:description"], description);
    const canonical = html.match(/<link rel="canonical" href="([^"]+)"/)?.[1];
    assert.equal(metas["og:url"], canonical, path);

    const schema = [...html.matchAll(/<script type="application\/ld\+json">(.+?)<\/script>/g)].map(([, script]) => JSON.parse(script));
    const business = schema.find(item => ["GeneralContractor", "LocalBusiness"].includes(item["@type"]));
    const service = schema.find(item => item["@type"] === "Service");
    assert(business && service?.provider?.["@id"] === business["@id"], `Shared LocalBusiness provider: ${path}`);
    assert.equal(service.url, canonical, path);
    assert.equal(service.areaServed.name, city + ", Maryland", path);
    if (["bathroom-remodeling", "christmas-light-installation"].includes(slug)) {
      assert.equal(service.areaServed["@type"], "City", path);
    }
    if (slug === "bathroom-remodeling") {
      assert(html.includes(`Bathroom Remodeling reference for ${city}, MD."`), `Localized gallery alt: ${path}`);
    }
    assert(schema.some(item => item["@type"] === "BreadcrumbList" && item.itemListElement.at(-1).item === canonical), `Breadcrumbs: ${path}`);
    const faqCount = schema.find(item => item["@type"] === "FAQPage")?.mainEntity.length;
    assert(faqCount >= 3 && faqCount <= 5, `FAQ count: ${path}`);

    const main = html.match(/<main\b[^>]*>([\s\S]+?)<\/main>/)?.[1];
    assert(main, path);
    const opening = stripMarkup(main.match(/<h1[^>]*>[^<]+<\/h1>\s*<p[^>]*>([^<]+)<\/p>/)?.[1] ?? "");
    assert(opening.length >= 200 && !openingSet.has(opening.slice(0, 200)), `Unique first 200 content characters: ${path}`);
    openingSet.add(opening.slice(0, 200));
    const content = main.replace(/<(form|nav|script|style)\b[^>]*>[\s\S]*?<\/\1>/g, "");
    const prose = [...content.matchAll(/<(p|summary|blockquote)\b[^>]*>([\s\S]*?)<\/\1>/g)].map(([, , body]) => stripMarkup(body)).join(" ");
    const words = prose.match(/[\p{L}\p{N}]+(?:[-'’][\p{L}\p{N}]+)*/gu).length;
    assert(words >= 400 && words <= 700, `Main content words (${words}): ${path}`);
    const hrefs = new Set([...main.matchAll(/<a\b[^>]*\bhref="([^"]+)"/g)].map(([, href]) => href));
    const town = path.slice(slug.length + 2);
    assert([...hrefs].filter(href => href !== path && localPaths.includes(href)).length >= 3, `Nearby city links: ${path}`);
    assert(services.filter(otherService => otherService !== slug && hrefs.has(`/${otherService}-${town}`)).length >= 3, `Same-city service links: ${path}`);
    assert(hrefs.has(overview) && hrefs.has("#request-quote"), `Service and quote links: ${path}`);
    assert(html.includes('href="tel:'), `Call link: ${path}`);
    assert(html.includes(`alt="${heroAlt(city)}"`), `Localized hero alt: ${path}`);
    assert.equal((main.match(/>Illustrative sample<\/figcaption>/g) ?? []).length, 2, `Labeled reviews: ${path}`);
    assert.equal((main.match(/<article\b/g) ?? []).length, 2, `Illustrative cases: ${path}`);

    const allHrefs = new Set([...html.matchAll(/<a\b[^>]*\bhref="([^"]+)"/g)].map(([, href]) => href));
    for (const href of allHrefs) {
      assert(href !== "#" && !href.includes("/undefined"), `Invalid link: ${href} on ${path}`);
      if (href.startsWith("#") || href.startsWith("/")) {
        const url = new URL(href, new URL(path, base));
        if (!linkCache.has(url.pathname)) linkCache.set(url.pathname, await load(url.pathname));
        if (url.hash) assert(linkCache.get(url.pathname).includes(`id="${url.hash.slice(1)}"`), `Anchor target: ${href} on ${path}`);
      }
    }
    const sitemapEntry = sitemap.split("<url>").find(entry => entry.includes(path + "</loc>"));
    const lastmod = sitemapEntry?.match(/<lastmod>([^<]+)<\/lastmod>/)?.[1];
    assert(lastmod && Number.isFinite(Date.parse(lastmod)), `Sitemap lastmod: ${path}`);
    rows.push({ city, path, http: 200, words });
  }
}
const invalid = new FormData();
invalid.set("city", "Reisterstown");
assert.equal((await fetch(new URL("/api/quote", base), { method: "POST", body: invalid })).status, 400);
console.table(rows.sort((first, second) => first.city.localeCompare(second.city)));
console.log(`Passed: ${routes.length} preview pages, service and hub links, metadata, form context, sitemap, HTTP 404 and invalid form rejection.`);
