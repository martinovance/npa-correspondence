import React, { useState } from "react"
import {
  TextField,
  Button,
  Typography,
  Paper,
  Box,
  Autocomplete,
} from "@mui/material"
import { ForwardToInbox } from "@mui/icons-material"
import { ReactComponent as Upload } from "@/assets/Upload.svg"
import { ReactComponent as Upload2 } from "@/assets/Upload2.svg"
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf"
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown"

const options = [
  "npaagmtraining@gmail.com",
  "example1@gmail.com",
  "example2@gmail.com",
  "example3@gmail.com",
]

function SendMemo() {
  const [file, setFile] = useState<File | null>(null)

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFile = event.target.files?.[0] || null
    setFile(uploadedFile)
  }

  return (
    <Paper
      sx={{
        borderRadius: "16px",
      }}
    >
      <Box
        sx={{
          "& .MuiTextField-root .MuiInput-underline:before": {
            borderBottom: "2px solid #EAEAEA",
          },
          "& .MuiTextField-root .MuiInput-underline:after": {
            borderBottom: "none",
          },
          "& .message-field .MuiInput-underline:before, & .message-field .MuiInput-underline:after, & .message-field .MuiInput-underline:hover:not(.Mui-disabled):before":
            {
              borderBottom: "none",
            },
          "& .MuiInputLabel-root": {
            paddingX: 2,
            fontWeight: "600",
            fontSize: "16px",
            color: "#000",
          },
          "& .MuiInputLabel-root.Mui-focused": {
            color: "#000",
          },
        }}
      >
        <Box
          sx={{
            bgcolor: "#01A85A4D",
            height: "43px",
            px: 2,
            placeContent: "center",
          }}
        >
          <Typography variant="body1" fontWeight="bold">
            New Message
          </Typography>
        </Box>
        <Autocomplete
          freeSolo
          options={options}
          renderInput={(params) => (
            <TextField
              {...params}
              fullWidth
              label="To:"
              variant="standard"
              InputLabelProps={{
                shrink: false,
              }}
              InputProps={{
                ...params.InputProps,
                endAdornment: (
                  <>
                    {params.InputProps.endAdornment}
                    <ArrowDropDownIcon />
                  </>
                ),
              }}
              sx={{ "& .MuiInputBase-root": { pl: "50px", pr: 2 } }}
            />
          )}
        />
        <TextField
          fullWidth
          label="Subject:"
          variant="standard"
          InputLabelProps={{
            shrink: false,
          }}
          sx={{ "& .MuiInputBase-root": { pl: 11, pr: 2 } }}
        />
        <TextField
          fullWidth
          label="Reference No.:"
          variant="standard"
          InputLabelProps={{
            shrink: false,
          }}
          sx={{ "& .MuiInputBase-root": { pl: 18, pr: 2 } }}
        />
        <TextField
          fullWidth
          variant="standard"
          multiline
          rows={10}
          className="message-field"
          sx={{ "& .MuiInputBase-root": { p: 2 } }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          gap: 2,
          padding: 2,
        }}
      >
        {file && (
          <Box
            sx={{
              width: 180,
              height: 190,
              border: "1px solid #C1C1C1",
              borderRadius: "0 0 50px 0",
              position: "relative",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              backgroundColor: "#fff",
            }}
          >
            <Box
              sx={{
                flexGrow: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#f5f5f5",
              }}
            >
              <PictureAsPdfIcon sx={{ color: "#ddd", fontSize: 50 }} />
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "#EFEFEF",
                p: 1,
                border: "0.5px solid #C1C1C1",
                height: "44px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  backgroundColor: "#F48277",
                  color: "#000",
                  px: 0.5,
                  py: 0.5,
                  width: 23,
                  height: 20,
                  borderRadius: 2,
                }}
              >
                <Typography sx={{ fontSize: "12px", fontWeight: "bold" }}>
                  PDF
                </Typography>
              </Box>
              <Typography
                sx={{
                  fontSize: "10px",
                  fontWeight: "600",
                  ml: 1,
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {file.name}
              </Typography>
            </Box>
            <Box
              sx={{
                position: "absolute",
                bottom: 0,
                right: 31,
                width: 30,
                height: 30,
                backgroundColor: "#C1C1C1",
                clipPath: "polygon(0 100%, 100% 0, 100% 100%)",
              }}
            />
            <Box
              sx={{
                position: "absolute",
                bottom: 0,
                right: 0,
                width: 30,
                height: 30,
                backgroundColor: "#f28b82",
                clipPath: "polygon(0 0%, 0% 100%, 100% 0%)",
              }}
            />
            <Box
              sx={{
                position: "absolute",
                bottom: 0,
                right: 0,
                width: 30,
                height: 30,
                backgroundColor: "#fff",
                border: "1px solid #fff",
                clipPath: "polygon(0 100%, 100% 0, 100% 100%)",
              }}
            />
          </Box>
        )}

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            gap: 3,
            ml: "auto",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              ml: "auto",
            }}
          >
            <input type="file" id="upload" hidden onChange={handleFileUpload} />
            <label htmlFor="upload" style={{ cursor: "pointer" }}>
              {" "}
              <Upload />
            </label>
          </Box>

          <Upload2 />

          <Button
            type="submit"
            disabled={!file}
            startIcon={<ForwardToInbox />}
            sx={{
              height: "48px",
              borderRadius: "16px",
              width: "150px",
              color: "#fff",
              bgcolor: "#01A85A",
              textTransform: "capitalize",
            }}
          >
            Send Memo
          </Button>
        </Box>
      </Box>
    </Paper>
  )
}

export default SendMemo
