import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import LiveChat from "./components/LiveChat";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import RouteTracker from "./components/RouteTracker";
import Landing from "./pages/Landing";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";
import Services from "./pages/services/Services";
import ServiceDetail from "./pages/services/JointPainService";
import JoinPainService from "./pages/services/JointPainService";
import CellularTherapiesService from "./pages/services/CellularTherapiesService";
import IVNutrientSupportService from "./pages/services/IVNutrientSupportService";
import Collaboration from "./pages/Collaboration";
import SkinAgingService from "./pages/services/SkinAgingService";
import ImmuneBalanceService from "./pages/services/ImmuneBalanceService";
import LungHealthService from "./pages/services/LungHealthService";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <RouteTracker />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/joint-pain-support" element={<JoinPainService />} />
          <Route path="/services/cellular-therapy" element={<CellularTherapiesService />} />
          <Route path="/services/iv-nutrient-support" element={<IVNutrientSupportService />} />
          <Route path="/services/skin-aging-support" element={<SkinAgingService />} />
          <Route path="/services/immune-balance-support" element={<ImmuneBalanceService />} />
          <Route path="/services/lung-health-support" element={<LungHealthService />} />
          
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/lee" element={<Landing />} />
          <Route path="/collaboration" element={<Collaboration />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <LiveChat />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
