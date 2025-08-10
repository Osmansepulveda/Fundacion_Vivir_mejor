"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, BrainCircuit, Clock, Share2, Twitter, Facebook, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"
import { useEffect } from "react"

export function ClientBlogPost({ params, blogPosts }: { params: { slug: string }; blogPosts: any }) {
  const { toast } = useToast()
  const post = blogPosts[params.slug]

  useEffect(() => {
    if (!post) {
      toast({
        title: "Publicación no encontrada",
        description: "La publicación de blog solicitada no pudo ser encontrada.",
        variant: "destructive",
      })
    }
  }, [post, toast])

  if (!post) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Publicación no encontrada</h1>
          <p className="mb-6">La publicación de blog que buscas no existe o ha sido movida.</p>
          <Button asChild>
            <Link href="/">Volver al Inicio</Link>
          </Button>
        </div>
      </div>
    )
  }

  const handleShare = (platform: string) => {
    const url = window.location.href
    const text = `Echa un vistazo a este artículo: ${post.title}`

    let shareUrl = ""

    switch (platform) {
      case "twitter":
        shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`
        break
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`
        break
      case "linkedin":
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`
        break
      default:
        // Copy to clipboard
        navigator.clipboard.writeText(url)
        toast({
          title: "Enlace copiado",
          description: "El enlace del artículo ha sido copado a tu portapapeles.",
        })
        return
    }

    if (shareUrl) {
      window.open(shareUrl, "_blank")
    }
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="container mx-auto py-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-bold tracking-tighter">
            Fundación Vivir<span className="text-[rgba(44,190,234,1)]">Mejor</span>
          </Link>
          <Button
            variant="outline"
            className="border-sky-500 text-cyan-500 hover:bg-purple-950 hover:text-white bg-transparent"
            onClick={() => {
              const newsletterSection = document.getElementById("newsletter")
              if (newsletterSection) {
                newsletterSection.scrollIntoView({ behavior: "smooth" })
              }
            }}
          >
            Contactanos
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <Link href="/articles/" className="inline-flex items-center text-gray-400 hover:text-white mb-8">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Volver a eventos
          </Link>

          <div className="flex items-center gap-2 text-sm text-[rgba(44,190,234,1)] mb-4">
            <BrainCircuit className="h-5 w-5" />
            <span>{post.category}</span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">{post.title}</h1>

          <div className="flex items-center gap-4 text-sm text-gray-400 mb-8">
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{post.readTime}</span>
            </div>
            <div>{post.date}</div>
            <div>Por {post.author}</div>
          </div>

          <div className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden border border-gray-800 mb-8">
            <Image
              src={post.image || "/placeholder.svg"}
              alt="Imagen del artículo sobre la jornada de salud"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="flex justify-between items-center mb-8">
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                className="h-8 px-3 border-gray-800 hover:bg-gray-900 bg-transparent"
                onClick={() => handleShare("twitter")}
              >
                <Twitter className="h-4 w-4 mr-1" />
                Compartir
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="h-8 px-3 border-gray-800 hover:bg-gray-900 bg-transparent"
                onClick={() => handleShare("facebook")}
              >
                <Facebook className="h-4 w-4 mr-1" />
                Compartir
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="h-8 px-3 border-gray-800 hover:bg-gray-900 bg-transparent"
                onClick={() => handleShare("linkedin")}
              >
                <Linkedin className="h-4 w-4 mr-1" />
                Compartir
              </Button>
            </div>
            <Button
              variant="outline"
              size="sm"
              className="h-8 px-3 border-gray-800 hover:bg-gray-900 bg-transparent"
              onClick={() => handleShare("clipboard")}
            >
              <Share2 className="h-4 w-4 mr-1" />
              Compartir
            </Button>
          </div>

          <article className="prose prose-invert prose-purple max-w-none">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </article>

          <div className="border-t border-gray-800 mt-12 pt-8">
            <h3 className="text-xl font-bold mb-6">Artículos Relacionados</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {post.relatedPosts.map((relatedPost, index) => (
                <Link href={`/blog/${relatedPost.slug}/`} className="group" key={index}>
                  <div className="space-y-3">
                    <div className="relative h-48 rounded-lg overflow-hidden border border-gray-800 group-hover:border-[rgba(44,190,234,1)]/50 transition-colors">
                      <Image
                        src={relatedPost.image || "/placeholder.svg"}
                        alt={`Miniatura de ${relatedPost.title}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 text-xs text-[rgba(44,190,234,1)] mb-2">
                        <BrainCircuit className="h-4 w-4" />
                        <span>{relatedPost.category}</span>
                      </div>
                      <h3 className="font-medium group-hover:text-purple-400 transition-colors">{relatedPost.title}</h3>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>

      <footer className="border-t border-gray-800 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Link href="/" className="text-xl font-bold tracking-tighter">
              Fundación Vivir<span className="text-[rgba(44,190,234,1)]">Mejor</span>
            </Link>
            <p className="text-gray-400 text-sm mt-4 mb-6">
              Comprometidos con el bienestar y desarrollo de nuestra comunidad.
            </p>
            <div className="flex justify-center space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-6 text-sm text-gray-400">
              <p>© {new Date().getFullYear()} Fundación Vivir Mejor. Todos los derechos reservados.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
