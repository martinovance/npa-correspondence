import useModal from "@/hooks/useModal"
import Modal from "@/shared/Modal/Modal"
import { Box, Button, Card, Typography } from "@mui/material"

import { ReactComponent as Check } from "@/assets/Check.svg"
import { useLocation, useNavigate } from "react-router-dom"

function SuccessModal() {
  const [state, setState] = useModal()
  const navigate = useNavigate()
  const location = useLocation()
  const pathname: string = location.pathname

  const handleNavigate = () => {
    if (pathname === "/admin/send-memo") {
      navigate("/admin/dashboard")
    }
    if (pathname === "/admin/manage-staff/add-staff") {
      navigate("/admin/manage-staff")
    } else {
      navigate("/admin/manage-companies")
    }

    setState({ ...state, modalName: "" })
  }

  return (
    <Modal modalName="successModal">
      <Box
        sx={{
          position: "relative",
          textAlign: "center",
          width: "300px",
          height: "100%",
          padding: "2em 1.5em",
          placeItems: "center",
          "& .MuiTypography-subtitle1": {
            paddingTop: "1rem",
            color: "#6B6C7E",
          },
        }}
      >
        <Card
          sx={{
            width: "150px",
            height: "150px",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#01A85A",
          }}
        >
          <Check />
        </Card>
        <Typography sx={{ fontSize: "16px", fontWeight: "600", pt: 4 }}>
          {state.message}
        </Typography>
        <Box
          sx={{
            mt: 3,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <Button
            onClick={handleNavigate}
            sx={{
              width: "115px",
              borderRadius: "16px",
              backgroundColor: "#01A85A",
              color: "#fff",
              textTransform: "capitalize",
            }}
          >
            Continue
          </Button>
        </Box>
      </Box>
    </Modal>
  )
}

export default SuccessModal
