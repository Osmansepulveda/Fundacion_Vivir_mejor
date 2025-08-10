"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Rss, Twitter, Sun, Moon } from "lucide-react"
import { useRouter } from "next/navigation"
import { useTheme } from "next-themes"

export default function AboutPage() {
  const router = useRouter()
  const { theme, setTheme } = useTheme()

  const handleSubscribeClick = () => {
    router.push("/#newsletter")
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="container mx-auto py-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-bold tracking-tighter">
            Fundación Vivir<span className="text-[rgba(44,190,234,1)]">Mejor</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6 text-sm">
            <Link href="/" className="text-gray-400 hover:text-white transition-colors">
              Inicio
            </Link>
            <Link href="/articles/" className="text-gray-400 hover:text-white transition-colors">
              Eventos
            </Link>
            <Link href="/topics/" className="text-gray-400 hover:text-white transition-colors">
              Logros
            </Link>
            <Link href="/about/" className="text-white transition-colors border-b-2 border-[rgba(44,190,234,1)] pb-1">
              {"Nosotros"}
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              className="border-sky-500 text-cyan-500 hover:bg-purple-950 hover:text-white bg-transparent"
              onClick={handleSubscribeClick}
            >
              Contactanos
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="text-gray-400 hover:text-white"
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

          <div className="prose prose-invert prose-purple max-w-none">
            <p className="text-xl text-gray-300 mb-8">
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
              <a href="mailto:Fundacionvivirmejor7@gmail.com" className="text-[rgba(44,190,234,1)] hover:text-cyan-300">
                Fundacionvivirmejor7@gmail.com
              </a>{" "}
              o al teléfono 3013565386. Nuestra dirección es Calle 17AN #18E-61, Barrio Niza, San José de Cúcuta (N.S).
            </p>
          </div>
        </div>
      </main>

      <footer className="border-t border-gray-800 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <Link href="/" className="text-xl font-bold tracking-tighter">
                Fundación Vivir<span className="text-[rgba(44,190,234,1)]">Mejor</span>
              </Link>
              <p className="text-gray-400 text-sm">Comprometidos con el bienestar y desarrollo de nuestra comunidad.</p>
              <div className="flex space-x-4">
                <Link href="#" className="text-gray-400 hover:text-white">
                  <Twitter className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white">
                  <Github className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white">
                  <Linkedin className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white">
                  <Rss className="h-5 w-5" />
                </Link>
              </div>
            </div>
            <div>
              <h3 className="font-medium mb-4">Temas</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white">
                    Salud
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Bienestar Social
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Educación
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Ayuda Humanitaria
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Proyectos Comunitarios
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-4">Recursos</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white">
                    Testimonios
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Informes
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Noticias
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Galería
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Preguntas Frecuentes
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-4">Contacto</h3>
              <ul className="space-y-2 text-sm text-gray-400">
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
          <div className="border-t border-gray-800 mt-12 pt-6 text-sm text-gray-400">
            <p>© {new Date().getFullYear()} Fundación Vivir Mejor. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
