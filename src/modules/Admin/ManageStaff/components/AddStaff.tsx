import { Button, Paper } from "@mui/material"
import AddStaffForm from "./AddStaffForm"
import { Link } from "react-router-dom"
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt"

const AddStaff = () => {
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
      <AddStaffForm />
      <Link to="/admin/manage-staff" style={{ marginLeft: "auto" }}>
        <Button
          type="submit"
          startIcon={<PersonAddAltIcon />}
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
          Add Staff
        </Button>
      </Link>
    </Paper>
  )
}

export default AddStaff
