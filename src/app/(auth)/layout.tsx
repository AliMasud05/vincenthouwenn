import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] h-screen">
      <Navbar />

      {children}
      <Footer />
    </div>
  );
};

export default AuthLayout;
