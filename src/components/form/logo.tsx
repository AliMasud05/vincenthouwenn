import Link from "next/link"

interface LogoProps {
  variant?: "default" | "white"
}

export function Logo({ variant = "default" }: LogoProps) {
  const textColor = variant === "white" ? "text-white" : "text-gray-800"
  const bgColor = variant === "white" ? "bg-white text-green-600" : "bg-green-600 text-white"

  return (
    <Link href="/" className={`flex items-center gap-2 ${textColor}`}>
      <div className={`w-8 h-8 ${bgColor} flex items-center justify-center rounded-md font-bold`}>H</div>
      <span className="font-bold">Hovenierslokaaal</span>
    </Link>
  )
}
