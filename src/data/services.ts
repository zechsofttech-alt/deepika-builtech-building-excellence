import pebImg from "@/assets/peb-building.jpg";
import warehouseImg from "@/assets/warehouse.jpg";
import coldStorageImg from "@/assets/cold-storage.jpg";
import mezzanineImg from "@/assets/mezzanine.jpg";
import eotCraneImg from "@/assets/eot-crane.jpg";
import { Factory, Shield, Zap, Ruler, Clock, Settings } from "lucide-react";

export const services = [
  {
    slug: "peb-structures",
    title: "PEB Structures",
    shortDesc: "Custom pre-engineered steel buildings.",
    fullDesc: "Our Pre-Engineered Buildings (PEB) are designed to provide maximum structural efficiency and speed of construction. We utilize advanced engineering software like STAAD.Pro and Tekla to ensure that every bolt and beam is optimized for load-bearing and cost-effectiveness.",
    image: pebImg,
    size: "large",
    features: [
      { icon: Zap, title: "Rapid Erection", desc: "30-50% faster construction compared to conventional steel." },
      { icon: Shield, title: "Seismic Resilient", desc: "Complying with IS 1893:2016 for Zone V safety." },
      { icon: Ruler, title: "CNC Precision", desc: "Automated fabrication for millimeter-perfect fitment." }
    ],
    specs: [
      { label: "Main Frame", value: "High-Tensile Grade 345 MPa Steel" },
      { label: "Secondary Members", value: "Cold-formed Galvanized Z/C Purlins" },
      { label: "Cladding", value: "Alu-Zinc Coated High-Rib Profiles" },
      { label: "Clear Spans", value: "Up to 90 Meters without interior columns" }
    ]
  },
  {
    slug: "warehousing",
    title: "Warehousing",
    shortDesc: "Large-scale storage optimization.",
    fullDesc: "We specialize in designing and building high-volume warehousing solutions that maximize vertical storage and logistics efficiency. From clear-span distribution centers to heavy-load logistics hubs, our warehouses are built for high throughput.",
    image: warehouseImg,
    size: "horizontal",
    features: [
      { icon: Factory, title: "Column-Free Space", desc: "Maximizing storage racks and forklift movement." },
      { icon: Clock, title: "Future Ready", desc: "Scalable designs for easy modular expansion." },
      { icon: Settings, title: "Ventilation", desc: "Optimized air-flow with ridge ventilators and louvers." }
    ],
    specs: [
      { label: "Floor Load", value: "Heavy-duty VDF floors up to 10 tons/sqm" },
      { label: "Eave Height", value: "Up to 15 Meters standard, custom higher" },
      { label: "Rack Support", value: "Engineered for high-bay racking systems" }
    ]
  },
  {
    slug: "cold-storage",
    title: "Cold Storage",
    shortDesc: "Temperature-controlled environs.",
    fullDesc: "Structural integrity meets thermal efficiency. We build cold storage facilities that maintain precise temperatures while withstanding the unique structural stresses of heavy insulation and internal racking.",
    image: coldStorageImg,
    size: "normal",
    features: [
      { icon: Shield, title: "Thermal Integrity", desc: "No cold bridges at structural joints." },
      { icon: Ruler, title: "PIR/PUF Ready", desc: "Engineered for heavy sandwich panel load." }
    ],
    specs: [
      { label: "Temp Range", value: "-40°C to +15°C compatibility" },
      { label: "Insulation", value: "Supports 80mm-200mm PIR Panels" }
    ]
  },
  {
    slug: "mezzanine-floors",
    title: "Mezzanine Floors",
    shortDesc: "Structural intermediate floors.",
    fullDesc: "Double your floor space without expanding the building footprint. Our structural steel mezzanines are engineered for high-capacity loads, fitting seamlessly into your existing warehouse or industrial shed.",
    image: mezzanineImg,
    size: "normal",
    features: [
      { icon: Zap, title: "Bolt-on Design", desc: "No welding on-site for faster, cleaner install." },
      { icon: Ruler, title: "High-Capacity", desc: "Engineered for heavy machinery or office loads." }
    ],
    specs: [
      { label: "Decking", value: "Metal deck with concrete or checker plates" },
      { label: "Load Range", value: "250kg - 2500kg per sqm" }
    ]
  },
  {
    slug: "eot-cranes",
    title: "EOT Cranes",
    shortDesc: "Heavy lifting installations.",
    fullDesc: "We provide comprehensive EOT Crane infrastructure, including gantry girders, rail supports, and fully integrated crane systems for heavy industrial manufacturing plants.",
    image: eotCraneImg,
    size: "horizontal",
    features: [
      { icon: Settings, title: "Precision Rails", desc: "Laser-aligned gantry rails for smooth operation." },
      { icon: Shield, title: "Lift Capacity", desc: "Supporting up to 100 Ton single-beam loads." }
    ],
    specs: [
      { label: "Crane Type", value: "Single/Double Girder EOT compatibility" },
      { label: "Bay Span", value: "Optimized for maximum crane coverage" }
    ]
  }
];
