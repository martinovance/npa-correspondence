import { Box, Divider, Skeleton, Typography } from "@mui/material"

import { ADMIN_SIDE_NAVS, STAFF_SIDE_NAVS } from "@/constant/sideNav"
import { NavLink } from "react-router-dom"

import { ReactComponent as NPALogo2 } from "@/assets/NPALogo2.svg"
import { ReactComponent as Logout } from "@/assets/Logout.svg"
import { useState } from "react"
import useModal from "@/hooks/useModal"
import LogoutModal from "./Modal/LogoutModal"

const role = "admin"

const Sidebar = ({ pathname }: { pathname: string }) => {
  const [modal, setModal] = useModal()

  const openModal = () => {
    setModal((prev) => ({
      ...prev,
      modal,
      modalName: "logoutModal",
      message: "You are about to logout. Are you sure this is what you want?",
    }))
  }

  const [collapsed, setCollapsed] = useState<boolean>(() => {
    return localStorage.getItem("sidebarCollapsed") === "true"
  })

  const handleNavShrink = (path: string) => {
    if (path === "/admin/manage-companies") {
      setCollapsed(true)
      localStorage.setItem("sidebarCollapsed", "true")
    } else {
      setCollapsed(false)
      localStorage.setItem("sidebarCollapsed", "false")
    }
  }

  const SIDENAVS = {
    admin: ADMIN_SIDE_NAVS,
    staff: STAFF_SIDE_NAVS,
  }

  return (
    <Box sx={{ position: "static", minWidth: collapsed ? "5%" : "20%" }}>
      <Box
        component="aside"
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "95%",
          background: "#fff",
          padding: collapsed ? "1rem" : "2.5rem 14px 0 14px",
          justifyContent: "flex-start",
          borderRadius: "24px",
          transition: "all 0.3s ease-in-out",
          "& img": {
            marginRight: 1,
          },
          "& a": {
            display: "flex",
            textDecoration: "none",
            color: "#A7A9BC",
            paddingLeft: 2,
            "& .MuiTypography-body1": {
              padding: "10px 10px",
            },
          },
          "& .MuiTypography-body1": {
            padding: "1em 0px",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: collapsed ? "center" : "flex-start",
            alignItems: "center",
            gap: "8px",
            placeContent: "center",
          }}
        >
          <NPALogo2 />
          {!collapsed && (
            <Typography
              sx={{
                fontWeight: "700",
                fontSize: "12px",
                color: "#000",
                lineHeight: 1.2,
              }}
            >
              Nigeria
              <br />
              Port
              <br />
              Authority
            </Typography>
          )}
        </Box>
        <Box sx={{ flexGrow: 1 }}>
          {!SIDENAVS ? (
            <Box sx={{ margin: "0px 1.25rem" }}>
              {[0, 1, 2, 3, 4].map((value) => (
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: ".8em",
                  }}
                  key={value}
                >
                  <Skeleton
                    variant="circular"
                    width={30}
                    height={30}
                    sx={{
                      background: "#e0e0e066",
                      mr: 2,
                    }}
                  />
                  <Skeleton
                    variant="text"
                    height={30}
                    width={140}
                    sx={{ background: "#e0e0e066" }}
                  />
                </Box>
              ))}
            </Box>
          ) : (
            <Box sx={{ mt: 6 }}>
              {SIDENAVS[role]?.map((sidenav) => (
                <NavLink
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginTop: "0.5rem",
                    background: pathname.startsWith(sidenav.path)
                      ? "#01A85A"
                      : "#fff",
                    borderRadius: "16px",
                    height: "40px",
                    padding: collapsed ? "0.5rem" : "0 1rem",
                    transition: "all 0.3s ease-in-out",
                  }}
                  onClick={() => handleNavShrink(sidenav.path)}
                  to={sidenav.path}
                  key={sidenav.name}
                >
                  <sidenav.icon
                    stroke={pathname.startsWith(sidenav.path) ? "#fff" : "#000"}
                    fill={
                      pathname.startsWith(sidenav.path) ? "#01A85A" : "#fff"
                    }
                    style={{
                      width: collapsed ? "100%" : "10%",
                      color: pathname.startsWith(sidenav.path)
                        ? "#01A85A"
                        : "#fff",
                    }}
                  />
                  {!collapsed && (
                    <Typography
                      variant="body1"
                      sx={{
                        pl: "10px",
                        color: pathname.startsWith(sidenav.path)
                          ? "#fff"
                          : "#000",
                      }}
                    >
                      {sidenav.name}
                    </Typography>
                  )}
                </NavLink>
              ))}
            </Box>
          )}
        </Box>
        <Box
          sx={{
            placeContent: "center",
            pb: 1,
            "& a": {
              paddingLeft: "0px !important",
              marginLeft: "0px !important",
            },
            "& .MuiTypography-body1": {
              color: "#000",
            },
          }}
        >
          <Divider />
          <Box
            onClick={openModal}
            sx={{
              mt: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "8px",
              cursor: "pointer",
            }}
          >
            <Logout />
            {!collapsed && (
              <Typography
                variant="body1"
                display="flex"
                alignItems="center"
                fontSize="14px"
              >
                Logout
              </Typography>
            )}
          </Box>
        </Box>
      </Box>

      <LogoutModal />
    </Box>
  )
}

export default Sidebar
