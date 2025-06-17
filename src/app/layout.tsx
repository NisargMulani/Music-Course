import { NavbarDemo } from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-white dark dark:bg-black">
      <body>
        <NavbarDemo />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
