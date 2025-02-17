/* eslint-disable camelcase */
import { adminColumns, result } from "@/constant/dashboardData"
import Table from "@/shared/Table/Table"
import { TableCompProp } from "@/types/tableTypes"
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
    refNo,
    subject,
    sender,
    receiver,
    dateOfLetter,
    dateSent,
    serialNo,
    status,
  }: TableCompProp) {
    return {
      refNo,
      subject,
      sender,
      receiver,
      dateOfLetter,
      dateSent,
      serialNo,
      status,
    }
  }

  const list: TableCompProp[] = result.map((row) => createData(row)) || []

  return (
    <Table<TableCompProp>
      // emptyIconTitle="No Executive"
      // emptyIconMessage="You currently do not have any Executive yet"
      results={list || []}
      columns={adminColumns}
      handleChangePage={handleChangePage}
      handleChangeRowsPerPage={handleChangeRowsPerPage}
      page={page}
      rowsPerPage={rowsPerPage}
      // handleRowClick={(row) => handleOpenDrawer(row)}
      totalResults={result.length}
    />
  )
}

export default TableLayout
