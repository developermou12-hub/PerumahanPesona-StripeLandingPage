import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--color-bg)]">
      <Navbar />
      <main className="flex-grow mt-[80px]">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
