import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MissionSection from "@/components/MissionSection";
import ServicesSection from "@/components/ServicesSection";
import WorksSection from "@/components/WorksSection";
import MilestonesSection from "@/components/MilestonesSection";
import TeamSection from "@/components/TeamSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <MissionSection />
      <ServicesSection />
      <WorksSection />
      <MilestonesSection />
      <TeamSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
