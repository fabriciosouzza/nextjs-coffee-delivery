import "./globals.css";
import type { Metadata } from "next";
import { Roboto, Baloo_2 } from "next/font/google";
import Navbar from "./components/Navbar";
import OrderContextProvider from "@/context/OrderContext";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto",
});

const baloo = Baloo_2({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-baloo",
});

export const metadata: Metadata = {
  title: "Coffee Delivery",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${roboto.variable} ${baloo.variable}`}>
      <OrderContextProvider>
        <body className="bg-background">
          <Navbar />
          {children}
        </body>
      </OrderContextProvider>
    </html>
  );
}
