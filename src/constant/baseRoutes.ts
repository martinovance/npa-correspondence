import { ComponentType, lazy, LazyExoticComponent, ReactNode } from "react"

import { Layout as MainLayout } from "@/shared/index"
import { BasePaths } from "./paths"
import { ADMIN_SIDE_NAVS } from "./sideNav"
import { SideNavItem } from "@/types/sideNavsType"

interface RouteType {
  path: string
  exact?: boolean
  component: LazyExoticComponent<ComponentType>
  Layout?: ComponentType<{ children: ReactNode }> | false
  useAuth?: boolean
  sidenavItems?: SideNavItem[]
}
const BaseRoutes: RouteType[] = [
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
    sidenavItems: ADMIN_SIDE_NAVS,
  },
]

export default BaseRoutes
