import { TextField, Grid, InputLabel } from "@mui/material"

function AddCompanyForm() {
  return (
    <Grid
      container
      spacing={4}
      sx={{
        width: { xs: "100%", sm: "50%" },
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
          "&.MuiInputBase-multiline": {
            height: "auto",
            padding: "8px",
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
      <Grid item sm={12}>
        <InputLabel>Company name</InputLabel>
        <TextField
          placeholder="Enter your company name"
          name="companyName"
          fullWidth
        />
      </Grid>

      <Grid item sm={12}>
        <InputLabel>Last name</InputLabel>
        <TextField
          placeholder="Enter your contact name"
          name="companyName"
          fullWidth
        />
      </Grid>

      <Grid item sm={12}>
        <InputLabel>Email Address.</InputLabel>
        <TextField
          placeholder="Enter your email."
          name="emailAddress"
          fullWidth
        />
      </Grid>

      <Grid item sm={12}>
        <InputLabel>Phone Number</InputLabel>
        <TextField
          placeholder="Enter your Phone number"
          name="phoneNumber"
          fullWidth
        />
      </Grid>

      <Grid item sm={12}>
        <InputLabel>Company Address</InputLabel>
        <TextField
          placeholder="Enter your company address"
          name="companyAddress"
          fullWidth
        />
      </Grid>

      <Grid item sm={12}>
        <InputLabel>Notes</InputLabel>
        <TextField
          multiline
          placeholder="optional field"
          name="notes"
          fullWidth
          rows={4}
        />
      </Grid>
    </Grid>
  )
}

export default AddCompanyForm
