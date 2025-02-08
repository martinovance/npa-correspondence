import { Box, Card, Chip, Grid, Typography } from "@mui/material"

import { ReactComponent as ArrowUp } from "@/assets/ArrowUp.svg"
import { MoreVert } from "@mui/icons-material"
import { CARDDATA } from "@/constant/dashboardData"

function DisplayCard() {
  return (
    <Grid container spacing={4}>
      {CARDDATA.map((card, index) => (
        <Grid key={index} item md={4}>
          <Card
            sx={{
              position: "relative",
              height: "160px",
              padding: "24px",
              borderRadius: "24px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
              }}
            >
              <Box
                sx={{
                  width: "66px",
                  height: "62px",
                  borderRadius: "24px",
                  bgcolor: "#CDE2D3",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <card.mainIcon />
              </Box>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  gap: "2px",
                }}
              >
                <Chip
                  icon={<ArrowUp />}
                  label={index === 1 ? "+ 5%" : "+ 2%"}
                  sx={{
                    bgcolor: "#CDE2D3",
                    padding: "4px",
                    fontWeight: "700",
                    fontSize: "16px",
                  }}
                />
                <MoreVert />
              </Box>
            </Box>
            <Box
              sx={{
                mt: 1,
                display: "flex",
                flexDirection: "column",
                gap: "4px",
              }}
            >
              <Typography sx={{ fontSize: "18px", fontWeight: "600" }}>
                {card.title}
              </Typography>
              <Typography sx={{ fontSize: "24px", color: "#01A85A" }}>
                {card.total}
              </Typography>
              <Typography sx={{ fontWeight: "500", fontSize: "16px" }}>
                {card.subtitle}
              </Typography>
            </Box>
            <Box
              sx={{
                position: "absolute",
                bottom: 0,
                right: 0,
              }}
            >
              <card.bgIcon />
            </Box>
          </Card>
        </Grid>
      ))}
    </Grid>
  )
}

export default DisplayCard
