import { readFile } from "node:fs/promises";

const account = process.env.CLOUDFLARE_ACCOUNT_ID?.trim();
const token = process.env.CLOUDFLARE_API_TOKEN?.trim();

if (!account || !token) {
  throw new Error("Set CLOUDFLARE_ACCOUNT_ID and CLOUDFLARE_API_TOKEN in GitHub Actions secrets.");
}
if (!/^[a-f0-9]{32}$/i.test(account)) {
  throw new Error("CLOUDFLARE_ACCOUNT_ID must contain 32 hexadecimal characters.");
}

const { name } = JSON.parse(await readFile(new URL("../wrangler.jsonc", import.meta.url), "utf8"));
const dnsLabel = /^[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?$/;
if (typeof name !== "string" || !dnsLabel.test(name)) {
  throw new Error("Set a valid Worker name in wrangler.jsonc.");
}

const response = await fetch(
  "https://api.cloudflare.com/client/v4/accounts/" + account + "/workers/subdomain",
  { headers: { Authorization: "Bearer " + token }, signal: AbortSignal.timeout(15000) },
);
if (!response.ok) {
  throw new Error("Could not read the Cloudflare Workers subdomain (HTTP " + response.status + "). Check the account, token permissions and workers.dev setup.");
}

const { success, result } = await response.json();
const subdomain = result?.subdomain;
if (!success || typeof subdomain !== "string" || !dnsLabel.test(subdomain)) {
  throw new Error("Enable a workers.dev subdomain for the Cloudflare account before deploying.");
}

console.log("https://" + name + "." + subdomain + ".workers.dev");
