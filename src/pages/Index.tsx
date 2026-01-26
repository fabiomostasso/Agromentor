import HeroSection from "@/components/HeroSection";
import PainPointsSection from "@/components/PainPointsSection";
import MarketChangeSection from "@/components/MarketChangeSection";
import TransformationSection from "@/components/TransformationSection";
import MethodSection from "@/components/MethodSection";
import FundamentosSection from "@/components/FundamentosSection";
import AudienceSection from "@/components/AudienceSection";
import AboutSection from "@/components/AboutSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-forest-deep">
      <HeroSection />
      <PainPointsSection />
      <MarketChangeSection />
      <TransformationSection />
      <MethodSection />
      <FundamentosSection />
      <AudienceSection />
      <AboutSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
