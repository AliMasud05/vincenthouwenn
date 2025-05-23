"use client";

import logoWithBg from '@/assets/logo/navbar-white.jpg';
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const isMinimalNavbar = pathname === '/form' || pathname === '/success';

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto bg-white">
        <div className="my-4 flex items-center justify-between px-4 sm:px-0">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex items-center gap-2 pb-4">
              <Image src={logoWithBg.src} alt="logo" width={200} height={200} />
            </div>
          </Link>

          {/* Only show navigation if not on form or success route */}
          {!isMinimalNavbar && (
            <>
              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center gap-6">
                <div className="flex items-center gap-4">
                  <span className="text-base text-gray-600">voor bedrijven</span>
                  <Link href="/form">
                    <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors">
                      Gratis offerte
                    </button>
                  </Link>
                </div>
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden flex items-center">
                <button
                  onClick={toggleMenu}
                  className="text-gray-700 hover:text-gray-900 focus:outline-none"
                  aria-label="Toggle menu"
                >
                  {isMenuOpen ? (
                    <X className="h-6 w-6" />
                  ) : (
                    <Menu className="h-6 w-6" />
                  )}
                </button>
              </div>
            </>
          )}
        </div>

        {/* Mobile Navigation with Animation - Only show if not on form or success route */}
        {!isMinimalNavbar && (
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                className="md:hidden overflow-hidden"
              >
                <div className="pb-4 px-4">
                  <motion.div
                    initial={{ y: -20 }}
                    animate={{ y: 0 }}
                    exit={{ y: -20 }}
                    transition={{ duration: 0.2 }}
                    className="flex flex-col items-end gap-4 pt-2"
                  >
                    <span className="text-base text-gray-600">voor bedrijven</span>
                    <Link href="/form" onClick={toggleMenu}>
                      <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors w-full">
                        Gratis offerte
                      </button>
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        )}
      </div>
    </header>
  );
}