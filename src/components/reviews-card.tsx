import { Star } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface ReviewCardProps {
  name: string
  role: string
  date: string
  rating: number
  content: string
}

export function ReviewCard({ name, role, date, rating, content }: ReviewCardProps) {
  return (
    <div className="space-y-4 rounded-lg border p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarImage src="/Images/Profill1.png" alt={name} />
            <AvatarImage src="/Images/Profill.png" alt={name} />
            <AvatarFallback>{name[0]}</AvatarFallback>
          </Avatar>
          <div>
            <div className="font-semibold">{name}</div>
            <div className="text-sm text-muted-foreground">{role}</div>
          </div>
        </div>
        <div className="text-sm text-muted-foreground">{date}</div>
      </div>
      
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${i < rating ? "fill-primary text-primary" : "fill-muted text-muted-foreground"}`}
          />
        ))}
      </div>
      
      <p className="text-sm text-muted-foreground">{content}</p>
    </div>
  )
}

