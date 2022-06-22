import Button from "@mui/material/Button";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";

export default function SearchBar({ placeholder, buttonRadius }) {
  return (
    <TextField
      fullWidth
      id="input-with-icon-textfield"
      placeholder={placeholder}
      style={{
        margin: "5px 0",
        border: 0,
      }}
      sx={{
        background: "white",
        border: "none",
      }}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <Button
              variant="contained"
              sx={{
                background: "#f30d39",
                borderRadius:
                  buttonRadius && buttonRadius === "normal" ? 0 : "50px 0 0 0",
                px: { md: 5 },
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
