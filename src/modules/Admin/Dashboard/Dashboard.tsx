import { ForwardToInbox } from "@mui/icons-material"
import { Box, Button } from "@mui/material"
import DisplayCard from "./components/DisplayCard"
import Chart from "./components/Chart"
import { Link } from "react-router-dom"

function Dashboard() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 3,
      }}
    >
      <Link to="/admin/send-memo">
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
      </Link>
      <DisplayCard />
      <Chart />
    </Box>
  )
}

export default Dashboard
