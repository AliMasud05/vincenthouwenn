"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface FormStepProps {
  children: ReactNode
}

export function FormStep({ children }: FormStepProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="border border-gray-200 rounded-md p-4 bg-white"
    >
      {children}
    </motion.div>
  )
}
