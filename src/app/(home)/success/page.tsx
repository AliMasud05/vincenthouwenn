"use client"

import { useEffect } from "react"
import Link from "next/link"
import { CheckIcon } from "lucide-react"

export default function SuccessPage() {
  useEffect(() => {
    // Try to get form data from localStorage if it exists
    const savedFormData = localStorage.getItem("formData")
    if (savedFormData) {
      console.log("Form data from localStorage:", JSON.parse(savedFormData))
    }
  }, [])

  return (
    <div className="max-w-3xl mx-auto p-4 md:p-6">
    

      <div className="mt-12 bg-white p-8 rounded-lg shadow-sm text-center">
        <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckIcon className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-xl font-bold text-gray-800 mb-4">
          Dank u wel voor uw aanvraag! Wij gaan direct voor u aan de slag en nemen zo snel mogelijk contact met u op.
        </h1>
        <Link
          href="/"
          className="inline-flex items-center bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition-colors mt-6"
        >
          Terug naar home
        </Link>
      </div>
    </div>
  )
}
