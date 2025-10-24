// import Hero from "@/components/ui/Hero";
import Hero2 from "@/components/ui/Hero2";
import Products from "@/components/ui/whatwedo";
import LogoCloud from "@/components/ui/iwserve";
import Overview from "@/components/ui/Overview";
// import Services from "@/components/ui/services";
// import Services2 from "@/components/ui/services2";
import AboutUS from "@/components/ui/aboutus";
// import Newsletter from "@/components/ui/newsletter";
import Contactform from "@/components/ui/contactform";
import WhyChooseUs from "@/components/ui/WhyChooseUs";

export default function Home() {
  return (
    <main className="flex flex-col overflow-hidden">
      {/* <Hero /> */}
      <Hero2 />
      <Products />
      <Overview />
      <AboutUS />
      {/* <Services /> */}
      <WhyChooseUs />
      {/* <Services2 /> */}
      <LogoCloud />
      <Contactform />
      {/* <Newsletter /> */}
    </main>
  );
}
