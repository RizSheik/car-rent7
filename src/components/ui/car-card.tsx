import { Heart } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import Image from "next/image"

interface CarCardProps {
  name: string
  type: string
  image: string
  price: number
  specs: {
    capacity: number
    transmission: string
    fuelType: string
  }
  liked?: boolean
}

export function CarCard({ name, type, image, price, specs, liked = false }: CarCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-semibold text-lg">{name}</h3>
            <p className="text-sm text-muted-foreground">{type}</p>
          </div>
          <Button variant="ghost" size="icon" className="rounded-full">
            <Heart className={`w-5 h-5 ${liked ? "fill-red-500 stroke-red-500" : ""}`} />
          </Button>
        </div>
        <div className="relative aspect-[4/3] my-4">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <div className="grid grid-cols-3 gap-2 my-4">
          <div className="flex items-center gap-2">
            <Image src="/icons/capacity.svg" alt="Capacity" width={20} height={20} />
            <span className="text-sm text-muted-foreground">{specs.capacity} People</span>
          </div>
          <div className="flex items-center gap-2">
            <Image src="/icons/transmission.svg" alt="Transmission" width={20} height={20} />
            <span className="text-sm text-muted-foreground">{specs.transmission}</span>
          </div>
          <div className="flex items-center gap-2">
            <Image src="/icons/fuel.svg" alt="Fuel" width={20} height={20} />
            <span className="text-sm text-muted-foreground">{specs.fuelType}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex items-center justify-between">
        <div>
          <span className="text-lg font-bold">${price.toFixed(2)}</span>
          <span className="text-muted-foreground">/day</span>
        </div>
        <Button>Rent Now</Button>
      </CardFooter>
    </Card>
  )
}

