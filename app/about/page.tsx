"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Rss, Twitter, Sun, Moon } from "lucide-react"
import { useRouter } from "next/navigation"
import { useTheme } from "next-themes"
import Image from "next/image"

export default function AboutPage() {
  const router = useRouter()
  const { theme, setTheme } = useTheme()

  const handleSubscribeClick = () => {
    router.push("/#newsletter")
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="container mx-auto py-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-bold tracking-tighter flex items-center gap-2">
            <Image src="/images/logo-fundacion-header.png" alt="Fundación Vivir Mejor Logo" width={32} height={32} />
            Fundación Vivir<span className="text-primary">Mejor</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6 text-sm">
            <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
              Inicio
            </Link>
            <Link href="/articles/" className="text-muted-foreground hover:text-foreground transition-colors">
              Eventos
            </Link>
            <Link href="/topics/" className="text-muted-foreground hover:text-foreground transition-colors">
              Logros
            </Link>
            <Link href="/about/" className="text-foreground transition-colors border-b-2 border-primary pb-1">
              {"Nosotros"}
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10 hover:text-primary bg-transparent"
              onClick={handleSubscribeClick}
            >
              Contactanos
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
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Sobre Fundación Vivir Mejor</h1>

          <div className="prose prose-invert max-w-none">
            <p className="text-xl text-muted-foreground mb-8">
              Fundación Vivir Mejor está comprometida con la mejora de la calidad de vida en nuestra comunidad,
              enfocándonos en la salud, el bienestar social y el desarrollo comunitario.
            </p>

            <h2>Nuestra Misión</h2>
            <p>
              Nuestra misión es brindar asistencia médica integral, promover la educación en salud y ejecutar proyectos
              sociales que generen un impacto positivo y duradero en la vida de las familias más vulnerables.
            </p>

            <h2>Qué Hacemos</h2>
            <p>En Fundación Vivir Mejor, nos centramos en varias áreas clave:</p>

            <ul>
              <li>
                <strong>Jornadas de Salud</strong>: Organizamos eventos médicos comunitarios que ofrecen consultas
                generales, especializadas y programas de prevención.
              </li>
              <li>
                <strong>Apoyo Psicosocial</strong>: Proveemos acompañamiento y talleres para fortalecer la salud mental
                y emocional de individuos y familias.
              </li>
              <li>
                <strong>Educación y Capacitación</strong>: Impartimos conocimientos sobre nutrición, higiene y primeros
                auxilios para empoderar a la comunidad.
              </li>
              <li>
                <strong>Asistencia Humanitaria</strong>: Distribuimos kits de higiene, alimentos y otros suministros
                esenciales a quienes más lo necesitan.
              </li>
            </ul>

            <h2>Nuestro Equipo</h2>
            <p>
              Fundación Vivir Mejor es impulsada por un equipo de profesionales de la salud, trabajadores sociales,
              voluntarios y líderes comunitarios, todos apasionados por el servicio y el impacto social.
            </p>

            <h2>Contáctanos</h2>
            <p>
              ¿Tienes alguna pregunta, sugerencia o deseas colaborar? ¡Nos encantaría escucharte! Contáctanos en{" "}
              <a href="mailto:Fundacionvivirmejor7@gmail.com" className="text-primary hover:text-primary/90">
                Fundacionvivirmejor7@gmail.com
              </a>{" "}
              o al teléfono 3013565386. Nuestra dirección es Calle 17AN #18E-61, Barrio Niza, San José de Cúcuta (N.S).
            </p>
          </div>
        </div>
      </main>

      <footer className="border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <Link href="/" className="text-xl font-bold tracking-tighter flex items-center gap-2">
                <Image
                  src="/images/logo-fundacion-header.png"
                  alt="Fundación Vivir Mejor Logo"
                  width={24}
                  height={24}
                />
                Fundación Vivir<span className="text-primary">Mejor</span>
              </Link>
              <p className="text-muted-foreground text-sm">
                Comprometidos con el bienestar y desarrollo de nuestra comunidad.
              </p>
              <div className="flex space-x-4">
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  <Twitter className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  <Github className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  <Linkedin className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  <Rss className="h-5 w-5" />
                </Link>
              </div>
            </div>
            <div>
              <h3 className="font-medium mb-4">Temas</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="#" className="hover:text-foreground">
                    Salud
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground">
                    Bienestar Social
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground">
                    Educación
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground">
                    Ayuda Humanitaria
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground">
                    Proyectos Comunitarios
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-4">Recursos</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="#" className="hover:text-foreground">
                    Testimonios
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground">
                    Informes
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground">
                    Noticias
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground">
                    Galería
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground">
                    Preguntas Frecuentes
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-4">Contacto</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <span>Fundacionvivirmejor7@gmail.com</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>CEL: 3013565386</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>Dirección: calle17an#18e -61</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>BARRIO NIZA. SANJOSE DE CUCUTA (N.S)</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-12 pt-6 text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} Fundación Vivir Mejor. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
