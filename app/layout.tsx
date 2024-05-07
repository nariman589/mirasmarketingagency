import type { Metadata } from "next";
import "./globals.css";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import { AnimatedCursor } from "@/clientComponents/CustomCursor";
import Modal from "@/clientComponents/Modal";

export const metadata: Metadata = {
  title: "MMA",
  description: "Miras Marketing Agency",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      style={{
        scrollBehavior: "smooth",
      }}
    >
      <body
        style={{
          backgroundColor: "#F5F6F7",
          minHeight: "100vh",
        }}
      >
        <Header />
        {children}
        <Modal />
        <Footer />
        {/* <AnimatedCursor /> */}
      </body>
    </html>
  );
}
