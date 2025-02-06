import useModal from "@/hooks/useModal"
import Modal from "@/shared/Modal/Modal"
import { Box, Button, Card, Typography } from "@mui/material"

import { Cached, Check } from "@mui/icons-material"
import { useNavigate } from "react-router-dom"

function SuccessModal() {
  const [state, setState] = useModal()
  const navigate = useNavigate()

  const handleNavigate = () => {
    navigate("/sign-in")

    setState({ ...state, modalName: "" })
  }

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
            width: "80px",
            height: "80px",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#fff",
          }}
        >
          <Box
            sx={{
              width: "55px",
              height: "55px",
              borderRadius: "50%",
              placeContent: "center",
              backgroundColor: "#01A85A",
            }}
          >
            <Check sx={{ color: "#fff", width: 20, height: 20 }} />
          </Box>
        </Card>
        <Typography variant="h5" sx={{ pt: 3 }}>
          {state.message}
        </Typography>
        <Typography variant="subtitle1">{state.caption}</Typography>
        <Box
          sx={{
            mt: 2,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <Button
            sx={{
              width: "125px",
              borderRadius: "16px",
              backgroundColor: "#C1C1C1",
              color: "#fff",
              textTransform: "capitalize",
            }}
          >
            <Cached sx={{ mr: "2px" }} />
            Send Again
          </Button>
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
