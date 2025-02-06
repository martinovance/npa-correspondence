import { AdminPaths } from "@/constant/paths"
import {
  ForwardToInbox,
  GridViewRounded,
  Groups2,
  LocationCity,
} from "@mui/icons-material"

const ADMIN_SIDE_NAVS = [
  {
    name: "Dashboard",
    path: AdminPaths.ADMIN_DASHBOARD,
    icon: GridViewRounded,
  },
  {
    name: "Send memo",
    path: AdminPaths.ADMIN_SEND_MEMO,
    icon: ForwardToInbox,
  },
  {
    name: "Manage staff",
    path: AdminPaths.ADMIN_MANAGE_STAFF,
    icon: Groups2,
  },
  {
    name: "Manage companies",
    path: AdminPaths.ADMIN_MANAGE_COMPANIES,
    icon: LocationCity,
  },
]

export { ADMIN_SIDE_NAVS }
