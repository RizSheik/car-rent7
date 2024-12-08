import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface RentalSummaryProps {
  car: {
    name: string
    image: string
    rating: number
    reviewCount: number
  }
  rentalDetails: {
    subtotal: number
    tax: number
  }
}

export function RentalSummary({ car, rentalDetails }: RentalSummaryProps) {
  const total = rentalDetails.subtotal + rentalDetails.tax

  return (
    <Card>
      <CardContent className="space-y-4 p-6">
        <div className="flex items-center gap-4">
          <Image
            src={car.image}
            alt={car.name}
            width={120}
            height={80}
            className="rounded-lg"
          />
          <div>
            <h3 className="font-semibold">{car.name}</h3>
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className={`h-4 w-4 ${i < car.rating ? "text-yellow-400" : "text-gray-300"}`}
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
              ))}
              <span className="text-sm text-muted-foreground">{car.reviewCount}+ Reviewer</span>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Subtotal</span>
            <span className="font-medium">${rentalDetails.subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Tax</span>
            <span className="font-medium">${rentalDetails.tax.toFixed(2)}</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Apply promo code</span>
              <Button variant="link" className="h-auto p-0 text-sm">
                Apply now
              </Button>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between border-t pt-4">
          <div className="space-y-1">
            <div className="text-lg font-bold">Total Rental Price</div>
            <div className="text-sm text-muted-foreground">Overall price and includes rental discount</div>
          </div>
          <div className="text-2xl font-bold">${total.toFixed(2)}</div>
        </div>
      </CardContent>
    </Card>
  )
}

