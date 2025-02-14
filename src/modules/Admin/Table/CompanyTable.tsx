/* eslint-disable camelcase */
import { CompaniesData, ManageCompanyColumns } from "@/constant/companyData"
import Table from "@/shared/Table/Table"
import { Company } from "@/types/tableTypes"
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
    companyId,
    companyName,
    contactPerson,
    email,
    phone,
    address,
    status,
  }: Company) {
    return {
      companyId,
      companyName,
      contactPerson,
      email,
      phone,
      address,
      status,
    }
  }

  const list: Company[] = CompaniesData.map((row) => createData(row)) || []

  return (
    <Table<Company>
      // emptyIconTitle="No Executive"
      // emptyIconMessage="You currently do not have any Executive yet"
      results={list || []}
      columns={ManageCompanyColumns}
      handleChangePage={handleChangePage}
      handleChangeRowsPerPage={handleChangeRowsPerPage}
      page={page}
      rowsPerPage={rowsPerPage}
      // handleRowClick={(row) => handleOpenDrawer(row)}
      totalResults={CompaniesData.length}
    />
  )
}

export default TableLayout
