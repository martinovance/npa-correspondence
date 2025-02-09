/* eslint-disable camelcase */
import { adminColumns, result } from "@/constant/dashboardData"
import Table from "@/shared/Table/Table"
import { TableCompProp } from "@/types/tableTypes"

function TableLayout() {
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
    <Table
      // emptyIconTitle="No Executive"
      // emptyIconMessage="You currently do not have any Executive yet"
      results={list || []}
      columns={adminColumns}
      // handleChangePage={handleChangePage}
      // handleChangeRowsPerPage={handleChangeRowsPerPage}
      // page={page}
      // rowsPerPage={rowsPerPage}
      // handleRowClick={(row) => handleOpenDrawer(row)}
      totalResults={result.length}
      // fixedColumn
    />
  )
}

export default TableLayout
