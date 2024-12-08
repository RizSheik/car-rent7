"use client"

import { ArrowLeftRight, Calendar, Clock } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"

interface PickDropFormProps {
  className?: string
}

export function PickDropForm({ className }: PickDropFormProps) {
  return (
    <div className={cn("relative rounded-lg border bg-background p-6", className)}>
      <div className="grid gap-6 md:grid-cols-[1fr,auto,1fr]">
        <div className="space-y-4">
          <div>
            <Label htmlFor="pickup">Pickup Location</Label>
            <Input 
              id="pickup"
              placeholder="Enter pickup location"
              className="mt-1.5"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="pickup-date">Date</Label>
              <div className="relative mt-1.5">
                <Input 
                  id="pickup-date"
                  type="date"
                  placeholder="dd/mm/yyyy"
                  className="mt-1.5"
                />
                <Calendar className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              </div>
            </div>
            <div>
              <Label htmlFor="pickup-time">Time</Label>
              <div className="relative mt-1.5">
                <Input 
                  id="pickup-time"
                  type="time"
                  placeholder="--:-- --"
                  className="mt-1.5"
                />
                <Clock className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <Button 
            size="icon" 
            className="h-10 w-10 rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
          >
            <ArrowLeftRight className="h-4 w-4" />
            <span className="sr-only">Swap locations</span>
          </Button>
        </div>

        <div className="space-y-4">
          <div>
            <Label htmlFor="dropoff">Drop-off Location</Label>
            <Input 
              id="dropoff"
              placeholder="Enter drop-off location"
              className="mt-1.5"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="dropoff-date">Date</Label>
              <div className="relative mt-1.5">
                <Input 
                  id="dropoff-date"
                  type="date"
                  placeholder="dd/mm/yyyy"
                  className="mt-1.5"
                />
                <Calendar className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              </div>
            </div>
            <div>
              <Label htmlFor="dropoff-time">Time</Label>
              <div className="relative mt-1.5">
                <Input 
                  id="dropoff-time"
                  type="time"
                  placeholder="--:-- --"
                  className="mt-1.5"
                />
                <Clock className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

