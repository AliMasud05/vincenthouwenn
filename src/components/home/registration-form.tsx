"use client"
import { toast } from 'sonner';
import rectangle from '@/assets/Rectangle 9.jpg';
import Image from "next/image";
import { useState } from "react";

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Log form data to console
    console.log('Form submitted:', formData);
    
    // Show success toast
    toast.success('Registratie compleet!', {
      description: 'Uw bedrijf is geregistreerd',
      duration: 5000,
    });

    // Reset form
    setFormData({
      companyName: '',
      contactPerson: '',
      email: '',
      phone: ''
    });
  };

  return (
    <section className="py-16 px-4">
      <div className="mx-auto">
        <h2 className="text-2xl md:text-4xl text-[#222222] text-center mb-4">Registreer jouw bedrijf</h2>
        <div className="flex flex-col items-center justify-center">
          <Image src={rectangle} alt="second" width={400} height={100} />
        </div>
        <div className="w-full max-w-md mx-auto h-px bg-gray-200 mb-12"></div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="company-name" className="block text-lg font-medium text-[#333333]/60">
              Bedrijfsnaam
            </label>
            <input
              id="company-name"
              name="companyName"
              type="text"
              value={formData.companyName}
              onChange={handleChange}
              placeholder="Vul hier de bedrijfsnaam in"
              className="w-full px-3 py-4 border border-[#333333]/40 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="contact-person" className="block text-lg font-medium text-[#333333]/60">
              Contactpersoon
            </label>
            <input
              id="contact-person"
              name="contactPerson"
              type="text"
              value={formData.contactPerson}
              onChange={handleChange}
              placeholder="Vul hier de naam van de contactpersoon in"
              className="w-full px-3 py-4 border border-[#333333]/40 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="block text-lg font-medium text-[#333333]/60">
              E-mailadres
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Vul hier je email in"
              className="w-full px-3 py-4 border border-[#333333]/40 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="phone" className="block text-lg font-medium text-[#333333]/60">
              Telefoonnummer
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Vul hier je telefoonnummer in"
              className="w-full px-3 py-4 border border-[#333333]/40 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          <div className="md:col-span-2 mt-4 w-full md:w-[300px] mx-auto">
            <button
              type="submit"
              className="w-full bg-[#2E7D32] text-white py-3 rounded-md font-medium hover:bg-green-700 transition-colors cursor-pointer text-lg"
            >
              Registreren
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}