import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import Image from "next/image"

export function PaymentForm() {
  return (
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

          <div className={`grid gap-4 rounded-lg border p-4`}>
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
            <Image src="/Images/Bitcoin.png" alt="Bitcoin" width={80} height={20} />
          </div>
        </RadioGroup>
      </CardContent>
    </Card>
  )
}

