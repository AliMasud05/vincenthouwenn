"use client"

import type React from "react"

interface ContactFormData {
  name: string
  email: string
  phone: string
}

interface ContactFormProps {
  formData: ContactFormData
  updateFormData: (data: Partial<ContactFormData>) => void
  onSubmit: () => void
  onPrevious: () => void
}

export function ContactForm({ formData, updateFormData, onSubmit, onPrevious }: ContactFormProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Log all form data when submitting
    console.log("Form submitted with the following data:", formData)

    onSubmit()
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <h2 className="text-lg font-medium mb-4">Contactgegevens</h2>
        <div className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Naam <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) => updateFormData({ name: e.target.value })}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => updateFormData({ email: e.target.value })}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
              required
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Telefoonnummer <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              value={formData.phone}
              onChange={(e) => updateFormData({ phone: e.target.value })}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
              required
            />
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <button
          type="button"
          onClick={onPrevious}
          className="inline-flex items-center border border-gray-300 text-gray-700 px-6 py-2 rounded-md hover:bg-gray-50 transition-colors cursor-pointer"
        >
          <span className="mr-2">←</span> Vorige
        </button>
        <button
          type="submit"
          className="inline-flex items-center bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition-colors cursor-pointer"
        >
          Verstuur <span className="ml-2">→</span>
        </button>
      </div>
    </form>
  )
}
