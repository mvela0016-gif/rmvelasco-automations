import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import EducationSection from "@/components/EducationSection";
import PortfolioSection from "@/components/PortfolioSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import TechMarquee from "@/components/TechMarquee";
import ROICalculator from "@/components/ROICalculator";
import ServicesSection from "@/components/ServicesSection";

const Index = () => (
  <main className="min-h-screen relative overflow-hidden text-foreground">
    {/* Subtle grid overlay */}
    <div className="fixed inset-0 bg-[linear-gradient(hsla(220,20%,80%,0.03)_1px,_transparent_1px),_linear-gradient(90deg,_hsla(220,20%,80%,0.03)_1px,_transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
    {/* Floating accent orbs */}
    <div className="fixed top-[20%] left-[10%] w-[400px] h-[400px] rounded-full bg-[hsla(24,90%,50%,0.06)] blur-[100px] pointer-events-none" />
    <div className="fixed bottom-[15%] right-[5%] w-[350px] h-[350px] rounded-full bg-[hsla(24,80%,45%,0.05)] blur-[100px] pointer-events-none" />
    <Navbar />
    <HeroSection />
    <TechMarquee />
    <AboutSection />
    <ServicesSection />
    <ROICalculator />
    <ExperienceSection />
    <EducationSection />
    <PortfolioSection />
    <ContactSection />
    <Footer />
  </main>
);

export default Index;
