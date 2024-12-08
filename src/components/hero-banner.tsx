import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

interface HeroBannerProps {
  title: string
  description: string
  image: string
  variant?: "primary" | "secondary"
}

export function HeroBanner({ 
  title, 
  description, 
  image,
  variant = "primary" 
}: HeroBannerProps) {
  return (
    <div className={`rounded-lg p-6 ${
      variant === "primary" 
        ? "bg-gradient-to-r from-blue-400 to-blue-600" 
        : "bg-gradient-to-r from-blue-500 to-blue-700"
    } text-white`}>
      <div className="flex flex-col gap-4">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold">{title}</h2>
          <p className="text-sm opacity-90">{description}</p>
        </div>
        <Button 
          variant={variant === "primary" ? "secondary" : "default"}
          className="w-fit"
          asChild
        >
          <Link href="/car-rent">Rental Car</Link>
        </Button>
        <div className="relative h-40 sm:h-52">
          <Image
            src={image}
            alt="Featured car"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </div>
  )
}

