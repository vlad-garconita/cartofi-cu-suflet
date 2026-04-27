import { About } from "@/components/About";
import { FindUs } from "@/components/FindUs";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Menu } from "@/components/Menu";
import { Navigation } from "@/components/Navigation";
import { Reviews } from "@/components/Reviews";
import { useActiveSection, useReveal } from "@/hooks/use-scroll-effects";

const Index = () => {
  useReveal();
  useActiveSection(["home", "about", "menu", "reviews", "find-us"]);

  return (
    <>
      <a href="#home" className="skip-link">
        Sari la conținut
      </a>
      <Navigation />
      <main id="main">
        <Hero />
        <About />
        <Menu />
        <Reviews />
        <FindUs />
      </main>
      <Footer />
    </>
  );
};

export default Index;
