import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function SearchForm() {
  return (
    <div className="grid gap-4 md:grid-cols-[1fr,1fr,1fr,auto]">
      <div className="space-y-2">
        <label className="text-sm font-medium">Locations</label>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select location" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="ny">New York</SelectItem>
            <SelectItem value="ld">London</SelectItem>
            <SelectItem value="db">Dubai</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <div className="space-y-2">
        <label className="text-sm font-medium">Date</label>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select date" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="today">Today</SelectItem>
            <SelectItem value="tomorrow">Tomorrow</SelectItem>
            <SelectItem value="next-week">Next Week</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <div className="space-y-2">
        <label className="text-sm font-medium">Time</label>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select time" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="10">10:00 AM</SelectItem>
            <SelectItem value="11">11:00 AM</SelectItem>
            <SelectItem value="12">12:00 PM</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Button className="mt-auto">Search</Button>
    </div>
  )
}

