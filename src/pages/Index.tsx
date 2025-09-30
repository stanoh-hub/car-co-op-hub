import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import InvestmentModel from "@/components/InvestmentModel";
import VehicleShowcase from "@/components/VehicleShowcase";
import PerformanceMetrics from "@/components/PerformanceMetrics";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <InvestmentModel />
        <VehicleShowcase />
        <PerformanceMetrics />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;