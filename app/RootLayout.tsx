import Header from "./layouts/Header";
import Footer from "./layouts/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ backgroundColor: "#F5F6F7", padding: "" }}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
