import { Button, Paper } from "@mui/material"
import AddStaffForm from "./AddStaffForm"
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt"
import useModal from "@/hooks/useModal"
import SuccessModal from "../../Modal/SuccessModal"

const AddStaff = () => {
  const [modal, setModal] = useModal()

  const openModal = () => {
    setModal((prev) => ({
      ...prev,
      modal,
      modalName: "successModal",
      message: "Staff added successfully",
    }))
  }

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
      <Button
        type="submit"
        onClick={openModal}
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

      <SuccessModal />
    </Paper>
  )
}

export default AddStaff
