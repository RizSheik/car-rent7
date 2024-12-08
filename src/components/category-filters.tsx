import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"

const carTypes = [
  { id: "sport", label: "Sport" },
  { id: "suv", label: "SUV" },
  { id: "mpv", label: "MPV" },
  { id: "sedan", label: "Sedan" },
  { id: "coupe", label: "Coupe" },
  { id: "hatchback", label: "Hatchback" },
]

const capacities = [
  { id: "2person", label: "2 Person" },
  { id: "4person", label: "4 Person" },
  { id: "6person", label: "6 Person" },
  { id: "8person", label: "8 or more" },
]

export function CategoryFilters() {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h3 className="text-sm font-medium uppercase text-muted-foreground">TYPE</h3>
        <div className="space-y-2">
          {carTypes.map((type) => (
            <div key={type.id} className="flex items-center space-x-2">
              <Checkbox id={type.id} />
              <Label htmlFor={type.id}>{type.label}</Label>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-sm font-medium uppercase text-muted-foreground">CAPACITY</h3>
        <div className="space-y-2">
          {capacities.map((capacity) => (
            <div key={capacity.id} className="flex items-center space-x-2">
              <Checkbox id={capacity.id} />
              <Label htmlFor={capacity.id}>{capacity.label}</Label>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-sm font-medium uppercase text-muted-foreground">PRICE</h3>
        <Slider
          defaultValue={[0, 100]}
          max={1000}
          step={10}
          className="w-full"
        />
        <div className="flex justify-between text-sm">
          <span>$0</span>
          <span>$1000</span>
        </div>
      </div>
    </div>
  )
}

