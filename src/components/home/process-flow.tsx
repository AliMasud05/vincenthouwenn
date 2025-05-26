"use client"

import img1 from '@/assets/process/img1.png'
import img3 from '@/assets/process/img3.png'
import img4 from '@/assets/process/img4.png'
import img5 from '@/assets/process/img5.png'
import img6 from '@/assets/exhibition.png'
import img7 from '@/assets/process/img7.png'
import { MoveRight } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

export function ProcessFlow() {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null)

  const steps = [
    // First row (4 steps)
    {
      icon: <Image src={img1} alt="aanvraag indienen" width={70} height={70} className="text-gray-700" />,
      title: "Aanvraag indienen",
      details: "Vul eenvoudig het aanvraagformulier in met jouw wensen voor het tuinproject.",
      row: 1,
    },
    {
      icon: <Image src={img1} alt="bevestiging" width={70} height={70} className="text-gray-700" />,
      title: "Bevestiging",
      details: "Wij bevestigen je aanvraag en nemen contact op voor vragen en advies.",
      row: 1,
    },
    {
      icon: <Image src={img3} alt="hoverenier zoeken" width={70} height={70} className="text-gray-700" />,
      title: "Hovenier zoeken",
      details: "Op basis van jouw wensen selecteren wij de meest geschikte hovenier uit uw regio.",
      row: 1,
    },
    {
      icon: <Image src={img4} alt="match bevestigen" width={70} height={70} className="text-gray-700" />,
      title: "Match bevestigen",
      details: "Je ontvangt een offerte van de geselecteerde hovenier en kunt deze rustig bekijken.",
      row: 1,
    },
    // Second row (3 steps)
    {
      icon: <Image src={img5} alt="aanbetaling" width={70} height={70} className="text-gray-700" />,
      title: "Aanbetaling",
      details: "Als je akkoord gaat, betaal je een aanbetaling om de opdracht te bevestigen.",
      row: 2,
    },
    {
      // icon: <Image src={img6} alt="planning" width={70} height={70} className="text-gray-700" />,
      icon: <Image src={img6} alt="planning" width={70} height={70} className="text-gray-700" />,
      title: "uitvoering",
      details: "De hovenier start met het werk op de afgesproken datum.",
      row: 2,
    },
    {
      icon: <Image src={img7} alt="uitvoering" width={70} height={70} className="text-gray-700" />,
      title: "Oplevering & Eindbetaling ",
      details: "Is het werk afgerond en ben je tevreden? Dan rond je de betaling af en sluiten we het project samen af.",
      row: 2,
    },
  ]

  // Split steps into rows
  const firstRowSteps = steps.filter((step) => step.row === 1)
  const secondRowSteps = steps.filter((step) => step.row === 2)

  // Render a single step with tooltip
  const renderStep = (step: (typeof steps)[0], index: number, rowIndex: number, isLastInRow: boolean) => {
    const stepIndex = rowIndex === 1 ? index : firstRowSteps.length + index

    return (
      <>
        <div
          key={`step-${rowIndex}-${index}`}
          className="flex flex-col items-center relative"
          onMouseEnter={() => setHoveredStep(stepIndex)}
          onMouseLeave={() => setHoveredStep(null)}
          onTouchStart={() => setHoveredStep(hoveredStep === stepIndex ? null : stepIndex)}
        >
          {/* Tooltip */}
          {hoveredStep === stepIndex && (
            <div className="absolute -top-28 left-1/2 transform -translate-x-1/2 bg-white p-3 rounded-lg shadow-lg w-64 z-10 text-sm text-gray-700 transition-all duration-200 ease-in-out">
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rotate-45"></div>
              <p>{step.details}</p>
            </div>
          )}

          <div className="w-36 h-36 bg-gray-200 hover:bg-green-100 transition-colors duration-200 rounded-full flex items-center justify-center mb-3 cursor-pointer">
            {step.icon}
          </div>
          <p className="text-sm text-center font-medium max-w-[120px]">{step.title}</p>
        </div>

        {/* Horizontal arrow (except after the last step in row) */}
        {!isLastInRow && (
          <div key={`arrow-${rowIndex}-${index}`} className="mx-4">
            <MoveRight size={44} color="#d3c0c0" />
          </div>
        )}
      </>
    )
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-10">Hoe werkt het?</h2>
        

        {/* Desktop view with two rows */}
        <div className="hidden md:block relative">
          {/* First row */}
          <div className="flex justify-center items-center mb-32">
            {firstRowSteps.map((step, index) => renderStep(step, index, 1, index === firstRowSteps.length - 1))}
          </div>

          {/* L-shaped connecting line */}
          <div className="absolute" style={{ right: "25%", top: "100px", height: "120px", width: "200px" }}>
          </div>

          {/* Second row */}
          <div className="flex justify-center items-center">
            {secondRowSteps.map((step, index) => renderStep(step, index, 2, index === secondRowSteps.length - 1))}
          </div>
        </div>

        {/* Mobile view - stacked vertically */}
        <div className="md:hidden space-y-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center relative"
              onTouchStart={() => setHoveredStep(hoveredStep === index ? null : index)}
            >
              {/* Tooltip for mobile (shows on tap) */}
              {hoveredStep === index && (
                <div className="bg-white p-3 rounded-lg shadow-lg w-full max-w-xs z-10 text-sm text-gray-700 mb-4">
                  <p>{step.details}</p>
                </div>
              )}

              <div className="w-48 h-48 bg-gray-200 hover:bg-green-100 transition-colors duration-200 rounded-full flex items-center justify-center mb-3 cursor-pointer">
                {step.icon}
              </div>
              <p className="text-sm text-center font-medium">{step.title}</p>

              {/* Down arrow for mobile (except after the last step) */}
              {index < steps.length - 1 && (
                <div className="mt-4">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="text-gray-400"
                  >
                    <path
                      d="M12 5V19M12 19L19 12M12 19L5 12"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}