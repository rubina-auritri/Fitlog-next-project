import { Oswald, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import { FitLogProvider } from "@/context/FitlogContext";


const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${oswald.variable} ${inter.variable}`}>
        <FitLogProvider>
          <Navbar />
          {children}
          <Footer />
        </FitLogProvider>
      </body>
    </html>
  );
}