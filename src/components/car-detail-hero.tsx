import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface CarDetailHeroProps {
  name: string
  description: string
  image: string
}

export function CarDetailHero({ name, description, image }: CarDetailHeroProps) {
  return (
    <Card className="bg-primary text-primary-foreground">
      <CardContent className="p-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="space-y-2">
            <h1 className="text-2xl font-bold">{name}</h1>
            <p className="max-w-[500px] text-sm opacity-90">{description}</p>
            <Button variant="secondary">Rent Now</Button>
          </div>
          <div className="relative h-48 w-full md:h-64 md:w-1/2">
            <Image
              src={image}
              alt={name}
              fill
              className="object-contain"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

