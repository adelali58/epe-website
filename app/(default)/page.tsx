import Hero from "@/components/hero-home";
import Services from "@/components/services"; // استدعاء قسم الخدمات
import Contact from "@/components/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Services /> {/* وضع قسم الخدمات تحت الواجهة */}
      <Contact />
    </>
  );
}
