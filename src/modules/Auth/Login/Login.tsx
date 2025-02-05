import { Box, Typography } from "@mui/material"
import { ReactComponent as NPALogo } from "@/assets/NPALogo.svg"
import LoginForm from "./components/LoginForm"
import SuccessModal from "./Modal/SuccessModal"
import useModal from "@/hooks/useModal"

function Login() {
  const [modal, setModal] = useModal()

  const openModal = () => {
    setModal((prev) => ({
      ...prev,
      modal,
      modalName: "successModal",
      message: "Login Successful!",
      redirect: "Redirecting in 4 seconds...",
    }))
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 5,
        padding: "24px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <NPALogo />
        <Typography
          sx={{
            fontWeight: "700",
            fontSize: "16px",
            color: "#fff",
            lineHeight: 1.2,
          }}
        >
          Nigeria
          <br />
          Port
          <br />
          Authority
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "24px",
        }}
      >
        <Typography sx={{ fontWeight: "700", fontSize: "36px", color: "#fff" }}>
          Admin Login
        </Typography>
        <LoginForm openModal={openModal} />
      </Box>

      <SuccessModal />
    </Box>
  )
}

export default Login
