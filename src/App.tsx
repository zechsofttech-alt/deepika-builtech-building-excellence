import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import Services from "./pages/Services.tsx";
import Projects from "./pages/Projects.tsx";
import About from "./pages/About.tsx";
import Blogs from "./pages/Blogs.tsx";
import Contact from "./pages/Contact.tsx";
import ServiceDetail from "./pages/ServiceDetail.tsx";
import ProjectDetail from "./pages/ProjectDetail.tsx";
import BlogDetail from "./pages/BlogDetail.tsx";
import LocationDetail from "./pages/LocationDetail.tsx";
import NotFound from "./pages/NotFound.tsx";
import AIChatBot from "./components/AIChatBot";
import PremiumUIWrapper from "./components/PremiumUIWrapper";
import FloatingCTA from "./components/FloatingCTA";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          
          {/* Direct Service SEO Routes (8 Services) */}
          <Route path="/industrial-peb-construction-chennai" element={<ServiceDetail />} />
          <Route path="/construction-services-in-chennai" element={<ServiceDetail />} />
          <Route path="/cold-storage-solutions-chennai" element={<ServiceDetail />} />
          <Route path="/mezzanine-floor-construction-chennai" element={<ServiceDetail />} />
          <Route path="/warehouse-construction-chennai" element={<ServiceDetail />} />
          <Route path="/eot-crane-manufacturers-in-chennai" element={<ServiceDetail />} />
          <Route path="/steel-structure-fabrication-chennai" element={<ServiceDetail />} />
          <Route path="/industrial-shed-construction-chennai" element={<ServiceDetail />} />
          
          <Route path="/service/:slug" element={<ServiceDetail />} />
          
          {/* Direct Location SEO Routes (8 Locations) */}
          <Route path="/location/peb-construction-ambattur" element={<LocationDetail />} />
          <Route path="/location/peb-construction-sriperumbudur" element={<LocationDetail />} />
          <Route path="/location/peb-construction-kanchipuram" element={<LocationDetail />} />
          <Route path="/location/peb-construction-thiruvallur" element={<LocationDetail />} />
          <Route path="/location/peb-construction-tambaram" element={<LocationDetail />} />
          <Route path="/location/peb-construction-oragadam" element={<LocationDetail />} />
          <Route path="/location/peb-construction-chennai-port" element={<LocationDetail />} />
          <Route path="/location/peb-construction-hosur" element={<LocationDetail />} />
          
          <Route path="/location/:slug" element={<LocationDetail />} />

          {/* Direct Blog SEO Routes (12 Blogs) */}
          <Route path="/blog/peb-vs-rcc-construction-cost-chennai" element={<BlogDetail />} />
          <Route path="/blog/industrial-building-approval-process-tamil-nadu" element={<BlogDetail />} />
          <Route path="/blog/warehouse-insulation-ventilation-chennai" element={<BlogDetail />} />
          <Route path="/blog/mezzanine-floor-design-safety-standards" element={<BlogDetail />} />
          <Route path="/blog/eot-crane-gantry-girder-calculations" element={<BlogDetail />} />
          <Route path="/blog/cold-storage-construction-cost-factors" element={<BlogDetail />} />
          <Route path="/blog/pre-engineered-building-manufacturing-process" element={<BlogDetail />} />
          <Route path="/blog/structural-steel-fabrication-quality-ndt" element={<BlogDetail />} />
          <Route path="/blog/peb-multi-story-commercial-buildings" element={<BlogDetail />} />
          <Route path="/blog/preventive-maintenance-industrial-sheds" element={<BlogDetail />} />
          <Route path="/blog/fire-safety-norms-industrial-warehouses" element={<BlogDetail />} />
          <Route path="/blog/green-building-benefits-steel-peb" element={<BlogDetail />} />
          
          <Route path="/blog/:slug" element={<BlogDetail />} />

          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:slug" element={<ProjectDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* Legacy 301 Redirects for SEO Consolidation */}
          <Route path="/peb-building-solutions" element={<Navigate to="/industrial-peb-construction-chennai" replace />} />
          <Route path="/peb-building-solutions/" element={<Navigate to="/industrial-peb-construction-chennai" replace />} />
          <Route path="/peb-building-systems-for-durable-and-efficient-steel-structures" element={<Navigate to="/industrial-peb-construction-chennai" replace />} />
          <Route path="/peb-building-systems-for-durable-and-efficient-steel-structures/" element={<Navigate to="/industrial-peb-construction-chennai" replace />} />
          <Route path="/pre-fabricated-steel-building" element={<Navigate to="/industrial-peb-construction-chennai" replace />} />
          <Route path="/pre-fabricated-steel-building/" element={<Navigate to="/industrial-peb-construction-chennai" replace />} />
          <Route path="/pre-fabricated-buildings" element={<Navigate to="/industrial-peb-construction-chennai" replace />} />
          <Route path="/pre-fabricated-buildings/" element={<Navigate to="/industrial-peb-construction-chennai" replace />} />
          <Route path="/pre-engineered-metal-building" element={<Navigate to="/industrial-peb-construction-chennai" replace />} />
          <Route path="/pre-engineered-metal-building/" element={<Navigate to="/industrial-peb-construction-chennai" replace />} />
          <Route path="/blogs/peb-building-systems-chennai" element={<Navigate to="/industrial-peb-construction-chennai" replace />} />
          <Route path="/blogs/peb-building-systems-chennai/" element={<Navigate to="/industrial-peb-construction-chennai" replace />} />
          
          <Route path="/steel-structure-manufacturer" element={<Navigate to="/steel-structure-fabrication-chennai" replace />} />
          <Route path="/steel-structure-manufacturer/" element={<Navigate to="/steel-structure-fabrication-chennai" replace />} />
          
          <Route path="/steel-workshop-buildings" element={<Navigate to="/industrial-shed-construction-chennai" replace />} />
          <Route path="/steel-workshop-buildings/" element={<Navigate to="/industrial-shed-construction-chennai" replace />} />
          
          <Route path="/steel-building-contractors-for-expert-planning-and-execution" element={<Navigate to="/construction-services-in-chennai" replace />} />
          <Route path="/steel-building-contractors-for-expert-planning-and-execution/" element={<Navigate to="/construction-services-in-chennai" replace />} />

          {/* CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <AIChatBot />
        <PremiumUIWrapper />
        <FloatingCTA />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

