"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Banknote, CreditCard, ArrowLeft, Twitter, Facebook, Linkedin } from "lucide-react"
import Image from "next/image"
import { useTheme } from "next-themes"
import { Sun, Moon } from "lucide-react"

export default function DonatePage() {
  const { theme, setTheme } = useTheme()

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="container mx-auto py-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-bold tracking-tighter flex items-center gap-2">
            <Image src="/images/logo-fundacion-header.png" alt="Fundación Vivir Mejor Logo" width={32} height={32} />
            Fundación Vivir<span className="text-primary">Mejor</span>
          </Link>
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10 hover:text-primary bg-transparent"
              asChild
            >
              <Link href="/about">Contactanos</Link>
            </Button>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
              <Link href="/donate">Donar</Link>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="text-muted-foreground hover:text-foreground"
            >
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              <span className="sr-only">Toggle theme</span>
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Volver al Inicio
          </Link>

          <h1 className="text-4xl font-bold mb-6 text-center">Apoya Nuestra Causa</h1>
          <p className="text-lg text-muted-foreground mb-10 text-center">
            Tu contribución es vital para que podamos seguir transformando vidas a través de nuestros programas de salud
            y apoyo comunitario. ¡Cada donación cuenta!
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl">
                  <Banknote className="h-6 w-6 text-primary" />
                  Donar con PayPal
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Realiza tu donación de forma rápida y segura a través de PayPal.
                </p>
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
                  <a
                    href="https://www.paypal.com/paypalme/YPradaDiaz"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Donar con PayPal
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl">
                  <Phone className="h-6 w-6 text-primary" />
                  Donar con Nequi
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">Puedes enviar tu donación directamente a nuestra cuenta Nequi.</p>
                <div className="text-foreground font-semibold text-lg">
                  Número Nequi: <span className="text-primary">3014071578</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Abre tu aplicación Nequi, selecciona "Enviar", ingresa el número y el monto.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl">
                  <CreditCard className="h-6 w-6 text-primary" />
                  Transferencia Bancaria (Davivienda)
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Realiza una transferencia directa a nuestra cuenta de ahorros en Davivienda.
                </p>
                <div className="text-foreground font-semibold text-lg">
                  Banco: <span className="text-primary">Davivienda</span>
                </div>
                <div className="text-foreground font-semibold text-lg">
                  Tipo de Cuenta: <span className="text-primary">Ahorros</span>
                </div>
                <div className="text-foreground font-semibold text-lg">
                  Número de Cuenta: <span className="text-primary">4884 3366 2175</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Por favor, incluye tu nombre en la referencia si deseas un recibo.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl">
                  <Banknote className="h-6 w-6 text-primary" />
                  Donar con PSE
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Para donaciones a través de PSE, estamos trabajando en la integración con una pasarela de pagos
                  segura.
                </p>
                <p className="text-sm text-muted-foreground">
                  Actualmente, la integración directa de PSE requiere una pasarela de pagos (como PayU, Epayco, etc.)
                  que maneje la transacción de forma segura. Para una implementación completa, se necesitaría un backend
                  y credenciales de API de una de estas pasarelas.
                </p>
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" disabled>
                  Próximamente: Donar con PSE
                </Button>
              </CardContent>
            </Card>
          </div>

          <p className="text-center text-muted-foreground mt-12">
            ¡Gracias por tu generosidad y por apoyar a Fundación Vivir Mejor!
          </p>
        </div>
      </main>

      <footer className="border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Link href="/" className="text-xl font-bold tracking-tighter flex items-center justify-center gap-2">
              <Image src="/images/logo-fundacion-header.png" alt="Fundación Vivir Mejor Logo" width={24} height={24} />
              Fundación Vivir<span className="text-primary">Mejor</span>
            </Link>
            <p className="text-muted-foreground text-sm mt-4 mb-6">
              Comprometidos con el bienestar y desarrollo de nuestra comunidad.
            </p>
            <div className="flex justify-center space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
            <div className="border-t border-border mt-8 pt-6 text-sm text-muted-foreground">
              <p>© {new Date().getFullYear()} Fundación Vivir Mejor. Todos los derechos reservados.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
