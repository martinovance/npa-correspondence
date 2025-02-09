import Appbar from "@/components/Appbar"
import Sidebar from "@/components/Sidebar"
import { ReactNode } from "react"
import ContentWrapper from "./ContentWrapper"
import { useLocation } from "react-router-dom"
import { Box } from "@mui/material"
import TableLayout from "@/modules/Admin/Table/DashTable"

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
      <Box sx={{ display: "flex", margin: 3 }}>
        <Sidebar pathname={pathname} />
        <Box sx={{ flexGrow: 1, ml: 3 }}>
          <Appbar pathname={pathname} />
          <ContentWrapper
            hideWrapper={PATHS_WITH_HIDDEN_SIDEBARS.includes(pathname)}
          >
            {children}
          </ContentWrapper>
        </Box>
      </Box>
      {pathname === "/admin/dashboard" && (
        <Box sx={{ margin: 3, pb: 3 }}>
          <TableLayout />
        </Box>
      )}
    </>
  )
}

export default Layout
