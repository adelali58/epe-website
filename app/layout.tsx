import "./css/style.css";
import { Inter } from "next/font/google";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
export const metadata = {
  title: "Experience Power Energy | شواحن السيارات الكهربائية",
  description: "الشركة الرائدة في توريد وتركيب وصيانة شواحن السيارات الكهربائية (AC & DC) في مصر. متخصصون في صيانة شواحن تسلا، وتأسيس البنية التحتية لمحطات الشحن السريع بأعلى معايير الأمان.",
  keywords: [
    "شواحن سيارات كهربائية",
    "تركيب شاحن تسلا مصر",
    "صيانة EV Charger",
    "محطات شحن سيارات كهربائية",
    "Experience Power Energy",
    "شاحن سيارة كهربائية منزلي",
    "صيانة شواحن DC"
  ],
  authors: [{ name: "Experience Power Energy" }],
  openGraph: {
    title: "Experience Power Energy | حلول شحن السيارات الكهربائية",
    description: "حلول متكاملة لتوريد وتركيب وصيانة شواحن السيارات الكهربائية في مصر.",
    url: "https://epe-website.vercel.app/", // لينك موقعك
    siteName: "Experience Power Energy",
    locale: "ar_EG",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" className="scroll-smooth" dir="rtl">
      <body className={`${inter.variable} bg-slate-950 font-inter text-slate-200 antialiased`}>
        <div className="flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip">
          <Header />
          <main className="grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}