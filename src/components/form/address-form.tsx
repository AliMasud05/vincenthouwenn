"use client"

import type React from "react"

interface AddressFormData {
  postcode: string
  plaats: string
  straat: string
  huisnummer: string
}

interface AddressFormProps {
  formData: AddressFormData
  updateFormData: (data: Partial<AddressFormData>) => void
  onNext: () => void
}

export function AddressForm({ formData, updateFormData, onNext }: AddressFormProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onNext()
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 w-full">
      <div>
        <h2 className="text-lg font-medium mb-4">Waar woont u?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="postcode" className="block text-sm font-medium text-gray-700 mb-1">
              Postcode <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="postcode"
              value={formData.postcode}
              onChange={(e) => updateFormData({ postcode: e.target.value })}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
              required
            />
          </div>
          <div>
            <label htmlFor="plaats" className="block text-sm font-medium text-gray-700 mb-1">
              Plaats <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="plaats"
              value={formData.plaats}
              onChange={(e) => updateFormData({ plaats: e.target.value })}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
              required
            />
          </div>
          <div>
            <label htmlFor="straat" className="block text-sm font-medium text-gray-700 mb-1">
              Straat <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="straat"
              value={formData.straat}
              onChange={(e) => updateFormData({ straat: e.target.value })}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
              required
            />
          </div>
          <div>
            <label htmlFor="huisnummer" className="block text-sm font-medium text-gray-700 mb-1">
              Huisnummer <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="huisnummer"
              value={formData.huisnummer}
              onChange={(e) => updateFormData({ huisnummer: e.target.value })}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
              required
            />
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <button
          type="submit"
          className="inline-flex items-center bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition-colors"
        >
          Volgende <span className="ml-2">→</span>
        </button>
      </div>
    </form>
  )
}
