import { Box, Divider, Skeleton, Typography } from "@mui/material"

import { ADMIN_SIDE_NAVS } from "@/constant/sideNav"
import { NavLink } from "react-router-dom"

import { ReactComponent as NPALogo2 } from "@/assets/NPALogo2.svg"
import { ReactComponent as Logout } from "@/assets/Logout.svg"

const role = "admin"

const Sidebar = ({ pathname }: { pathname: string }) => {
  const SIDENAVS = {
    admin: ADMIN_SIDE_NAVS,
  }

  return (
    <Box sx={{ position: "static", width: "20%" }}>
      <Box
        // component="aside"
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          background: "#fff",
          padding: "2.5rem 16px",
          justifyContent: "flex-start",
          borderRadius: "24px",
          "& img": {
            marginRight: 1,
          },
          "& a": {
            display: "flex",
            textDecoration: "none",
            color: "#A7A9BC",
            // marginBottom: '1em',
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
            justifyContent: "flex-start",
            alignItems: "center",
            gap: "8px",
            placeContent: "center",
          }}
        >
          <NPALogo2 />
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
                    background: pathname === sidenav.path ? "#01A85A" : "#fff",
                    borderRadius: "16px",
                    height: "40px",
                  }}
                  to={sidenav.path}
                  key={sidenav.name}
                >
                  <sidenav.icon
                    stroke={pathname === sidenav.path ? "#fff" : "#000"}
                    fill={pathname === sidenav.path ? "#01A85A" : "#fff"}
                    style={{
                      width: "10%",
                      color: pathname === sidenav.path ? "#01A85A" : "#fff",
                    }}
                  />
                  <Typography
                    variant="body1"
                    sx={{
                      pl: "10px",
                      color: pathname === sidenav.path ? "#fff" : "#000",
                    }}
                  >
                    {sidenav.name}
                  </Typography>
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
            sx={{
              mt: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <Logout />
            <Typography
              variant="body1"
              display="flex"
              alignItems="center"
              fontSize="14px"
            >
              Logout
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Sidebar
