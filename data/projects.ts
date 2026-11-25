export type Photo = { src: string; alt: string; isPlaceholder?: boolean; tone?: "daylight" | "interior" };
export type Project = Photo & { title: string; portrait?: boolean; position?: string };

export const deckCover: Project = {
  title: "Raised deck with black railings",
  src: "/images/projects/kraspro/deck-railings.jpg",
  alt: "Raised deck with black railings, a blue umbrella and white trim",
  tone: "daylight",
};

export const servicePhotos: Partial<Record<string, readonly Project[]>> = {
  "deck-building": [
    deckCover,
    {
      title: "Deck viewed from the yard",
      src: "/images/projects/kraspro/deck-overview.jpg",
      alt: "Two outdoor levels with black railings and a blue umbrella, seen from the yard",
      position: "50% 52%",
      tone: "daylight",
    },
    {
      title: "Decking installation in progress",
      src: "/images/projects/kraspro/deck-installation.jpg",
      alt: "Deck boards with tools and offcuts visible during installation",
      tone: "daylight",
    },
  ],
  "window-door-renewal": [
    {
      title: "Replacement window in a stone wall",
      src: "/images/projects/kraspro/stone-house-window.jpg",
      alt: "White replacement window in a stone opening with the manufacturer label still on the glass",
      portrait: true,
      tone: "daylight",
    },
    {
      title: "Bay window installation in progress",
      src: "/images/projects/kraspro/bay-window-installation.jpg",
      alt: "White bay window with ladders on either side against beige siding",
      portrait: true,
      position: "50% 47%",
      tone: "daylight",
    },
  ],
  "bathroom-remodeling": [
    {
      title: "Shower tile installation in progress",
      src: "/images/projects/kraspro/shower-tiling.jpg",
      alt: "Shower wall with large format tile, blue leveling clips and a recessed niche during installation",
      portrait: true,
      position: "50% 32%",
      tone: "interior",
    },
    {
      title: "Shower niche during tiling",
      src: "/images/projects/kraspro/shower-niche.jpg",
      alt: "Close view of the recessed shower niche with unfinished tile and leveling clips",
      portrait: true,
      tone: "interior",
    },
  ],
};

export const projects: Project[] = [
  deckCover,
  // Additional photos from https://www.krasprollc.com/gallery.
  {
    title: "Siding installation",
    src: "/images/projects/siding.jpg",
    alt: "Two-story house with olive siding and cream trim",
    isPlaceholder: false,
  },
  {
    title: "Window installation",
    src: "/images/projects/window.jpg",
    alt: "Pair of white-framed windows in a blue room",
    isPlaceholder: false,
  },
  {
    title: "Entry door installation",
    src: "/images/projects/entry-door.jpg",
    alt: "Wooden double entry doors with arched detailing",
    isPlaceholder: false,
  },
];
