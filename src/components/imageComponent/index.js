import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Slide from "@mui/material/Slide";

export default function ImageComponent() {
  return (
    <Slide direction="left" timeout={2500} in={true} mountOnEnter unmountOnExit>
      <Stack alignItems="flex-end" sx={{ height: "inherit" }}>
        <Box
          component="img"
          fullWidth
          sx={{
            height: {
              xs: "50vh",
              sm: "60vh",
              md: "60vh",
              lg: "60vh",
              xl: "60vh",
            },
            width: "100%",
            objectFit: "cover",
          }}
          alt="The house from the offer."
          src="https://source.unsplash.com/random/?food"
        />
        <Stack
          direction="row"
          mt={1}
          sx={{ width: "fit-content", color: "white" }}
        >
          <ArrowBackIcon fontSize="large" />
          <ArrowForwardIcon fontSize="large" />
        </Stack>
      </Stack>
    </Slide>
  );
}
