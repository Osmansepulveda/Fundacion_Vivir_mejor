"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Banknote, CreditCard, ArrowLeft, Twitter, Facebook, Linkedin, ShieldCheck, Heart } from "lucide-react"
import Image from "next/image"
import { useTheme } from "next-themes"
import { Sun, Moon } from "lucide-react"
import Checkout from "@/components/checkout"
import { PRODUCTS } from "@/lib/products"

export default function DonatePage() {
  const { theme, setTheme } = useTheme()
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="container mx-auto py-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-bold tracking-tighter flex items-center gap-2">
            <Image src="/images/logo-fundacion-header.png" alt="Fundacion Vivir Mejor Logo" width={32} height={32} />
            {"Fundacion Vivir"}<span className="text-primary">{"Mejor"}</span>
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
              <span className="sr-only">Cambiar tema</span>
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <Link href="/" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Volver al Inicio
          </Link>

          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
              <Heart className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl font-bold mb-4 text-balance">Apoya Nuestra Causa</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Tu contribucion es vital para que podamos seguir transformando vidas a traves de nuestros programas de salud
              y apoyo comunitario. Cada donacion cuenta.
            </p>
          </div>

          {/* Stripe Secure Payment Section */}
          <section className="mb-12">
            <div className="flex items-center gap-2 mb-6">
              <ShieldCheck className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold">Pago Seguro con Tarjeta</h2>
            </div>
            <p className="text-muted-foreground mb-6">
              Selecciona un monto y realiza tu donacion de forma segura. Tus datos de tarjeta estan protegidos por Stripe
              y nunca son almacenados en nuestros servidores.
            </p>

            {!selectedProductId ? (
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                {PRODUCTS.map((product) => (
                  <Card
                    key={product.id}
                    className="bg-card border-border hover:border-primary/50 transition-colors cursor-pointer"
                    onClick={() => setSelectedProductId(product.id)}
                  >
                    <CardContent className="flex flex-col items-center justify-center p-6">
                      <span className="text-2xl font-bold text-primary mb-2">
                        {product.displayPrice} COP
                      </span>
                      <span className="text-sm text-muted-foreground text-center">{product.description}</span>
                      <Button className="mt-4 w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                        Seleccionar
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                <div className="flex items-center justify-between bg-card border border-border rounded-lg p-4">
                  <div>
                    <span className="text-sm text-muted-foreground">Monto seleccionado:</span>
                    <span className="ml-2 font-bold text-primary">
                      {PRODUCTS.find(p => p.id === selectedProductId)?.displayPrice} COP
                    </span>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-border text-muted-foreground hover:text-foreground"
                    onClick={() => setSelectedProductId(null)}
                  >
                    Cambiar monto
                  </Button>
                </div>
                <div className="bg-card border border-border rounded-lg p-6 min-h-[400px]">
                  <Checkout productId={selectedProductId} />
                </div>
              </div>
            )}

            <div className="flex items-center gap-2 mt-4 text-sm text-muted-foreground">
              <ShieldCheck className="h-4 w-4" />
              <span>Pagos procesados de forma segura por Stripe. No almacenamos datos de tarjetas.</span>
            </div>
          </section>

          {/* Divider */}
          <div className="relative my-12">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-background px-4 text-muted-foreground">Otros metodos de pago</span>
            </div>
          </div>

          {/* Other Payment Methods */}
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl">
                  <Banknote className="h-6 w-6 text-primary" />
                  PayPal
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Realiza tu donacion de forma rapida y segura a traves de PayPal.
                </p>
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
                  <a
                    href="https://paypal.me/OsmanR267?locale.x=es_XC&country.x=CO"
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
                  Nequi
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">Envia tu donacion directamente a nuestra cuenta Nequi.</p>
                <div className="text-foreground font-semibold text-lg">
                  {"Numero: "}<span className="text-primary">3176639002</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Abre tu aplicacion Nequi, selecciona Enviar, ingresa el numero y el monto.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl">
                  <CreditCard className="h-6 w-6 text-primary" />
                  Transferencia Bancaria
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Transferencia directa a nuestra cuenta de ahorros en Davivienda.
                </p>
                <div className="space-y-1">
                  <div className="text-foreground text-sm">
                    {"Banco: "}<span className="font-semibold text-primary">Davivienda</span>
                  </div>
                  <div className="text-foreground text-sm">
                    {"Tipo: "}<span className="font-semibold text-primary">Cuenta de Ahorros</span>
                  </div>
                  <div className="text-foreground text-sm">
                    {"No. Cuenta: "}<span className="font-semibold text-primary">4884 3366 2175</span>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground">
                  Incluye tu nombre en la referencia si deseas un recibo.
                </p>
              </CardContent>
            </Card>
          </div>

          <p className="text-center text-muted-foreground mt-12">
            {"Gracias por tu generosidad y por apoyar a Fundacion Vivir Mejor."}
          </p>
        </div>
      </main>

      <footer className="border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Link href="/" className="text-xl font-bold tracking-tighter flex items-center justify-center gap-2">
              <Image src="/images/logo-fundacion-header.png" alt="Fundacion Vivir Mejor Logo" width={24} height={24} />
              {"Fundacion Vivir"}<span className="text-primary">{"Mejor"}</span>
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
              <p>{"(c) "}{new Date().getFullYear()}{" Fundacion Vivir Mejor. Todos los derechos reservados."}</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
