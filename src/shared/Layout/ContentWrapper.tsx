import { Box, Grid } from "@mui/material"
import { ReactNode } from "react"

export default function ContentWrapper({
  children,
  hideWrapper,
}: {
  children: ReactNode
  hideWrapper: boolean
}) {
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {hideWrapper ? (
        children
      ) : (
        <Grid item sm={10}>
          <Box component="main">{children}</Box>
        </Grid>
      )}
    </>
  )
}
