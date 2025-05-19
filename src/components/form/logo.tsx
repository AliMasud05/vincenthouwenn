import Link from "next/link"

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <div className="w-8 h-8 bg-green-600 text-white flex items-center justify-center rounded-md font-bold">H</div>
      <span className="font-bold text-gray-800">Hovenierslokaaal</span>
    </Link>
  )
}
