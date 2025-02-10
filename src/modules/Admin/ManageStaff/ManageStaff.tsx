import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt"
import { Box, Button } from "@mui/material"
import React from "react"
import TableLayout from "../Table/StaffTable"

const ManageStaff = () => {
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
        <PersonAddAltIcon sx={{ mr: 1 }} />
        Add Staff
      </Button>
      <TableLayout />
    </Box>
  )
}

export default ManageStaff
