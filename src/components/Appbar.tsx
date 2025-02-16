import { NotificationsNone, Search } from "@mui/icons-material"
import { ReactComponent as ArrowBack } from "@/assets/ArrowBack.svg"
import {
  AppBar,
  Badge,
  Box,
  Grid,
  IconButton,
  InputAdornment,
  InputBase,
  Toolbar,
  Typography,
} from "@mui/material"
import { useLocation, useNavigate } from "react-router-dom"

const Appbar = ({ pathname }: { pathname: string }) => {
  const location = useLocation()
  const navigate = useNavigate()

  const pathSegments = location.pathname.split("/").filter(Boolean)
  const isNested = pathSegments.length > 2

  return (
    <AppBar
      elevation={0}
      position="static"
      sx={{
        bgcolor: "#fff",
        width: "100%",
        height: "76px",
        borderRadius: "16px",
      }}
    >
      <Toolbar>
        <Grid
          container
          justifyContent="space-between"
          alignItems="center"
          sx={{ mx: 2 }}
        >
          <Grid item md={5} mt={1}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 3,
              }}
            >
              {isNested && (
                <IconButton onClick={() => navigate(-1)}>
                  <ArrowBack />
                </IconButton>
              )}
              <Typography
                variant="h5"
                sx={{
                  color: "#000",
                  fontWeight: "700",
                }}
              >
                {(pathname === "/admin/dashboard" && "Welcome! Admin.") ||
                  (pathname === "/admin/send-memo" && "Send Memo") ||
                  (pathname.startsWith("/admin/manage-staff") &&
                    "Manage Staff") ||
                  (pathname.startsWith("/admin/manage-companies") &&
                    "Manage Companies") ||
                  (pathname === "/staff/dashboard" && "Welcome! Martins.") ||
                  (pathname === "/staff/send-memo" && "Send Memo") ||
                  (pathname.startsWith("/staff/inbox") && "Inbox") ||
                  (pathname.startsWith("/staff/sent") && "Sent")}
              </Typography>
            </Box>
          </Grid>
          <Grid item md={7}>
            <Grid
              container
              spacing={3}
              justifyContent="flex-end"
              alignItems="flex-start"
            >
              <Grid item mt={1}>
                <InputBase
                  placeholder="Search"
                  sx={{
                    borderRadius: "19.2px",
                    bgcolor: "#E9E9E9",
                    height: "35px",
                    px: 2,
                    opacity: "60%",
                  }}
                  startAdornment={
                    <InputAdornment position="start">
                      <Search />
                    </InputAdornment>
                  }
                />
              </Grid>
              <Grid item mt={1.5}>
                <Badge
                  variant="dot"
                  overlap="circular"
                  color={"error"}
                  badgeContent=" "
                  sx={{ cursor: "pointer" }}
                >
                  <NotificationsNone sx={{ color: "#01A85A" }} />
                </Badge>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}

export default Appbar
