import CTASection from "../../components/Home/CTASection";
import HeroSection from "../../components/Home/HeroSection";
import ServicesOverview from "../../components/Home/ServicesOverview";
import WhyChooseUsSection from "../../components/Home/WhyChooseUsSection";

const HomePage = () => {
  return (
    <div className="min-h-screen w-full">
      {/* Hero Section */}
      <HeroSection />
      {/* Services Overview */}
      <ServicesOverview />
      {/* Why Choose Us */}
      <WhyChooseUsSection />
      {/* CTA Section */}
      <CTASection />
    </div>
  );
};

export default HomePage;
