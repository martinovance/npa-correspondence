import { LocationCity } from "@mui/icons-material"
import { Button, Paper } from "@mui/material"
import AddCompanyForm from "./AddCompanyForm"
import useModal from "@/hooks/useModal"
import SuccessModal from "../../Modal/SuccessModal"

const AddCompany = () => {
  const [modal, setModal] = useModal()

  const openModal = () => {
    setModal((prev) => ({
      ...prev,
      modal,
      modalName: "successModal",
      message: "Company added successfully",
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
      <AddCompanyForm />
      <Button
        type="submit"
        onClick={openModal}
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

      <SuccessModal />
    </Paper>
  )
}

export default AddCompany
