import BaseRoutes from "@/constant/baseRoutes"
import ModalContextProvider from "@/context/ModalContext"
import { Loader } from "@/shared"
import { TableRecordsProvider } from "@/shared/Table/Table"
import { Suspense } from "react"
import { BrowserRouter, Routes as BrowserRoutes, Route } from "react-router-dom"

function Routes() {
  return (
    <Suspense fallback={<Loader />}>
      <TableRecordsProvider>
        <ModalContextProvider>
          <BrowserRouter>
            <BrowserRoutes>
              {BaseRoutes.map(({ path, Layout, component: Component }) =>
                Layout ? (
                  <Route
                    key={path}
                    path={path}
                    element={
                      <Layout>
                        <Component />{" "}
                      </Layout>
                    }
                  />
                ) : (
                  <Route key={path} path={path} element={<Component />} />
                )
              )}
            </BrowserRoutes>
          </BrowserRouter>
        </ModalContextProvider>
      </TableRecordsProvider>
    </Suspense>
  )
}

export default Routes
