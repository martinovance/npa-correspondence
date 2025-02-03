import BaseRoutes from "@/constant/baseRoutes"
import { Loader } from "@/shared"
import { Suspense } from "react"
import { BrowserRouter, Routes as BrowserRoutes, Route } from "react-router-dom"

function Routes() {
  return (
    <Suspense fallback={<Loader />}>
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
    </Suspense>
  )
}

export default Routes
