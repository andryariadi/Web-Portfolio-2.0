import { Inter, Orbitron, Aldrich, Rajdhani } from "next/font/google";
import "./globals.css";
import TransitionProvider from "@/components/TransitionProvider";

const inter = Inter({ subsets: ["latin"] });

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-orbitron",
});

const aldrich = Aldrich({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-aldrich",
});

const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-rajdhani",
});

export const metadata = {
  title: "Andry Ariadi",
  description: "the best animated portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${orbitron.variable} ${aldrich.variable} ${rajdhani.variable}`}>
        <TransitionProvider>{children}</TransitionProvider>
      </body>
    </html>
  );
}
