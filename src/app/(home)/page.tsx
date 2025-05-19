import CtaBanner from "@/components/home/cta-banner";
import FeatureSection from "@/components/home/feature-section";
import ProcessFlow from "@/components/home/process-flow";
import RegistrationForm from "@/components/home/registration-form";
import Image from "next/image";
import Link from "next/link";
import banner from '@/assets/banner.jpg'

const CommonLayoutHomePage = () => {
  return (
    <div className=" mx-auto mt-8">
       <div className=" mx-auto p-4 md:p-0">
   

      <div className="mt-12 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Vind een hovenier in uw regio!</h1>
          <div className="space-y-4">
            <div>
              <label htmlFor="postcode" className="block text-sm font-medium text-gray-700 mb-1">
                Postcode
              </label>
              <input
                type="text"
                id="postcode"
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                placeholder="Bijv. 1234 AB"
              />
            </div>
            <Link
              href="/form"
              className="inline-flex items-center bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition-colors"
            >
              Volgende <span className="ml-2">→</span>
            </Link>
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
      {/* <MultiStepForm /> */}
       <FeatureSection />
      <ProcessFlow />
      <CtaBanner />
      <RegistrationForm />
     
    </div>
  );
};

export default CommonLayoutHomePage;