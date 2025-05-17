"use client";
import Footer from "../shared/Footer";
import Navbar from "../shared/Navbar";

interface HomeWrapperProps {
  children: React.ReactNode;
}

const HomeWrapper = ({ children }: HomeWrapperProps) => {

 
  

  return (
    <div className="grid grid-rows-[auto,1fr,auto] min-h-screen">
      <div>
        <Navbar />
      </div>
      {children}
      <Footer />
    </div>
  );
};

export default HomeWrapper;