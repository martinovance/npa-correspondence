import { AdminPaths, StaffPaths } from "@/constant/paths"
import {
  ForwardToInbox,
  GridViewRounded,
  Groups2,
  LocationCity,
} from "@mui/icons-material"
import MailIcon from "@mui/icons-material/Mail"

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

const STAFF_SIDE_NAVS = [
  {
    name: "Dashboard",
    path: StaffPaths.STAFF_DASHBOARD,
    icon: GridViewRounded,
  },
  {
    name: "Send memo",
    path: StaffPaths.STAFF_SEND_MEMO,
    icon: ForwardToInbox,
  },
  {
    name: "Inbox",
    path: StaffPaths.STAFF_INBOX,
    icon: MailIcon,
  },
  {
    name: "Sent",
    path: StaffPaths.STAFF_SENT,
    icon: ForwardToInbox,
  },
]

export { ADMIN_SIDE_NAVS, STAFF_SIDE_NAVS }
