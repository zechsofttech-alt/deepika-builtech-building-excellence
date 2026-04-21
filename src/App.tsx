import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
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
import NotFound from "./pages/NotFound.tsx";
import AIChatBot from "./components/AIChatBot";
import PremiumUIWrapper from "./components/PremiumUIWrapper";

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
          <Route path="/service/:slug" element={<ServiceDetail />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:slug" element={<ProjectDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blog/:slug" element={<BlogDetail />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <AIChatBot />
        <PremiumUIWrapper />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
