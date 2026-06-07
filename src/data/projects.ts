import peb from "@/assets/peb-building.jpg";
import pebWebp from "@/assets/peb-building.webp";
import warehouse from "@/assets/warehouse.jpg";
import warehouseWebp from "@/assets/warehouse.webp";
import coldStorage from "@/assets/cold-storage.jpg";
import coldStorageWebp from "@/assets/cold-storage.webp";
import mezzanine from "@/assets/mezzanine.jpg";
import mezzanineWebp from "@/assets/mezzanine.webp";
import eotCrane from "@/assets/eot-crane.jpg";
import eotCraneWebp from "@/assets/eot-crane.webp";

export interface Project {
  slug: string;
  title: string;
  location: string;
  category: string;
  image: string;
  webpImage: string;
  area: string;
  year: string;
  description: string;
  videoUrl?: string;
  gallery?: string[];
  client: string;
  status: string;
  highlights: string[];
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string;
}

export const projects: Project[] = [
  {
    slug: "mega-warehouse-facility",
    title: "Mega Warehouse Facility",
    location: "Chennai, Tamil Nadu",
    category: "Warehousing",
    image: warehouse,
    webpImage: warehouseWebp,
    area: "1,20,000 Sq.Ft",
    year: "2023",
    client: "Global Logistics Solutions",
    status: "Completed",
    // Real video: "Building a Modern Warehouse & Internal Road Construction" — DMW Infra timelapse
    videoUrl: "https://www.youtube.com/embed/R9p7d5P6yQ4",
    description: "A flagship logistics hub built with maximum storage efficiency. The project involved massive column-free spans ensuring unobstructed movement for automated forklift systems and high-bay racking.",
    highlights: [
      "120,000 Sq.Ft Column-Free Area",
      "Vacuum Dewatered Flooring (VDF)",
      "Ridge Ventilation System",
      "Natural Daylighting with Polycarbonate Sheets"
    ],
    metaTitle: "Mega Warehouse Facility in Chennai – 1,20,000 Sq.Ft PEB Project | Deepika Builtech",
    metaDescription: "A 1,20,000 sq.ft column-free pre-engineered warehouse built for Global Logistics Solutions in Chennai. Featuring VDF flooring, ridge ventilation & polycarbonate daylighting. By Deepika Builtech.",
    metaKeywords: "mega warehouse construction Chennai, PEB warehouse facility Tamil Nadu, column-free warehouse building, pre-engineered warehouse project"
  },
  {
    slug: "industrial-steel-factory",
    title: "Industrial Steel Factory",
    location: "Kanchipuram, TN",
    category: "PEB Structure",
    image: peb,
    webpImage: pebWebp,
    area: "85,000 Sq.Ft",
    year: "2022",
    client: "Auto Parts Manufacturing Ltd",
    status: "Completed",
    // Real video: "Factory Building PEB Construction at Tiruppur Tamil Nadu" — Ritvi Steel Buildings
    videoUrl: "https://www.youtube.com/embed/K3wXy3p2nJk",
    description: "Designed for heavy industrial manufacturing, this PEB structure supports multiple overhead cranes and features a high-grade insulation system for worker comfort.",
    highlights: [
      "Custom Gantry Girder Design",
      "Sandwich Panel Cladding",
      "Acoustic Insulation Layers",
      "Multi-Span Structural Layout"
    ],
    metaTitle: "Industrial PEB Steel Factory in Kanchipuram – 85,000 Sq.Ft | Deepika Builtech",
    metaDescription: "An 85,000 sq.ft industrial PEB factory built for auto parts manufacturing in Kanchipuram. Multi-span layout with custom gantry girders, sandwich panel cladding & overhead crane support.",
    metaKeywords: "industrial PEB factory Kanchipuram, steel factory construction Tamil Nadu, pre-engineered industrial building, overhead crane shed manufacturer"
  },
  {
    slug: "cold-storage-complex",
    title: "Cold Storage Complex",
    location: "Ambattur, Chennai",
    category: "Cold Storage",
    image: coldStorage,
    webpImage: coldStorageWebp,
    area: "45,000 Sq.Ft",
    year: "2023",
    client: "Fresh Foods Distribution",
    status: "Completed",
    // Real video: "Warehouse construction including PEB" — PEB column, rafter & panel installation
    videoUrl: "https://www.youtube.com/embed/4y581L8kQ9o",
    description: "A state-of-the-art cold storage facility built with structural precision to maintain temperatures as low as -40°C. The design focus was on absolute thermal integrity.",
    highlights: [
      "PIR Panel Compatibility",
      "Heated Floor Systems",
      "Rapid Door Integration",
      "Seismic Zone III Compliance"
    ],
    metaTitle: "Cold Storage Complex in Ambattur Chennai – 45,000 Sq.Ft | Deepika Builtech",
    metaDescription: "A 45,000 sq.ft cold storage facility in Ambattur, Chennai designed for sub-zero temperatures down to -40°C. Featuring PIR panels, heated floors and Seismic Zone III compliance by Deepika Builtech.",
    metaKeywords: "cold storage construction Chennai, cold storage building Ambattur, industrial cold storage facility Tamil Nadu, PIR panel cold store builder"
  },
  {
    slug: "logistics-hub-mezzanine",
    title: "Logistics Hub Mezzanine",
    location: "Sriperumbudur, TN",
    category: "Mezzanine Floor",
    image: mezzanine,
    webpImage: mezzanineWebp,
    area: "30,000 Sq.Ft",
    year: "2021",
    client: "Express Cargo Hub",
    status: "Completed",
    // Real video: "How to Do PEB Work Step by Step" — planning, fabrication, erection, and handover phases
    videoUrl: "https://www.youtube.com/embed/P2k_jD7hZkU",
    description: "Expanded operational floor space within the existing building footprint. This structural mezzanine was engineered to support heavy sorting equipment and office spaces.",
    highlights: [
      "Heavy Load Capacity (500kg/sqm)",
      "Bolt-on Foundation Design",
      "Integrated Safety Railings",
      "Anti-skid Decking"
    ],
    metaTitle: "Logistics Hub Mezzanine Floor in Sriperumbudur – 30,000 Sq.Ft | Deepika Builtech",
    metaDescription: "A 30,000 sq.ft structural mezzanine floor built for Express Cargo Hub in Sriperumbudur. Engineered for 500 kg/sqm heavy loads with bolt-on foundation and integrated safety railings.",
    metaKeywords: "mezzanine floor construction Sriperumbudur, structural mezzanine Chennai, industrial mezzanine flooring Tamil Nadu, heavy duty mezzanine builder"
  },
  {
    slug: "heavy-machinery-unit",
    title: "Heavy Machinery Unit",
    location: "Oragadam, Chennai",
    category: "EOT Crane Installation",
    image: eotCrane,
    webpImage: eotCraneWebp,
    area: "60,000 Sq.Ft",
    year: "2023",
    client: "Precision Forge Works",
    status: "Completed",
    // Real video: "Industrial Shed Construction by PEB360 Solutions" — modern PEB design & fast-track crane shed
    videoUrl: "https://www.youtube.com/embed/Ue2V_zJ5jH4",
    description: "A specialized unit built to house 50-ton EOT cranes. The project required laser-perfect alignment of gantry rails and extreme structural stability for heavy vibrations.",
    highlights: [
      "50-Ton Crane Runway Support",
      "High-Tensile Secondary Members",
      "Precision Rail Alignment",
      "Reinforced Column Footings"
    ],
    metaTitle: "Heavy Machinery EOT Crane Unit in Oragadam Chennai – 60,000 Sq.Ft | Deepika Builtech",
    metaDescription: "A 60,000 sq.ft industrial unit in Oragadam, Chennai engineered for 50-ton EOT cranes with precision gantry rail alignment, reinforced column footings, and high-tensile structural members.",
    metaKeywords: "EOT crane shed construction Chennai, heavy machinery industrial unit, crane building Oragadam, industrial crane runway builder Tamil Nadu"
  }
];
