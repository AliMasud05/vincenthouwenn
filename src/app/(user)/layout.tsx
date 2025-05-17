import ProfileSidebar from "@/components/profile/ProfileSidebar";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import React from "react";

const UserLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="grid grid-rows-[auto,1fr,auto] min-h-screen">
      <Navbar />
      <div className="flex mt-10 gap-10 container">
        <ProfileSidebar />
        <div className="min-h-fit w-full">{children}</div>
      </div>
      <div>
        <Footer />
      </div>{" "}
    </div>
  );
};

export default UserLayout;
