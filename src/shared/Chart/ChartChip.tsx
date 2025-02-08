import { useState } from "react"
import { MenuItem, Select, Chip, Box } from "@mui/material"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
]

interface MonthFilterProps {
  selectedMonth: string
  setSelectedMonth: (month: string) => void
}

const MonthFilter = ({ selectedMonth, setSelectedMonth }: MonthFilterProps) => {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Select
        value={selectedMonth}
        onChange={(e) => setSelectedMonth(e.target.value)}
        displayEmpty
        variant="outlined"
        sx={{
          backgroundColor: "#F1F1F1",
          borderRadius: "16px",
          "& .MuiSelect-select": {
            display: "flex",
            alignItems: "center",
            padding: "6px 16px",
          },
          "& .MuiOutlinedInput-notchedOutline": {
            border: "none",
          },
        }}
        IconComponent={KeyboardArrowDownIcon}
        renderValue={(selected) => (
          <Chip
            label={selected || "Month"}
            sx={{
              backgroundColor: "transparent",
              fontWeight: 500,
              color: "#333",
              "& .MuiChip-label": { padding: 0 },
            }}
          />
        )}
      >
        {months.map((month) => (
          <MenuItem sx={{ overflowY: "scroll" }} key={month} value={month}>
            {month}
          </MenuItem>
        ))}
      </Select>
    </Box>
  )
}

export default function MonthFilterWrapper() {
  const [selectedMonth, setSelectedMonth] = useState("")

  return (
    <MonthFilter
      selectedMonth={selectedMonth}
      setSelectedMonth={setSelectedMonth}
    />
  )
}
