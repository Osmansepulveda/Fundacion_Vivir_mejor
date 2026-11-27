import Link from "next/link"
import Image from "next/image"
import { BrainCircuit, Clock } from "lucide-react"

export default function ArticleCard({ title, description, category, date, slug = "", image }) {
  return (
    <Link href={`/blog/${slug}/`} className="group">
      <div className="space-y-3">
        <div className="relative h-48 rounded-lg overflow-hidden border border-border group-hover:border-primary/50 transition-colors">
          <Image src={image || "/placeholder.svg"} alt={`Miniatura de ${title}`} fill className="object-cover" />
        </div>
        <div>
          <div className="flex items-center gap-2 text-xs text-primary mb-2">
            <BrainCircuit className="h-4 w-4" />
            <span>{category}</span>
          </div>
          <h3 className="font-medium group-hover:text-primary transition-colors">{title}</h3>
          <p className="text-muted-foreground text-sm mt-2 line-clamp-2">{description}</p>
          <div className="flex items-center gap-1 mt-3 text-xs text-muted-foreground">
            <Clock className="h-3 w-3" />
            <span>{date}</span>
          </div>
        </div>
      </div>
    </Link>
  )
}
