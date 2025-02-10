import BarChartFlow from "@/shared/Chart/BarChart"

function Chart() {
  const chartData = [
    { month: "Jan", inward: 1100, outward: 400 },
    { month: "Feb", inward: 700, outward: 500 },
    { month: "Mar", inward: 900, outward: 600 },
    { month: "Apr", inward: 800, outward: 400 },
    { month: "May", inward: 600, outward: 500 },
    { month: "Jun", inward: 2100, outward: 900 },
    { month: "Jul", inward: 1500, outward: 200 },
    { month: "Aug", inward: 2100, outward: 1500 },
    { month: "Sep", inward: 700, outward: 400 },
    { month: "Oct", inward: 1000, outward: 600 },
    { month: "Nov", inward: 1900, outward: 400 },
    { month: "Dec", inward: 900, outward: 700 },
  ]

  return (
    <div>
      <BarChartFlow data={chartData} />
    </div>
  )
}

export default Chart
