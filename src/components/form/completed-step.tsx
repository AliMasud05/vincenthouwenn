"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"

interface FormData {
  postcode?: string
  plaats?: string
  straat?: string
  huisnummer?: string
  service?: string
  hasDesign?: string
  gardenSize?: string | number
  gardenLocation?: string
  name?: string
  email?: string
  phone?: string
}

interface CompletedStepProps {
  stepIndex: number
  formData: FormData
}

export function CompletedStep({ stepIndex, formData }: CompletedStepProps) {
  // Render different completed step content based on the step index
  const renderCompletedStepContent = () => {
    switch (stepIndex) {
      case 0: // Address step
        return (
          <div className="space-y-4">
            <h2 className="text-lg font-medium mb-2">Waar woont u?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Postcode</label>
                <div className="p-2 bg-gray-50 border border-gray-200 rounded-md">{formData.postcode}</div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Plaats</label>
                <div className="p-2 bg-gray-50 border border-gray-200 rounded-md">{formData.plaats}</div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Straat</label>
                <div className="p-2 bg-gray-50 border border-gray-200 rounded-md">{formData.straat}</div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Huisnummer</label>
                <div className="p-2 bg-gray-50 border border-gray-200 rounded-md">{formData.huisnummer}</div>
              </div>
            </div>
          </div>
        )

      case 1: // Service step
        const serviceOptions = [
          { id: "new-garden", label: "Nieuwe tuin aanleggen" },
          { id: "renovate-garden", label: "Bestaande tuin vernieuwen" },
          { id: "maintain-garden", label: "Bestaande tuin onderhouden" },
          { id: "small-changes", label: "Kleine aanpassingen in bestaande tuin" },
          { id: "other", label: "Anders, namelijk" },
        ]
        const selectedService = serviceOptions.find((service) => service.id === formData.service)

        return (
          <div className="space-y-4">
            <h2 className="text-lg font-medium mb-2">Wat moet er gebeuren?</h2>
            <div className="p-2 bg-gray-50 border border-gray-200 rounded-md">
              {selectedService?.label || formData.service}
            </div>
          </div>
        )

      case 2: // Design step
        return (
          <div className="space-y-4">
            <h2 className="text-lg font-medium mb-2">Heeft u ontwerpktekeningen?</h2>
            <div className="p-2 bg-gray-50 border border-gray-200 rounded-md">
              {formData.hasDesign === "yes" ? "Ja, ik heb ontwerpktekeningen" : "Nee, ik heb geen ontwerpktekeningen"}
            </div>
          </div>
        )

      case 3: // Garden size step
        return (
          <div className="space-y-4">
            <h2 className="text-lg font-medium mb-2">Wat is de oppervlakte van de tuin in m2? (schatting)</h2>
            <div className="p-2 bg-gray-50 border border-gray-200 rounded-md">{formData.gardenSize} m²</div>
          </div>
        )

      case 4: // Garden location step
        const locationOptions = [
          { id: "voortuin", label: "Voortuin" },
          { id: "achtertuin", label: "Achtertuin" },
          { id: "zijtuin", label: "Zijtuin" },
          { id: "other", label: "Anders, namelijk" },
        ]
        const selectedLocation = locationOptions.find((location) => location.id === formData.gardenLocation)

        return (
          <div className="space-y-4">
            <h2 className="text-lg font-medium mb-2">Wat is de locatie van de tuin?</h2>
            <div className="p-2 bg-gray-50 border border-gray-200 rounded-md">
              {selectedLocation?.label || formData.gardenLocation}
            </div>
          </div>
        )

      case 5: // Contact step
        return (
          <div className="space-y-4">
            <h2 className="text-lg font-medium mb-2">Contactgegevens</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Naam</label>
                <div className="p-2 bg-gray-50 border border-gray-200 rounded-md">{formData.name}</div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <div className="p-2 bg-gray-50 border border-gray-200 rounded-md">{formData.email}</div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Telefoonnummer</label>
                <div className="p-2 bg-gray-50 border border-gray-200 rounded-md">{formData.phone}</div>
              </div>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="border-l-4 border-green-500 bg-white p-4 rounded-md shadow-sm"
    >
      <div className="flex items-center mb-3">
        <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center mr-3">
          <Check className="w-4 h-4 text-white" />
        </div>
        <h3 className="font-medium text-green-600">Voltooid</h3>
      </div>

      {renderCompletedStepContent()}
    </motion.div>
  )
}
