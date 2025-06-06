import React from "react";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="relative min-h-screen bg-[#f5f5f5] text-[#0c0c0c] overflow-hidden font-urbanist">
      <Header />
      <main className="relative">
        {children}
      </main>
      <Footer />
    </div>
  );
} 