/* eslint-disable camelcase */
import { EmployeeData, ManageStaffColumns } from "@/constant/staffData"
import Table from "@/shared/Table/Table"
import { Employee } from "@/types/tableTypes"
import { useState } from "react"

function TableLayout() {
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(5)

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  function createData({
    personalNo,
    name,
    email,
    department,
    subDepartment,
  }: Employee) {
    return {
      personalNo,
      name,
      email,
      department,
      subDepartment,
    }
  }

  const list: Employee[] = EmployeeData.map((row) => createData(row)) || []

  return (
    <Table<Employee>
      // emptyIconTitle="No Executive"
      // emptyIconMessage="You currently do not have any Executive yet"
      results={list || []}
      columns={ManageStaffColumns}
      handleChangePage={handleChangePage}
      handleChangeRowsPerPage={handleChangeRowsPerPage}
      page={page}
      rowsPerPage={rowsPerPage}
      // handleRowClick={(row) => handleOpenDrawer(row)}
      totalResults={EmployeeData.length}
    />
  )
}

export default TableLayout
