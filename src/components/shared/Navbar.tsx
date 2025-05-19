"use client";

import Link from "next/link";


// import getUserInfo from "@/utils/getUserInfo";


export default function Navbar() {
  // const user = getUserInfo();

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
     <div className="container mx-auto bg-white">
      <div className="my-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
        <div className="flex items-center gap-2 pb-4">
          <div className="h-10 w-10 bg-orange-500 rounded-md flex items-center justify-center text-white font-bold text-xl">
            H
          </div>
          <h1 className="text-xl font-medium">Hovenierslokaal</h1>
        </div>
        </Link>
        <div className="flex items-center gap-2">
      <div className="flex items-center gap-2">
          <span className="text-sm text-gray-600">voor bedrijven</span>
          <Link href="/form" className="cursor-pointer ">
          <button className="bg-green-600 cursor-pointer text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors">
            Gratis offerte
          </button>
          </Link>
        </div>
         
        </div>
      </div>
     
   
    </div>
  </header>
  );
}
