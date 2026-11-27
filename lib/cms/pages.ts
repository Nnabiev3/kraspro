import { homeFaqs, homeFeaturedServices, homeHero, homeProcess, valueProps } from "@/data/home";
import { locationPath, type Location } from "@/data/locations";
import { cityHubs, findCityHub } from "@/data/geo";
import { deckCover, projects, servicePhotos, type Photo } from "@/data/projects";
import { reviews } from "@/data/reviews";
import { getGeoRoutes, type ServiceLocation, type ServiceLocationArea } from "@/data/service-locations";
import { services, type Service } from "@/data/services";
import { isConfirmed, site } from "@/data/site";

const image = ({ src, alt }: Photo) => ({ src, alt });
const gallery = (slug: string) => (servicePhotos[slug] ?? []).filter(photo => !photo.isPlaceholder).map(({ title, src, alt }) => ({ title, src, alt }));
const metadata = (metaTitle: string, metaDescription: string) => ({ metaTitle, metaDescription });
const cta = (title: string, description: string) => ({ title, description });

export const homeDefaults = {
  ...metadata(`Home Remodeling in Reisterstown, MD | ${site.name}`, "KrasPro is a home remodeling and restoration contractor in Reisterstown, Baltimore County. Explore decks, window and door renewal, exterior painting and more."),
  hero: { ...homeHero, image: image(homeHero.image) },
  galleryTitle: "Exterior Projects",
  gallery: projects.map(({ title, src, alt }) => ({ title, src, alt })),
  featured: homeFeaturedServices.map(({ slug, description }) => ({ slug, description })),
  processTitle: "How Your Project Works",
  process: homeProcess,
  faqTitle: "Frequently Asked Questions",
  faqs: homeFaqs,
  cta: cta("Tell Us About Your Project", "Share what needs attention or what you want to change. We'll help you understand the next step."),
};

export const aboutDefaults = {
  ...metadata("About KrasPro LLC | Maryland Home Remodeling", "Meet KrasPro LLC, a Maryland home remodeling and restoration contractor. See how we inspect the work, prepare a written quote and serve local homeowners."),
  title: "About KrasPro LLC",
  introduction: "KrasPro LLC is a home remodeling and restoration contractor based in {location}. We work on decks, exterior woodwork, windows and doors, as well as kitchens, bathrooms and basements.",
  approach: "Our first step is to look at what you have, what you want to change and what can stay. We use that conversation to define the work and put the proposed scope in writing.",
  story: isConfirmed(site.story) ? site.story : "",
  image: { src: "/images/projects/siding.jpg", alt: "Two-story home with olive siding and cream trim" },
  caption: "Siding installation from the KrasPro work gallery.",
  processTitle: "From First Contact to a Quote",
  process: homeProcess.slice(0, 3),
  quoteTitle: "What Is in Your Written Quote?",
  quoteDescription: "The quote describes the proposed scope so you can see what the work covers and ask about any options or work outside that scope before making a decision.",
  commitments: valueProps.filter(item => item.key === "noCommissionSales" || item.key === "cleanJobSites").map(item => item.description),
  areasTitle: "Where We Work",
  areasDescription: "{company} serves homeowners in Maryland. Share your ZIP code so we can confirm whether we cover your address.",
  cta: cta("Tell Us About Your Home", "Share what needs attention and what you would like to change."),
};

export const contactDefaults = {
  ...metadata("Contact KrasPro LLC | Request a Free Quote", "Contact KrasPro LLC about your home project in Maryland and request a free quote."),
  title: "Request a Free Quote",
  contactsTitle: "Contact Us",
  nextTitle: "What Happens Next",
  nextDescription: "We review your project details and contact you to discuss the next step.",
  coverageLink: { label: "See the Maryland communities we serve", href: "/service-areas" },
};

export const financingDefaults = {
  ...metadata("Financing Information | KrasPro LLC", "Learn what to ask about financing for a home remodeling project in Maryland."),
  title: "Financing Your Exterior Project",
  introduction: "Financing may help spread the cost of a larger project over time. Ask about availability and review all terms before deciding.",
  disclosure: "Financing availability is subject to credit approval.",
  processTitle: "What to Expect",
  process: [
    { title: "Discuss your project", description: "Tell us what work you are considering." },
    { title: "Ask about options", description: "Review availability and any application requirements." },
    { title: "Review the details", description: "Read the terms and disclosures before deciding." },
  ],
  faqTitle: "Financing Questions",
  faqs: [
    { question: "Is financing available for my project?", answer: "Contact us to discuss availability for your project. Financing availability is subject to credit approval." },
    { question: "What should I review before applying?", answer: "Review the full written terms, payment obligations and disclosures before making a decision." },
    { question: "Do I have to use financing?", answer: "You can discuss payment options and choose the approach that suits your circumstances." },
  ],
  cta: cta("Talk About Your Project", "Contact us to discuss your project and financing availability."),
};

export const reviewsDefaults = {
  ...metadata("Homeowner Reviews | KrasPro LLC", "Read homeowner feedback about KrasPro LLC home remodeling and restoration services."),
  title: "Homeowner Reviews",
  emptyText: "Reviews coming soon. Have we worked on your home? Share your experience.",
  reviews,
};

export const privacyDefaults = {
  ...metadata("Privacy Policy | KrasPro LLC", "Read the KrasPro LLC privacy policy."),
  title: "Privacy Policy",
  paragraphs: [
    "This policy is being prepared and requires owner review before launch.",
    "When you contact us, you provide information about yourself and your project. Contact us with questions about how your information is handled.",
  ],
};

export const servicesDefaults = {
  ...metadata("Home Remodeling & Restoration Services | KrasPro LLC", "Explore KrasPro services in Maryland, including decks, painting, restoration, interior remodeling, power washing and Christmas lights."),
  title: "Home Remodeling & Restoration in Maryland",
  introduction: "Explore remodeling, restoration and seasonal services for your home.",
  listTitle: "Our Services",
  cta: cta("Not Sure What You Need?", "Tell us what you have noticed and we can discuss the next step."),
};

export const areasDefaults = {
  ...metadata("Maryland Service Areas | KrasPro LLC", "Explore the Maryland communities served by KrasPro LLC for home remodeling and ask about your address."),
  title: "Home Remodeling Service Areas in Maryland",
  introduction: "Serving {count} Maryland communities from our base in {location}.",
  listTitle: "Explore services by community",
  listDescription: "Find your town, then choose the project you have in mind.",
  communitiesTitle: "Communities We Serve",
  coverageNote: "Contact us to confirm whether we serve your address.",
  limitsTitle: "Service Area Limitations",
  limits: "We work in Maryland only. We do not work in Washington DC or Virginia, regardless of drive time.",
  faqTitle: "Service Area Questions",
  faqs: [
    { question: "Do you cover my town if it is not on the list?", answer: "Contact us with your address and we will confirm whether we can serve your location in Maryland." },
    { question: "Do you work in Washington DC?", answer: "No. We work in Maryland only, not Washington DC or Virginia." },
    { question: "Why does the county matter for my project?", answer: "Permit rules and other requirements vary by jurisdiction. Your county or city determines which local offices and approvals may apply." },
    { question: "How soon can you start in my area?", answer: "Timing depends on the project, scheduling and any required approvals. Contact us with your address and project details to discuss availability." },
  ],
  cta: cta("Not Sure If We Reach You?", `Give us the address and we will tell you straight. No obligation.${site.trust.noCommissionSales ? " No commission." : ""}`),
};

export function serviceDefaults(service: Service) {
  const { slug, heroImage, introTitle, subServices, benefitsTitle, ...copy } = service;
  return {
    ...copy,
    heroImage: image(heroImage),
    introTitle: introTitle ?? "",
    subServices: subServices ?? [],
    benefitsTitle: benefitsTitle ?? "Benefits",
    processTitle: "How the Work Goes",
    faqTitle: "Frequently Asked Questions",
    gallery: gallery(slug),
    cta: cta("Get a Free Quote", "Tell us about your home and what you want to change."),
  };
}

export function cityDefaults(location: Location) {
  const title = `Home Remodeling in ${location.name}, MD`;
  return {
    ...metadata(`${title} | KrasPro LLC`, location.introduction),
    title,
    introduction: location.introduction,
    heroImage: image(deckCover),
    planningTitle: location.planningTitle,
    planningText: location.planningText,
    listTitle: `What can we help you change in ${location.name}?`,
    listDescription: "Explore a service for a closer look at the options, the work involved and what to include in your inquiry.",
    faqTitle: `${location.name} project questions`,
    faqs: [
      { question: `How do I start a project in ${location.name}?`, answer: "Choose the service closest to your project, then send your ZIP code and a short description. Photos are helpful, and your exact address lets us confirm access and availability." },
      { question: "Can I ask about more than one service?", answer: "Yes. Describe the changes you have in mind together so the scope can account for related work and priorities." },
      { question: "Are these photos all from this town?", answer: "The photographs show examples of KrasPro work. They are not assigned to a town unless the project location has been confirmed." },
    ],
    cta: cta(`Tell us about your ${location.name} home`, "Share your priorities and a few details. We will use them to discuss the next step."),
  };
}

export function geoServiceDefaults(entry: ServiceLocation, location: ServiceLocationArea, service: Service) {
  const heroImage = image(service.heroImage);
  const isBathroom = entry.serviceSlug === "bathroom-remodeling";
  const photos = gallery(service.slug);
  if (isBathroom) {
    heroImage.src = "/images/projects/kraspro/shower-tiling.jpg";
    heroImage.alt = `Shower tile installation detail for Bathroom Remodeling in ${location.name}, MD`;
  }
  if (entry.serviceSlug === "power-washing") {
    heroImage.src = "/images/projects/siding.jpg";
    heroImage.alt = `Olive siding and cream trim, example surfaces for ${service.navLabel} in ${location.name}, MD`;
  }
  if (entry.serviceSlug === "basement-remodeling") {
    heroImage.src = "/images/services/basement-remodeling.jpg";
    heroImage.alt = `Finished lower-level design inspiration for Basement Remodeling in ${location.name}, MD`;
  }
  if (entry.serviceSlug === "kitchen-remodeling") {
    heroImage.src = "/images/services/kitchen-remodeling.jpg";
    heroImage.alt = `Illustrative Kitchen Remodeling design for ${location.name}, MD, with shaker cabinets and an island`;
  }
  if (entry.serviceSlug === "christmas-light-installation") {
    heroImage.alt = `Warm white roofline and porch lights, a Christmas Light Installation example for ${location.name}, MD`;
  }
  return {
    ...metadata(entry.metaTitle ?? `${entry.title} | KrasPro LLC`, entry.metaDescription ?? entry.introduction),
    title: entry.title,
    introduction: entry.introduction,
    focusTitle: entry.focusTitle,
    paragraphs: entry.paragraphs,
    checklist: entry.checklist,
    heroImage,
    gallery: isBathroom ? photos.map(photo => ({ ...photo, alt: `${photo.alt}. Bathroom Remodeling reference for ${location.name}, MD.` })) : photos,
    faqTitle: `${service.navLabel} questions in ${location.name}`,
    faqs: entry.guide ? entry.faqs : [...entry.faqs, {
      question: `How do I ask about ${service.navLabel.toLowerCase()} in ${location.name}?`,
      answer: "Use the form below with your ZIP code and project details. Your town and service are already selected. Photos are optional and help explain the existing conditions.",
    }],
    cta: entry.cta ?? cta(`Plan your ${service.navLabel.toLowerCase()} project`, `Tell us what you want to change at your ${location.name} property. Start with your ZIP code and the existing conditions.`),
    ...(entry.guide && {
      pricingNote: entry.guide.pricingNote,
      examples: entry.guide.examples,
      sampleReviews: entry.guide.sampleReviews,
    }),
  };
}

export const standardPages = [
  ["/", "Главная", homeDefaults],
  ["/about", "О компании", aboutDefaults],
  ["/contact", "Контакты и заявка", contactDefaults],
  ["/financing", "Финансирование", financingDefaults],
  ["/reviews", "Отзывы", reviewsDefaults],
  ["/privacy", "Политика конфиденциальности", privacyDefaults],
  ["/services", "Каталог услуг", servicesDefaults],
  ["/service-areas", "Районы обслуживания", areasDefaults],
] as const;

export const servicePages = services.map(service => ({
  path: `/services/${service.slug}`, title: service.navLabel, defaults: serviceDefaults(service),
}));

const geo = getGeoRoutes();

export function cityHubCta(name: string) {
  return { cta: cta(`Tell us about your ${name} home`, "Share the changes you want to make and what prompted the project.") };
}

export const cityPages = [
  ...geo.flatMap(route => route.kind === "location"
    ? [{ path: route.path, title: route.location.name, defaults: cityDefaults(route.location) }]
    : []),
  ...cityHubs.filter(city => !geo.some(route => route.kind === "location" && findCityHub(route.path) === city))
    .map(city => ({ path: locationPath(city), title: city.name, defaults: cityHubCta(city.name) })),
];
export const geoServicePages = geo.flatMap(route => {
  if (route.kind !== "service") return [];
  const { path, entry, location, service } = route;
  return [{ path, title: entry.title, defaults: geoServiceDefaults(entry, location, service) }];
});
