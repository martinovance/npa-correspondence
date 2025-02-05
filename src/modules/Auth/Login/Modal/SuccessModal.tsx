import useModal from "@/hooks/useModal"
import Modal from "@/shared/Modal/Modal"
import { Box, Card, Typography } from "@mui/material"

import { useEffect } from "react"
import { Check } from "@mui/icons-material"
import { useNavigate } from "react-router-dom"

function SuccessModal() {
  const [state, setState] = useModal()
  const navigate = useNavigate()

  useEffect(() => {
    if (state.modalName === "successModal") {
      const closeModal = setTimeout(() => {
        setState({ ...state, modalName: "" })
        clearTimeout(closeModal)
        navigate("/admin/dashboard")
      }, 4000)
    }
  }, [state, navigate])

  return (
    <Modal modalName="successModal">
      <Box
        sx={{
          position: "relative",
          textAlign: "center",
          width: "340px",
          height: "100%",
          padding: "2em 1.5em",
          "& .MuiTypography-subtitle1": {
            paddingTop: "1rem",
            color: "#6B6C7E",
          },
        }}
      >
        <Card
          style={{
            position: "absolute",
            transform: "translate(-50%, -50%)",
            top: "1%",
            left: "50%",
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#fff",
          }}
        >
          <Box
            sx={{
              width: "35px",
              height: "35px",
              borderRadius: "50%",
              placeContent: "center",
              backgroundColor: "#01A85A",
            }}
          >
            <Check sx={{ color: "#fff", width: 15, height: 15 }} />
          </Box>
        </Card>
        <Typography variant="h5" sx={{ pt: 3 }}>
          {state.message}
        </Typography>
        <Typography variant="subtitle1">{state.redirect}</Typography>
      </Box>
    </Modal>
  )
}

export default SuccessModal
