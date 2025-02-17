import { Box, Button, InputLabel, TextField, Typography } from "@mui/material"
import { Link } from "react-router-dom"

interface LoginFormProps {
  openModal: () => void
}

function LoginForm({ openModal }: LoginFormProps) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "480px",
        gap: 3,
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
      <Box>
        <InputLabel
          sx={{
            fontWeight: "700",
            fontSize: "16px",
            color: "#fff",
            mb: 2,
          }}
        >
          Email
        </InputLabel>
        <TextField
          name="email"
          placeholder="Enter email..."
          fullWidth
          autoComplete="off"
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
      <Box>
        <InputLabel
          sx={{
            fontWeight: "700",
            fontSize: "16px",
            color: "#fff",
            mb: 2,
          }}
        >
          Password
        </InputLabel>
        <TextField
          name="password"
          placeholder="Enter password..."
          fullWidth
          type="password"
          autoComplete="off"
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
      <Link
        to="/forgot-password"
        style={{ textDecoration: "none", marginLeft: "auto" }}
      >
        <Typography
          sx={{
            fontSize: "12px",
            fontWeight: "400",
            color: "#fff",
            textDecoration: "underline",
          }}
        >
          Forgot Password?
        </Typography>
      </Link>

      <Button
        fullWidth
        onClick={openModal}
        sx={{
          height: "45px",
          borderRadius: "16px",
          bgcolor: "#01A85A80",
          textTransform: "capitalize",
          color: "#fff",
        }}
      >
        Login
      </Button>
      <Typography
        sx={{
          fontSize: "12px",
          fontWeight: "400",
          color: "#01A85A",
          textDecoration: "underline",
        }}
      >
        Staff Login
      </Typography>
    </Box>
  )
}

export default LoginForm
