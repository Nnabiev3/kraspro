import { hubBusiness } from "./business";
import { catonsville } from "./cities/catonsville";
import { pikesville } from "./cities/pikesville";
import { towson } from "./cities/towson";
import type { CityResearch } from "./cities/types";
import { locationPath } from "./locations";

export const ACTIVE_WAVE = 1;

export type CityHub = CityResearch & { tier: "A" | "B" | "C"; wave: 1 | 2 | 3 | null };

export const cityHubs: readonly CityHub[] = [catonsville, pikesville, towson].map(city => ({
  ...city,
  tier: "A",
  wave: 1,
}));

export function findCityHub(path: string) {
  return cityHubs.find(city => locationPath(city) === path);
}

export function hubDraftReasons(city: CityHub) {
  return [
    (!city.county.text.trim() || !city.county.sourceUrl.trim()) && "sourced county",
    (!city.countyPermitAuthority.text.trim() || !city.countyPermitAuthority.sourceUrl.trim()) && "sourced permit authority",
    city.zips.length < 1 && "ZIP code",
    city.neighborhoods.length < 3 && "three neighborhoods",
    (!city.housingProfile.text.trim() || !city.housingProfile.sourceUrls.length) && "sourced housing profile",
    city.localIssues.filter(issue => !issue.needsTradeReview).length < 3 && "three contractor-approved local issues",
    city.faq.filter(question => !question.needsTradeReview).length < 3 && "three contractor-approved local questions",
    !hubBusiness.phone?.trim() && "confirmed business phone",
    (city.wave === null || city.wave > ACTIVE_WAVE) && "active publication wave",
  ].filter(reason => typeof reason === "string");
}

export function isHubIndexable(city: CityHub) {
  return hubDraftReasons(city).length === 0;
}

export function publicCityHubHref(href: string) {
  const city = findCityHub(href.split(/[?#]/, 1)[0].replace(/\/$/, ""));
  return city && !isHubIndexable(city) ? `/service-areas#${city.slug}` : href;
}
