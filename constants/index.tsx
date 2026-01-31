import { TypeCharacteristics, TypeProductCatalogue } from "@/types";

export const nav: string[] = [
  "About Us",
  "Contact Us",
  "Products",
  "Customized Solutions",
  "Services",
  "800-922-5120",
];

export const charactersitics: TypeCharacteristics[] = [
  {
    icon: "/icons/security.svg",
    title: "Security",
    desc: "They prevent unauthorized access to valuable inventory, tools, equipment, or sensitive areas like server rooms and hazardous material storage.",
  },
  {
    icon: "/icons/organization.svg",
    title: "Organization",
    desc: "They help streamline workflow by creating specific work zones and separating different types of processes or materials within a facility.",
  },
  {
    icon: "/icons/safety.svg",
    title: "Safety",
    desc: "They contribute to a safer work environment by isolating hazardous areas or machinery and protecting employees from potential dangers.",
  },
];

export const exampleApplications = [];

export const productTypeHeadings: string[] = [
  "Latest",
  "Popular",
  "Featured",
  "Price: Low-High",
  "Price: High-Low",
];

export const productsCatalogue: TypeProductCatalogue[] = [
  {
    id: 1,
    image: "/images/product-1.png",
    title: "36″ and 48″ Wide 5-S Storage Cabinets",
    price: "$1,523.66 - $1,544.67",
    featured: true,
  },
  {
    id: 2,
    image: "/images/product-2.png",
    title: "36″ Small Parts Storage and Security Cabinets",
    price: "$1,933.93 - $2,180.76",
    featured: true,
  },
  {
    id: 3,
    image: "/images/product-3.png",
    title: "Adjustable Spring Safety Gate",
    price: "$159.91 - $199.55",
    featured: true,
  },
  {
    id: 4,
    image: "/images/product-4.png",
    title: "All Welded Heavy Duty Gear Lockers",
    price: "$534.61 - $1,172.86",
    featured: true,
  },
  {
    id: 5,
    image: "/images/product-5.png",
    title: "All Welded Heavy Duty Storage Cabinet Lockers",
    price: "$843.47 - $1,178.00",
    featured: false,
  },
  {
    id: 6,
    image: "/images/product-6.png",
    title: "Barriers",
    price: "$1,186.00 - $5,611.00",
    featured: false,
  },
  {
    id: 7,
    image: "/images/product-7.png",
    title: "Bollard Cover",
    price: "$40.95 - $112.95",
    featured: false,
  },
  {
    id: 8,
    image: "/images/product-8.png",
    title: "Bollard Covers",
    price: "$35.99 - $79.99",
    featured: false,
  },
  {
    id: 9,
    image: "/images/product-9.png",
    title: "Bollards",
    price: "$93.10 - $267.93",
    featured: false,
  },
  {
    id: 10,
    image: "/images/product-10.png",
    title: "Bolt Down Bollards",
    price: "$199.95 - $629.95",
    featured: false,
  },
  {
    id: 11,
    image: "/images/product-1.png",
    title: "Bounce Back Bollard",
    price: "$159.91 - $199.95",
    featured: false,
  },
  {
    id: 12,
    image: "/images/product-1.png",
    title: "Box Lockers",
    price: "$534.61 - $1,172.86",
    featured: false,
  },
];
