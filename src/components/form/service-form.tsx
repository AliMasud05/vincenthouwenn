"use client"

interface ServiceFormData {
  service: string;
  customService?: string;
}

interface ServiceFormProps {
  formData: ServiceFormData
  updateFormData: (data: Partial<ServiceFormData>) => void
  onNext: () => void
  onPrevious: () => void
}

export function ServiceForm({ formData, updateFormData, onNext, onPrevious }: ServiceFormProps) {
  const services = [
    { id: "new-garden", label: "Nieuwe tuin aanleggen" },
    { id: "renovate-garden", label: "Bestaande tuin vernieuwen" },
    { id: "maintain-garden", label: "Bestaande tuin onderhouden" },
    { id: "small-changes", label: "Kleine aanpassingen in bestaande tuin" },
    { id: "other", label: "Anders, namelijk" },
  ]

  const handleServiceChange = (serviceId: string) => {
    if (serviceId === "other") {
      updateFormData({ service: serviceId, customService: "" });
    } else {
      updateFormData({ service: serviceId, customService: undefined });
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-medium mb-4">Wat moet er gebeuren?</h2>
        <div className="space-y-3 grid grid-cols-1 md:grid-cols-2 gap-4">
          {services.map((service) => (
            <label
              key={service.id}
              className="flex items-center p-3 border rounded-md cursor-pointer hover:bg-gray-50 transition-colors"
            >
              <input
                type="radio"
                name="service"
                value={service.id}
                checked={formData.service === service.id}
                onChange={() => handleServiceChange(service.id)}
                className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300"
              />
              <span className="ml-3">{service.label}</span>
            </label>
          ))}
        </div>

        {formData.service === "other" && (
          <div className="mt-4">
            <label htmlFor="customService" className="block text-sm font-medium text-gray-700 mb-1">
              Beschrijf wat er moet gebeuren
            </label>
            <input
              type="text"
              id="customService"
              value={formData.customService || ""}
              onChange={(e) => updateFormData({ customService: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
              placeholder="Voer uw specifieke verzoek in"
            />
          </div>
        )}
      </div>

      <div className="flex justify-between">
        <button
          onClick={onPrevious}
          className="inline-flex items-center border border-gray-300 text-gray-700 px-6 py-2 rounded-md hover:bg-gray-50 transition-colors"
        >
          <span className="mr-2">←</span> Vorige
        </button>
        <button
          onClick={onNext}
          disabled={formData.service === "other" && !formData.customService}
          className={`inline-flex items-center px-6 py-2 rounded-md transition-colors ${
            formData.service === "other" && !formData.customService
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-green-600 text-white hover:bg-green-700"
          }`}
        >
          Volgende <span className="ml-2">→</span>
        </button>
      </div>
    </div>
  )
}