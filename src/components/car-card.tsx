"use client"

import Image from "next/image"
import Link from "next/link"
import { Heart } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface CarCardProps {
  id: number
  name: string
  type: string
  image: string
  fuel: string
  transmission: string
  capacity: string
  price: number
  originalPrice?: number
  liked?: boolean
}

export function CarCard({ 
  id,
  name,
  type,
  image,
  fuel,
  transmission,
  capacity,
  price,
  originalPrice,
  liked
}: CarCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-4">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold">{name}</h3>
              <p className="text-sm text-muted-foreground">{type}</p>
            </div>
            <Button 
              variant="ghost" 
              size="icon"
              className={cn(liked && "text-red-500")}
            >
              <Heart className="h-4 w-4" fill={liked ? "currentColor" : "none"} />
            </Button>
          </div>
          
          <div className="relative aspect-[4/3]">
            <Image
              src={image}
              alt={name}
              fill
              className="object-contain"
            />
          </div>
          
          <div className="grid grid-cols-3 gap-2 text-sm">
            <div className="flex items-center gap-2">
              <Image src="/icons/gas.svg" alt="Fuel" width={14} height={14} />
              {fuel}
            </div>
            <div className="flex items-center gap-2">
              <Image src="/icons/transmission.svg" alt="Transmission" width={14} height={14} />
              {transmission}
            </div>
            <div className="flex items-center gap-2">
              <Image src="/icons/capacity.svg" alt="Capacity" width={14} height={14} />
              {capacity}
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <div className="text-lg font-bold">
                {typeof price === 'number' 
                  ? `$${price.toFixed(2)}`
                  : 'Price unavailable'}
                <span className="text-sm font-normal">/day</span>
              </div>
              {typeof originalPrice === 'number' && (
                <div className="text-sm text-muted-foreground line-through">
                  ${originalPrice.toFixed(2)}
                </div>
              )}
            </div>
            <Button asChild>
              <Link href={`/car-rent/${id}`}>Rent Now</Link>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

