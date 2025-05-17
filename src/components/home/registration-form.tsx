import { Eye } from "lucide-react"
import rectangle from '@/assets/Rectangle 9.jpg'
import Image from "next/image"

export default function RegistrationForm() {
  return (
    <section className="py-16 px-4">
      <div className=" mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-4">Register Your Company</h2>
       <div className="flex flex-col items-center justify-center">

        <Image src={rectangle} alt="second" width={400} height={100} />
       </div>
        <div className="w-full max-w-md mx-auto h-px bg-gray-200 mb-12"></div>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="company-name" className="block text-sm font-medium text-gray-700">
              Company Name
            </label>
            <input
              id="company-name"
              type="text"
              placeholder="Enter your company name"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="business-type" className="block text-sm font-medium text-gray-700">
              Business Type
            </label>
            <div className="relative">
              <select
                id="business-type"
                className="w-full px-3 py-2 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-green-500"
                defaultValue=""
              >
                <option value="" disabled>
                  Select Business Type
                </option>
                <option value="retail">Retail</option>
                <option value="service">Service</option>
                <option value="manufacturing">Manufacturing</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <input
              id="phone"
              type="tel"
              placeholder="Enter your phone number"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 flex items-center px-3"
                aria-label="Show password"
              >
                <Eye className="h-5 w-5 text-gray-400" />
              </button>
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <div className="relative">
              <input
                id="confirm-password"
                type="password"
                placeholder="Enter your password"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 flex items-center px-3"
                aria-label="Show password"
              >
                <Eye className="h-5 w-5 text-gray-400" />
              </button>
            </div>
          </div>

          <div className="md:col-span-2 mt-4">
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-3 rounded-md font-medium hover:bg-green-700 transition-colors"
            >
              Register Now
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
