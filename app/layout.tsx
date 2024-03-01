import type { Metadata } from "next";
import "./globals.css";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";

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
    <html lang="en">
      <body
        style={{
          backgroundColor: "#F5F6F7",
          minHeight: "100vh",
        }}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
