import { Box, Button, TextField, Typography } from "@mui/material"
import { ReactComponent as NPALogo } from "@/assets/NPALogo.svg"
import { ChevronLeft } from "@mui/icons-material"
import { Link } from "react-router-dom"
import useModal from "@/hooks/useModal"
import SuccessModal from "./Modal/SuccessModal"

function ForgotPassword() {
  const [modal, setModal] = useModal()

  const openModal = () => {
    setModal((prev) => ({
      ...prev,
      modal,
      modalName: "successModal",
      message: "Reset email sent!",
      caption:
        "We have sent instructions email to nigerianportauthorityict@gmail.com",
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
          justifyContent: "flex-start",
          alignItems: "center",
          gap: "4px",
        }}
      >
        <ChevronLeft sx={{ color: "#fff" }} />
        <Link to="/sign-in" style={{ textDecoration: "none" }}>
          <Typography
            sx={{
              fontSize: "12px",
              fontWeight: "400",
              color: "#fff",
              textDecoration: "underline",
            }}
          >
            Back to login
          </Typography>
        </Link>
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
          Forgot Password
        </Typography>
        <Typography
          sx={{
            width: "480px",
            fontWeight: "500",
            fontSize: "18px",
            color: "#C1C1C1",
            textAlign: "center",
          }}
        >
          Enter your email address and we will send you reset instructions
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "480px",
            gap: 3,
          }}
        >
          <Box
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  border: "none",
                },
                "&:hover fieldset": {
                  border: "none",
                },
                "&.Mui-focused fieldset": {
                  border: "none",
                },
              },
            }}
          >
            <TextField
              name="email"
              placeholder="Enter email..."
              fullWidth
              autoComplete="off"
              InputProps={{
                style: {
                  height: "48px",
                  borderRadius: "16px",
                  backgroundColor: "#fff",
                },
              }}
            />
          </Box>
          <Button
            onClick={openModal}
            fullWidth
            sx={{
              height: "45px",
              borderRadius: "16px",
              bgcolor: "#01A85A80",
              textTransform: "capitalize",
              color: "#fff",
            }}
          >
            Reset Password
          </Button>
        </Box>
      </Box>

      <SuccessModal />
    </Box>
  )
}

export default ForgotPassword
