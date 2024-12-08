"use client"

import { Shield, Star } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import Image from "next/image"
import { useState } from "react"

export default function Payment() {
  const [step, setStep] = useState(1)
  const totalSteps = 4

  return (
    <div className="container grid gap-6 px-4 py-6 md:grid-cols-[1fr,360px]">
      <div className="space-y-6">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Billing Info</h2>
            <div className="text-sm text-muted-foreground">Step {step} of {totalSteps}</div>
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
            <div className="text-sm text-muted-foreground">Step 2 of {totalSteps}</div>
          </div>
          <Card>
            <CardContent className="grid gap-6 p-6">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary" />
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
                    <Input type="date" />
                  </div>
                  <div className="space-y-2">
                    <Label>Time</Label>
                    <Input type="time" />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary" />
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
                    <Input type="date" />
                  </div>
                  <div className="space-y-2">
                    <Label>Time</Label>
                    <Input type="time" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Payment Method</h2>
            <div className="text-sm text-muted-foreground">Step 3 of {totalSteps}</div>
          </div>
          <Card>
            <CardContent className="p-6">
              <RadioGroup defaultValue="card" className="space-y-4">
                <div className="flex items-center justify-between rounded-lg border p-4">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="card" id="card" />
                    <Label htmlFor="card">Credit Card</Label>
                  </div>
                  <div className="flex gap-2">
                    <Image src="/visa.svg" alt="Visa" width={32} height={20} />
                    <Image src="/mastercard.svg" alt="Mastercard" width={32} height={20} />
                  </div>
                </div>

                <div className="grid gap-4 rounded-lg border p-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="card-number">Card Number</Label>
                      <Input id="card-number" placeholder="Card number" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="expiry">Expiration Date</Label>
                      <Input id="expiry" placeholder="MM/YY" />
                    </div>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="holder">Card Holder</Label>
                      <Input id="holder" placeholder="Card holder" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cvc">CVC</Label>
                      <Input id="cvc" placeholder="CVC" />
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between rounded-lg border p-4">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="paypal" id="paypal" />
                    <Label htmlFor="paypal">PayPal</Label>
                  </div>
                  <Image src="/paypal.svg" alt="PayPal" width={80} height={20} />
                </div>

                <div className="flex items-center justify-between rounded-lg border p-4">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="bitcoin" id="bitcoin" />
                    <Label htmlFor="bitcoin">Bitcoin</Label>
                  </div>
                  <Image src="/bitcoin.svg" alt="Bitcoin" width={80} height={20} />
                </div>
              </RadioGroup>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Confirmation</h2>
            <div className="text-sm text-muted-foreground">Step 4 of {totalSteps}</div>
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
        <Card>
          <CardContent className="space-y-4 p-6">
            <div className="flex items-center gap-4">
              <Image
                src="/cars/nissan-gtr.png"
                alt="Nissan GT-R"
                width={120}
                height={80}
                className="rounded-lg"
              />
              <div>
                <h3 className="font-semibold">Nissan GT-R</h3>
                <div className="flex items-center gap-1">
                  {[...Array(4)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                  <Star className="h-4 w-4 fill-muted text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">440+ Reviewer</span>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="font-medium">$80.00</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Tax</span>
                <span className="font-medium">$0</span>
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
              <div className="text-2xl font-bold">$80.00</div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

