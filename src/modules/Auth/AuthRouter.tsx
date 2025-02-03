import React, { lazy } from "react"
import { Navigate, Route, Routes } from "react-router-dom"

import Auth from "."
import { AuthPaths } from "@/constant/paths"
const SigninRoute = lazy(() => import("@/modules/Auth/Login/Login"))
const ForgotPassword = lazy(
  () => import("@/modules/Auth/ForgotPassword/ForgotPassword")
)

const AuthRouter = () => {
  return (
    <Routes>
      <Route element={<Auth />}>
        <Route index element={<Navigate to={AuthPaths.SIGNIN} replace />} />
        <Route path={AuthPaths.SIGNIN} element={<SigninRoute />} />
        <Route path={AuthPaths.FORGOT_PASSWORD} element={<ForgotPassword />} />
      </Route>
    </Routes>
  )
}

export default AuthRouter
