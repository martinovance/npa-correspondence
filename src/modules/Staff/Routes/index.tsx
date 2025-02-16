import { Route, Routes } from "react-router-dom"

import Staff from ".."
import Dashboard from "../Dashboard/Dashboard"

const AdminRouter = () => {
  return (
    <Routes>
      <Route element={<Staff />} />
      <Route path="dashboard" element={<Dashboard />} />
    </Routes>
  )
}

export default AdminRouter
