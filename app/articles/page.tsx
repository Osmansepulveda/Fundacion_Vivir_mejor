"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Twitter, Sun, Moon, Mail } from "lucide-react"
import { useRouter } from "next/navigation"
import ArticleCard from "@/components/ArticleCard"
import { useTheme } from "next-themes"
import Image from "next/image"

// Update the articles array with new content and images
const articles = [
  {
    title: "Jornada de Salud Comunitaria en Barrio Niza",
    description: "Ofrecemos consultas médicas generales, ginecológicas y atención primaria para toda la familia.",
    category: "Salud",
    date: "15 de Mayo, 2024",
    slug: "jornada-salud-niza",
    image: "/images/fundacion1.jpeg",
  },
  {
    title: "Detección Temprana y Prevención de Enfermedades",
    description:
      "Campañas de concientización y tamizaje para enfermedades crónicas, garantizando un acceso equitativo a la salud.",
    category: "Prevención",
    date: "2 de Junio, 2024",
    slug: "deteccion-enfermedades",
    image: "/images/fundacion2.jpeg",
  },
  {
    title: "Asesoría Psicológica y Emocional para Familias",
    description:
      "Apoyo integral para el bienestar mental y emocional de la comunidad a través de talleres y sesiones individuales.",
    category: "Bienestar",
    date: "28 de Junio, 2024",
    slug: "asesoria-psicologica",
    image: "/images/fundacion3.jpeg",
  },
  {
    title: "Atención Médica Primaria en Zonas Rurales",
    description:
      "Llevamos servicios de salud esenciales a comunidades de difícil acceso, mejorando la calidad de vida.",
    category: "Salud Rural",
    date: "5 de Julio, 2024",
    slug: "salud-rural",
    image: "/images/fundacion4.jpeg",
  },
  {
    title: "Taller de Nutrición y Vida Saludable",
    description: "Educamos sobre hábitos alimenticios y la importancia de una vida activa para prevenir enfermedades.",
    category: "Nutrición",
    date: "18 de Julio, 2024",
    slug: "nutricion-saludable",
    image: "/images/fundacion5.jpeg",
  },
  {
    title: "Apoyo Psicosocial para Niños y Jóvenes",
    description:
      "Fomentamos el desarrollo emocional y social a través de actividades lúdicas y acompañamiento profesional.",
    category: "Infancia",
    date: "3 de Agosto, 2024",
    slug: "apoyo-psicosocial",
    image: "/images/fundacion6.jpeg",
  },
  {
    title: "Campaña de Vacunación y Control de Enfermedades",
    description: "Jornadas de vacunación y chequeos para asegurar la inmunización y el control de brotes.",
    category: "Vacunación",
    date: "15 de Agosto, 2024",
    slug: "campana-vacunacion",
    image: "/images/fundacion7.jpeg",
  },
  {
    title: "Entrega de Kits de Higiene y Suministros Médicos",
    description:
      "Distribuimos insumos esenciales a familias vulnerables para promover la higiene y prevenir enfermedades.",
    category: "Ayuda Humanitaria",
    date: "2 de Septiembre, 2024",
    slug: "kits-higiene",
    image: "/images/fundacion8.jpeg",
  },
  {
    title: "Formación en Primeros Auxilios para la Comunidad",
    description: "Capacitamos a líderes comunitarios en técnicas básicas de primeros auxilios para emergencias.",
    category: "Capacitación",
    date: "20 de Septiembre, 2024",
    slug: "primeros-auxilios",
    image: "/images/fundacion10.jpeg",
  },
]

export default function ArticlesPage() {
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
              {"Inicio"}
            </Link>
            <Link href="/articles/" className="text-foreground transition-colors border-b-2 border-primary pb-1">
              Eventos
            </Link>
            <Link href="/topics/" className="text-muted-foreground hover:text-foreground transition-colors">
              Logros
            </Link>
            <Link href="/about/" className="text-muted-foreground hover:text-foreground transition-colors">
              Nosotros
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
              <span className="sr-only">Cambiar tema</span>
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section className="mb-12">
          <h1 className="text-4xl font-bold mb-8">Nuestros eventos</h1>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article, index) => (
              <ArticleCard
                key={index}
                title={article.title}
                description={article.description}
                category={article.category}
                date={article.date}
                slug={article.slug}
                image={article.image}
              />
            ))}
          </div>
        </section>
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
