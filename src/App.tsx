import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { lazy, Suspense } from "react";
import AIChatBot from "./components/AIChatBot";
import PremiumUIWrapper from "./components/PremiumUIWrapper";
import FloatingCTA from "./components/FloatingCTA";


// Lazy loaded page components
const Index = lazy(() => import("./pages/Index.tsx"));
const Services = lazy(() => import("./pages/Services.tsx"));
const Projects = lazy(() => import("./pages/Projects.tsx"));
const About = lazy(() => import("./pages/About.tsx"));
const Blogs = lazy(() => import("./pages/Blogs.tsx"));
const Contact = lazy(() => import("./pages/Contact.tsx"));
const ServiceDetail = lazy(() => import("./pages/ServiceDetail.tsx"));
const ProjectDetail = lazy(() => import("./pages/ProjectDetail.tsx"));
const BlogDetail = lazy(() => import("./pages/BlogDetail.tsx"));
const LocationDetail = lazy(() => import("./pages/LocationDetail.tsx"));
const NotFound = lazy(() => import("./pages/NotFound.tsx"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={
          <div style={{
            height:'100vh', display:'flex',
            alignItems:'center', justifyContent:'center',
            fontFamily: 'sans-serif',
            fontSize: '18px',
            color: '#0d1b2a',
            fontWeight: '600'
          }}>
            Loading...
          </div>
        }>
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
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
        <AIChatBot />
        <PremiumUIWrapper />
        <FloatingCTA />

      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
