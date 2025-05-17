"use client"

import type React from "react"

import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Camera } from "lucide-react"
import Image from "next/image"
import { Header } from "@/components/dashboard/header"

export default function NewServicePage() {
  const [imagePreview, setImagePreview] = useState<string | null>(null)

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setImagePreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div>
      <Header title="Add New Service" subtitle=" " />
      <div className="p-6">
        <div className="max-w-5xl mx-auto">
          <div className="mb-6">
            <div className="border-b">
              <div className="flex items-center gap-2 text-sky-500 border-b-2 border-sky-500 w-max pb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                  <polyline points="14 2 14 8 20 8" />
                  <path d="M16 13H8" />
                  <path d="M16 17H8" />
                  <path d="M10 9H8" />
                </svg>
                <span className="font-medium">Service Information</span>
              </div>
            </div>
          </div>

          <div className="grid gap-6">
            <div className="flex ">
              <label
                htmlFor="service-image"
                className="w-24 h-24 border rounded-md flex flex-col items-center justify-center cursor-pointer hover:bg-muted/50 transition-colors"
              >
                {imagePreview ? (
                  <Image
                    src="https://avatar.iran.liara.run/public"
                    alt="Service preview"
                    className="w-full h-full object-cover rounded-md"
                    width={0}
                    height={0}
                  />
                ) : (
                  <Camera className="h-6 w-6 text-muted-foreground" />
                )}
                <input
                  type="file"
                  id="service-image"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageUpload}
                />
              </label>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Input id="service-name" placeholder="Service Name" className="bg-muted/40" />
              </div>
              <div>
                <Input id="service-id" placeholder="Service Id" className="bg-muted/40" />
              </div>
              <div>
                <Input id="service-provider-name" placeholder="Service Provider Name" className="bg-muted/40" />
              </div>
              <div>
                <Select>
                  <SelectTrigger className="bg-muted/40">
                    <SelectValue placeholder="Service Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="home-cleaning">Home Cleaning</SelectItem>
                    <SelectItem value="lawn-care">Lawn Care</SelectItem>
                    <SelectItem value="office-cleaning">Office Cleaning</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <Textarea placeholder="Service Description" className="min-h-[100px] bg-muted/40" />
            </div>

            <div>
              <Input id="service-location" placeholder="Service Location" className="bg-muted/40" />
            </div>

            <div>
              <Input id="address" placeholder="Address" className="bg-muted/40" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  {/* City Select */}
  <div className="w-full">
  <Select>
      <SelectTrigger className="bg-muted/40 w-full md:w-72"> {/* Increase width on medium screens and up */}
        <SelectValue placeholder="City" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="new-york">New York</SelectItem>
        <SelectItem value="los-angeles">Los Angeles</SelectItem>
        <SelectItem value="chicago">Chicago</SelectItem>
        <SelectItem value="houston">Houston</SelectItem>
        <SelectItem value="phoenix">Phoenix</SelectItem>
      </SelectContent>
    </Select>
  </div>

  {/* State Select */}
  <div className="w-full">
    <Select>
      <SelectTrigger className="bg-muted/40  w-full md:w-72">
        <SelectValue placeholder="State" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="ny">New York</SelectItem>
        <SelectItem value="ca">California</SelectItem>
        <SelectItem value="tx">Texas</SelectItem>
        <SelectItem value="fl">Florida</SelectItem>
        <SelectItem value="il">Illinois</SelectItem>
      </SelectContent>
    </Select>
  </div>

  {/* ZIP Code Input */}
  <div className="w-full">
    <Input
      type="text"
      placeholder="ZIP Code"
      className="bg-muted/40"
    />
  </div>
</div>


            <div className="flex justify-end gap-4 mt-4">
              <Button variant="outline">Cancel</Button>
              <Button className="bg-sky-600 hover:bg-sky-700 text-white px-8">ADD</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
