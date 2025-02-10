import { Paper, Typography } from "@mui/material"
import { ReactComponent as Trademark } from "@/assets/Trademark.svg"
function Footer() {
  return (
    <Paper
      sx={{
        position: "fixed",
        bottom: 0,
        width: "100%",
        height: "36px",
        borderRadius: "0 0 24px 24px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "4px",
      }}
    >
      <Trademark />
      <Typography
        sx={{
          color: "#01A85A",
          fontSize: "16px",
          fontWeight: "500",
        }}
      >
        Nigerian Port Authority admin 2024
      </Typography>
    </Paper>
  )
}

export default Footer
