import Appbar from "@/components/Appbar"
import Sidebar from "@/components/Sidebar"
import { ReactNode } from "react"
import ContentWrapper from "./ContentWrapper"
import { useLocation } from "react-router-dom"
import { Box, InputAdornment, InputBase, Typography } from "@mui/material"
import TableLayout from "@/modules/Admin/Table/DashTable"
import { Search } from "@mui/icons-material"
import Footer from "@/components/Footer"

const PATHS_WITH_HIDDEN_SIDEBARS = [
  "/campaign-manager/war-room",
  "/campaign-manager/war-room-state",
  "/situation-room-admin/war-room",
  "/security-monitoring-admin/war-room",
  "/situation-room/war-room",
  "/state-situation-room",
  "/national-situation-room",
]

const Layout = ({ children }: { children: ReactNode }) => {
  const location = useLocation()
  const pathname: string = location.pathname

  return (
    <>
      <Box
        sx={{
          display: "flex",
          margin: 3,
          pb: pathname !== "/admin/dashboard" ? 8 : 0,
        }}
      >
        <Sidebar pathname={pathname} />
        <Box sx={{ flexGrow: 1, ml: 3, height: "100%" }}>
          <Appbar pathname={pathname} />
          <ContentWrapper
            hideWrapper={PATHS_WITH_HIDDEN_SIDEBARS.includes(pathname)}
          >
            {children}
          </ContentWrapper>
        </Box>
      </Box>
      {pathname === "/admin/dashboard" && (
        <Box sx={{ margin: 3, pb: 8 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 3,
            }}
          >
            <Typography
              sx={{ color: "#fff", fontWeight: "700", fontSize: "18px" }}
            >
              Memo Correspondence Record
            </Typography>
            <InputBase
              placeholder="Search"
              sx={{
                borderRadius: "19.2px",
                bgcolor: "#E9E9E9",
                height: "35px",
                px: 2,
                opacity: "90%",
              }}
              startAdornment={
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              }
            />
          </Box>
          <TableLayout />
        </Box>
      )}
      <Footer />
    </>
  )
}

export default Layout
