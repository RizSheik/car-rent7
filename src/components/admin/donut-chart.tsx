"use client";

import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";

const data = [
  { name: "Sport Car", value: 17439 },
  { name: "SUV", value: 9478 },
  { name: "Coupe", value: 18197 },
  { name: "Hatchback", value: 12510 },
  { name: "MPV", value: 14406 },
];

const COLORS = ["#2884FF", "#0D3559", "#175CD3", "#5EA2FF", "#B1D4FF"];

const legendStyle = {
  display: "flex",
  justifyContent: "center",
  marginTop: "10px",
};

export function DonutChart() {
  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-lg shadow-md p-4">
      <h2 className="text-xl font-semibold text-center text-gray-700 mb-4">
        Vehicle Type Distribution
      </h2>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            innerRadius={60}
            outerRadius={80}
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Legend
            wrapperStyle={legendStyle}
            iconSize={12}
            layout="horizontal"
            align="center"
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
