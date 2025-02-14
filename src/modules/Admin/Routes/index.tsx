import { Route, Routes } from "react-router-dom"

import Admin from ".."
import Dashboard from "@/modules/Admin/Dashboard/Dashboard"
import ManageStaff from "@/modules/Admin/ManageStaff/ManageStaff"
import AddStaff from "../ManageStaff/components/AddStaff"
import SendMemo from "../SendMemo/SendMemo"
import ManageCompanies from "../ManageCompanies/ManageCompanies"
import AddCompany from "../ManageCompanies/components/AddCompany"

const AdminRouter = () => {
  return (
    <Routes>
      <Route element={<Admin />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="send-memo" element={<SendMemo />} />
      <Route path="manage-staff">
        <Route index element={<ManageStaff />} />
        <Route path="add-staff" element={<AddStaff />} />
      </Route>
      <Route path="manage-companies">
        <Route index element={<ManageCompanies />} />
        <Route path="add-company" element={<AddCompany />} />
      </Route>
    </Routes>
  )
}

export default AdminRouter
