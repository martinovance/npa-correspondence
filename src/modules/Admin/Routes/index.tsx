import { Route, Routes } from "react-router-dom"

import Admin from ".."
import Dashboard from "@/modules/Admin/Dashboard/Dashboard"
import ManageStaff from "@/modules/Admin/ManageStaff/ManageStaff"

const AdminRouter = () => {
  return (
    <Routes>
      <Route element={<Admin />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="manage-staff" element={<ManageStaff />} />
    </Routes>
  )
}

export default AdminRouter
