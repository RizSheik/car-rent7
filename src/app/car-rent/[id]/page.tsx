import { Star, Heart } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CategoryFilters } from "@/components/category-filters"
import { ReviewCard } from "@/components/reviews-card"
import { CarCard } from "@/components/car-card"
import { popularCars, recommendedCars } from "@/lib/cars"
import Image from "next/image"
import Link from "next/link"

export default function CarDetail({ params }: { params: { id: string } }) {
  return (
    <div className="container grid gap-6 px-4 py-6 md:grid-cols-[240px,1fr] lg:grid-cols-[280px,1fr]">
      <aside className="hidden space-y-6 md:block">
        <CategoryFilters />
      </aside>

      <main className="space-y-6">
        <Card className="overflow-hidden bg-primary p-6 text-primary-foreground">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold">Sports car with the best design and acceleration</h1>
              <Button variant="ghost" size="icon" className="text-primary-foreground">
                <Heart className="h-5 w-5" />
              </Button>
            </div>
            <p className="text-sm opacity-90">
              Safety and comfort while driving a futuristic and elegant sports car
            </p>
            <div className="relative h-[300px] w-full">
              <Image
                src="/cars/nissan-gtr.png"
                alt="Nissan GT-R"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </Card>

        <div className="grid gap-4 sm:grid-cols-3">
          {[1, 2, 3].map((index) => (
            <div key={index} className="relative aspect-[4/3] overflow-hidden rounded-lg border">
              <Image
                src={`/cars/nissan-gtr-${index}.jpg`}
                alt={`Nissan GT-R view ${index}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold">Nissan GT-R</h2>
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(4)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                  <Star className="h-4 w-4 fill-muted text-muted-foreground" />
                </div>
                <span className="text-sm text-muted-foreground">440+ Reviewer</span>
              </div>
            </div>
          </div>

          <p className="text-muted-foreground">
            NISMO has become the embodiment of Nissan's outstanding performance, inspired by the most
            unforgiving proving ground, the "race track".
          </p>

          <div className="grid gap-4 sm:grid-cols-3">
            <div>
              <div className="text-sm text-muted-foreground">Type Car</div>
              <div className="font-medium">Sport</div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground">Capacity</div>
              <div className="font-medium">2 Person</div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground">Steering</div>
              <div className="font-medium">Manual</div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground">Gasoline</div>
              <div className="font-medium">70L</div>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <div className="text-2xl font-bold">$80.00<span className="text-sm font-normal">/day</span></div>
              <div className="text-sm text-muted-foreground line-through">$100.00</div>
            </div>
            <Button asChild size="lg">
              <Link href={`/car-rent/${params.id}/payment`}>Rent Now</Link>
            </Button>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Reviews <Badge variant="secondary">13</Badge></h3>
          <div className="space-y-4">
            <ReviewCard
              name="Alex Stanton"
              role="CEO at Bukalapak"
              date="21 July 2022"
              rating={4}
              content="We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite."
            />
            <ReviewCard
              name="Skylar Dias"
              role="CEO at Amazon"
              date="20 July 2022"
              rating={4}
              content="We are greatly helped by the services of the MORENT Application. Morent has low prices and also a wide variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite."
            />
          </div>
          <Button variant="outline" className="w-full">Show All</Button>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Recent Car</h3>
            <Button variant="link">View All</Button>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {popularCars.slice(0, 3).map((car) => (
              <CarCard key={car.id} {...car} />
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Recommendation Car</h3>
            <Button variant="link">View All</Button>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {recommendedCars.slice(0, 3).map((car) => (
              <CarCard key={car.id} {...car} />
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

