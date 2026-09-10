import * as React from "react"
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

export const description = "An interactive area chart"

const chartData = Array.from({ length: 18 }, (_, index) => ({
  client: `Cliente ${index + 1}`,
  successfulCases: index + 1,
}))

export function ChartAreaInteractive() {
  return (
    <section className="case-chart-card">
      <div className="case-chart-header">
        <div>
          <h3>Tasa de casos de éxito</h3>
          <p>18 de 18 clientes lograron un caso de éxito.</p>
        </div>
      </div>
      <div className="case-chart">
        <ResponsiveContainer width="100%" height={280}>
          <AreaChart data={chartData}>
            <defs>
              <linearGradient
                id="fillDesktop"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="5%"
                  stopColor="#2776ba"
                  stopOpacity={0.8}
                />

                <stop
                  offset="95%"
                  stopColor="#2776ba"
                  stopOpacity={0.1}
                />
              </linearGradient>

              <linearGradient
                id="fillMobile"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="5%"
                  stopColor="#8db5e0"
                  stopOpacity={0.8}
                />

                <stop
                  offset="95%"
                  stopColor="#8db5e0"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>

            <CartesianGrid vertical={false} />
            <YAxis
              allowDecimals={false}
              tickLine={false}
              axisLine={false}
              width={32}
              label={{ value: "Casos", angle: -90, position: "insideLeft" }}
            />
            <XAxis
              dataKey="client"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              interval={2}
              tickFormatter={(value) => value.replace("Cliente ", "Cliente ")}
            />

            <Tooltip
              labelFormatter={(value) => value}
              formatter={(value) => [`${value} caso${value === 1 ? "" : "s"}`, "Casos de éxito"]}
            />

            <Area
              dataKey="successfulCases"
              type="monotone"
              fill="url(#fillDesktop)"
              stroke="#2776ba"
            />

          </AreaChart>
        </ResponsiveContainer>
      </div>
      <div className="case-chart-legend">
        <span><i className="legend-desktop" /> Casos de éxito</span>
        <span>18 clientes atendidos</span>
      </div>
    </section>
  )
}

export default ChartAreaInteractive