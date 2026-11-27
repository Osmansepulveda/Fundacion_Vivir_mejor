"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center max-w-md mx-auto px-4">
        <h1 className="text-4xl font-bold mb-4">404 - Página no encontrada</h1>
        <p className="text-gray-400 mb-8">La página que buscas no existe o ha sido movida.</p>
        <Button asChild>
          <Link href="/">Volver al inicio</Link>
        </Button>
      </div>
    </div>
  )
}
