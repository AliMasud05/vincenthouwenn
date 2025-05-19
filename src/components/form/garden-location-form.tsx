"use client"

interface GardenLocationFormData {
  gardenLocation: string;
}

interface GardenLocationFormProps {
  formData: GardenLocationFormData
  updateFormData: (data: Partial<GardenLocationFormData>) => void
  onNext: () => void
  onPrevious: () => void
}

export function GardenLocationForm({ formData, updateFormData, onNext, onPrevious }: GardenLocationFormProps) {
  const locations = [
    { id: "voortuin", label: "Voortuin" },
    { id: "achtertuin", label: "Achtertuin" },
    { id: "zijtuin", label: "Zijtuin" },
    { id: "other", label: "Anders, namelijk" },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-medium mb-4">Wat is de locatie van de tuin?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {locations.map((location) => (
            <label
              key={location.id}
              className="flex items-center p-3 border rounded-md cursor-pointer hover:bg-gray-50 transition-colors"
            >
              <input
                type="radio"
                name="gardenLocation"
                value={location.id}
                checked={formData.gardenLocation === location.id}
                onChange={() => updateFormData({ gardenLocation: location.id })}
                className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300"
              />
              <span className="ml-3">{location.label}</span>
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
