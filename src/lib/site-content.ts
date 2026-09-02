/**
 * ALL editable site content lives here.
 * Swap text, images, contact details and social links in this one file.
 */

import hero from "@/assets/hero.jpg";
import designerAsset from "@/assets/img_3368.jpeg.asset.json";
import portraitAsset from "@/assets/img_2402.jpeg.asset.json";
import mission from "@/assets/mission.jpg";
import salonAsset from "@/assets/img_2397.jpeg.asset.json";
import kitchenAsset from "@/assets/img_2393.jpeg.asset.json";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import project5 from "@/assets/project-5.jpg";
import project6 from "@/assets/project-6.jpg";
import ba1Before from "@/assets/ba-1-before.jpg";
import ba1After from "@/assets/ba-1-after.jpg";
import ba2Before from "@/assets/ba-2-before.jpg";
import ba2After from "@/assets/ba-2-after.jpg";
import ba3Before from "@/assets/ba-3-before.jpg";
import ba3After from "@/assets/ba-3-after.jpg";

export const brand = {
  name: "Starr Decor Luxe",
  tagline: "Timeless interiors. Cozy luxury.",
  email: "hello@starrdecorluxe.com",
  phone: "(555) 014-8820",
  serviceArea: "Greater metro area & nationwide virtual design",
  socials: [
    { label: "Instagram", href: "https://instagram.com" },
    { label: "Facebook", href: "https://facebook.com" },
    { label: "Pinterest", href: "https://pinterest.com" },
  ],
};

export const images = {
  hero,
  mission,
  /** Hero: designer standing in a white living room */
  heroPortrait: salonAsset.url,
  /** Designer intro: kitchen shot */
  designerKitchen: kitchenAsset.url,
  /** About page headshot */
  designer: designerAsset.url,
  /** Seated portrait used in the closing CTA */
  ctaPortrait: portraitAsset.url,
};

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Process", to: "/process" },
  { label: "Contact", to: "/contact" },
] as const;

export const services = [
  {
    number: "01",
    title: "Full-Service Interior Design",
    description:
      "From concept to completion, we manage every detail of your interior transformation.",
  },
  {
    number: "02",
    title: "Residential Design",
    description: "Beautiful, functional spaces designed around the way you live.",
  },
  {
    number: "03",
    title: "Room Refresh",
    description:
      "Transform an existing space with thoughtful styling, furniture, color, and décor.",
  },
  {
    number: "04",
    title: "Space Planning",
    description: "Create a layout that maximizes both beauty and functionality.",
  },
  {
    number: "05",
    title: "Furnishings & Styling",
    description: "Curated furniture, artwork, accessories, and finishing touches.",
  },
  {
    number: "06",
    title: "Virtual Design",
    description: "Professional interior design guidance from wherever you are.",
  },
];

export const portfolioCategories = [
  "All",
  "Living Spaces",
  "Kitchens",
  "Bedrooms",
  "Dining",
  "Full Homes",
] as const;

export type PortfolioCategory = (typeof portfolioCategories)[number];

export const projects: {
  name: string;
  location: string;
  category: Exclude<PortfolioCategory, "All">;
  description: string;
  image: string;
  /** Optional extra classes to fine-tune the crop of this project's photo */
  imageClass?: string;
}[] = [
  {
    name: "The Hawthorne Residence",
    location: "Location placeholder",
    category: "Living Spaces",
    description: "A quiet, layered living room built around texture and warm light.",
    image: salonAsset.url,
  },
  {
    name: "Marbury Kitchen",
    location: "Location placeholder",
    category: "Kitchens",
    description: "White oak, honed stone, and brass for a kitchen made to gather in.",
    image: kitchenAsset.url,
    imageClass: "scale-[1.15] object-[center_15%]",
  },
  {
    name: "Linden Primary Suite",
    location: "Location placeholder",
    category: "Bedrooms",
    description: "A restful retreat in linen, cream, and soft taupe.",
    image: project3,
  },
  {
    name: "Ashfield Dining Room",
    location: "Location placeholder",
    category: "Dining",
    description: "Charcoal paneling grounds an airy, elegant dining space.",
    image: project4,
  },
  {
    name: "The Corinne Estate",
    location: "Location placeholder",
    category: "Full Homes",
    description: "A whole-home renovation with a calm, continuous material story.",
    image: project5,
  },
  {
    name: "Bellamy Sitting Room",
    location: "Location placeholder",
    category: "Living Spaces",
    description: "A cozy library corner designed for slow mornings.",
    image: project6,
  },
];

export const transformations = [
  {
    title: "Hawthorne Living Room",
    location: "Location placeholder",
    before: ba1Before,
    after: ba1After,
  },
  {
    title: "Marbury Kitchen",
    location: "Location placeholder",
    before: ba2Before,
    after: ba2After,
  },
  {
    title: "Linden Primary Suite",
    location: "Location placeholder",
    before: ba3Before,
    after: ba3After,
  },
];

export const processSteps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We begin by learning about your lifestyle, preferences, goals, and vision.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "We develop a thoughtful design concept tailored specifically to your space.",
  },
  {
    number: "03",
    title: "Refine",
    description:
      "We collaborate with you to perfect the details and bring the vision together.",
  },
  {
    number: "04",
    title: "Transform",
    description:
      "We bring the design to life and create a space you'll love coming home to.",
  },
];

export const projectTypes = [
  "Full-Service Interior Design",
  "Residential Design",
  "Room Refresh",
  "Space Planning",
  "Furnishings & Styling",
  "Virtual Design",
];

export const budgetRanges = [
  "Under $25,000",
  "$25,000 – $50,000",
  "$50,000 – $100,000",
  "$100,000 – $250,000",
  "$250,000+",
];
