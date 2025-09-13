import CompanyOverview from "../../components/AboutUs/CompanyOverview";
import HeroSection from "../../components/AboutUs/HeroSection";
import StatsSection from "../../components/AboutUs/StatsSection";
import ValuesSection from "../../components/AboutUs/ValuesSection";
import CTASection from "../../components/AboutUs/CTASection";

const AboutUs = () => {
  return (
    <div className="min-h-screen w-full">
      {/* Hero Section */}
      <HeroSection />
      {/* Company Overview */}
      <CompanyOverview />
      {/* Our Values */}
      <ValuesSection />
      {/* Stats Section */}
      <StatsSection />
      {/* Contact CTA */}
      <CTASection />
    </div>
  );
};

export default AboutUs;
