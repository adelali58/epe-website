import "./css/style.css";
import { Inter } from "next/font/google";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "Experience Power Energy | شواحن السيارات الكهربائية",
  description: "الشركة الرائدة في توريد وتركيب وصيانة شواحن السيارات الكهربائية في مصر. متخصصون في صيانة شواحن تسلا وتأسيس البنية التحتية.",
  openGraph: {
    title: "Experience Power Energy | حلول شحن السيارات الكهربائية",
    description: "حلول متكاملة لتوريد وتركيب وصيانة شواحن السيارات الكهربائية في مصر.",
    url: "https://epe-website.vercel.app/",
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
        
        {/* Google Analytics */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-T99FVNEZ28');
          `}
        </Script>

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