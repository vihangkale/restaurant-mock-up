import Button from "@mui/material/Button";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";

export default function SearchBar() {
  return (
    <TextField
      id="input-with-icon-textfield"
      label="search restaurant,food"
      sx={{
        background: "white",
        border: "none",
        width: { xs: "100%", sm: "25vw", md: "25vw", lg: "25vw", xl: "25vw" },
      }}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <Button
              variant="contained"
              sx={{
                background: "#f30d39",
                borderRadius: "50px 0 0 0",
                width: "100px",
              }}
            >
              GO
            </Button>
          </InputAdornment>
        ),
      }}
    />
  );
}
