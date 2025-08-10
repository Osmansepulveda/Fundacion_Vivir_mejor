"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { BrainCircuit, Cpu, Eye, Github, Linkedin, Mail, Rss, Twitter, Sun, Moon } from "lucide-react"
import { useRouter } from "next/navigation"
import { useTheme } from "next-themes"

// Update topics data to represent "Logros" (Achievements)
const topics = [
  {
    title: "Logro: Más de 500 Familias Atendidas",
    description: "Hemos brindado asistencia médica y social a más de 500 familias en comunidades vulnerables.",
    icon: <BrainCircuit className="h-6 w-6" />,
    count: 500,
    slug: "familias-atendidas",
  },
  {
    title: "Logro: 20 Jornadas de Salud Realizadas",
    description: "Organizamos y ejecutamos 20 jornadas de salud integral en diferentes barrios y zonas rurales.",
    icon: <Eye className="h-6 w-6" />,
    count: 20,
    slug: "jornadas-salud",
  },
  {
    title: "Logro: Impacto en 15 Comunidades",
    description: "Nuestros programas han llegado y beneficiado directamente a 15 comunidades de nuestra región.",
    icon: <Cpu className="h-6 w-6" />,
    count: 15,
    slug: "comunidades-impactadas",
  },
  {
    title: "Logro: Talleres de Capacitación en Prevención",
    description: "Más de 30 talleres impartidos sobre prevención de enfermedades y promoción de hábitos saludables.",
    icon: <BrainCircuit className="h-6 w-6" />,
    count: 30,
    slug: "talleres-prevencion",
  },
  {
    title: "Logro: Red de Voluntarios Creciente",
    description: "Contamos con una sólida red de voluntarios comprometidos con nuestra misión y visión.",
    icon: <BrainCircuit className="h-6 w-6" />,
    count: 45, // Placeholder number, can be updated with real data
    slug: "voluntarios",
  },
  {
    title: "Logro: Alianzas Estratégicas Clave",
    description: "Hemos establecido alianzas con organizaciones locales para amplificar nuestro impacto.",
    icon: <BrainCircuit className="h-6 w-6" />,
    count: 8, // Placeholder number
    slug: "alianzas-estrategicas",
  },
]

export default function TopicsPage() {
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
              {"Eventos"}
            </Link>
            <Link href="/topics/" className="text-white transition-colors border-b-2 border-[rgba(44,190,234,1)] pb-1">
              {"Logros"}
            </Link>
            <Link href="/about/" className="text-gray-400 hover:text-white transition-colors">
              Nosotros
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
        <section className="mb-12">
          <h1 className="text-4xl font-bold mb-8">Nuestros Logros</h1>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topics.map((topic, index) => (
              <TopicCard
                key={index}
                title={topic.title}
                description={topic.description}
                icon={topic.icon}
                count={topic.count}
                slug={topic.slug}
              />
            ))}
          </div>
        </section>
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

function TopicCard({ title, description, icon, count, slug = "" }) {
  return (
    <Link href={`/articles/`} className="group">
      <Card className="bg-gray-900 border-gray-800 hover:border-[rgba(44,190,234,1)]/50 transition-colors h-full">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="bg-[rgba(44,190,234,1)]/10 p-3 rounded-lg text-[rgba(44,190,234,1)]">{icon}</div>
            <div className="bg-gray-800 px-3 py-1 rounded-full text-sm">{count} artículos</div>
          </div>
          <CardTitle className="text-xl mt-4 group-hover:text-[rgba(44,190,234,1)] transition-colors">
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-gray-400">{description}</CardDescription>
        </CardContent>
        <CardFooter>
          <span className="text-[rgba(44,190,234,1)] text-sm group-hover:text-cyan-400">Ver artículos →</span>
        </CardFooter>
      </Card>
    </Link>
  )
}
