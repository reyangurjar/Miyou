import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Navigation/Nav";
import "react-loading-skeleton/dist/skeleton.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Miyou",
  description: "An anime streaming site to watch your favourite anime",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#1A1927] min-h-screen`}>
        <Nav/>
        {children}
        
        </body>
    </html>
  );
}
