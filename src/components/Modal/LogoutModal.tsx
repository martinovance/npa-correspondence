import useModal from "@/hooks/useModal"
import Modal from "@/shared/Modal/Modal"
import { Box, Button, Typography } from "@mui/material"

import { ReactComponent as ErrorCheck } from "@/assets/ErrorCheck.svg"
import { useNavigate } from "react-router-dom"

function LogoutModal() {
  const [state, setState] = useModal()
  const navigate = useNavigate()

  const handleNavigate = () => {
    navigate("/sign-in")

    setState({ ...state, modalName: "" })
  }

  return (
    <Modal modalName="logoutModal">
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
        <ErrorCheck />
        <Typography
          sx={{ width: "200px", fontSize: "16px", fontWeight: "600", pt: 4 }}
        >
          {state.message}
        </Typography>
        <Box
          sx={{
            mt: 4,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <Button
            variant="text"
            sx={{
              width: "125px",
              borderRadius: "16px",
              color: "#FF0000",
              textTransform: "capitalize",
            }}
          >
            Cancel
          </Button>
          <Button
            onClick={handleNavigate}
            sx={{
              width: "115px",
              borderRadius: "16px",
              backgroundColor: "#FF0000",
              color: "#fff",
              textTransform: "capitalize",
            }}
          >
            Confirm
          </Button>
        </Box>
      </Box>
    </Modal>
  )
}

export default LogoutModal
