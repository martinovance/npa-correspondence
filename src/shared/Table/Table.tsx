import * as React from "react"
import {
  Box,
  Chip,
  IconButton,
  Table as MuiTable,
  TableContainer,
  TablePagination,
} from "@mui/material"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import { column } from "@/types/tableTypes"

import { ReactComponent as Inbox } from "@/assets/Inbox.svg"
import { ReactComponent as Clock } from "@/assets/Clock.svg"
import { ReactComponent as Delete } from "@/assets/Delete.svg"

interface TableProps<T> {
  results: T[]
  columns: column<T>[]
  totalResults: number
  handleChangePage: (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => void
  handleChangeRowsPerPage: (event: React.ChangeEvent<HTMLInputElement>) => void
  page: number
  rowsPerPage: number
}

export default function Table<T>({
  results,
  columns,
  totalResults,
  handleChangePage,
  handleChangeRowsPerPage,
  page,
  rowsPerPage,
}: TableProps<T>) {
  const paginatedResults = results.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  )

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
                    align={column?.label === "Actions" ? "center" : "left"}
                    sx={{
                      color: "#fff",
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
            {paginatedResults?.map((row, index) => (
              <TableRow
                key={index}
                sx={{
                  cursor: "pointer",
                  background: "#FAF9F8",
                  "&:hover": {
                    background: "#FAF9F8",
                  },
                }}
              >
                {columns.map((column) => (
                  <TableCell
                    key={column.key as string}
                    align="left"
                    sx={{
                      color: "#272833",
                      fontWeight: 400,
                      width: column.key === "actions" ? "110px" : null,
                    }}
                  >
                    {column.key === "actions" ? (
                      <>
                        <IconButton>
                          <Inbox />
                        </IconButton>
                        <IconButton>
                          <Clock />
                        </IconButton>
                        <IconButton>
                          <Delete />
                        </IconButton>
                      </>
                    ) : column.key === "status" ? (
                      <Chip
                        label={row[column.key as keyof T] as string}
                        sx={{
                          backgroundColor:
                            row[column.key as keyof T] === "Active"
                              ? "#01A85A33"
                              : "#F02E3933",
                          color:
                            row[column.key as keyof T] === "Active"
                              ? "#01A85A"
                              : "#F02E39",
                          minWidth: "84px",
                        }}
                      />
                    ) : typeof row[column.key as keyof T] === "string" ||
                      typeof row[column.key as keyof T] === "number" ? (
                      (row[column.key as keyof T] as string | number)
                    ) : (
                      "—"
                    )}
                  </TableCell>
                ))}
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
