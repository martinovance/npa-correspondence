import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Rectangle,
} from "recharts"
import { Box, Paper, Typography } from "@mui/material"
import { ChartData, RoundedBarProps } from "@/types/ChartTypes"
import MonthFilterWrapper from "./ChartChip"

const RoundedBar = ({
  fill,
  x = 0,
  y = 0,
  width = 0,
  height = 0,
  radius = [0, 0, 0, 0],
}: RoundedBarProps) => (
  <Rectangle
    x={x}
    y={y}
    width={width}
    height={height}
    fill={fill}
    radius={radius}
  />
)

interface BarChartFlowProps {
  data: ChartData[]
}

function BarChartFlow({ data }: BarChartFlowProps) {
  const maxValue = Math.max(...data.flatMap((d) => [d.outward, d.inward]))

  return (
    <Paper elevation={3} sx={{ padding: 3, mt: 1, borderRadius: "16px" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{ ml: 2, fontSize: "18px", fontWeight: "600" }}
          gutterBottom
        >
          Memo flow analysis
        </Typography>
        <MonthFilterWrapper />
      </Box>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          barCategoryGap={17}
          data={data}
          margin={{
            top: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="month" axisLine={false} tickLine={false} />
          <YAxis domain={[0, maxValue]} axisLine={false} tickLine={false} />
          <Tooltip />
          <Legend align="left" wrapperStyle={{ left: 30 }} />
          <Bar
            dataKey="outward"
            stackId="stack"
            fill="#FF4B4B"
            name="Outward"
            shape={<RoundedBar fill="#FF4B4B" radius={[0, 0, 25, 25]} />}
          />
          <Bar
            dataKey="inward"
            stackId="stack"
            fill="#01A85A"
            name="Inward"
            shape={<RoundedBar fill="#01A85A" radius={[25, 25, 0, 0]} />}
          />
        </BarChart>
      </ResponsiveContainer>
    </Paper>
  )
}

export default BarChartFlow
