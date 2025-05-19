"use client"

interface GardenSizeFormData {
  gardenSize: string
}

interface GardenSizeFormProps {
  formData: GardenSizeFormData
  updateFormData: (data: Partial<GardenSizeFormData>) => void
  onNext: () => void
  onPrevious: () => void
}

export function GardenSizeForm({ formData, updateFormData, onNext, onPrevious }: GardenSizeFormProps) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-medium mb-4">Wat is de oppervlakte van de tuin in m2? (schatting)</h2>
        <input
          type="text"
          value={formData.gardenSize}
          onChange={(e) => updateFormData({ gardenSize: e.target.value })}
          placeholder="ongeveer 40m2"
          className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
        />
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
