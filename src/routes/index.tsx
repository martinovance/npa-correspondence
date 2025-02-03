import BaseRoutes from "@/constant/baseRoutes"
import { BrowserRouter, Routes as BrowserRoutes, Route } from "react-router-dom"

function Routes() {
  return (
    <BrowserRouter>
      <BrowserRoutes>
        {BaseRoutes.map(({ path, Layout, component: Component }) =>
          Layout ? (
            <Route key={path} path={path} element={<Component />} />
          ) : (
            <Route key={path} path={path} element={<Component />} />
          )
        )}
      </BrowserRoutes>
    </BrowserRouter>
  )
}

export default Routes
