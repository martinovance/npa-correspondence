import { LocationCity } from "@mui/icons-material"
import { Button, Paper } from "@mui/material"
import { Link } from "react-router-dom"
import AddCompanyForm from "./AddCompanyForm"

const AddCompany = () => {
  return (
    <Paper
      sx={{
        minHeight: 200,
        borderRadius: "16px",
        padding: 3,
        display: "flex",
        flexDirection: "column",
        gap: 1,
      }}
    >
      <AddCompanyForm />
      <Link to="/admin/manage-companies" style={{ marginLeft: "auto" }}>
        <Button
          type="submit"
          startIcon={<LocationCity />}
          sx={{
            height: "48px",
            borderRadius: "16px",
            width: "150px",
            color: "#fff",
            bgcolor: "#01A85A",
            textTransform: "capitalize",
            marginLeft: "auto",
          }}
        >
          Add Company
        </Button>
      </Link>
    </Paper>
  )
}

export default AddCompany
