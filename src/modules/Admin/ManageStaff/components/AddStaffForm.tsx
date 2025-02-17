// src/components/AddStaffForm.tsx
// import { Formik, Form, Field } from "formik"
import {
  TextField,
  MenuItem,
  // IconButton,
  InputAdornment,
  Grid,
  InputLabel,
  Typography,
  // Typography,
} from "@mui/material"
import {
  // ArrowBack,
  // CalendarToday,
  UploadFile,
} from "@mui/icons-material"
// import { addStaffSchema } from "./FormValidation"
// import { departments, states } from "./formUtils"
// import { useNavigate } from "react-router-dom"

function AddStaffForm() {
  // const navigate = useNavigate()

  return (
    <Grid
      container
      spacing={4}
      sx={{
        "& .MuiOutlinedInput-root": {
          height: "29.8px",
          borderRadius: "5px",
          "& fieldset": {
            borderColor: "#C1C1C180",
          },
          "&:hover fieldset": {
            borderColor: "#888",
          },
          "&.Mui-focused fieldset": {
            borderColor: "#C1C1C1",
          },
          "& .MuiInputBase-input::placeholder": {
            color: "#C1C1C1",
            fontSize: "12px",
            opacity: 1,
          },
        },
        "& .MuiInputLabel-root": {
          mb: "4px",
          color: "#000",
          fontSize: "14px",
          fontWeight: "600",
          lineHeight: "14px",
        },
      }}
    >
      <Grid item xs={12} sm={6}>
        <InputLabel>First name</InputLabel>
        <TextField
          placeholder="First Name"
          name="firstName"
          autoComplete="off"
          fullWidth
          inputProps={{ autoComplete: "new" }}
        />
      </Grid>

      <Grid item xs={12} sm={6}>
        <InputLabel>Last name</InputLabel>
        <TextField
          placeholder="Last Name"
          name="lastName_custom"
          autoComplete="off"
          fullWidth
          inputProps={{ autoComplete: "new" }}
        />
      </Grid>

      <Grid item xs={12} sm={6}>
        <InputLabel>Personal no.</InputLabel>
        <TextField
          placeholder="Personal No."
          name="personalNo"
          autoComplete="off"
          fullWidth
          inputProps={{ autoComplete: "new" }}
        />
      </Grid>

      <Grid item xs={12} sm={6}>
        <InputLabel>Email</InputLabel>

        <TextField
          placeholder="Email"
          name="email"
          autoComplete="off"
          fullWidth
          inputProps={{ autoComplete: "new" }}
        />
      </Grid>

      <Grid item xs={12} sm={6}>
        <InputLabel>Password</InputLabel>
        <TextField
          // as={TextField}
          placeholder="Password"
          name="password"
          type="password"
          fullWidth
          autoComplete="off"
          inputProps={{ autoComplete: "new" }}
          // error={touched.password && !!errors.password}
          // helperText={touched.password && errors.password}
        />
      </Grid>

      <Grid item xs={12} sm={6}>
        <InputLabel>Confirm password</InputLabel>
        <TextField
          // as={TextField}
          placeholder="Confirm Password"
          name="confirmPassword"
          type="password"
          autoComplete="off"
          fullWidth
          inputProps={{ autoComplete: "new" }}
          // error={touched.confirmPassword && !!errors.confirmPassword}
          // helperText={touched.confirmPassword && errors.confirmPassword}
        />
      </Grid>

      <Grid item xs={12} sm={6}>
        <InputLabel>Department</InputLabel>
        <TextField
          // as={TextField}
          select
          placeholder="Department"
          name="department"
          fullWidth
        >
          {/* {departments.map((dept) => ( */}
          <MenuItem key="ict" value="ICT">
            ICT
          </MenuItem>
          <MenuItem key="custom" value="Custom">
            Custom
          </MenuItem>
          {/* ))} */}
        </TextField>
      </Grid>

      <Grid item xs={12} sm={6}>
        <InputLabel>Sub-department</InputLabel>
        <TextField
          // as={TextField}
          select
          placeholder="Sub-Department"
          name="subDepartment"
          fullWidth
        >
          <MenuItem value="Sub 1">Sub 1</MenuItem>
          <MenuItem value="Sub 2">Sub 2</MenuItem>
        </TextField>
      </Grid>

      <Grid item xs={12} sm={6}>
        <InputLabel>Date of Birth</InputLabel>
        <TextField
          // as={TextField}
          placeholder="DoB"
          name="dateOfBirth"
          fullWidth
          type="date"
          InputLabelProps={{ shrink: true }}
        />
      </Grid>

      <Grid item xs={12} sm={6}>
        <InputLabel>State of Origin</InputLabel>
        <TextField
          // as={TextField}
          select
          placeholder="State of Origin"
          name="stateOfOrigin"
          fullWidth
        >
          {/* {states.map((state) => ( */}
          <MenuItem key="lagos" value="Lagos">
            Lagos
          </MenuItem>
          <MenuItem key="oyo" value="Oyo">
            Oyo
          </MenuItem>
          {/* ))} */}
        </TextField>
      </Grid>

      <Grid item xs={12}>
        <InputLabel>Address</InputLabel>
        <TextField
          // as={TextField}
          placeholder="Address"
          name="address"
          autoComplete="off"
          fullWidth
          inputProps={{ autoComplete: "new" }}
        />
      </Grid>

      <Grid item xs={12}>
        <InputLabel>Avatar</InputLabel>
        <TextField
          name="avatar"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Typography>Choose image</Typography>
                <input type="file" id="avatar" hidden />
                <label htmlFor="avatar" style={{ cursor: "pointer" }}>
                  {" "}
                  <UploadFile />
                </label>
              </InputAdornment>
            ),
          }}
        />
      </Grid>
    </Grid>
  )
}

export default AddStaffForm
