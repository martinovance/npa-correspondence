import { lazy } from "react"

import { Layout as MainLayout } from "@/shared/index"
import { BasePaths } from "./paths"

const BaseRoutes = [
  {
    path: "/*",
    exact: true,
    component: lazy(() => import("@/modules/Auth/AuthRouter")),
    Layout: false,
    useAuth: false,
  },
  {
    path: `${BasePaths.ADMIN}/*`,
    exact: true,
    component: lazy(() => import("@/modules/Admin/Routes/index")),
    Layout: MainLayout,
    useAuth: false,
    // sidenavItems: ADMIN_SIDE_NAVS,
  },
]

export default BaseRoutes
