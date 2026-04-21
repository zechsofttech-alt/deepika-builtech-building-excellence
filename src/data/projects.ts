import peb from "@/assets/peb-building.jpg";
import warehouse from "@/assets/warehouse.jpg";
import coldStorage from "@/assets/cold-storage.jpg";
import mezzanine from "@/assets/mezzanine.jpg";
import eotCrane from "@/assets/eot-crane.jpg";

export interface Project {
  slug: string;
  title: string;
  location: string;
  category: string;
  image: string;
  area: string;
  year: string;
  description: string;
  videoUrl?: string;
  gallery?: string[];
  client: string;
  status: string;
  highlights: string[];
}

export const projects: Project[] = [
  {
    slug: "mega-warehouse-facility",
    title: "Mega Warehouse Facility",
    location: "Chennai, Tamil Nadu",
    category: "Warehousing",
    image: warehouse,
    area: "1,20,000 Sq.Ft",
    year: "2023",
    client: "Global Logistics Solutions",
    status: "Completed",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder
    description: "A flagship logistics hub built with maximum storage efficiency. The project involved massive column-free spans ensuring unobstructed movement for automated forklift systems and high-bay racking.",
    highlights: [
      "120,000 Sq.Ft Column-Free Area",
      "Vacuum Dewatered Flooring (VDF)",
      "Ridge Ventilation System",
      "Natural Daylighting with Polycarbonate Sheets"
    ]
  },
  {
    slug: "industrial-steel-factory",
    title: "Industrial Steel Factory",
    location: "Kanchipuram, TN",
    category: "PEB Structure",
    image: peb,
    area: "85,000 Sq.Ft",
    year: "2022",
    client: "Auto Parts Manufacturing Ltd",
    status: "Completed",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    description: "Designed for heavy industrial manufacturing, this PEB structure supports multiple overhead cranes and features a high-grade insulation system for worker comfort.",
    highlights: [
      "Custom Gantry Girder Design",
      "Sandwich Panel Cladding",
      "Acoustic Insulation Layers",
      "Multi-Span Structural Layout"
    ]
  },
  {
    slug: "cold-storage-complex",
    title: "Cold Storage Complex",
    location: "Ambattur, Chennai",
    category: "Cold Storage",
    image: coldStorage,
    area: "45,000 Sq.Ft",
    year: "2023",
    client: "Fresh Foods Distribution",
    status: "Completed",
    description: "A state-of-the-art cold storage facility built with structural precision to maintain temperatures as low as -40°C. The design focus was on absolute thermal integrity.",
    highlights: [
      "PIR Panel Compatibility",
      "Heated Floor Systems",
      "Rapid Door Integration",
      "Seismic Zone III Compliance"
    ]
  },
  {
    slug: "logistics-hub-mezzanine",
    title: "Logistics Hub Mezzanine",
    location: "Sriperumbudur, TN",
    category: "Mezzanine Floor",
    image: mezzanine,
    area: "30,000 Sq.Ft",
    year: "2021",
    client: "Express Cargo Hub",
    status: "Completed",
    description: "Expanded operational floor space within the existing building footprint. This structural mezzanine was engineered to support heavy sorting equipment and office spaces.",
    highlights: [
      "Heavy Load Capacity (500kg/sqm)",
      "Bolt-on Foundation Design",
      "Integrated Safety Railings",
      "Anti-skid Decking"
    ]
  },
  {
    slug: "heavy-machinery-unit",
    title: "Heavy Machinery Unit",
    location: "Oragadam, Chennai",
    category: "EOT Crane Installation",
    image: eotCrane,
    area: "60,000 Sq.Ft",
    year: "2023",
    client: "Precision Forge Works",
    status: "Completed",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    description: "A specialized unit built to house 50-ton EOT cranes. The project required laser-perfect alignment of gantry rails and extreme structural stability for heavy vibrations.",
    highlights: [
      "50-Ton Crane Runway Support",
      "High-Tensile Secondary Members",
      "Precision Rail Alignment",
      "Reinforced Column Footings"
    ]
  }
];
