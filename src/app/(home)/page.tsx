import CtaBanner from "@/components/home/cta-banner";
import FeatureSection from "@/components/home/feature-section";
import MultiStepForm from "@/components/home/multi-step-form";
import ProcessFlow from "@/components/home/process-flow";
import RegistrationForm from "@/components/home/registration-form";

const CommonLayoutHomePage = () => {
  return (
    <div className="max-w-7xl mx-auto mt-8">
      <MultiStepForm />
       <FeatureSection />
      <ProcessFlow />
      <CtaBanner />
      <RegistrationForm />
     
    </div>
  );
};

export default CommonLayoutHomePage;