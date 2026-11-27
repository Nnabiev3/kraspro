type HubBusiness = {
  phone: string | null;
  mhicLicense: string | null;
  insured: boolean | null;
  googleProfileUrl: string | null;
  googleRating: number | null;
  googleReviewCount: number | null;
};

// Confirm the information for the new city hubs before filling these fields.
export const hubBusiness: HubBusiness = {
  phone: null,
  mhicLicense: null,
  insured: null,
  googleProfileUrl: null,
  googleRating: null,
  googleReviewCount: null,
};
