import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import type { Metadata } from "next"
import { Toaster } from "@/components/ui/toaster"
import Link from "next/link"
import { ThemeProvider } from "@/components/theme-provider" // Import ThemeProvider
import Image from "next/image" // Import Image component

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Fundación Vivir Mejor",
  description: "Transformando vidas a través de la salud y el apoyo a la comunidad.",
  icons: {
    icon: "/images/logo-fundacion.png", // Set favicon
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
          <Toaster />
          <Link
            href="https://wa.me/573013565386"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-4 right-4 bg-[#25D366] text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform z-50"
            aria-label="WhatsApp"
          >
            <Image src="/images/whatsapp-icon.png" alt="WhatsApp" width={24} height={24} />
          </Link>
        </ThemeProvider>
      </body>
    </html>
  )
}
