import type React from "react"
import { User, Sliders, PuzzleIcon as PuzzlePiece } from "lucide-react"

export default function FeatureSection() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-2">Why Hovenierslokal?</h2>
        <div className="w-full max-w-md mx-auto h-px bg-gray-200 mb-12"></div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={<User className="h-6 w-6 text-gray-700" />}
            title="Personal selection"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
          />

          <FeatureCard
            icon={<Sliders className="h-6 w-6 text-gray-700" />}
            title="Custom quote"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
          />

          <FeatureCard
            icon={<PuzzlePiece className="h-6 w-6 text-gray-700" />}
            title="Fast Match Guarantee"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
          />
        </div>
      </div>
    </section>
  )
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <div className="flex flex-col shadow-sm py-3 px-4 rounded-md bg-white">
      <div className="w-16 h-16 bg-green-100 rounded-md flex items-center justify-center mb-4">{icon}</div>
      <h3 className="text-lg font-medium mb-2">{title}</h3>
      <p className="text-gray-600 text-base leading-6">{description}</p>
    </div>
  )
}
