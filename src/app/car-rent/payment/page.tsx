import Image from "next/image"
import { Shield } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { PaymentForm } from "@/components/payment-form"
import { RentalSummary } from "@/components/rental-summary"

export default function Payment() {
  return (
    <div className="container grid gap-6 px-4 py-6 md:grid-cols-[1fr,360px]">
      <div className="space-y-6">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Billing Info</h2>
            <div className="text-sm text-muted-foreground">Step 1 of 4</div>
          </div>
          <Card>
            <CardContent className="grid gap-4 p-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Your name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" placeholder="Phone number" />
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="address">Address</Label>
                  <Input id="address" placeholder="Address" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="city">Town/City</Label>
                  <Input id="city" placeholder="Town/city" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Rental Info</h2>
            <div className="text-sm text-muted-foreground">Step 2 of 4</div>
          </div>
          <Card>
            <CardContent className="grid gap-4 p-6">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-blue-500" />
                  <span className="text-sm font-medium">Pick - Up</span>
                </div>
                <div className="grid gap-4 sm:grid-cols-3">
                  <div className="space-y-2">
                    <Label>Locations</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your city" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ny">New York</SelectItem>
                        <SelectItem value="ld">London</SelectItem>
                        <SelectItem value="db">Dubai</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Date</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your date" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="today">Today</SelectItem>
                        <SelectItem value="tomorrow">Tomorrow</SelectItem>
                        <SelectItem value="next-week">Next Week</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Time</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your time" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="10">10:00 AM</SelectItem>
                        <SelectItem value="11">11:00 AM</SelectItem>
                        <SelectItem value="12">12:00 PM</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-blue-500" />
                  <span className="text-sm font-medium">Drop - Off</span>
                </div>
                <div className="grid gap-4 sm:grid-cols-3">
                  <div className="space-y-2">
                    <Label>Locations</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your city" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ny">New York</SelectItem>
                        <SelectItem value="ld">London</SelectItem>
                        <SelectItem value="db">Dubai</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Date</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your date" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="today">Today</SelectItem>
                        <SelectItem value="tomorrow">Tomorrow</SelectItem>
                        <SelectItem value="next-week">Next Week</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Time</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your time" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="10">10:00 AM</SelectItem>
                        <SelectItem value="11">11:00 AM</SelectItem>
                        <SelectItem value="12">12:00 PM</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Payment Method</h2>
            <div className="text-sm text-muted-foreground">Step 3 of 4</div>
          </div>
          <Card>
            <CardContent className="p-6">
              <PaymentForm />
            </CardContent>
          </Card>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Confirmation</h2>
            <div className="text-sm text-muted-foreground">Step 4 of 4</div>
          </div>
          <Card>
            <CardContent className="space-y-4 p-6">
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="marketing" />
                  <label
                    htmlFor="marketing"
                    className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    I agree with sending an Marketing and newsletter emails. No spam, promised!
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="terms" />
                  <label
                    htmlFor="terms"
                    className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    I agree with our terms and conditions and privacy policy.
                  </label>
                </div>
              </div>
              <Button className="w-full" size="lg">
                Rent Now
              </Button>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Shield className="h-4 w-4" />
                All your data are safe and secure
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="space-y-6">
        <div className="text-lg font-semibold">Rental Summary</div>
        <RentalSummary
          car={{
            name: "Nissan GT-R",
            image: "/nissan-gtr-R.png",
            rating: 4,
            reviewCount: 440
          }}
          rentalDetails={{
            subtotal: 80.00,
            tax: 0
          }}
        />
      </div>
    </div>
  )
}

