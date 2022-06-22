import Button from "@mui/material/Button";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Slide from "@mui/material/Slide";

export default function EmailBar({
  placeholder,
  buttonRadius,
  width,
  notifiedPageAnimation,
}) {
  return (
    <TextField
      placeholder={placeholder}
      sx={{
        background: "white",
        border: 0,
        width: 350,
        position: "relative",
        overflow: "hidden",
      }}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <Slide
              direction="right"
              timeout={1500}
              easing={{
                enter: "linear",
                exit: "linear",
              }}
              in={notifiedPageAnimation}
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
