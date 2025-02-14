import { Box, Button } from "@mui/material"
import React from "react"
import { Link } from "react-router-dom"
import { LocationCity } from "@mui/icons-material"
import TableLayout from "../Table/CompanyTable"

const ManageCompanies = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 3,
      }}
    >
      <Link to="add-company">
        <Button
          type="submit"
          startIcon={<LocationCity />}
          sx={{
            height: "48px",
            borderRadius: "16px",
            minWidth: "150px",
            color: "#fff",
            bgcolor: "#01A85A",
            textTransform: "capitalize",
            px: 2,
          }}
        >
          Add New Company
        </Button>
      </Link>
      <TableLayout />
    </Box>
  )
}

export default ManageCompanies
