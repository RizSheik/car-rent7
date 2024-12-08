"use client"

import { Card, CardContent } from "@/components/ui/card"
import { DonutChart } from "@/components/admin/donut-chart"
import { RecentTransactions } from "@/components/admin/recent-transactions"
import { RentalMap } from "@/components/admin/rental-map"
import { RentalStats } from "@/components/admin/rental-stats"

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Details Rental</h1>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardContent className="p-6">
            <RentalMap />
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card>
            <CardContent className="p-6">
              <h2 className="mb-4 text-lg font-semibold">Top 5 Car Rental</h2>
              <DonutChart />
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="mb-4 text-lg font-semibold">Recent Transaction</h2>
              <RecentTransactions />
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <RentalStats />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

