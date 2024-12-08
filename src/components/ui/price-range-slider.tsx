"use client"

import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"
import { cn } from "@/lib/utils"

export function PriceRangeSlider({ 
  defaultValue = [0, 100],
  max = 100,
  step = 1,
  formatValue = (value: number) => `$${value.toFixed(2)}`,
  onValueChange
}: {
  defaultValue?: number[]
  max?: number
  step?: number
  formatValue?: (value: number) => string
  onValueChange?: (value: number[]) => void
}) {
  const [value, setValue] = React.useState(defaultValue)

  return (
    <div className="space-y-4">
      <SliderPrimitive.Root
        defaultValue={defaultValue}
        max={max}
        step={step}
        className="relative flex items-center select-none touch-none w-full h-5"
        onValueChange={(newValue) => {
          setValue(newValue)
          onValueChange?.(newValue)
        }}
      >
        <SliderPrimitive.Track className="bg-gray-200 relative grow rounded-full h-[3px]">
          <SliderPrimitive.Range className="absolute bg-blue-500 rounded-full h-full" />
        </SliderPrimitive.Track>
        <SliderPrimitive.Thumb className="block w-5 h-5 bg-white border-2 border-blue-500 rounded-full hover:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500" />
        <SliderPrimitive.Thumb className="block w-5 h-5 bg-white border-2 border-blue-500 rounded-full hover:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500" />
      </SliderPrimitive.Root>
      <div className="flex justify-between text-sm">
        <span>Min: {formatValue(value[0])}</span>
        <span>Max: {formatValue(value[1])}</span>
      </div>
    </div>
  )
}

