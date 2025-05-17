import search from '@/assets/Search.png'
import Image from "next/image"

export default function ProcessFlow() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-2">That&#39;s how it works</h2>
        <div className="w-full max-w-md mx-auto h-px bg-gray-200 mb-12"></div>

        <div className="flex flex-wrap justify-center">
          {/* First row of steps */}
          <div className="flex flex-wrap justify-center w-full mb-8">
            {[1, 2, 3, 4, 5].map((step) => (
              <div key={step} className="flex flex-col items-center mx-2 md:mx-4 gap-3">
                <div className="relative">
                  <div className="w-26 h-26 bg-green-100 rotate-45 flex items-center justify-center mb-4">
                    <div className="rotate-[-44deg] ml-6">
                      <Image src={search} alt="search" width={30} height={30} />
                      <div className="text-sm text-center text-gray-700 mt-1">Recharge</div>
                    </div>
                  </div>
                  {step < 5 && <div className="absolute top-1/2 left-full w-8 md:w-12 h-px bg-gray-300"></div>}
                </div>
                <div className="mt-2 text-sm">Step {step}</div>
              </div>
            ))}
          </div>

          {/* Second row of steps */}
          <div className="flex justify-center w-full">
            {[6, 7].map((step) => (
              <div key={step} className="flex flex-col items-center mx-2 md:mx-4">
                <div className="relative">
                  <div className="w-26 h-26 bg-green-100 rotate-45 flex items-center justify-center mb-4">
                    <div className="rotate-[-44deg] ml-6">
                      <Image src={search} alt="search" width={30} height={30} />
                      <div className="text-sm text-center text-gray-700 mt-1">Recharge</div>
                    </div>
                  </div>
                  {step < 7 && <div className="absolute top-1/2 left-full w-8 md:w-12 h-px bg-gray-300"></div>}
                </div>
                <div className="mt-2 text-sm">Step {step}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
