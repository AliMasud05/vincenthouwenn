"use client"

import { X } from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"

interface OrderTrackingProps {
  isOpen: boolean
  onClose: () => void
  order: {
    status: "Delivered" | "Shipping" | "Processing" | "Confirmed" | string;
    items: string;
    value: string;
    id: string;
    customer: {
      name: string;
    };
  }
}

export default function OrderTrackingDialog({ isOpen, onClose, order }: OrderTrackingProps) {
  const [animationState, setAnimationState] = useState("closed")

  useEffect(() => {
    if (isOpen) {
      setAnimationState("opening")
      const timer = setTimeout(() => {
        setAnimationState("open")
      }, 10)
      return () => clearTimeout(timer)
    } else {
      setAnimationState("closing")
      const timer = setTimeout(() => {
        setAnimationState("closed")
      }, 300)
      return () => clearTimeout(timer)
    }
  }, [isOpen])

  if (animationState === "closed" && !isOpen) return null

  // Determine the current status step (0-3)
  const getStatusStep = () => {
    if (!order) return 0

    switch (order.status) {
      case "Delivered":
        return 3
      case "Shipping":
        return 2
      case "Processing":
      case "Confirmed":
        return 1
      default:
        return 0
    }
  }

  const currentStep = getStatusStep()

  return (
    <div
      className={`fixed inset-0 bg-black flex items-center justify-center z-50 p-4 transition-all duration-300 ease-in-out ${
        animationState === "open"
          ? "bg-opacity-50"
          : animationState === "opening"
            ? "bg-opacity-0"
            : animationState === "closing"
              ? "bg-opacity-0"
              : "bg-opacity-0"
      }`}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div
        className={`bg-white rounded-lg w-full max-w-3xl max-h-[90vh] overflow-y-auto transition-all duration-300 ease-in-out ${
          animationState === "open"
            ? "opacity-100 scale-100 translate-y-0"
            : animationState === "opening"
              ? "opacity-0 scale-95 translate-y-4"
              : animationState === "closing"
                ? "opacity-0 scale-95 translate-y-4"
                : "opacity-0 scale-95 translate-y-4"
        }`}
      >
        <div className="p-6">
          <div className="flex justify-between items-start mb-6">
            <div className="flex-1">
              <h2 className="text-xl font-bold">{order?.items?.split(" ")[0] || 4} Product Purchased</h2>
              <p className="text-lg font-medium mt-1">Total : {order?.value || "$120.00"}</p>
            </div>

            <div className="flex flex-col items-end">
              <button onClick={onClose} className="text-gray-500 hover:text-gray-700 transition-colors">
                <X className="h-6 w-6" />
              </button>
              <p className="text-sm text-gray-500 mt-2">Order ID # {order?.id || "#83947218"}</p>
              <p className="text-sm text-gray-500">Shipping to {order?.customer?.name || "Daniel Rasmussen"}</p>
            </div>
          </div>

          <div className="flex gap-8 mb-6">
            {/* Tracking Timeline */}
            <div className="w-64 flex-shrink-0">
              <div className="relative">
                {/* Vertical Line */}
                <div className="absolute left-4 top-4 bottom-4 w-0.5 bg-gray-200"></div>

                {/* Order Placed */}
                <div className="flex items-start mb-12 relative">
                  <div
                    className={`h-8 w-8 rounded-full flex items-center justify-center z-10 ${
                      currentStep >= 0 ? "bg-red-500 text-white" : "bg-gray-200"
                    }`}
                  >
                    <div className="h-3 w-3 rounded-full bg-white"></div>
                  </div>
                  <div className="ml-4">
                    <p className="font-medium">Order Placed</p>
                    <p className="text-sm text-gray-500">Nov 14</p>
                  </div>
                </div>

                {/* Processing */}
                <div className="flex items-start mb-12 relative">
                  <div
                    className={`h-8 w-8 rounded-full flex items-center justify-center z-10 ${
                      currentStep >= 1 ? "bg-red-500 text-white" : "bg-gray-200"
                    }`}
                  >
                    <div className={`h-3 w-3 rounded-full ${currentStep >= 1 ? "bg-white" : "bg-gray-400"}`}></div>
                  </div>
                  <div className="ml-4">
                    <p className="font-medium">Processing</p>
                    <p className="text-sm text-gray-500">Nov 15</p>
                  </div>
                </div>

                {/* Shipped */}
                <div className="flex items-start mb-12 relative">
                  <div
                    className={`h-8 w-8 rounded-full flex items-center justify-center z-10 ${
                      currentStep >= 2 ? "bg-red-500 text-white" : "bg-gray-200"
                    }`}
                  >
                    <div className={`h-3 w-3 rounded-full ${currentStep >= 2 ? "bg-white" : "bg-gray-400"}`}></div>
                  </div>
                  <div className="ml-4">
                    <p className="font-medium">Shipped</p>
                    <p className="text-sm text-gray-500">Est.Nov 15</p>
                  </div>
                </div>

                {/* Delivered */}
                <div className="flex items-start relative">
                  <div
                    className={`h-8 w-8 rounded-full flex items-center justify-center z-10 ${
                      currentStep >= 3 ? "bg-red-500 text-white" : "bg-gray-200"
                    }`}
                  >
                    <div className={`h-3 w-3 rounded-full ${currentStep >= 3 ? "bg-white" : "bg-gray-400"}`}></div>
                  </div>
                  <div className="ml-4">
                    <p className="font-medium">Delivered</p>
                    <p className="text-sm text-gray-500">Est.Nov 16</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Product List */}
            <div className="flex-1">
              {[1, 2, 3, 4].map((item, index) => (
                <div key={index} className="border rounded-lg p-4 mb-4">
                  <div className="flex">
                    <div className="w-16 h-16 bg-blue-100 rounded-md overflow-hidden mr-4 flex-shrink-0">
                      <Image
                        src="/placeholder.svg?height=64&width=64"
                        alt="Product"
                        width={64}
                        height={64}
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium">RandM Tornado Vape 30000</h3>
                      <p className="text-sm text-gray-500">Pineapple Ice</p>
                      <div className="flex items-center mt-2">
                        <span className="font-medium">€34,99 EUR</span>
                        <span className="text-gray-400 line-through ml-2">€34,99 EUR</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

