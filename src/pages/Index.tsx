import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustSection from "@/components/TrustSection";
import EcosystemSection from "@/components/EcosystemSection";
import DevicesSection from "@/components/DevicesSection";
import DeveloperSection from "@/components/DeveloperSection";
import FeaturesSection from "@/components/FeaturesSection";
import ContactForm from "@/components/ContactForm";
import FAQSection from "@/components/FAQSection";
import SupportCTA from "@/components/SupportCTA";
import IntroVideo from "@/components/IntroVideo";

const Index = () => {
  const [introComplete, setIntroComplete] = useState(false);

  return (
    <>
      {!introComplete && <IntroVideo onComplete={() => setIntroComplete(true)} />}
      {introComplete && (
        <div className="bg-background min-h-screen">
          <Navbar />
          <HeroSection />
          <TrustSection />
          <EcosystemSection />
          <DevicesSection />
          <DeveloperSection />
          <FeaturesSection />
          <ContactForm />
          <FAQSection />
          <SupportCTA />
        </div>
      )}
    </>
  );
};

export default Index;
