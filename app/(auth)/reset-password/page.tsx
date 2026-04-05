import Hero from "@/components/hero-home";
import Services from "@/components/services"; // ضيف السطر ده
import Contact from "@/components/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Services /> {/* حط القسم هنا */}
      <Contact />
    </>
  );
}