import Link from "next/link"
import { Linkedin } from "lucide-react"
import logoWithoutBg from '@/assets/logo/footer-logo.png'
import Image from "next/image"

const Footer = () => {
  return (
    <footer className="bg-[#2E7D32] text-white">
      <div className="container mx-auto p-6 md:p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
          <div>
           <Image src={logoWithoutBg.src} alt="logo" width={200} height={250}  className="bg-transparent"/>
          </div>

         <div className="flex justify-end gap-6">
           <div className="">
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>
                <a href="mailto:info@hovenierslokaaal.nl" className="hover:underline">
                  info@hovenierslokaaal.nl
                </a>
              </li>
              <li>
                <a href="tel:+31682042258" className="hover:underline">
                  +31 682042258
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center hover:underline"
                >
                  <Linkedin className="w-5 h-5 mr-1" />
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          <div className="ml-10">
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="hover:underline">
                  Privacybeleid
                </Link>
              </li>
              <li>
                <Link href="/voorwaarden" className="hover:underline">
                  Algemene voorwaarden
                </Link>
              </li>
            </ul>
          </div>
         </div>
        </div>

        <div className="mt-8 pt-6 border-t border-green-500 text-sm">
          <p>© {new Date().getFullYear()} Hovenierslokaaal</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
