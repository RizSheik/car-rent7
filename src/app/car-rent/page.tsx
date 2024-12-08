import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { CarCard } from "@/components/car-card"
import { PickDropForm } from "@/components/pick-drop-form"
import { CategoryFilters } from "@/components/category-filters"
import { SearchForm } from "@/components/search-form"

const cars = [
  {
    id: 1,
    name: "Koenigsegg",
    type: "Sport",
    image: "/Images/car.png",
    capacity: "2 People",
    transmission: "Manual",
    fuel: "90L",
    price: 99.00,
    originalPrice: 100.00
  },
  // Add more cars...
]

export default function CarRent() {
  return (
    <div className="container grid gap-6 px-4 py-6 md:grid-cols-[240px,1fr] lg:grid-cols-[280px,1fr]">
      <aside className="space-y-6">
        <CategoryFilters />
      </aside>

      <main className="space-y-6">
        <SearchForm />
        
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      </main>
    </div>
  )
}

