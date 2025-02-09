import * as React from "react"
import {
  Box,
  IconButton,
  Table as MuiTable,
  TableContainer,
  TablePagination,
} from "@mui/material"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import { adminColumn, TableCompProp } from "@/types/tableTypes"

import { ReactComponent as Inbox } from "@/assets/Inbox.svg"
import { ReactComponent as Clock } from "@/assets/Clock.svg"
import { ReactComponent as Delete } from "@/assets/Delete.svg"

interface TableProps {
  results: TableCompProp[]
  columns: adminColumn[]
  totalResults: number
}

export default function Table({ results, columns, totalResults }: TableProps) {
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(5)

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <TableContainer
        sx={{
          flex: 1,
          height: "auto",
          minHeight: 100,
          borderRadius: "16px",
          overflowY: "auto",
          "&::-webkit-scrollbar": {
            width: "0.4em",
          },
          "&::-webkit-scrollbar-track": {
            backgroundColor: "#E7E7ED",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#CDCED9",
          },
        }}
      >
        <MuiTable>
          <TableHead
            sx={{
              height: "76px",
              px: 3,
            }}
          >
            <TableRow>
              <>
                {columns?.map((column) => (
                  <TableCell
                    key={column?.label}
                    align="left"
                    sx={{
                      background: "#01A85A",
                      borderColor: "#01A85A",
                      fontWeight: 600,
                    }}
                  >
                    {column?.label}
                  </TableCell>
                ))}
              </>
            </TableRow>
          </TableHead>
          <TableBody>
            {results?.map((row) => (
              <TableRow
                key={row.refNo}
                sx={{
                  cursor: "pointer",
                  background: "#FAF9F8",
                  "&:hover": {
                    background: "#FAF9F8",
                  },
                }}
              >
                <TableCell
                  key={row.serialNo}
                  align="right"
                  // onClick={() => handleRowClick(row)}
                  sx={{
                    color: "#272833",
                    fontWeight: 400,
                    // minWidth: "unset",
                    "&:nth-child(1)": {
                      position: "sticky",
                      left: 0,
                      boxShadow:
                        "0px 1px 2px rgba(0, 0, 0, 0.3), 0px 2px 6px 2px rgba(0, 0, 0, 0.15)",
                      background: "#FFF",
                      "&:hover": {
                        background: "#FAF9F8",
                      },
                    },
                  }}
                >
                  {row.refNo}
                </TableCell>
                <TableCell>{row.subject}</TableCell>
                <TableCell>{row.sender}</TableCell>
                <TableCell>{row.receiver}</TableCell>
                <TableCell>{row.dateOfLetter}</TableCell>
                <TableCell>{row.dateSent}</TableCell>
                <TableCell>{row.serialNo}</TableCell>
                <TableCell>{row.status}</TableCell>
                {columns.flatMap((column) => column.label === "action") && (
                  <TableCell>
                    <IconButton>
                      <Inbox />
                    </IconButton>
                    <IconButton>
                      <Clock />
                    </IconButton>
                    <IconButton>
                      <Delete />
                    </IconButton>
                  </TableCell>
                )}
              </TableRow>
            ))}
          </TableBody>
        </MuiTable>
        {results?.length > 0 && (
          <Box
            sx={{
              background: "#FAF9F8",
              width: "100%",
            }}
          >
            <TablePagination
              rowsPerPageOptions={[5, 10, 15]}
              component="div"
              count={totalResults || results?.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Box>
        )}
      </TableContainer>
    </Box>
  )
}

/**
 * usage
 * import tableRecordContext
 * @const { records } = React.useContext(TableRecordsContext);
 * here records hold all selected values
 * you also have access to changeRecords incase you want to clear the records or selected fields
 *
 * eg :
 * @import Table, { TableRecordsContext } from "shared/NewTable";
 *
 * @const { records, changeRecords } = React.useContext(TableRecordsContext);
 * NB: you need to pass checkbox props to your table component for this to work
 * it is recommended to clear the records before leaving the component like this
 *
 *useEffect(() => {
 *return () => changeRecords([]);
 * }, []);
 *
 */
export const TableRecordsContext = React.createContext({})
// eslint-disable-next-line react/prop-types
export function TableRecordsProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [records] = React.useState([])

  // // eslint-disable-next-line no-shadow
  // const handleChangeRecords = (records) => {
  //   setRecords(records)
  // }

  return (
    <TableRecordsContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        records,
        // changeRecords: handleChangeRecords,
      }}
    >
      {children}
    </TableRecordsContext.Provider>
  )
}
