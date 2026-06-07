import pebImg from "@/assets/peb-building.jpg";
import pebWebp from "@/assets/peb-building.webp";
import warehouseImg from "@/assets/warehouse.jpg";
import warehouseWebp from "@/assets/warehouse.webp";
import coldStorageImg from "@/assets/cold-storage.jpg";
import coldStorageWebp from "@/assets/cold-storage.webp";

export interface LocationProject {
  title: string;
  industry: string;
  year: string;
  area: string;
}

export interface LocationStat {
  label: string;
  value: string;
}

export interface LocationFAQ {
  question: string;
  answer: string;
}

export interface LocationProfile {
  slug: string;
  name: string;
  metaTitle: string;
  metaDesc: string;
  h1: string;
  subheading: string;
  intro: string;
  image: string;
  webpImage: string;
  stats: LocationStat[];
  projects: LocationProject[];
  faqs: LocationFAQ[];
  nearbySlugs: string[];
}

export const locations: LocationProfile[] = [
  {
    slug: "peb-construction-ambattur",
    name: "Ambattur",
    metaTitle: "PEB Construction & Industrial Sheds in Ambattur | Deepika Builtech",
    metaDesc: "Deepika Builtech is the leading PEB construction company in Ambattur. We build high-precision industrial sheds, warehouse storage, and mezzanine floors in SIDCO. Call +91 96000 67611.",
    h1: "PEB Construction & Industrial Sheds in Ambattur",
    subheading: "Premium pre-engineered steel buildings and turnkey civil construction in SIDCO Industrial Estate, Ambattur.",
    intro: "Ambattur is one of South India's oldest and most prestigious industrial hubs, housing thousands of manufacturing, automotive, and IT units. At Deepika Builtech, we specialize in high-end PEB construction in Ambattur, delivering turnkey steel buildings tailored to the narrow footprints and heavy-load demands of the SIDCO zone. Ambattur's soil profile generally consists of stiff clayey silt, requiring precise structural pedestal foundation engineering. We design our industrial sheds, mezzanine floors, and EOT crane runways to comply with strict safety parameters. By fabricating key steel columns and trusses at our local workshops, we ensure that projects are erected rapidly, minimizing disruption to surrounding operating facilities in this dense industrial corridor.",
    image: warehouseImg,
    webpImage: warehouseWebp,
    stats: [
      { label: "Projects Completed", value: "45+" },
      { label: "Fabrication Unit", value: "SIDCO Ambattur" },
      { label: "Core Industries", value: "Automotive, Machining, Logistics" }
    ],
    projects: [
      { title: "Precision Machining Shed", industry: "Automotive Components", year: "2023", area: "18,000 Sq.Ft" },
      { title: "Multi-Tier Mezzanine Platform", industry: "Logistics Sorting Hub", year: "2022", area: "12,000 Sq.Ft" },
      { title: "Heavy Foundry Shed", industry: "Metal Casting", year: "2024", area: "25,000 Sq.Ft" }
    ],
    faqs: [
      { question: "Why is PEB preferred over conventional RCC in Ambattur?", answer: "PEB construction in Ambattur offers up to 50% faster completion and maximizes clear span floor space, which is critical for dense SIDCO industrial plots." },
      { question: "Do you handle building approvals in Ambattur?", answer: "Yes, we handle complete CMDA, GCC, and industrial safety inspectorate approval documentation for Ambattur projects." },
      { question: "What concrete grades do you use for foundations in Ambattur?", answer: "Due to clayey soil conditions, we typically design heavy concrete pedestals and tie beams using M30 grade concrete with Fe 550 TMT bars." },
      { question: "Can we install heavy mezzanines in existing Ambattur sheds?", answer: "Yes, we specialize in modular, bolt-on structural steel mezzanines that can be installed inside existing sheds without welding." },
      { question: "What is your office address in Ambattur?", answer: "Our corporate headquarters is located at New No. 31, 31A, Old No.14, 15, Coromandal Town, SIDCO Industrial Estate, Ambattur, Chennai - 600098." }
    ],
    nearbySlugs: ["peb-construction-thiruvallur", "peb-construction-sriperumbudur", "peb-construction-oragadam"]
  },
  {
    slug: "peb-construction-sriperumbudur",
    name: "Sriperumbudur",
    metaTitle: "Industrial PEB & Warehouse Construction in Sriperumbudur | Deepika Builtech",
    metaDesc: "Build your factory or warehouse in Sriperumbudur with Deepika Builtech. Turnkey PEB building and steel structure contractors. 10+ years experience. Call +91 96000 67611.",
    h1: "PEB & Warehouse Construction in Sriperumbudur",
    subheading: "Turnkey PEB steel structures and logistics warehouse construction in the Sriperumbudur industrial belt.",
    intro: "Sriperumbudur has emerged as the electronics and automotive manufacturing capital of South India. The demand for massive warehouses and high-bay factories requires structural engineering of the highest caliber. Deepika Builtech delivers world-class industrial PEB construction in Sriperumbudur, utilizing column-free spans of up to 90 meters to optimize assembly line layouts and storage volumes. Sriperumbudur's soil characteristics vary from hard clay to gravelly soil, requiring dynamic foundation designs like pile foundations or isolated footings. We utilize Tekla and STAAD.Pro to ensure our structures are optimized for heavy wind speeds and crane load vibrations, meeting the international standards of Fortune 500 companies operating in the region.",
    image: pebImg,
    webpImage: pebWebp,
    stats: [
      { label: "Projects Completed", value: "38+" },
      { label: "Clear Spans Offered", value: "Up to 90 Meters" },
      { label: "Core Industries", value: "Electronics, Auto-Assembly, Warehousing" }
    ],
    projects: [
      { title: "Electronics Assembly Plant", industry: "Consumer Electronics", year: "2024", area: "85,000 Sq.Ft" },
      { title: "Logistics Distribution Center", industry: "E-Commerce Logistics", year: "2023", area: "1,10,000 Sq.Ft" },
      { title: "Auto Parts Storage Facility", industry: "Automotive Spares", year: "2022", area: "45,000 Sq.Ft" }
    ],
    faqs: [
      { question: "What is the typical timeline for a warehouse in Sriperumbudur?", answer: "For a 50,000 Sq.Ft warehouse, fabrication takes about 30 days and erection takes 45 days, achieving handover within 90 days." },
      { question: "Do you design structures to house heavy EOT Cranes in Sriperumbudur?", answer: "Yes, we engineer structural frames with heavy-duty columns and runway gantry girders designed for cranes ranging from 5 to 100 tons." },
      { question: "What roofing sheets do you use for Sriperumbudur sheds?", answer: "We use 0.5mm Galvalume pre-painted high-rib profile sheets with standing seam locks to ensure 100% leak-proof operations." },
      { question: "Are your building designs eligible for government subsidies?", answer: "Yes, our cold storage and warehouse designs comply with National Horticulture Board (NHB) and NABARD subsidy guidelines." },
      { question: "How do you ensure wind resistance in coastal Sriperumbudur?", answer: "We design structures in compliance with IS 875 wind codes, guaranteeing stability against wind speeds up to 180 km/h." }
    ],
    nearbySlugs: ["peb-construction-oragadam", "peb-construction-kanchipuram", "peb-construction-thiruvallur"]
  },
  {
    slug: "peb-construction-kanchipuram",
    name: "Kanchipuram",
    metaTitle: "Pre-Engineered Steel Building Construction in Kanchipuram | Deepika Builtech",
    metaDesc: "Deepika Builtech provides professional PEB and steel structure construction in Kanchipuram. Specialized in factory sheds, warehousing, and custom steel fabrication. Call +91 96000 67611.",
    h1: "PEB Steel Building Construction in Kanchipuram",
    subheading: "High-yield pre-engineered steel buildings and heavy-duty factory construction in Kanchipuram district.",
    intro: "Kanchipuram, traditionally famous for culture, has rapidly converted into a major industrial zone hosting silk weaving, textile printing, chemical, and heavy engineering plants. Deepika Builtech is a trusted partner for PEB construction in Kanchipuram, offering tailored steel solutions that blend speed, structural reliability, and cost-efficiency. Soils in Kanchipuram often comprise sandy loam and clay loam, demanding robust civil sub-grade preparation and Tremix flooring. We deliver turn-key industrial structures featuring high-tensile main frames, anti-corrosive epoxy treatments, and optimal ventilation systems. Our designs maximize usable interior space, allowing local textile and manufacturing industries to expand production capacity without structural setbacks.",
    image: coldStorageImg,
    webpImage: coldStorageWebp,
    stats: [
      { label: "Projects Completed", value: "22+" },
      { label: "Fabrication Unit", value: "Vaiyavur Kanchipuram" },
      { label: "Core Industries", value: "Textiles, Food Processing, Engineering" }
    ],
    projects: [
      { title: "Textile Printing Mill", industry: "Textile & Apparel", year: "2023", area: "32,000 Sq.Ft" },
      { title: "Food Processing Shed", industry: "Agro Industries", year: "2021", area: "20,000 Sq.Ft" },
      { title: "Chemical Processing Unit", industry: "Specialty Chemicals", year: "2024", area: "40,000 Sq.Ft" }
    ],
    faqs: [
      { question: "What is your fabrication capacity in Kanchipuram?", answer: "Our Unit I located in Vaiyavur, Kanchipuram District fabricates up to 400 Metric Tons of structural steel per month." },
      { question: "What is the cost of factory shed construction in Kanchipuram?", answer: "A standard industrial PEB shed costs between ₹800 and ₹1,200 per sq.ft depending on eave height and structural configurations." },
      { question: "Do you supply PEB parts to local builders in Kanchipuram?", answer: "Yes, we act as both structural fabricators and turnkey erection contractors, supplying pre-engineered columns, purlins, and rafters." },
      { question: "How do you protect steel frames from chemical fumes in Kanchipuram?", answer: "We apply shot-blasting up to SA 2.5 standard followed by thick high-build epoxy primer and polyurethane topcoats." },
      { question: "Do you assist with local municipal approvals in Kanchipuram?", answer: "Yes, we provide structural stability certificates and architectural layout plans to assist in DTCP approval processes." }
    ],
    nearbySlugs: ["peb-construction-sriperumbudur", "peb-construction-oragadam", "peb-construction-thiruvallur"]
  },
  {
    slug: "peb-construction-thiruvallur",
    name: "Thiruvallur",
    metaTitle: "Industrial Shed & Warehouse Construction in Thiruvallur | Deepika Builtech",
    metaDesc: "Leading PEB contractors in Thiruvallur. Deepika Builtech designs and constructs heavy steel structures, warehouses, and factories with high wind resistance. Call +91 96000 67611.",
    h1: "Industrial Shed & Warehouse Construction in Thiruvallur",
    subheading: "Precision steel sheds, mezzanine floors, and heavy storage warehouses in Thiruvallur district.",
    intro: "Thiruvallur's industrial corridors are home to heavy metal fabrication, machinery manufacturing, and extensive logistics hubs. Deepika Builtech is the premier provider for industrial PEB construction in Thiruvallur, specializing in high-load structural steel frames and expansive warehouses. With a clayey loam and sandy silt soil matrix, Thiruvallur sites require solid structural engineering for heavy-capacity pile foundations. Our manufacturing unit in Thirumullaivoyal (Ambattur Taluk, Thiruvallur District) operates with high-precision CNC machinery, fabricating customized columns, rafters, and gantry girders. We ensure all steel frames comply with IS 800 standards, providing absolute structural stability for high-impact industrial operations.",
    image: warehouseImg,
    webpImage: warehouseWebp,
    stats: [
      { label: "Projects Completed", value: "28+" },
      { label: "Fabrication Unit", value: "Thirumullaivoyal Unit" },
      { label: "Core Industries", value: "Heavy Machinery, Steel Yards, Logistics" }
    ],
    projects: [
      { title: "Heavy Steel Fabrication Yard", industry: "Metal Processing", year: "2024", area: "50,000 Sq.Ft" },
      { title: "FMCG Storage Hub", industry: "Consumer Goods Logistics", year: "2023", area: "75,000 Sq.Ft" },
      { title: "Machinery Manufacturing Unit", industry: "Industrial Machinery", year: "2022", area: "35,000 Sq.Ft" }
    ],
    faqs: [
      { question: "What is your manufacturing facility in Thiruvallur?", answer: "Our Unit II is located at No.349/A, SIDCO Industrial Estate, Thirumullaivoyal, Ambattur Taluk, Thiruvallur District - 600062." },
      { question: "How do you ensure the safety of EOT crane runways in Thiruvallur?", answer: "We use laser alignment systems to lay runway gantry rails within ±2mm tolerance, ensuring smooth crane movement." },
      { question: "Can PEB structures withstand the heavy monsoon rains of Thiruvallur?", answer: "Yes, we integrate high-grade Galvalume valleys, large-diameter downpipes, and leak-proof standing seam roofing systems." },
      { question: "What is the standard grade of steel you use?", answer: "We use high-yield strength structural steel plates (IS 2062 E350) with 345 MPa capacity for the main frames." },
      { question: "Do you construct mezzanine floors for warehousing in Thiruvallur?", answer: "Yes, we install heavy-duty steel mezzanines capable of carrying up to 2,000 kg/sqm for vertical storage." }
    ],
    nearbySlugs: ["peb-construction-ambattur", "peb-construction-thiruvallur", "peb-construction-sriperumbudur"]
  },
  {
    slug: "peb-construction-tambaram",
    name: "Tambaram",
    metaTitle: "PEB Construction, Warehouses & Mezzanines in Tambaram | Deepika Builtech",
    metaDesc: "Need a steel builder in Tambaram? Deepika Builtech specializes in custom industrial PEB sheds, storage warehouses, and structural steel mezzanines. Call +91 96000 67611.",
    h1: "PEB Construction, Warehouses & Mezzanines in Tambaram",
    subheading: "Turn-key structural steel and warehouse construction services in Tambaram, MEP layouts, and civil works.",
    intro: "Tambaram acts as a key gateway to southern Chennai, linking the city to the major industrial zones of GST Road. The area's commercial growth has spiked the demand for local retail showrooms, logistics warehouses, and distribution centers. Deepika Builtech is a leading contractor for PEB construction in Tambaram, delivering premium modular steel buildings that optimize floor layouts. Tambaram's clayey sand soil demands deep excavation and robust concrete foundation pedestals. We provide a full package, from technical site surveys and Tekla detailing to CNC manufacturing and on-site assembly, ensuring local commercial developers obtain premium, space-efficient, and long-lasting industrial structures.",
    image: pebImg,
    webpImage: pebWebp,
    stats: [
      { label: "Projects Completed", value: "19+" },
      { label: "Key Segments", value: "Commercial Showrooms, Logistics" },
      { label: "Core Industries", value: "Retail, Distribution, Pharma Logistics" }
    ],
    projects: [
      { title: "Pharma Distribution Warehouse", industry: "Pharmaceuticals", year: "2023", area: "24,000 Sq.Ft" },
      { title: "Two-Story Commercial Showroom", industry: "Automobile Retail", year: "2024", area: "15,000 Sq.Ft" },
      { title: "Logistics Cross-Dock Shed", industry: "Express Cargo", year: "2022", area: "30,000 Sq.Ft" }
    ],
    faqs: [
      { question: "Can PEB be used for multi-story showrooms in Tambaram?", answer: "Yes, PEB is ideal for multi-story commercial buildings, offering rapid assembly, architectural flexibility, and larger floor-to-floor heights." },
      { question: "How do you handle heavy vehicular movement in Tambaram warehouses?", answer: "We install 150mm to 200mm thick vacuum dewatered concrete floors (Tremix/VDF) rated for up to 8 tons/sqm wheel loads." },
      { question: "What insulation configurations do you offer for Tambaram structures?", answer: "We supply PIR/PUF sandwich panels or under-deck glass wool insulation with aluminum foil backing for thermal control." },
      { question: "Is structural steel fire resistant?", answer: "Yes, we apply fire-retardant paint coatings on structural members to meet the 2-hour fire rating safety requirements." },
      { question: "Do you construct parking sheds and security complexes?", answer: "Yes, our turnkey services include security gate cabins, compound walls, asphalt roads, and PEB parking sheds." }
    ],
    nearbySlugs: ["peb-construction-oragadam", "peb-construction-ambattur", "peb-construction-chennai-port"]
  },
  {
    slug: "peb-construction-oragadam",
    name: "Oragadam",
    metaTitle: "Heavy Industrial PEB & Factory Construction in Oragadam | Deepika Builtech",
    metaDesc: "Build your automotive factory or heavy industrial plant in Oragadam with Deepika Builtech. Trusted PEB steel structure fabricators & erection experts. Call +91 96000 67611.",
    h1: "Heavy Industrial PEB & Factory Construction in Oragadam",
    subheading: "Turnkey PEB factory sheds, EOT crane gantries, and heavy-duty concrete foundations in Oragadam.",
    intro: "Oragadam is known as the auto hub of South Asia, hosting massive manufacturing plants for global automotive giants. Setting up operations in this corridor requires structural infrastructure that can support heavy dynamic loads, high-duty EOT cranes, and continuous assembly processes. Deepika Builtech is a premier engineering partner for industrial PEB construction in Oragadam, specialized in designing reinforced factory sheds. Oragadam's clayey soil demands rigorous geotechnical soil stabilization and pile foundations. We manufacture our heavy columns, gantry crane brackets, and truss frames using high-yield steel, conducting NDT testing to ensure flawless quality before dispatching to site.",
    image: warehouseImg,
    webpImage: warehouseWebp,
    stats: [
      { label: "Projects Completed", value: "34+" },
      { label: "Heavy Cranes Built For", value: "Up to 100 Tons" },
      { label: "Core Industries", value: "Automotive, Auto-Ancillary, Forging" }
    ],
    projects: [
      { title: "Automotive Forging Plant", industry: "Automotive Ancillary", year: "2024", area: "90,000 Sq.Ft" },
      { title: "Auto-Components Press Shop", industry: "Metal Stamping", year: "2023", area: "55,000 Sq.Ft" },
      { title: "Heavy Logistics Storage Hub", industry: "Container Logistics", year: "2022", area: "80,000 Sq.Ft" }
    ],
    faqs: [
      { question: "Why is Deepika Builtech the preferred PEB partner in Oragadam?", answer: "We deliver turnkey engineering, matching foundation anchor bolts with fabricated steel columns down to 1mm tolerance for extreme stability." },
      { question: "What certifications do your welding processes have?", answer: "All our structural welders are certified to AWS standards, and we conduct full NDT dye penetrant and ultrasonic tests." },
      { question: "Can you design a factory shed with 50-ton EOT crane columns?", answer: "Yes, we specialize in high-capacity EOT crane columns, designing built-up columns and gantry rails with dynamic vibration dampening." },
      { question: "What concrete flooring do you recommend for Oragadam press shops?", answer: "We install thick concrete slabs with double reinforcement meshes, topped with vacuum dewatered Tremix finishing to resist impact cracking." },
      { question: "How do you coordinate site logistics in busy Oragadam sectors?", answer: "We manage transportation using custom logistics trailers, coordinating safe deliveries to avoid local traffic bottlenecks." }
    ],
    nearbySlugs: ["peb-construction-sriperumbudur", "peb-construction-kanchipuram", "peb-construction-tambaram"]
  },
  {
    slug: "peb-construction-chennai-port",
    name: "Chennai Port",
    metaTitle: "Port Warehousing & Logistics PEB Construction in Chennai Port | Deepika Builtech",
    metaDesc: "Deepika Builtech constructs heavy-duty port warehouses, logistics transit sheds, and customs storage units near Chennai Port. Anti-corrosive marine steel. Call +91 96000 67611.",
    h1: "Port Warehousing & Logistics PEB Construction in Chennai Port",
    subheading: "Corrosion-resistant steel warehousing, port transit sheds, and cargo structures near Chennai Port.",
    intro: "The proximity to Chennai Port makes it the primary export-import logistics hub of Tamil Nadu. The marine environment near Chennai Port is highly corrosive due to salinity, demanding specialized steel coatings and roofing configurations. Deepika Builtech constructs high-performance port warehouses and transit cargo sheds, utilizing advanced anti-corrosive structural steel components. Chennai Port's coastal soils are sandy silt and sand with a high water table, necessitating pile foundations or deep raft foundations. We apply hot-dip galvanizing and high-build polyurethane coatings to our steel frames to prevent rust, ensuring that customs cargo zones, shipping depots, and port warehouses operate safely for decades.",
    image: pebImg,
    webpImage: pebWebp,
    stats: [
      { label: "Projects Completed", value: "15+" },
      { label: "Anti-Corrosion Standard", value: "SA 2.5 + Galvanization" },
      { label: "Core Industries", value: "Logistics, Export-Import, Marine Cargo" }
    ],
    projects: [
      { title: "Export Transit Warehouse", industry: "Container Freight Station", year: "2023", area: "60,000 Sq.Ft" },
      { title: "Customs Inspected Cold Store", industry: "Perishable Cargo", year: "2024", area: "18,000 Sq.Ft" },
      { title: "Port Cargo Terminal Shed", industry: "Shipping & Maritime", year: "2021", area: "40,000 Sq.Ft" }
    ],
    faqs: [
      { question: "How do you prevent corrosion in marine zones near Chennai Port?", answer: "We blast steel surfaces to SA 2.5 grade, apply zinc-rich epoxy primers, and finish with marine-grade polyurethane coatings." },
      { question: "What roofing profile do you use to prevent salt air leakage?", answer: "We use Alu-Zinc coated Galvalume sheets with a standing seam profile, eliminating screw holes that are vulnerable to salt corrosion." },
      { question: "Do you construct cold storage facilities near the port?", answer: "Yes, we construct port cold storage facilities with PIR panels for seafood, pharmaceuticals, and agricultural exports." },
      { question: "What is the bearing capacity of coastal soils?", answer: "Soil bearing capacity near the port is low. We use engineered RCC pile foundations to anchor the heavy steel structures." },
      { question: "Do you assist with Customs and Port clearance layouts?", answer: "Yes, our designs align with typical Customs warehouse regulations and container handling safety codes." }
    ],
    nearbySlugs: ["peb-construction-ambattur", "peb-construction-tambaram", "peb-construction-thiruvallur"]
  },
  {
    slug: "peb-construction-hosur",
    name: "Hosur",
    metaTitle: "Industrial PEB & Factory Construction in Hosur | Deepika Builtech",
    metaDesc: "Precision industrial PEB construction in Hosur by Deepika Builtech. Turnkey manufacturing plants, warehouses, and structural steel sheds. Call +91 96000 67611.",
    h1: "Industrial PEB & Factory Construction in Hosur",
    subheading: "Turnkey manufacturing sheds, automotive factories, and logistics warehouses in Hosur.",
    intro: "Hosur is a major industrial hub bordering Karnataka, hosting automotive assembly, machining, electronics, and heavy-duty manufacturing. Hosur's elevated terrain has hard rock and gravel soil layers, providing excellent soil bearing capacity but demanding special attention during pedestal anchor bolt drilling. Deepika Builtech is a trusted partner for industrial PEB construction in Hosur, delivering highly rigid steel factory sheds and EOT crane gantries. We design pre-engineered structures that withstand local load patterns, integrating daylighting, high-load concrete flooring, and dynamic ventilation systems. Our Hosur projects are constructed under strict quality parameters, ensuring long-term operational success for industrial developers.",
    image: coldStorageImg,
    webpImage: coldStorageWebp,
    stats: [
      { label: "Projects Completed", value: "24+" },
      { label: "Average Soil Bearing", value: "High (Hard Gravel/Rock)" },
      { label: "Core Industries", value: "Automotive, Electronics, Machine Tools" }
    ],
    projects: [
      { title: "Machine Tool Assembly Factory", industry: "Precision Engineering", year: "2024", area: "45,000 Sq.Ft" },
      { title: "Electronics Manufacturing Plant", industry: "Active Components", year: "2023", area: "38,000 Sq.Ft" },
      { title: "Logistics Sorting Depot", industry: "Retail Logistics", year: "2022", area: "50,000 Sq.Ft" }
    ],
    faqs: [
      { question: "Why build PEB warehouses in Hosur?", answer: "Hosur's connectivity to Bangalore makes it a logistics hub. PEB offers rapid, cost-effective warehousing with maximum clear span." },
      { question: "Do you handle bedrock foundation blasting in Hosur?", answer: "Yes, we coordinate bedrock clearing, rock drilling, and anchor bolt chemical casting for secure columns mounting." },
      { question: "What ventilation options do you recommend for Hosur manufacturing plants?", answer: "We install gravity roof ventilators and side louvers to provide a healthy, well-ventilated work environment." },
      { question: "Do you offer post-handover maintenance services in Hosur?", answer: "Yes, we offer periodic gutter cleaning, paint inspection, and structural check-ups for our built sheds." },
      { question: "Are your steel frames seismic resistant?", answer: "Yes, all our designs conform to the IS 1893 seismic standards to ensure maximum safety." }
    ],
    nearbySlugs: ["peb-construction-sriperumbudur", "peb-construction-kanchipuram", "peb-construction-oragadam"]
  }
];
