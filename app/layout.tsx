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
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-T99FVNEZ28" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-T99FVNEZ28');
          `}
        </Script>

        {/* Facebook Pixel */}
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '913290494833888');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img height="1" width="1" style={{ display: 'none' }} src="https://www.facebook.com/tr?id=913290494833888&ev=PageView&noscript=1" alt="" />
        </noscript>

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