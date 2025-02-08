import { ForwardToInbox } from "@mui/icons-material"
import { Box, Button } from "@mui/material"
import DisplayCard from "../components/DisplayCard"
import Chart from "../components/Chart"

function Dashboard() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 3,
      }}
    >
      <Button
        sx={{
          height: "48px",
          borderRadius: "16px",
          width: "150px",
          color: "#fff",
          bgcolor: "#01A85A",
          textTransform: "capitalize",
        }}
      >
        <ForwardToInbox sx={{ mr: 1 }} />
        Send memo
      </Button>
      <DisplayCard />
      <Chart />
    </Box>
  )
}

export default Dashboard
