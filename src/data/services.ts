import pebImg from "@/assets/peb-building.jpg";
import warehouseImg from "@/assets/warehouse.jpg";
import coldStorageImg from "@/assets/cold-storage.jpg";
import mezzanineImg from "@/assets/mezzanine.jpg";
import eotCraneImg from "@/assets/eot-crane.jpg";
import { 
  Factory, 
  Shield, 
  Zap, 
  Ruler, 
  Clock, 
  Settings, 
  HardHat, 
  Hammer, 
  Cpu, 
  Truck, 
  LayoutGrid, 
  Flame, 
  Maximize, 
  Award,
  Layers
} from "lucide-react";

export interface ServiceFeature {
  icon: any;
  title: string;
  desc: string;
}

export interface ServiceSpec {
  label: string;
  value: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface WhyChooseCol {
  title: string;
  desc: string;
}

export interface ProcessStep {
  number: number;
  title: string;
  desc: string;
}

export interface Service {
  slug: string;
  title: string;
  metaTitle: string;
  metaDesc: string;
  h1: string;
  subheading: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  size: "large" | "horizontal" | "normal";
  features: ServiceFeature[];
  specs: ServiceSpec[];
  whyChoose: WhyChooseCol[];
  process: ProcessStep[];
  faqs: FAQItem[];
}

export const services: Service[] = [
  {
    slug: "industrial-peb-construction-chennai",
    title: "PEB Building Structure",
    metaTitle: "Industrial PEB Construction in Chennai | Deepika Builtech",
    metaDesc: "Looking for PEB construction in Chennai? Deepika Builtech delivers precision pre-engineered steel buildings for factories, warehouses & industrial units. 10+ years experience. Call +91 96000 67611.",
    h1: "Industrial PEB Construction in Chennai",
    subheading: "Premium pre-engineered steel building construction serving Chennai, Ambattur, Sriperumbudur, and industrial corridors across Tamil Nadu.",
    shortDesc: "Custom pre-engineered steel buildings with advanced design parameters.",
    fullDesc: "Deepika Builtech specializes in world-class industrial PEB construction in Chennai, providing durable and high-precision steel structures. With over 10 years of experience, we cater to factories, warehouses, and manufacturing plants in industrial hubs like Ambattur, Sriperumbudur, and Oragadam. By utilizing pre-engineered building technology, we optimize raw steel consumption, lower foundations requirements, and expedite site erection by up to 50%. Our design team utilizes Tekla and STAAD.Pro to verify loading capabilities against severe wind speeds and seismic forces, strictly conforming to Indian Standards IS 800 and IS 875. As a leading firm for industrial PEB construction in Chennai, we handle the entire project lifecycle in-house, from structural blueprinting and CNC factory fabrication to secure on-site assembly, ensuring maximum quality control and timely handover.",
    image: pebImg,
    size: "large",
    features: [
      { icon: LayoutGrid, title: "Custom Engineering", desc: "STAAD.Pro design optimization tailored to your structural span and load limits." },
      { icon: Cpu, title: "Precision Fabrication", desc: "Automated CNC cutting and shot-blasting for clean, millimeter-perfect structural members." },
      { icon: Hammer, title: "Rapid Erection", desc: "Bolt-on structural frame assemblies require zero on-site welding for fast erection." },
      { icon: Shield, title: "IS Code Compliance", desc: "Ensuring structural integrity under IS 875 wind loads and IS 1893 seismic codes." },
      { icon: Truck, title: "Coordinated Logistics", desc: "Safe transport of prefabricated rafters, columns, and purlins directly to your job site." },
      { icon: Award, title: "Lifetime Warranty", desc: "Premium structural steel frames backed by solid anti-corrosive coatings for maximum life." }
    ],
    specs: [
      { label: "Main Frame", value: "High-Tensile Grade 345 MPa Steel" },
      { label: "Secondary Members", value: "Cold-formed Galvanized Z/C Purlins" },
      { label: "Cladding Sheet", value: "Alu-Zinc Coated High-Rib Profiles" },
      { label: "Clear Spans", value: "Up to 90 Meters column-free design" }
    ],
    whyChoose: [
      { title: "10+ Years in Chennai", desc: "Deepika Builtech has been the trusted name in Chennai's industrial landscape, executing projects with local compliance, regulatory support, and deep knowledge of coastal soil engineering." },
      { title: "CNC Precision Manufacturing", desc: "Our manufacturing units are equipped with state-of-the-art CNC cutting, beam welding, and shot blasting setups to ensure every steel column matches design drawings precisely." },
      { title: "End-to-End Service", desc: "From technical soil testing and architectural design to custom fabrication, transport, and final structural handover, we manage the entire project in-house to eliminate cost overflows." }
    ],
    process: [
      { number: 1, title: "Site Assessment", desc: "Detailed soil testing, topographical mapping, and boundary clearances at your site." },
      { number: 2, title: "Engineering Design", desc: "3D CAD modeling, Tekla structural detailing, and STAAD.Pro load calculations." },
      { number: 3, title: "Factory Fabrication", desc: "CNC steel plate cutting, submerged arc welding, and anti-corrosive primary painting." },
      { number: 4, title: "Transportation", desc: "Systematic packing and logistics dispatch of structural parts to the project site." },
      { number: 5, title: "Erection & Handover", desc: "Safe alignment, high-strength bolting, roof cladding install, and final civil handover." }
    ],
    faqs: [
      { question: "What is the cost of PEB construction in Chennai?", answer: "PEB construction costs in Chennai typically range from ₹800 to ₹1,500 per sq.ft depending on span, height, loading requirements, and finishes. Contact Deepika Builtech for a free detailed quotation." },
      { question: "How long does PEB construction take?", answer: "A standard industrial PEB shed of 10,000 sq.ft can be completed in 45–60 days from design approval to handover, compared to 4–6 months for conventional RCC." },
      { question: "What is the lifespan of a pre-engineered building?", answer: "With proper coatings and maintenance, pre-engineered buildings can last between 30 and 50 years." },
      { question: "Do you provide structural drawings and approvals?", answer: "Yes, Deepika Builtech provides complete structural drawings, structural stability certificates, and assists with Chennai Corporation / CMDA approval documentation." },
      { question: "Do you serve areas outside Chennai?", answer: "Yes, we serve all of Tamil Nadu including Kanchipuram, Thiruvallur, Sriperumbudur, Coimbatore, Hosur, Madurai, and other industrial zones." }
    ]
  },
  {
    slug: "construction-services-in-chennai",
    title: "Construction",
    metaTitle: "Civil & Steel Construction Services in Chennai | Deepika Builtech",
    metaDesc: "Expert civil and steel construction services in Chennai by Deepika Builtech. We build factories, industrial units, commercial structures across Tamil Nadu. Free quote: +91 96000 67611.",
    h1: "Civil & Steel Construction Services in Chennai",
    subheading: "Comprehensive turn-key civil and structural steel construction services in Chennai, Ambattur, and surrounding industrial zones.",
    shortDesc: "Turnkey civil and structural steel construction for industrial projects.",
    fullDesc: "Deepika Builtech delivers high-quality civil & steel construction services in Chennai, combining engineering expertise with robust foundation building. Our teams manage projects from excavation and reinforced concrete pile foundations to heavy structural steel frame erection. In industrial zones like Ambattur and Sriperumbudur, proper sub-base prep and concrete grade selection are essential. We specialize in Vacuum Dewatered Flooring (VDF) or Tremix flooring systems, built to carry heavy racking loads of up to 10 tons/sqm. By integrating our civil & steel construction services in Chennai under one engineering team, we ensure perfect alignment between foundation anchor bolts and structural steel column bases, avoiding scheduling delays and budget overflows.",
    image: pebImg,
    size: "horizontal",
    features: [
      { icon: HardHat, title: "Turnkey Execution", desc: "Managing soil excavation, foundation pouring, steel framing, and civil finishing." },
      { icon: Layers, title: "Tremix VDF Flooring", desc: "Heavy-duty dewatered flooring built to withstand intense forklift traffic." },
      { icon: Shield, title: "Foundation Engineering", desc: "Custom structural piling and load-bearing concrete work optimized for soil conditions." },
      { icon: Ruler, title: "Anchor Bolt Placement", desc: "Millimeter-level layout precision for anchor bolts to ensure perfect column matches." },
      { icon: Settings, title: "Sewer & Drainage Layout", desc: "Integrated industrial drainage systems and utility duct planning during foundation work." },
      { icon: Award, title: "Quality Materials", desc: "Using M30/M35 concrete grades and high-strength TMT Fe 550 reinforcement steel." }
    ],
    specs: [
      { label: "Concrete Grade", value: "M20 to M35 Grade Concrete" },
      { label: "Reinforcement", value: "TMT Fe 500/550 High-Strength Bars" },
      { label: "Flooring", value: "VDF/Tremix Flooring (5 to 10 tons/sqm)" },
      { label: "Standard Codes", value: "Compliant with IS 456 & IS 800 standards" }
    ],
    whyChoose: [
      { title: "10+ Years in Chennai", desc: "Our civil engineering team has spent a decade dealing with Chennai's diverse soil profiles, executing deep pile foundations near water tables safely." },
      { title: "CNC Precision Manufacturing", desc: "Steel inserts, templates, and structural connection brackets are fabricated at our Ambattur workshops for absolute tolerance compliance." },
      { title: "End-to-End Service", desc: "We carry your project from greenfield land clearance and municipal civil approvals all the way to MEP utilities and key handover." }
    ],
    process: [
      { number: 1, title: "Soil Exploration", desc: "Core drilling, soil bearing capacity reports, and foundation depth calculation." },
      { number: 2, title: "Civil Foundations", desc: "Excavation, TMT reinforcement binding, and heavy concrete pouring." },
      { number: 3, title: "Steel Frame Setup", desc: "Precision alignment of columns, rafters, and gantry structures on the foundation." },
      { number: 4, title: "Tremix Flooring", desc: "Vacuum dewatering of the concrete floor slab for high surface hardness." },
      { number: 5, title: "MEP & Finishing", desc: "Execution of plumbing lines, electrical panels, industrial painting, and road access." }
    ],
    faqs: [
      { question: "What concrete grades do you use for industrial foundations?", answer: "We primarily use M25, M30, and M35 grade concrete for industrial foundations, depending on structural load calculations and soil bearing capacities." },
      { question: "What is Vacuum Dewatered Flooring (VDF)?", answer: "VDF (Tremix) is a concrete laying technique where excess water is sucked out using vacuum mats. This doubles the floor's compressive strength and prevents surface cracks." },
      { question: "Do you handle local government civil approvals?", answer: "Yes, we coordinate complete CMDA, DTCP, and local Panchayat approvals, along with fire safety and pollution control board clearances." },
      { question: "Can you construct a multi-story industrial building?", answer: "Yes, we build multi-story steel-framed industrial buildings with concrete deck slabs to optimize vertical factory operations." },
      { question: "What is the warranty on civil foundations?", answer: "We provide structural stability guarantees for 10+ years on all reinforced concrete foundations and main structural steel frames." }
    ]
  },
  {
    slug: "cold-storage-solutions-chennai",
    title: "Cold Storage",
    metaTitle: "Cold Storage Construction & Solutions in Chennai | Deepika Builtech",
    metaDesc: "Build a reliable cold storage facility in Chennai with Deepika Builtech. Custom temperature-controlled storage for pharma, food & logistics. Call +91 96000 67611.",
    h1: "Cold Storage Construction & Solutions in Chennai",
    subheading: "Custom cold storage construction and insulated warehouse solutions built in Chennai for pharma, food processing, and logistics.",
    shortDesc: "Temperature-controlled facilities with zero thermal bridging.",
    fullDesc: "Deepika Builtech provides top-tier cold storage construction & solutions in Chennai, catering to the growing pharmaceutical and food processing sectors. Thermal integrity is vital in cold chain operations. We design pre-engineered steel frames specifically structured to support heavy PIR (Polyisocyanurate) and PUF (Polyurethane) sandwich insulation panels up to 200mm thick. Our structural detailing ensures zero thermal bridging at joints, preventing ice buildup and energy leaks. Whether you need a walk-in chiller or a large -40°C deep freeze facility, our cold storage construction & solutions in Chennai deliver highly energy-efficient environments, reducing power consumption and maintaining exact temperature control.",
    image: coldStorageImg,
    size: "normal",
    features: [
      { icon: Flame, title: "PIR/PUF Panel Ready", desc: "Structural framing pre-engineered to support wall and ceiling sandwich panels." },
      { icon: Shield, title: "Zero Cold Bridging", desc: "Thermal isolators and specialized joint detailings prevent heat transfer at connections." },
      { icon: Layers, title: "Underfloor Insulation", desc: "Multi-layered floor slab construction with insulation and anti-heave heating wires." },
      { icon: Clock, title: "Airtell Detailing", desc: "Airtight flashings and silicone seals maintain controlled atmosphere settings." },
      { icon: Settings, title: "Door Integration", desc: "Framing designed for rapid roll-up freezer doors, sliding dock seals, and air curtains." },
      { icon: Award, title: "Food Grade Materials", desc: "Utilizing FM Global approved panel finishes and antibacterial surface coatings." }
    ],
    specs: [
      { label: "Temp Compatibility", value: "-40°C to +15°C Range" },
      { label: "Insulation Panels", value: "PIR/PUF panels up to 200mm thick" },
      { label: "Frame Finish", value: "Galvanized corrosion-resistant members" },
      { label: "Door Systems", value: "Heavy-duty rapid roll-up freezer doors" }
    ],
    whyChoose: [
      { title: "10+ Years in Chennai", desc: "We have constructed cold rooms for pharmaceutical logistics hubs in Chennai, ensuring compliance with strict healthcare storage regulations." },
      { title: "CNC Precision Manufacturing", desc: "Structural support gantry brackets and panel anchor points are manufactured in our workshop for rapid, exact installation on-site." },
      { title: "End-to-End Service", desc: "We manage the entire project: civil base slab, structural frame, PIR insulation panels, refrigeration equipment layout, and test runs." }
    ],
    process: [
      { number: 1, title: "Thermal Planning", desc: "Determining temperature zones, panel thickness, and refrigeration capacity requirements." },
      { number: 2, title: "Foundation Prep", desc: "Civil floor slab construction including ventilation channels to prevent frost heave." },
      { number: 3, title: "Steel Frame Erection", desc: "Erecting the structural steel skeleton optimized for panel attachment." },
      { number: 4, title: "Panel Installation", desc: "Assembling interlocking wall/ceiling PIR panels with airtight joints." },
      { number: 5, title: "Equipment Commissioning", desc: "Installing cooling units, refrigeration piping, electrical automation, and testing." }
    ],
    faqs: [
      { question: "What is the cost of cold storage construction in Chennai?", answer: "Cold storage construction costs in Chennai vary based on size and temperature. A standard facility ranges from ₹1,200 to ₹2,500 per sq.ft including insulated panels." },
      { question: "What panel thickness is required for -20°C storage?", answer: "For -20°C freezer rooms, we recommend at least 150mm thick PUF/PIR panels. For -40°C blast freezers, we use 200mm thick panels." },
      { question: "How do you prevent floor frost heave?", answer: "We install under-floor ventilation ducts or electrical heating mats within the concrete foundation to prevent the ground from freezing and buckling." },
      { question: "Do you supply the refrigeration machinery?", answer: "Yes, we provide turnkey solutions including compressor packs, evaporator units, piping, control panels, and automation systems." },
      { question: "What certifications do your panels have?", answer: "Our PIR/PUF panels are FM Global approved, fire-resistant, and conform to international cleanroom and food-safety hygiene standards." }
    ]
  },
  {
    slug: "mezzanine-floor-construction-chennai",
    title: "Mezzanine Floor",
    metaTitle: "Mezzanine Floor Construction in Chennai | Deepika Builtech",
    metaDesc: "Maximise your floor space with a custom steel mezzanine floor in Chennai. Deepika Builtech designs and installs industrial mezzanines. Call +91 96000 67611.",
    h1: "Mezzanine Floor Construction in Chennai",
    subheading: "High-capacity structural steel mezzanine floor construction in Chennai to double your industrial workspace footprint without expanding outward.",
    shortDesc: "High-capacity intermediate flooring to maximize vertical space.",
    fullDesc: "Deepika Builtech is a premier contractor for mezzanine floor construction in Chennai, helping businesses maximize their vertical space. By building a structural steel mezzanine within your factory or warehouse, we can double or triple your usable floor area. In Chennai's commercial hubs, expanding a building's footprint is costly. Our modular mezzanine systems offer a cost-effective, high-capacity alternative. We design mezzanines for loads ranging from 250 kg/sqm for office extensions to 2,000+ kg/sqm for heavy machinery or bulk storage. By fabricating column grid layouts at our units, our mezzanine floor construction in Chennai ensures rapid bolt-on installation on-site with zero welding, keeping your facility fully operational during setup.",
    image: mezzanineImg,
    size: "normal",
    features: [
      { icon: Maximize, title: "Space Optimization", desc: "Double your active warehouse floor space utilizing existing overhead height." },
      { icon: Ruler, title: "Bolt-On Engineering", desc: "Pre-fabricated beams and column connections align on site for fast, bolt-together assembly." },
      { icon: Layers, title: "Decking Versatility", desc: "Choose between structural steel deck slabs, checker plates, or high-density timber panels." },
      { icon: Shield, title: "Safety Infrastructure", desc: "Equipped with industrial handrails, safety kickplates, and secure staircases." },
      { icon: Clock, title: "Minimal Interruption", desc: "Pre-fabricated parts install quickly, reducing business downtime on the ground floor." },
      { icon: Award, title: "High Load Rating", desc: "Engineered to support heavy storage racks, material handling, or office partitions." }
    ],
    specs: [
      { label: "Decking System", value: "Concrete slab over steel deck / Checker plates" },
      { label: "Load Range", value: "250 kg/sqm to 2500 kg/sqm capacity" },
      { label: "Column Layout", value: "Custom wide spans to maximize ground clearance" },
      { label: "Coating Finish", value: "Epoxy paint or hot-dip galvanized finish" }
    ],
    whyChoose: [
      { title: "10+ Years in Chennai", desc: "We have designed mezzanine platforms for logistics players and manufacturing units in Ambattur and Kanchipuram." },
      { title: "CNC Precision Manufacturing", desc: "All columns, primary beams, and joists are cut and pre-drilled using CNC machinery for millimeter-perfect alignment." },
      { title: "End-to-End Service", desc: "We provide complete engineering drawings, structural load calculation reports, factory fabrication, and on-site erection." }
    ],
    process: [
      { number: 1, title: "Dimensional Survey", desc: "Measuring floor heights, column spans, and checking existing base slab thickness." },
      { number: 2, title: "Load Modeling", desc: "Designing column grids and beam depths based on target load limits." },
      { number: 3, title: "CNC Fabrication", desc: "Manufacturing columns, bracing, and floor joists in our SIDCO workshop." },
      { number: 4, title: "On-Site Assembly", desc: "Erecting columns, bolting primary beams, and installing secondary support joists." },
      { number: 5, title: "Decking & Safety", desc: "Laying the decking floor, securing handrails, staircases, and loading gates." }
    ],
    faqs: [
      { question: "What is the cost of mezzanine floor construction in Chennai?", answer: "Mezzanine floor construction costs in Chennai typically range from ₹250 to ₹600 per sq.ft depending on columns layout, decking type, and load capacity." },
      { question: "Can a mezzanine floor be moved later?", answer: "Yes, our structural mezzanines use bolt-on connections, making them fully demountable, relocatable, and expandable." },
      { question: "What is the standard load capacity of an industrial mezzanine?", answer: "We engineer mezzanines to support loads from 250 kg/sqm (office/light storage) to over 2,000 kg/sqm (heavy machinery/pallet storage)." },
      { question: "Is a building permit required for an interior mezzanine?", answer: "Yes, minor structural approvals or factory inspectorate clearances are usually required, and Deepika Builtech assists with the documentation." },
      { question: "What decking options do you provide?", answer: "We offer concrete slabs on profile sheets (for fire safety), checker plates, and heavy-duty wooden deck systems." }
    ]
  },
  {
    slug: "warehouse-construction-chennai",
    title: "Warehouse",
    metaTitle: "Warehouse Construction & Design in Chennai | Deepika Builtech",
    metaDesc: "Build your warehouse in Chennai faster and cheaper with PEB technology. Deepika Builtech has completed 150+ warehouse and industrial projects. Call +91 96000 67611.",
    h1: "Warehouse Construction & Design in Chennai",
    subheading: "Turn-key warehouse construction and design services in Chennai, Sriperumbudur, and key Tamil Nadu logistics hubs using advanced PEB technology.",
    shortDesc: "Large-scale storage optimization with column-free clear spans.",
    fullDesc: "Deepika Builtech is Chennai's premier contractor for large-scale warehouse construction & design. We build high-performance logistics hubs and distribution centers that maximize storage volume and pallet throughput. In Sriperumbudur, Ambattur, and Tambaram, warehouse construction & design must focus on space efficiency. We specialize in wide, column-free clear spans (up to 90 meters), allowing for optimized racking layouts, conveyor setups, and easy forklift navigation. Our warehouses feature ridge ventilators, wall louvers, and polycarbonate daylight panels to reduce energy costs. The flooring is built using high-hardness Vacuum Dewatered Flooring (VDF) designed to carry intense wheel loads of up to 10 tons/sqm, ensuring long-term operational durability.",
    image: warehouseImg,
    size: "horizontal",
    features: [
      { icon: Factory, title: "Wide Clear Spans", desc: "Column-free layouts provide maximum space for high-density racking." },
      { icon: Layers, title: "Tremix VDF Floors", desc: "Flat, high-strength concrete floors designed to support heavy forklift loads." },
      { icon: Settings, title: "Natural Daylighting", desc: "Polycarbonate translucent sheets integrate into roofing to lower lighting bills." },
      { icon: Clock, title: "Substantial Ventilation", desc: "Continuous ridge ventilators and side louvers maintain air change rates." },
      { icon: Shield, title: "Fire Safety Detailing", desc: "Structural framing designed for sprinkler pipes, fire doors, and hydrants." },
      { icon: Award, title: "Government Subsidies", desc: "We design structures compliant with Agri-subsidy parameters (up to 50% subsidy)." }
    ],
    specs: [
      { label: "Flooring Load", value: "VDF concrete floors up to 10 tons/sqm" },
      { label: "Eave Heights", value: "Up to 15 Meters standard, custom higher" },
      { label: "Ventilation", value: "Gravity ridge ventilators & louvers" },
      { label: "Natural Light", value: "10-15% polycarbonate translucent panels" }
    ],
    whyChoose: [
      { title: "10+ Years in Chennai", desc: "We have built warehouse spaces along the bypass roads of Kanchipuram and Sriperumbudur, coordinating local guidelines." },
      { title: "CNC Precision Manufacturing", desc: "Our fabrication units utilize automated welding lines to produce heavy-gauge plate girders and tapered columns." },
      { title: "End-to-End Service", desc: "We handle the entire scope: earthworks, foundation layout, PEB steel framing, roofing, flooring, and utility setups." }
    ],
    process: [
      { number: 1, title: "Layout Planning", desc: "Designing column grids, eave heights, and dock positioning for logistics workflow." },
      { number: 2, title: "Foundation Civil Work", desc: "Excavation, piling, and casting the heavy concrete column foundations." },
      { number: 3, title: "PEB Erection", desc: "Assembling columns, main rafters, purlins, and wall sheeting." },
      { number: 4, title: "Tremix Slab", desc: "Pouring M30 concrete VDF floor slabs for heavy racking support." },
      { number: 5, title: "Finishing & Handover", desc: "Installing docks, rolling shutters, rain gutters, and final civil handover." }
    ],
    faqs: [
      { question: "What is the average cost of warehouse construction in Chennai?", answer: "Warehouse construction costs in Chennai using PEB range from ₹800 to ₹1,400 per sq.ft, depending on building height, flooring requirements, and dock counts." },
      { question: "What is the ideal floor load capacity for a warehouse?", answer: "For general logistics, we recommend 5 to 7 tons/sqm, and up to 10 tons/sqm for heavy-duty steel or machinery storage." },
      { question: "Do you design cold storage areas inside warehouses?", answer: "Yes, we integrate insulated cold storage zones or temperature-controlled rooms with PIR panels inside standard PEB warehouses." },
      { question: "How quickly can you complete a 50,000 sq.ft warehouse?", answer: "A 50,000 sq.ft warehouse can be completed and handed over in 90 to 120 days from foundation start to final finishes." },
      { question: "Are your warehouse designs eligible for government subsidies?", answer: "Yes, our designs align with NABARD and NHB specifications, making them eligible for up to 50% capital investment subsidies." }
    ]
  },
  {
    slug: "eot-crane-manufacturers-in-chennai",
    title: "EOT Cranes",
    metaTitle: "EOT Crane Manufacturers & Suppliers in Chennai | Deepika Builtech",
    metaDesc: "Deepika Builtech manufactures and installs Electric Overhead Travelling (EOT) cranes in Chennai. Custom capacity, span & duty class. Call +91 96000 67611.",
    h1: "EOT Crane Manufacturers in Chennai",
    subheading: "Custom EOT crane manufacturer and runway structural engineering serving Chennai, Ambattur, Sriperumbudur, and Kanchipuram factories.",
    shortDesc: "Heavy material handling infrastructure and dynamic crane gantries.",
    fullDesc: "Deepika Builtech is one of the leading EOT crane manufacturers in Chennai, specializing in heavy material handling infrastructure. Overhead cranes introduce massive dynamic forces, shear stresses, and structural vibrations. Our engineering team designs factory sheds with reinforced columns, runway gantries, and bracket connections built to absorb these dynamic impacts. As custom EOT crane manufacturers in Chennai, we design and install systems with lifting capacities from 5 tons to 100 tons. Our runway rail alignments are laser-guided and verified down to millimeter precision, guaranteeing smooth crane travel, preventing crab-like movements, and reducing wheel wear.",
    image: eotCraneImg,
    size: "horizontal",
    features: [
      { icon: Settings, title: "Laser Rail Alignment", desc: "Laser-guided runway rail alignment prevents crabbing and wheel wear." },
      { icon: Shield, title: "Dynamic Load Design", desc: "Runway frames designed to support up to 100-ton moving crane loads." },
      { icon: Clock, title: "Long-Life Structures", desc: "High-fatigue resistant steel frames minimize structural stress and vibration." },
      { icon: Ruler, title: "Custom Capacity", desc: "Single girder and double girder crane support tailored to your lifting height." },
      { icon: Cpu, title: "Variable Frequency Drives", desc: "Smooth acceleration and deceleration systems minimize load swing." },
      { icon: Award, title: "IS Code Adherence", desc: "Fully compliant with IS 875 (Part 2) dynamic load rules and IS 800." }
    ],
    specs: [
      { label: "Crane Type", value: "Single Girder / Double Girder Crane support" },
      { label: "Runway Capacity", value: "Supporting 5 Ton to 100 Ton moving crane loads" },
      { label: "Rail System", value: "Precision aligned heavy rail sections" },
      { label: "Design Code", value: "Compliant with IS 875 (Part 2) dynamic load rules" }
    ],
    whyChoose: [
      { title: "10+ Years in Chennai", desc: "We have designed EOT crane structures for automotive and metal forging units in Chennai, ensuring high uptime and safety." },
      { title: "CNC Precision Manufacturing", desc: "Our workshops utilize precision CNC drilling and plasma cutting to fabricate runway beams and end carriages." },
      { title: "End-to-End Service", desc: "From foundation reinforcement and building structure design to crane fabrication, testing, and certification." }
    ],
    process: [
      { number: 1, title: "Dynamic Modeling", desc: "Calculating crane wheel loads, impact factors, and horizontal forces." },
      { number: 2, title: "Structural Reinforcement", desc: "Designing heavy columns with crane brackets and runway gantry beams." },
      { number: 3, title: "Gantry Fabrication", desc: "Fabricating plate girders and pre-drilling connections for the rails." },
      { number: 4, title: "Installation & Alignment", desc: "Erecting runway beams, laying crane rails, and performing laser alignment." },
      { number: 5, title: "Testing & Handover", desc: "Commissioning the crane, performing deflection tests under load, and certification." }
    ],
    faqs: [
      { question: "What is the cost of EOT crane construction in Chennai?", answer: "Costs vary by capacity and span. A standard 10-ton EOT crane with gantry runway structure ranges from ₹8 Lakhs to ₹20 Lakhs." },
      { question: "What is the difference between single and double girder cranes?", answer: "Single girder cranes are lighter and cost-effective for up to 15 tons. Double girder cranes allow higher lifts and are used for capacities up to 100 tons." },
      { question: "How do you ensure gantry alignment?", answer: "We use laser rangefinders and optical levels to align gantry rails, maintaining span tolerances within ±2mm over the entire run." },
      { question: "What safety systems do your EOT cranes have?", answer: "Our cranes feature overload limit switches, rotary limit switches, cross-travel limiters, emergency stop buttons, and warning horns." },
      { question: "Do you supply testing certificates?", answer: "Yes, we conduct full load testing (up to 125% of rated capacity) and provide Form-11 certificates required by factory inspectors." }
    ]
  },
  {
    slug: "steel-structure-fabrication-chennai",
    title: "Steel Fabrication",
    metaTitle: "Steel Structure Fabrication & Erection in Chennai | Deepika Builtech",
    metaDesc: "Precision structural steel fabrication in Chennai using CNC machinery, MIG, MAG & submerged arc welding. Deepika Builtech — trusted by 100+ clients. Call +91 96000 67611.",
    h1: "Steel Structure Fabrication in Chennai",
    subheading: "High-precision structural steel fabrication and assembly services in Chennai, Ambattur, and industrial corridors of Tamil Nadu.",
    shortDesc: "Heavy industrial steel fabrication, CNC processing and assembly.",
    fullDesc: "Deepika Builtech provides high-precision steel structure fabrication in Chennai, utilizing CNC machinery and advanced welding technologies. Structural steel forms the backbone of modern factories. In our Ambattur fabrication units, we process heavy plates, beams, and columns to precise tolerances. We use MIG, MAG, and submerged arc welding to ensure maximum joint strength. Our steel structure fabrication in Chennai undergoes non-destructive testing (NDT), including ultrasonic and dye penetrant testing, to guarantee weld integrity. By applying multi-layer epoxy primers and PU finishes, we protect the steel from Chennai's humid, corrosive coastal environment, ensuring long-term structural durability.",
    image: pebImg,
    size: "normal",
    features: [
      { icon: Cpu, title: "CNC Steel Cutting", desc: "Automated plasma and oxy-fuel cutting for clean plate edges and exact geometries." },
      { icon: Flame, title: "Advanced Welding", desc: "Using MIG, MAG, and SAW welding processes performed by certified fabricators." },
      { icon: Shield, title: "Non-Destructive Testing", desc: "Ultrasonic and radiographic weld inspections guarantee joint integrity under stress." },
      { icon: Ruler, title: "Millimeter Tolerance", desc: "Pre-drilling bolt holes using digital templates for perfect alignment during erection." },
      { icon: Settings, title: "Surface Treatment", desc: "Automatic shot-blasting followed by epoxy primers protects against corrosion." },
      { icon: Award, title: "Grade 345 MPa Steel", desc: "We utilize high-yield strength structural steel plates conforming to IS 2062." }
    ],
    specs: [
      { label: "Fabrication Facility", value: "Ambattur & Vaiyavur CNC workshops" },
      { label: "Welding Standards", value: "Submerged Arc & MIG Welding (IS 816)" },
      { label: "NDT Quality Checks", value: "Ultrasonic, Magnetic Particle & Dye tests" },
      { label: "Anti-Corrosion", value: "SA 2.5 Shot Blasting + Epoxy Coating" }
    ],
    whyChoose: [
      { title: "10+ Years in Chennai", desc: "We have supplied fabricated steel structures to automotive and petrochemical plants in Chennai, meeting quality standards." },
      { title: "CNC Precision Manufacturing", desc: "Our units use CNC beam drills, plate processors, and profile cutters to eliminate manual fabrication errors." },
      { title: "End-to-End Service", desc: "From Tekla shop drawings and raw plate sourcing to automated fabrication, transport, and final erection." }
    ],
    process: [
      { number: 1, title: "Tekla detailing", desc: "Creating 3D models and generating exact shop fabrication drawings." },
      { number: 2, title: "Oxy-Fuel Cutting", desc: "CNC profiling of web and flange plates from raw high-yield steel coils." },
      { number: 3, title: "H-Beam Assembly", desc: "Automatic tack-welding and submerged arc welding of build-up sections." },
      { number: 4, title: "Shot Blasting", desc: "Cleaning the steel surface to SA 2.5 standard for optimal paint adhesion." },
      { number: 5, title: "Painting & Packing", desc: "Applying epoxy primer coatings and packing for safe transport to the job site." }
    ],
    faqs: [
      { question: "What is the cost of steel structure fabrication in Chennai?", answer: "Fabrication costs in Chennai typically range from ₹75 to ₹95 per kg, including material, fabrication, painting, and transportation." },
      { question: "What grades of steel do you use?", answer: "We use high-tensile structural steel plates conforming to IS 2062 Grade E250 (Fe 410) and Grade E350 (Fe 490)." },
      { question: "How do you test weld quality?", answer: "We conduct Non-Destructive Testing (NDT) including Ultrasonic Testing (UT), Magnetic Particle Testing (MPT), and Dye Penetrant Testing (DPT)." },
      { question: "Do you offer hot-dip galvanizing?", answer: "Yes, we offer hot-dip galvanizing up to 80-120 microns thickness for coastal or chemical factory applications." },
      { question: "What is your monthly fabrication capacity?", answer: "Our combined fabrication units in Ambattur and Vaiyavur have a capacity of 600 to 800 Metric Tons per month." }
    ]
  },
  {
    slug: "industrial-shed-construction-chennai",
    title: "Industrial Shed",
    metaTitle: "Industrial Shed Construction in Chennai | Deepika Builtech",
    metaDesc: "Custom industrial shed construction in Chennai using pre-engineered steel. Fast delivery, durable, cost-effective. Deepika Builtech — 10+ years. Call +91 96000 67611.",
    h1: "Industrial Shed Construction in Chennai",
    subheading: "Custom pre-engineered industrial shed construction serving Chennai, Ambattur, and Tamil Nadu industrial corridors.",
    shortDesc: "Custom industrial steel sheds with rapid structural erection.",
    fullDesc: "Deepika Builtech designs and executes industrial shed construction in Chennai, utilizing pre-engineered steel components. Our sheds are designed for manufacturing units, engineering workshops, and raw material storage facilities. In the Chennai industrial belt, businesses need fast, cost-effective space solutions. Our industrial sheds offer clear spans, structural rigidity, and simple expandability. We integrate heavy-duty columns, cold-formed purlins, and premium roof cladding with polycarbonate sheets for natural light. Our industrial shed construction in Chennai delivers high-performance spaces, designed to withstand coastal winds and heavy rains.",
    image: pebImg,
    size: "horizontal",
    features: [
      { icon: Factory, title: "Custom Bay Spacing", desc: "Optimizing column layouts to suit manufacturing equipment lines." },
      { icon: Ruler, title: "Galvanized Purlins", desc: "Z/C sections with galvanized coatings protect against rust." },
      { icon: Layers, title: "Anti-Leak Roofing", desc: "Double-lock standing seam roofing prevents water leakage." },
      { icon: Settings, title: "Turbo Ventilators", desc: "Wind-driven ventilators extract hot air to keep the work floor cool." },
      { icon: Clock, title: "Quick Erection", desc: "Prefabricated frames assemble quickly, saving time and money." },
      { icon: Award, title: "Modular Design", desc: "The structures are modular, allowing for easy expansions in the future." }
    ],
    specs: [
      { label: "Bay Spacing", value: "6 Meters to 9 Meters standard spacing" },
      { label: "Roofing Profile", value: "0.5mm Galvalume Pre-painted sheets" },
      { label: "Structural Connections", value: "High-strength Grade 8.8 structural bolts" },
      { label: "Ventilation", value: "Stainless Steel Roof Turbo Ventilators" }
    ],
    whyChoose: [
      { title: "10+ Years in Chennai", desc: "We have constructed over 80 industrial sheds for manufacturing units in Ambattur and Sriperumbudur." },
      { title: "CNC Precision Manufacturing", desc: "All columns, trusses, and purlins are fabricated in our units under strict quality control." },
      { title: "End-to-End Service", desc: "We manage the entire project: civil foundations, steel shed erection, flooring, and utility setups." }
    ],
    process: [
      { number: 1, title: "Concept Design", desc: "Determining shed dimensions, height, and equipment load requirements." },
      { number: 2, title: "Foundation Prep", desc: "Excavation and casting concrete pedestal foundations with anchor bolts." },
      { number: 3, title: "Shed Erection", desc: "Assembling columns, roof trusses, purlins, and wall sheeting." },
      { number: 4, title: "Roofing & Cladding", desc: "Installing color-coated Galvalume roofing sheets and turbo ventilators." },
      { number: 5, title: "Flooring & Handover", desc: "Pouring concrete flooring, installing rolling shutters, and handover." }
    ],
    faqs: [
      { question: "What is the cost of industrial shed construction in Chennai?", answer: "Industrial shed construction costs in Chennai typically range from ₹750 to ₹1,200 per sq.ft depending on building height and flooring type." },
      { question: "Can the shed height be customized?", answer: "Yes, we construct sheds with clear heights from 5 meters up to 15 meters to suit your manufacturing or storage needs." },
      { question: "What wind speeds can your industrial sheds withstand?", answer: "Our sheds are designed to withstand wind speeds of up to 180 km/h, complying with IS 875 wind load guidelines for coastal zones." },
      { question: "Do you install daylight panels in the roof?", answer: "Yes, we integrate 10-15% translucent polycarbonate sheets in the roof to provide natural daylighting and reduce energy costs." },
      { question: "What is the warranty on roofing sheets?", answer: "We use pre-painted Galvalume sheets with a warranty of 10 to 15 years against color fading and rust perforation." }
    ]
  }
];
