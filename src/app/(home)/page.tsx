"use client";
import { useState } from "react";
import { useRouter } from "next/navigation"; // ✅ Correct for App Router
import CtaBanner from "@/components/home/cta-banner";
import FeatureSection from "@/components/home/feature-section";
import RegistrationForm from "@/components/home/registration-form";
import Image from "next/image";
import banner from '@/assets/banner.jpg';
import { ProcessFlow } from "@/components/home/process-flow";

const CommonLayoutHomePage = () => {
  const [postcode, setPostcode] = useState("");
  const [error, setError] = useState("");
  const router = useRouter(); // ✅ now from next/navigation

  const handleSubmit = () => {
    if (!postcode.trim()) {
      setError("Postcode is verplicht.");
    } else {
      setError("");
      router.push("/form"); // ✅ works with next/navigation
    }
  };

  return (
    <div className="bg-[#EEEEEE]/30 -mt-4">
      <div className="container mx-auto mt-8">
        <div className="p-4 md:p-0">
          <div className="mt-12 grid md:grid-cols-2 gap-8">
            <div className="space-y-4 flex flex-col justify-center">
              <h1 className="text-3xl font-bold text-gray-800 mb-6">Vind een hovenier in uw regio!</h1>
              <div className="space-y-4">
                <div>
                  <label htmlFor="postcode" className="block text-sm font-medium text-gray-700 mb-1">
                    Postcode
                  </label>
                  <input
                    type="text"
                    id="postcode"
                    value={postcode}
                    onChange={(e) => setPostcode(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                    placeholder="Bijv. 1234 AB"
                  />
                  {error && <p className="text-red-600 text-sm mt-1">{error}</p>}
                </div>
                <button
                  onClick={handleSubmit}
                  className="inline-flex items-center bg-[#2E7D32] text-white px-6 py-2 rounded-md hover:bg-green-700 transition-colors cursor-pointer" 
                >
                  Volgende <span className="ml-2">→</span>
                </button>
              </div>
            </div>
            <div className="relative h-[300px] md:h-[400px]">
              <Image
                src={banner.src}
                alt="Hovenier aan het werk in een tuin"
                fill
                className="object-cover rounded-lg"
                priority
              />
            </div>
          </div>
        </div>
        <FeatureSection />
        <ProcessFlow />
        <CtaBanner />
      <div id="registration">
  <RegistrationForm />
</div>
      </div>
    </div>
  );
};

export default CommonLayoutHomePage;
