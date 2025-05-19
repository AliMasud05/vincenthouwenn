"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { FormStep } from "@/components/form/form-step"
import { AddressForm } from "@/components/form/address-form"
import { ServiceForm } from "@/components/form/service-form"
import { DesignForm } from "@/components/form/design-form"
import { GardenSizeForm } from "@/components/form/garden-size-form"
import { GardenLocationForm } from "@/components/form/garden-location-form"
import { ContactForm } from "@/components/form/contact-form"
import { CompletedStep } from "@/components/form/completed-step"

const STEPS = [
  { id: "address", title: "Waar woont u?" },
  { id: "service", title: "Wat moet er gebeuren?" },
  { id: "design", title: "Heeft u ontwerpktekeningen?" },
  { id: "size", title: "Wat is de oppervlakte van de tuin in m2?" },
  { id: "location", title: "Wat is de locatie van de tuin?" },
  { id: "contact", title: "Contactgegevens" },
]

export default function FormPage() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(0)
  const [completedSteps, setCompletedSteps] = useState<number[]>([])
  const [formData, setFormData] = useState({
    postcode: "",
    plaats: "",
    straat: "",
    huisnummer: "",
    service: "",
    hasDesign: "",
    gardenSize: "",
    gardenLocation: "",
    name: "",
    email: "",
    phone: "",
  })

  const updateFormData = (data: Partial<typeof formData>) => {
    setFormData((prev) => ({ ...prev, ...data }))
  }

  const goToNextStep = () => {
    if (currentStep < STEPS.length - 1) {
      setCompletedSteps((prev) => [...prev, currentStep])
      setCurrentStep((prev) => prev + 1)
      window.scrollTo(0, 0)
    } else {
      // Save form data to localStorage when submitting the final step
      localStorage.setItem("formData", JSON.stringify(formData))
      console.log("Form submitted with the following data:", formData)
      router.push("/success")
    }
  }

  const goToPreviousStep = () => {
    if (currentStep > 0) {
      setCompletedSteps((prev) => prev.filter((step) => step !== currentStep - 1))
      setCurrentStep((prev) => prev - 1)
      window.scrollTo(0, 0)
    }
  }

  return (
    <div className=" container mx-auto p-4 md:p-6 min-h-screen">
  

      <div className="mt-6 bg-white p-6 rounded-lg shadow-sm">
        <h1 className="text-xl font-bold text-gray-800 mb-6">Aanvraag formulier</h1>

        <div className="space-y-6">
          {/* Completed Steps */}
          {completedSteps.map((stepIndex) => (
            <CompletedStep key={stepIndex} stepIndex={stepIndex} formData={formData} />
          ))}

          {/* Current Step */}
          <div className="transition-all duration-500 ease-in-out">
            {currentStep === 0 && (
              <FormStep>
                <AddressForm formData={formData} updateFormData={updateFormData} onNext={goToNextStep} />
              </FormStep>
            )}

            {currentStep === 1 && (
              <FormStep>
                <ServiceForm
                  formData={formData}
                  updateFormData={updateFormData}
                  onNext={goToNextStep}
                  onPrevious={goToPreviousStep}
                />
              </FormStep>
            )}

            {currentStep === 2 && (
              <FormStep>
                <DesignForm
                  formData={formData}
                  updateFormData={updateFormData}
                  onNext={goToNextStep}
                  onPrevious={goToPreviousStep}
                />
              </FormStep>
            )}

            {currentStep === 3 && (
              <FormStep>
                <GardenSizeForm
                  formData={formData}
                  updateFormData={updateFormData}
                  onNext={goToNextStep}
                  onPrevious={goToPreviousStep}
                />
              </FormStep>
            )}

            {currentStep === 4 && (
              <FormStep>
                <GardenLocationForm
                  formData={formData}
                  updateFormData={updateFormData}
                  onNext={goToNextStep}
                  onPrevious={goToPreviousStep}
                />
              </FormStep>
            )}

            {currentStep === 5 && (
              <FormStep>
                <ContactForm
                  formData={formData}
                  updateFormData={updateFormData}
                  onSubmit={() => router.push("/success")}
                  onPrevious={goToPreviousStep}
                />
              </FormStep>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
