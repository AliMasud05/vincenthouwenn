"use client"

interface DesignFormData {
  hasDesign: string;
}

interface DesignFormProps {
  formData: DesignFormData
  updateFormData: (data: Partial<DesignFormData>) => void
  onNext: () => void
  onPrevious: () => void
}

export function DesignForm({ formData, updateFormData, onNext, onPrevious }: DesignFormProps) {
  const options = [
    { id: "yes", label: "Ja, ik heb ontwerptekeningen" },
    { id: "no", label: "Nee, ik heb geen ontwerptekeningen" },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-medium mb-4">Heeft u ontwerptekeningen?</h2>
        <div className="space-y-3">
          {options.map((option) => (
            <label
              key={option.id}
              className="flex items-center p-3 border rounded-md cursor-pointer hover:bg-gray-50 transition-colors"
            >
              <input
                type="radio"
                name="hasDesign"
                value={option.id}
                checked={formData.hasDesign === option.id}
                onChange={() => updateFormData({ hasDesign: option.id })}
                className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300"
              />
              <span className="ml-3">{option.label}</span>
            </label>
          ))}
        </div>
      </div>
      <div className="flex justify-between">
        <button
          onClick={onPrevious}
          className="inline-flex items-center border border-gray-300 text-gray-700 px-6 py-2 rounded-md hover:bg-gray-50 transition-colors cursor-pointer"
        >
          <span className="mr-2">←</span> Vorige
        </button>
        <button
          onClick={onNext}
          className="inline-flex items-center bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition-colors cursor-pointer"
        >
          Volgende <span className="ml-2">→</span>
        </button>
      </div>
    </div>
  )
}
