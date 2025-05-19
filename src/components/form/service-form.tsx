"use client"

interface ServiceFormData {
  service: string;
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

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-medium mb-4">Wat moet er gebeuren?</h2>
        <div className="space-y-3">
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
                onChange={() => updateFormData({ service: service.id })}
                className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300"
              />
              <span className="ml-3">{service.label}</span>
            </label>
          ))}
        </div>
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
          className="inline-flex items-center bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition-colors"
        >
          Volgende <span className="ml-2">→</span>
        </button>
      </div>
    </div>
  )
}
