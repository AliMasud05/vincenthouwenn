import Image from "next/image";
import arrow from '@/assets/fi_13467811.png'
import Link from "next/link";

export default function CtaBanner() {
  return (
    <section className="py-10 px-4">
      <div className=" mx-auto">
        <div className="bg-[#2E7D32] text-white rounded-lg p-8 md:p-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="md:mb-0">
              <h2 className="text-xl md:text-2xl font-semibold ">
                Start vandaag nog met jouw droomtuin 
                <br />
              - vraag direct een offerte aan!
              </h2>
             
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center">
              <Image src={arrow.src} alt="droomtuin" width={1000} height={1000} className="hidden md:flex h-36 w-72 mt-10" />
            <Link href="/form">
            <button className="bg-white text-gray-800 px-6 py-2 rounded-md font-medium mt-4 md:mt-0 hover:bg-gray-100 transition-colors">
              gratis offerte
            </button>
            </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
