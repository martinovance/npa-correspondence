export interface ChartData {
  month: string
  inward: number
  outward: number
}

export interface RoundedBarProps {
  fill: string
  x?: number
  y?: number
  width?: number
  height?: number
  radius?: [number, number, number, number]
}
