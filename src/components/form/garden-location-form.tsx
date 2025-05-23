"use client"

interface GardenLocationFormData {
  gardenLocation: string;
  customGardenLocation?: string;
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

  const handleLocationChange = (locationId: string) => {
    updateFormData({ 
      gardenLocation: locationId,
      // Clear custom location when switching away from "other"
      ...(locationId !== "other" && { customGardenLocation: "" })
    });
  }

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
                onChange={() => handleLocationChange(location.id)}
                className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300"
              />
              <span className="ml-3">{location.label}</span>
            </label>
          ))}
        </div>
        
        {formData.gardenLocation === "other" && (
          <div className="mt-4">
            <label htmlFor="customGardenLocation" className="block text-sm font-medium text-gray-700 mb-1">
              Specificeer de locatie
            </label>
            <input
              type="text"
              id="customGardenLocation"
              value={formData.customGardenLocation || ""}
              onChange={(e) => updateFormData({ customGardenLocation: e.target.value })}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
              placeholder="Bijvoorbeeld: Dak, balkon, etc."
            />
          </div>
        )}
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
          disabled={formData.gardenLocation === "other" && !formData.customGardenLocation}
          className={`inline-flex items-center px-6 py-2 rounded-md transition-colors ${
            formData.gardenLocation === "other" && !formData.customGardenLocation
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-green-600 text-white hover:bg-green-700 cursor-pointer"
          }`}
        >
          Volgende <span className="ml-2">→</span>
        </button>
      </div>
    </div>
  )
}