import Hero from "@/components/Hero";
import VSL from "@/components/VSL";
import Benefits from "@/components/Benefits";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import Order from "@/components/Order";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <VSL />
      <Benefits />
      <HowItWorks />
      <Testimonials />
      <Order />
      <FAQ />
      <Footer />
    </main>
  );
};

export default Index;
