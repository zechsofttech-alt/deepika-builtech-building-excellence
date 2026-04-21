import peb from "@/assets/peb-building.jpg";
import warehouse from "@/assets/warehouse.jpg";
import coldStorage from "@/assets/cold-storage.jpg";

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  image: string;
  author: string;
  category: string;
  readTime: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "evolution-of-peb-buildings-2024",
    title: "The Evolution of Pre-Engineered Buildings in 2024",
    excerpt: "Discover how AI and advanced CAD/CAM technologies are revolutionizing the fabrication of steel structures...",
    date: "April 12, 2026",
    image: peb,
    author: "Engr. Rajesh Kumar",
    category: "Technical",
    readTime: "8 min read",
    tags: ["PEB", "Engineering", "Innovation"],
    content: `
      Pre-engineered buildings (PEBs) have undergone a significant transformation over the last decade. As we look at 2024, the integration of Artificial Intelligence in structural design is not just a trend but a fundamental shift in how we approach project efficiency.

      Advanced engineering software can now simulate thousands of load scenarios in seconds, allowing our team at Deepika Builtech to optimize steel usage while exceeding safety standards. This means lighter structures with higher load-bearing capacities.

      Another leap is in global sustainability. PEBs are inherently more eco-friendly than traditional concrete structures due to the high recyclability of steel and the minimal waste generated on-site during erection.
    `
  },
  {
    slug: "optimizing-warehouse-space",
    title: "Optimizing Warehouse Space: A Structural Perspective",
    excerpt: "Efficient storage isn't just about floor space. Learn how mezzanine flooring and clear span designs can double your capacity.",
    date: "March 28, 2026",
    image: warehouse,
    author: "Deepika Admin",
    category: "Logistics",
    readTime: "6 min read",
    tags: ["Warehousing", "Storage", "Design"],
    content: `
      Maximizing ROI in warehousing starts with the skeleton of the building. In this article, we explore why 'clear span' designs—buildings without interior columns—are essential for modern high-bay logistics.

      Column-free space allows for seamless forklift movement and the installation of dense racking systems. Additionally, structural steel mezzanine floors can add a second story to your warehouse without the overhead of expanding the building's footprint.

      We also discuss the importance of Vacuum Dewatered Flooring (VDF) for maintaining a perfectly flat surface, which is critical for high-reach racking safety.
    `
  },
  {
    slug: "energy-efficiency-cold-storage",
    title: "Energy Efficiency in Cold Storage Construction",
    excerpt: "Maintaining thermal integrity while reducing operational costs through superior insulation and structural design.",
    date: "March 15, 2026",
    image: coldStorage,
    author: "Technical Team",
    category: "Industrial",
    readTime: "10 min read",
    tags: ["Cold Storage", "Sustainability", "HVAC"],
    content: `
      Cold storage facilities are some of the most energy-intensive industrial assets. To combat rising operational costs, we focus on 'Thermal Integrity' from the ground up.

      This involves using high-performance PIR (Polyisocyanurate) sandwich panels that provide superior R-values. However, the structural steel frames must be engineered to prevent 'thermal bridging'—where heat leaks through the structural joints.

      Our team utilizes specialized joint detailing and thermal breakers to ensure that the cold stays in and the heat stays out, reducing refrigeration costs by up to 25%.
    `
  }
];
