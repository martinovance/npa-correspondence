import { Box, Button, TextField, Typography } from "@mui/material"
import { ReactComponent as NPALogo } from "@/assets/NPALogo.svg"

function ForgotPassword() {
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
          <Box>
            <TextField
              name="email"
              placeholder="Enter email..."
              fullWidth
              InputProps={{
                style: {
                  height: "48px",
                  borderRadius: "16px",
                  border: "1px solid #fff",
                  backgroundColor: "#fff",
                },
              }}
            />
          </Box>
          <Button
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
    </Box>
  )
}

export default ForgotPassword
