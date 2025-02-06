import { NotificationsNone, Search } from "@mui/icons-material"
import {
  AppBar,
  Badge,
  Grid,
  InputAdornment,
  InputBase,
  Toolbar,
  Typography,
} from "@mui/material"

const Appbar = ({ pathname }: { pathname: string }) => {
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
          <Grid item md={4} mt={1}>
            <Typography
              variant="h5"
              sx={{
                color: "#000",
                fontWeight: "700",
              }}
            >
              {(pathname === "/admin/dashboard" && "Welcome! Admin.") ||
                (pathname === "/admin/send-memo" && "Send Memo") ||
                (pathname === "/admin/manage-staff" && "Manage Staff") ||
                (pathname === "/admin/manage-companies" && "Manage Companies")}
            </Typography>
          </Grid>
          <Grid item md={8}>
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
                    pl: 2,
                    opacity: "60%",
                  }}
                  startAdornment={
                    <InputAdornment position="start">
                      <Search />
                    </InputAdornment>
                  }
                />
              </Grid>
              <Grid item mt={1}>
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
