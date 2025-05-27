// import Hero from "@/components/ui/Hero";
import Hero2 from "@/components/ui/Hero2";
import Products from "@/components/ui/products";
import LogoCloud from "@/components/ui/LogoCloud";
import Features from "@/components/ui/Features";
// import Services from "@/components/ui/services";
import Services2 from "@/components/ui/services2";
import Contact from "@/components/ui/contact";

export default function Home() {
  return (
    <main className="flex flex-col overflow-hidden">
      {/* <Hero /> */}
      <Hero2 />

      <Products />
      {/* <Services /> */}
      <Services2 />
      <Features />
      <LogoCloud />
      {/* <Contact /> */}
    </main>
  );
}
