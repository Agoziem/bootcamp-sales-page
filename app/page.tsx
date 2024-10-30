import BackToTop from "@/components/BackToTop";
import About from "@/sections/about";
import Certificate from "@/sections/certificate";
import Content from "@/sections/content";
import Details from "@/sections/details";
import Faq from "@/sections/faq";
import Footer from "@/sections/footer";
import Header from "@/sections/header";
import Hero from "@/sections/hero";
import Hosts from "@/sections/hosts";
import Registration from "@/sections/registration";
import Requirements from "@/sections/requirements";
import Reviews from "@/sections/reviews";
import Schedule from "@/sections/schedule";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Registration />
      <About />
      <Hosts />
      <Content />
      <Schedule />
      <Requirements />
      <Details />
      <Certificate />
      <Faq />
      <Reviews />
      <Footer />
      <BackToTop />
    </>
  );
}
