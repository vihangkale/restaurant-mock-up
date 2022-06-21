import Button from "@mui/material/Button";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Slide from "@mui/material/Slide";

export default function EmailBar({ placeholder, buttonRadius, width }) {
  return (
    <TextField
      placeholder={placeholder}
      sx={{
        background: "white",
        border: 0,
        width: 350,
        position: "relative",
        // borderRadius: "32px 32px 32px 32px",
      }}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <Slide
              direction="right"
              timeout={2500}
              easing={{
                enter: "linear",
                exit: "linear",
              }}
              in={true}
              mountOnEnter
              unmountOnExit
            >
              <Button
                variant="contained"
                sx={{
                  background: "#f30d39",
                  borderRadius: "50%",
                  minWidth: "auto",
                  width: 40,
                  height: 40,
                }}
              >
                <ArrowForwardIcon />
              </Button>
            </Slide>
          </InputAdornment>
        ),
      }}
    />
  );
}
