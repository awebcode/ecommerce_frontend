import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/header/Header";
import { generateSEO, generateViewport } from "@/config/seo/seo";
import ScrollToTop from "../components/reusables/ScrollToTop";
import { Toaster } from "@/components/ui/sonner";
import ProgressBar from "@/components/reusables/ProgressBar";
import ScrollLoader from "@/components/reusables/ScrollLoader";
import Footer from "./_components/Footer";
// In app directory
// import { ArticleJsonLd, DefaultSeo } from "next-seo";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-poppins",
});
// setup SEO
export const viewport = generateViewport({});
// setup SEO
export const metadata = generateSEO({});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${poppins.className} ${poppins.variable} antialiased min-h-screen flex justify-around flex-col  `}
      >
        <Navbar />

        <main className="flex-grow">{children}</main>

        {/* Footer */}
          <Footer />
        <Toaster toastOptions={{ duration: 3000 }} theme="light" />
        <ScrollToTop />

        {/* when user will scrolling in the page it will show the loader */}
        <ScrollLoader />
        <ProgressBar />
      </body>
    </html>
  );
}
