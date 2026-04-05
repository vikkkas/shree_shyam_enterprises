export interface Product {
  id: string;
  name: string;
  category: "flanges" | "housings" | "castings";
  image: string;
  features: string[];
  description: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface WhyUsItem {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  company: string;
  initials: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface ContactInfo {
  phone: string;
  email: string;
  address: string;
  hours: string;
  website: string;
}

export interface Machine {
  name: string;
  image: string;
  description: string;
}

export const products: Product[] = [
  {
    id: "aluminium-insulator-flange",
    name: "Aluminium Insulator Flange",
    category: "flanges",
    image: "/images/product-1.png",
    features: ["High Dimensional Accuracy", "Corrosion Resistant", "Lightweight & Strong"],
    description:
      "Precision-engineered aluminium insulator flanges designed for high-voltage electrical applications. Manufactured to exact specifications with tight tolerances.",
  },
  {
    id: "aluminium-threaded-flange",
    name: "Aluminium Threaded Flange",
    category: "flanges",
    image: "/images/product-1.png",
    features: ["Precision Internal Threading", "High Load Capacity", "Custom Sizes Available"],
    description:
      "High-strength threaded flanges with precision machined internal threads. Available in standard and custom sizes for diverse industrial applications.",
  },
  {
    id: "aluminium-motor-housing",
    name: "Aluminium Motor Housing",
    category: "housings",
    image: "/images/product-2.png",
    features: ["High Strength Casting", "Precision Machined Surface", "Durable Industrial Design"],
    description:
      "Robustly cast aluminium motor housings with precision-machined mounting surfaces. Engineered for thermal efficiency and mechanical durability.",
  },
  {
    id: "aluminium-blower-housing",
    name: "Aluminium Blower Housing",
    category: "housings",
    image: "/images/product-2.png",
    features: ["High Structural Stability", "Corrosion Resistant Coating", "Custom Designs Available"],
    description:
      "Aerodynamically optimised blower housings cast in aluminium alloy. Custom profiles available to match specific airflow and pressure requirements.",
  },
  {
    id: "aluminium-pulley-casting",
    name: "Aluminium Pulley Casting",
    category: "castings",
    image: "/images/product-1.png",
    features: ["Smooth Rotational Performance", "High Load Bearing Capacity", "Long Service Life"],
    description:
      "Precision-balanced aluminium pulley castings for power transmission applications. Machined to achieve smooth rotation and extended service life.",
  },
  {
    id: "cnc-machined-aluminium-housing",
    name: "CNC Machined Aluminium Housing",
    category: "housings",
    image: "/images/product-2.png",
    features: ["Precision CNC Machining", "High Dimensional Accuracy", "Custom Industrial Applications"],
    description:
      "Complex aluminium housings produced via 5-axis CNC machining. Tolerances held to ±0.01mm for the most demanding industrial requirements.",
  },
];

export const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: "Enquiry & Drawing",
    description:
      "Client submits enquiry with drawings or specifications. Our engineers review requirements and technical feasibility.",
  },
  {
    step: 2,
    title: "Quotation & Planning",
    description:
      "Detailed quotation prepared with material specifications, lead time, and pricing. Production schedule planned.",
  },
  {
    step: 3,
    title: "Tooling & Setup",
    description:
      "Custom tooling and fixtures prepared. CNC programs written and verified against customer drawings.",
  },
  {
    step: 4,
    title: "Production & QC",
    description:
      "Casting and machining under ISO 9001:2015 QMS. In-process inspection at every stage ensures zero-defect delivery.",
  },
  {
    step: 5,
    title: "Delivery",
    description:
      "Finished parts packed and dispatched with full dimensional inspection report. Tracked logistics across India.",
  },
];

export const whyUsItems: WhyUsItem[] = [
  {
    id: "in-house",
    icon: "Factory",
    title: "In-House Facility",
    description:
      "Complete manufacturing setup under one roof: casting, machining, finishing & QC. Full control over quality and lead times.",
  },
  {
    id: "custom",
    icon: "Settings",
    title: "Custom Engineering",
    description:
      "Made-to-order designs to exact customer specifications and drawings. Complex geometries and tight tolerances handled with ease.",
  },
  {
    id: "iso",
    icon: "Award",
    title: "ISO 9001:2015 QMS",
    description:
      "Certified quality management system ensuring consistent precision. Every part traceable through our documented QMS.",
  },
  {
    id: "delivery",
    icon: "Clock",
    title: "On-Time Delivery",
    description:
      "Reliable logistics with committed lead times across India. 98%+ on-time delivery record maintained since 2022.",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    quote:
      "Shree Shyam Enterprise delivered our custom aluminium flanges with exceptional precision. Lead times were perfect and the quality consistently met our strict specifications.",
    author: "Rajesh Sharma",
    company: "Aditya Birla Insulators",
    initials: "RS",
  },
  {
    id: "t2",
    quote:
      "The quality of their aluminium castings meets BHEL specifications consistently. They have been a reliable manufacturing partner for over 2 years with zero rejections.",
    author: "Amit Patel",
    company: "BHEL",
    initials: "AP",
  },
  {
    id: "t3",
    quote:
      "Custom designs executed flawlessly. Their team understands complex industrial requirements and delivers on time, every time. Highly recommended.",
    author: "Suresh Kumar",
    company: "Mahalaxmi Ceramic Industries",
    initials: "SK",
  },
];

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Contact", href: "/contact" },
];

export const contactInfo: ContactInfo = {
  phone: "+91 8866009082",
  email: "shreeshyam.enterprise22@gmail.com",
  address: "Kamdhenu Industrial Park 2, Plot No. A3, Jitali, Ankleshwar, Gujarat 393002",
  hours: "Mon–Sat: 9:00 AM – 6:00 PM",
  website: "www.shreeshyam-enterprise.com",
};

export const machineList: Machine[] = [
  {
    name: "CNC Turning Centre",
    image: "/images/machine-1.png",
    description:
      "High-precision CNC turning centre for complex aluminium components with tolerances to ±0.01mm.",
  },
  {
    name: "CNC Milling Machine",
    image: "/images/machine-2.png",
    description:
      "Multi-axis CNC milling for intricate profiles and surface finishing on aluminium castings.",
  },
];

export const certifications = [
  {
    id: "iso",
    name: "ISO 9001:2015",
    description:
      "International Quality Management System certification ensuring consistent product quality and customer satisfaction.",
    image: "/images/certificate.png",
  },
  {
    id: "zed",
    name: "ZED Bronze",
    description:
      "Zero Defect Zero Effect certification by Ministry of MSME recognising our commitment to quality and sustainability.",
    image: "/images/certificate.png",
  },
  {
    id: "udyam",
    name: "Udyam Registration",
    description:
      "Official MSME registration under Government of India, validating our status as a registered manufacturing enterprise.",
    image: "/images/certificate.png",
  },
];
