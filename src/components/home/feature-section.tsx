import type React from "react"
import { User, Sliders, PuzzleIcon as PuzzlePiece } from "lucide-react"

export default function FeatureSection() {
  return (
    <section className="py-16">
      <div className=" mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-2"> Waarom Hovenierslokaal?</h2>
        <div className="w-full max-w-md mx-auto h-px bg-gray-200 mb-12"></div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={<User className="h-6 w-6 text-gray-700" />}
            title="Persoonlijke selectie"
            description="Elke aanvraag wordt bij ons met de hand bekeken. We luisteren naar jouw wensen en 
selecteren de hovenier die daar écht bij past. Geen automatische matches, maar 
persoonlijke aandacht voor jouw project. "
          />

          <FeatureCard
            icon={<Sliders className="h-6 w-6 text-gray-700" />}
            title="Offerte op maat"
            description="Nadat wij een match hebben gevonden, ontvang je vooraf van de hovenier een offerte op 
maat. Zo weet je precies waar je aan toe bent. 
"
          />

          <FeatureCard
            icon={<PuzzlePiece className="h-6 w-6 text-gray-700" />}
            title="Eenvoudig & Betrouwbaar"
            description="Bij ons hoef je niet te vergelijken of te zoeken. Jij doet één aanvraag, wij regelen de rest — 
van het vinden van een passende hovenier tot de start van je project. Geen keuzestress, 
geen gedoe, gewoon een goede vakman die past bij jouw aanvraag. "
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
      <div className="w-16 h-16 bg-[#5e9c61] rounded-md flex items-center justify-center mb-4">{icon}</div>
      <h3 className="text-lg font-medium mb-2">{title}</h3>
      <p className="text-gray-600 text-base leading-6">{description}</p>
    </div>
  )
}
