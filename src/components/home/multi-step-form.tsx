"use client"

import type React from "react"
import { useState } from "react"
import { ArrowLeft, ArrowRight } from "lucide-react"
import {toast} from 'sonner'

// Define the form steps
const STEPS = {
  ADDRESS: 0,
  SERVICES: 1,
  DRAWINGS: 2,
  GARDEN_SIZE: 3,
  GARDEN_LOCATION: 4,
  CONTACT: 5,
}

export default function MultiStepForm() {
  const [currentStep, setCurrentStep] = useState(STEPS.ADDRESS)
  const [isAnimating, setIsAnimating] = useState(false)
  const [formData, setFormData] = useState({
    // Step 1: Address
    postcode: "",
    plaats: "",
    straat: "",
    huisnummer: "",

    // Step 2: Services
    service: "",

    // Step 3: Drawings
    hasDrawings: "",

    // Step 4: Garden Size
    gardenSize: "",

    // Step 5: Garden Location
    gardenLocation: "",

    // Step 6: Contact
    naam: "",
    email: "",
    telefoon: "",
    marketing: false,
  })

  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    })
  }

  // Handle radio button changes
  const handleRadioChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  // Validate current step before proceeding
  const validateStep = () => {
    switch (currentStep) {
      case STEPS.ADDRESS:
        if (!formData.postcode || !formData.plaats || !formData.straat || !formData.huisnummer) {
          toast.error("Vul alle adresgegevens in")
          return false
        }
        return true
      case STEPS.SERVICES:
        if (!formData.service) {
          toast.error("Selecteer een service")
          return false
        }
        return true
      case STEPS.DRAWINGS:
        if (!formData.hasDrawings) {
          toast.error("Selecteer of u ontwerptekeningen heeft")
          return false
        }
        return true
      case STEPS.GARDEN_SIZE:
        if (!formData.gardenSize) {
          toast.error("Vul de oppervlakte van de tuin in")
          return false
        }
        return true
      case STEPS.GARDEN_LOCATION:
        if (!formData.gardenLocation) {
          toast.error("Selecteer de locatie van de tuin")
          return false
        }
        return true
      case STEPS.CONTACT:
        if (!formData.naam || !formData.email || !formData.telefoon) {
          toast.error("Vul alle contactgegevens in")
          return false
        }
        if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
          toast.error("Vul een geldig emailadres in")
          return false
        }
        return true
      default:
        return true
    }
  }

  // Navigate to next step
  const handleNext = () => {
    if (!validateStep()) return
    
    console.log("Current form data:", formData)
    setIsAnimating(true)
    setTimeout(() => {
      setCurrentStep((prev) => prev + 1)
      setIsAnimating(false)
    }, 300)
  }

  // Navigate to previous step
  const handleBack = () => {
    console.log("Current form data:", formData)
    setIsAnimating(true)
    setTimeout(() => {
      setCurrentStep((prev) => prev - 1)
      setIsAnimating(false)
    }, 300)
  }

  // Handle form submission
  const handleSubmit = () => {
    if (!validateStep()) return
    
    console.log("Form submitted with data:", formData)
    toast.success("Formulier succesvol ingediend!")
    // Here you would typically send the data to your backend
    // Example: 
    // fetch('/api/submit-form', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(formData),
    // })
    // .then(response => response.json())
    // .then(data => {
    //   toast.success("Form submitted successfully!");
    // })
    // .catch(error => {
    //   toast.error("Error submitting form");
    // });
  }

  return (
    <div className="w-full">
      <div className="mb-6">
        <h1 className="text-xl font-medium text-gray-800 mb-4">Aanvraag formulier landing pagina:</h1>

        {/* Step 1: Address */}
        {currentStep === STEPS.ADDRESS && (
          <div
            className={`space-y-6 transition-all duration-300 ${isAnimating ? "opacity-0 -translate-x-4" : "opacity-100 translate-x-0"}`}
          >
            <h2 className="text-lg font-medium">1. Waar woont u?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="postcode" className="block text-sm text-gray-600">
                  Postcode <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="postcode"
                  name="postcode"
                  value={formData.postcode}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="plaats" className="block text-sm text-gray-600">
                  Plaats <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="plaats"
                  name="plaats"
                  value={formData.plaats}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="straat" className="block text-sm text-gray-600">
                  Straat <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="straat"
                  name="straat"
                  value={formData.straat}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="huisnummer" className="block text-sm text-gray-600">
                  Huisnummer <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="huisnummer"
                  name="huisnummer"
                  value={formData.huisnummer}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
            </div>
            <div className="flex justify-start mt-6">
              <button
                onClick={handleNext}
                className="flex items-center px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors"
              >
                Volgende <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Services */}
        {currentStep === STEPS.SERVICES && (
          <div
            className={`space-y-6 transition-all duration-300 ${isAnimating ? "opacity-0 -translate-x-4" : "opacity-100 translate-x-0"}`}
          >
            <h2 className="text-lg font-medium">2. Wat moet er gebeuren? <span className="text-red-500">*</span></h2>
            <div className="space-y-3">
              <div
                className={`flex items-center p-3 border rounded cursor-pointer ${
                  formData.service === "nieuwe-tuin" ? "border-green-500 bg-green-50" : "border-gray-300"
                }`}
                onClick={() => handleRadioChange("service", "nieuwe-tuin")}
              >
                <input
                  type="radio"
                  id="nieuwe-tuin"
                  name="service"
                  checked={formData.service === "nieuwe-tuin"}
                  onChange={() => {}}
                  className="h-4 w-4 text-green-600 focus:ring-green-500"
                  required
                />
                <label htmlFor="nieuwe-tuin" className="ml-3 block text-sm font-medium text-gray-700 cursor-pointer">
                  Nieuwe tuin aanleggen
                </label>
              </div>
              <div
                className={`flex items-center p-3 border rounded cursor-pointer ${
                  formData.service === "bestaande-tuin" ? "border-green-500 bg-green-50" : "border-gray-300"
                }`}
                onClick={() => handleRadioChange("service", "bestaande-tuin")}
              >
                <input
                  type="radio"
                  id="bestaande-tuin"
                  name="service"
                  checked={formData.service === "bestaande-tuin"}
                  onChange={() => {}}
                  className="h-4 w-4 text-green-600 focus:ring-green-500"
                />
                <label htmlFor="bestaande-tuin" className="ml-3 block text-sm font-medium text-gray-700 cursor-pointer">
                  Bestaande tuin vervangen
                </label>
              </div>
              <div
                className={`flex items-center p-3 border rounded cursor-pointer ${
                  formData.service === "onderhouden" ? "border-green-500 bg-green-50" : "border-gray-300"
                }`}
                onClick={() => handleRadioChange("service", "onderhouden")}
              >
                <input
                  type="radio"
                  id="onderhouden"
                  name="service"
                  checked={formData.service === "onderhouden"}
                  onChange={() => {}}
                  className="h-4 w-4 text-green-600 focus:ring-green-500"
                />
                <label htmlFor="onderhouden" className="ml-3 block text-sm font-medium text-gray-700 cursor-pointer">
                  Bestaande tuin onderhouden
                </label>
              </div>
              <div
                className={`flex items-center p-3 border rounded cursor-pointer ${
                  formData.service === "kleine-aanpassingen" ? "border-green-500 bg-green-50" : "border-gray-300"
                }`}
                onClick={() => handleRadioChange("service", "kleine-aanpassingen")}
              >
                <input
                  type="radio"
                  id="kleine-aanpassingen"
                  name="service"
                  checked={formData.service === "kleine-aanpassingen"}
                  onChange={() => {}}
                  className="h-4 w-4 text-green-600 focus:ring-green-500"
                />
                <label
                  htmlFor="kleine-aanpassingen"
                  className="ml-3 block text-sm font-medium text-gray-700 cursor-pointer"
                >
                  Kleine aanpassingen in bestaande tuin
                </label>
              </div>
              <div
                className={`flex items-center p-3 border rounded cursor-pointer ${
                  formData.service === "anders" ? "border-green-500 bg-green-50" : "border-gray-300"
                }`}
                onClick={() => handleRadioChange("service", "anders")}
              >
                <input
                  type="radio"
                  id="anders"
                  name="service"
                  checked={formData.service === "anders"}
                  onChange={() => {}}
                  className="h-4 w-4 text-green-600 focus:ring-green-500"
                />
                <label htmlFor="anders" className="ml-3 block text-sm font-medium text-gray-700 cursor-pointer">
                  Anders, namelijk
                </label>
              </div>
            </div>
            <div className="flex justify-between mt-6">
              <button
                onClick={handleBack}
                className="flex items-center px-4 py-2 border border-gray-300 rounded text-gray-700 hover:bg-gray-50 transition-colors"
              >
                <ArrowLeft className="mr-2 h-4 w-4" /> Terug
              </button>
              <button
                onClick={handleNext}
                className="flex items-center px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors"
              >
                Volgende <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Drawings */}
        {currentStep === STEPS.DRAWINGS && (
          <div
            className={`space-y-6 transition-all duration-300 ${isAnimating ? "opacity-0 -translate-x-4" : "opacity-100 translate-x-0"}`}
          >
            <h2 className="text-lg font-medium">3. Heeft u ontwerptekeningen? <span className="text-red-500">*</span></h2>
            <div className="space-y-3">
              <div
                className={`flex items-center p-3 border rounded cursor-pointer ${
                  formData.hasDrawings === "ja" ? "border-green-500 bg-green-50" : "border-gray-300"
                }`}
                onClick={() => handleRadioChange("hasDrawings", "ja")}
              >
                <input
                  type="radio"
                  id="has-drawings-yes"
                  name="hasDrawings"
                  checked={formData.hasDrawings === "ja"}
                  onChange={() => {}}
                  className="h-4 w-4 text-green-600 focus:ring-green-500"
                  required
                />
                <label
                  htmlFor="has-drawings-yes"
                  className="ml-3 block text-sm font-medium text-gray-700 cursor-pointer"
                >
                  Ja, ik heb ontwerptekeningen
                </label>
              </div>
              <div
                className={`flex items-center p-3 border rounded cursor-pointer ${
                  formData.hasDrawings === "nee" ? "border-green-500 bg-green-50" : "border-gray-300"
                }`}
                onClick={() => handleRadioChange("hasDrawings", "nee")}
              >
                <input
                  type="radio"
                  id="has-drawings-no"
                  name="hasDrawings"
                  checked={formData.hasDrawings === "nee"}
                  onChange={() => {}}
                  className="h-4 w-4 text-green-600 focus:ring-green-500"
                />
                <label
                  htmlFor="has-drawings-no"
                  className="ml-3 block text-sm font-medium text-gray-700 cursor-pointer"
                >
                  Nee, ik heb geen ontwerptekeningen
                </label>
              </div>
            </div>
            <div className="flex justify-between mt-6">
              <button
                onClick={handleBack}
                className="flex items-center px-4 py-2 border border-gray-300 rounded text-gray-700 hover:bg-gray-50 transition-colors"
              >
                <ArrowLeft className="mr-2 h-4 w-4" /> Terug
              </button>
              <button
                onClick={handleNext}
                className="flex items-center px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors"
              >
                Volgende <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>
        )}

        {/* Step 4: Garden Size */}
        {currentStep === STEPS.GARDEN_SIZE && (
          <div
            className={`space-y-6 transition-all duration-300 ${isAnimating ? "opacity-0 -translate-x-4" : "opacity-100 translate-x-0"}`}
          >
            <h2 className="text-lg font-medium">4. Wat is de oppervlakte van de tuin in m2? <span className="text-red-500">*</span></h2>
            <div className="space-y-2">
              <input
                type="text"
                id="gardenSize"
                name="gardenSize"
                placeholder="bijv. 40"
                value={formData.gardenSize}
                onChange={handleChange}
                required
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div className="flex justify-between mt-6">
              <button
                onClick={handleBack}
                className="flex items-center px-4 py-2 border border-gray-300 rounded text-gray-700 hover:bg-gray-50 transition-colors"
              >
                <ArrowLeft className="mr-2 h-4 w-4" /> Terug
              </button>
              <button
                onClick={handleNext}
                className="flex items-center px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors"
              >
                Volgende <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>
        )}

        {/* Step 5: Garden Location */}
        {currentStep === STEPS.GARDEN_LOCATION && (
          <div
            className={`space-y-6 transition-all duration-300 ${isAnimating ? "opacity-0 -translate-x-4" : "opacity-100 translate-x-0"}`}
          >
            <h2 className="text-lg font-medium">5. Waar bevindt de tuin zich? <span className="text-red-500">*</span></h2>
            <div className="space-y-3">
              <div
                className={`flex items-center p-3 border rounded cursor-pointer ${
                  formData.gardenLocation === "voortuin" ? "border-green-500 bg-green-50" : "border-gray-300"
                }`}
                onClick={() => handleRadioChange("gardenLocation", "voortuin")}
              >
                <input
                  type="radio"
                  id="voortuin"
                  name="gardenLocation"
                  checked={formData.gardenLocation === "voortuin"}
                  onChange={() => {}}
                  className="h-4 w-4 text-green-600 focus:ring-green-500"
                  required
                />
                <label htmlFor="voortuin" className="ml-3 block text-sm font-medium text-gray-700 cursor-pointer">
                  Voortuin
                </label>
              </div>
              <div
                className={`flex items-center p-3 border rounded cursor-pointer ${
                  formData.gardenLocation === "achtertuin" ? "border-green-500 bg-green-50" : "border-gray-300"
                }`}
                onClick={() => handleRadioChange("gardenLocation", "achtertuin")}
              >
                <input
                  type="radio"
                  id="achtertuin"
                  name="gardenLocation"
                  checked={formData.gardenLocation === "achtertuin"}
                  onChange={() => {}}
                  className="h-4 w-4 text-green-600 focus:ring-green-500"
                />
                <label htmlFor="achtertuin" className="ml-3 block text-sm font-medium text-gray-700 cursor-pointer">
                  Achtertuin
                </label>
              </div>
              <div
                className={`flex items-center p-3 border rounded cursor-pointer ${
                  formData.gardenLocation === "zijtuin" ? "border-green-500 bg-green-50" : "border-gray-300"
                }`}
                onClick={() => handleRadioChange("gardenLocation", "zijtuin")}
              >
                <input
                  type="radio"
                  id="zijtuin"
                  name="gardenLocation"
                  checked={formData.gardenLocation === "zijtuin"}
                  onChange={() => {}}
                  className="h-4 w-4 text-green-600 focus:ring-green-500"
                />
                <label htmlFor="zijtuin" className="ml-3 block text-sm font-medium text-gray-700 cursor-pointer">
                  Zijtuin
                </label>
              </div>
              <div
                className={`flex items-center p-3 border rounded cursor-pointer ${
                  formData.gardenLocation === "anders" ? "border-green-500 bg-green-50" : "border-gray-300"
                }`}
                onClick={() => handleRadioChange("gardenLocation", "anders")}
              >
                <input
                  type="radio"
                  id="anders-location"
                  name="gardenLocation"
                  checked={formData.gardenLocation === "anders"}
                  onChange={() => {}}
                  className="h-4 w-4 text-green-600 focus:ring-green-500"
                />
                <label
                  htmlFor="anders-location"
                  className="ml-3 block text-sm font-medium text-gray-700 cursor-pointer"
                >
                  Anders, namelijk
                </label>
              </div>
            </div>
            <div className="flex justify-between mt-6">
              <button
                onClick={handleBack}
                className="flex items-center px-4 py-2 border border-gray-300 rounded text-gray-700 hover:bg-gray-50 transition-colors"
              >
                <ArrowLeft className="mr-2 h-4 w-4" /> Terug
              </button>
              <button
                onClick={handleNext}
                className="flex items-center px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors"
              >
                Volgende <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>
        )}

        {/* Step 6: Contact */}
        {currentStep === STEPS.CONTACT && (
          <div
            className={`space-y-6 transition-all duration-300 ${isAnimating ? "opacity-0 -translate-x-4" : "opacity-100 translate-x-0"}`}
          >
            <h2 className="text-lg font-medium">6. Contactgegevens</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="naam" className="block text-sm text-gray-600">
                  Naam <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="naam"
                  name="naam"
                  value={formData.naam}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm text-gray-600">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="telefoon" className="block text-sm text-gray-600">
                Telefoonnummer <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="telefoon"
                name="telefoon"
                value={formData.telefoon}
                onChange={handleChange}
                required
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div className="flex items-start mt-4">
              <div className="flex items-center h-5">
                <input
                  id="marketing"
                  name="marketing"
                  type="checkbox"
                  checked={formData.marketing}
                  onChange={handleChange}
                  className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="marketing" className="text-gray-600">
                  Ik wil graag marketinginformatie ontvangen over de diensten van Werkspot per e-mail, sms en/of telefoon en begrijp dat ik me op elk moment kan uitschrijven.
                </label>
              </div>
            </div>
            <div className="flex justify-between mt-6">
              <button
                onClick={handleBack}
                className="flex items-center px-4 py-2 border border-gray-300 rounded text-gray-700 hover:bg-gray-50 transition-colors"
              >
                <ArrowLeft className="mr-2 h-4 w-4" /> Terug
              </button>
              <button
                onClick={handleSubmit}
                className="flex items-center px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors"
              >
                Verzenden
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}