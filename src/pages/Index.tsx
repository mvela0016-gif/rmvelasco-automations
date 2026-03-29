import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import EducationSection from "@/components/EducationSection";
import PortfolioSection from "@/components/PortfolioSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background bg-[radial-gradient(ellipse_at_top,_hsla(220,70%,55%,0.08)_0%,_transparent_50%),_radial-gradient(ellipse_at_bottom_right,_hsla(260,60%,50%,0.06)_0%,_transparent_50%)]">
    <Navbar />
    <HeroSection />
    <AboutSection />
    <ExperienceSection />
    <EducationSection />
    <PortfolioSection />
    <ContactSection />
    <Footer />
  </div>
);

export default Index;
