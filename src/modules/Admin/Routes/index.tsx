import { Route, Routes } from "react-router-dom"

import Admin from ".."
import Dashboard from "@/modules/Admin/Dashboard/Dashboard"

const AdminRouter = () => {
  return (
    <Routes>
      <Route element={<Admin />} />
      <Route path="dashboard" element={<Dashboard />} />
    </Routes>
  )
}

export default AdminRouter
