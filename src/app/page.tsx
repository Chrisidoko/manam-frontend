import Hero from "@/components/ui/Hero";
// import Hero2 from "@/components/ui/Hero2";
// import LogoCloud from "@/components/ui/LogoCloud";
import Features from "@/components/ui/Features";
import Services from "@/components/ui/services";
import Contact from "@/components/ui/contact";

export default function Home() {
  return (
    <main className="flex flex-col overflow-hidden">
      <Hero />
      {/* <Hero2 /> */}

      {/* <LogoCloud /> */}

      <Services />
      <Features />
      <Contact />
    </main>
  );
}
