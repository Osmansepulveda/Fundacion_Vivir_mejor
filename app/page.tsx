"use client"

import { useState, useRef, type FormEvent } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { BrainCircuit, Clock, Cpu, Eye, Github, Linkedin, Mail, Rss, Twitter, Sun, Moon } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"
import ArticleCard from "@/components/ArticleCard"
import { useTheme } from "next-themes"

export default function Home() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()
  const newsletterRef = useRef<HTMLElement>(null)
  const { theme, setTheme } = useTheme()

  const scrollToNewsletter = () => {
    newsletterRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  const handleSubscribe = async (e: FormEvent) => {
    e.preventDefault()

    if (!email || !email.includes("@")) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    // Simulate subscription process
    setTimeout(() => {
      toast({
        title: "Subscription successful!",
        description: "Thank you for subscribing to our newsletter.",
      })
      setEmail("")
      setIsSubmitting(false)
    }, 1000)

    // For GitHub Pages, you could use a service like Formspree or a Google Form
    // to collect emails without needing a backend
    // Example: window.open(`https://formspree.io/f/yourformid?email=${encodeURIComponent(email)}`, '_blank')
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
            <Link href="/about/" className="text-muted-foreground hover:text-foreground transition-colors">
              Nosotros
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10 hover:text-primary bg-transparent"
              onClick={scrollToNewsletter}
            >
              {"Contactanos"}
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
        <section className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Transformando Vidas a Través de la Salud y el Apoyo a la <span className="text-primary">Comunidad</span>
              </h1>
              <p className="text-muted-foreground text-lg md:text-xl">
                Nuestra fundación se dedica a mejorar la calidad de vida ofreciendo servicios médicos y asistencia
                integral.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
                  <Link href="/articles/">Nuestros Eventos</Link>
                </Button>
                <Button
                  variant="outline"
                  className="border-border hover:bg-accent hover:text-accent-foreground bg-transparent"
                  onClick={scrollToNewsletter}
                >
                  Contactanos
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden border border-border">
              <Image
                src="/images/fundacion2.jpeg"
                alt="Community outreach and medical assistance"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
            </div>
          </div>
        </section>

        <section className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold">Eventos Destacados</h2>
            <Link href="/articles/" className="text-primary hover:text-primary/90 text-sm flex items-center gap-2">
              Ver todos <Eye className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <FeaturedCard
              title="Jornada de Salud Comunitaria en Barrio Niza"
              description="Ofrecemos consultas médicas generales, ginecológicas y atención primaria para toda la familia."
              image="/images/fundacion1.jpeg"
              date="15 de Mayo, 2024"
              category="Salud"
              icon={<BrainCircuit className="h-5 w-5" />}
              slug="jornada-salud-niza"
            />
            <FeaturedCard
              title="Detección Temprana y Prevención de Enfermedades"
              description="Campañas de concientización y tamizaje para enfermedades crónicas, garantizando un acceso equitativo a la salud."
              image="/images/fundacion2.jpeg"
              date="2 de Junio, 2024"
              category="Prevención"
              icon={<Cpu className="h-5 w-5" />}
              slug="deteccion-enfermedades"
            />
            <FeaturedCard
              title="Asesoría Psicológica y Emocional para Familias"
              description="Apoyo integral para el bienestar mental y emocional de la comunidad a través de talleres y sesiones individuales."
              image="/images/fundacion3.jpeg"
              date="28 de Junio, 2024"
              category="Bienestar"
              icon={<Eye className="h-5 w-5" />}
              slug="asesoria-psicologica"
            />
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-2xl font-bold mb-8">Eventos Recientes</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ArticleCard
              title="Atención Médica Primaria en Zonas Rurales"
              description="Llevamos servicios de salud esenciales a comunidades de difícil acceso, mejorando la calidad de vida."
              category="Salud Rural"
              date="5 de Julio, 2024"
              slug="salud-rural"
              image="/images/fundacion4.jpeg"
            />
            <ArticleCard
              title="Taller de Nutrición y Vida Saludable"
              description="Educamos sobre hábitos alimenticios y la importancia de una vida activa para prevenir enfermedades."
              category="Nutrición"
              date="18 de Julio, 2024"
              slug="nutricion-saludable"
              image="/images/fundacion5.jpeg"
            />
            <ArticleCard
              title="Apoyo Psicosocial para Niños y Jóvenes"
              description="Fomentamos el desarrollo emocional y social a través de actividades lúdicas y acompañamiento profesional."
              category="Infancia"
              date="3 de Agosto, 2024"
              slug="apoyo-psicosocial"
              image="/images/fundacion6.jpeg"
            />
            <ArticleCard
              title="Campaña de Vacunación y Control de Enfermedades"
              description="Jornadas de vacunación y chequeos para asegurar la inmunización y el control de brotes."
              category="Vacunación"
              date="15 de Agosto, 2024"
              slug="campana-vacunacion"
              image="/images/fundacion7.jpeg"
            />
            <ArticleCard
              title="Entrega de Kits de Higiene y Suministros Médicos"
              description="Distribuimos insumos esenciales a familias vulnerables para promover la higiene y prevenir enfermedades."
              category="Ayuda Humanitaria"
              date="2 de Septiembre, 2024"
              slug="kits-higiene"
              image="/images/fundacion8.jpeg"
            />
            <ArticleCard
              title="Formación en Primeros Auxilios para la Comunidad"
              description="Capacitamos a líderes comunitarios en técnicas básicas de primeros auxilios para emergencias."
              category="Capacitación"
              date="20 de Septiembre, 2024"
              slug="primeros-auxilios"
              image="/images/fundacion10.jpeg"
            />
          </div>
        </section>

        <section ref={newsletterRef} id="newsletter" className="bg-card rounded-xl p-8 mb-20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Mantente Conectado</h2>
              <p className="text-muted-foreground">
                Suscríbete a nuestro boletín para recibir las últimas noticias sobre nuestros eventos, logros y formas
                de apoyar.
              </p>
            </div>
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <Input
                type="email"
                placeholder="Ingresa tu correo"
                className="bg-background border-input focus-visible:ring-ring"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Button
                type="submit"
                className="hover:bg-primary/90 whitespace-nowrap bg-primary text-primary-foreground"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Suscribiendo..." : "Suscribirme"}
              </Button>
            </form>
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

function FeaturedCard({ title, description, image, date, category, icon, slug = "" }) {
  return (
    <Card className="bg-card border-border overflow-hidden hover:border-primary/50 transition-colors">
      <div className="relative h-48">
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>
      <CardHeader>
        <div className="flex items-center gap-2 text-sm text-primary mb-2">
          {icon}
          <span>{category}</span>
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-muted-foreground">{description}</CardDescription>
      </CardContent>
      <CardFooter className="flex justify-between text-sm text-muted-foreground">
        <div className="flex items-center gap-1">
          <Clock className="h-4 w-4" />
          <span>{date}</span>
        </div>
        <Link href={`/blog/${slug}/`} className="text-primary hover:text-primary/90">
          Read more →
        </Link>
      </CardFooter>
    </Card>
  )
}
