import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import EducationSection from "@/components/EducationSection";
import PortfolioSection from "@/components/PortfolioSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background bg-[radial-gradient(ellipse_at_top,_hsla(220,70%,55%,0.10)_0%,_transparent_50%),_radial-gradient(ellipse_at_bottom_right,_hsla(260,60%,50%,0.08)_0%,_transparent_50%),_radial-gradient(ellipse_at_center_left,_hsla(200,80%,45%,0.06)_0%,_transparent_40%),_radial-gradient(circle_at_80%_60%,_hsla(240,50%,40%,0.05)_0%,_transparent_35%)] relative overflow-hidden">
    {/* Subtle grid overlay */}
    <div className="fixed inset-0 bg-[linear-gradient(hsla(220,20%,30%,0.04)_1px,_transparent_1px),_linear-gradient(90deg,_hsla(220,20%,30%,0.04)_1px,_transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
    {/* Floating accent orbs */}
    <div className="fixed top-[20%] left-[10%] w-[400px] h-[400px] rounded-full bg-[hsla(220,70%,50%,0.03)] blur-[100px] pointer-events-none" />
    <div className="fixed bottom-[15%] right-[5%] w-[350px] h-[350px] rounded-full bg-[hsla(260,60%,45%,0.03)] blur-[100px] pointer-events-none" />
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
