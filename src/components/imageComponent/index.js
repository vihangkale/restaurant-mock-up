import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Slide from "@mui/material/Slide";
import { useEffect, useState } from "react";

export default function ImageComponent({ initialPageAnimation }) {
  const [image, setImage] = useState("");

  useEffect(() => {
    let img = new Image();
    img = "https://source.unsplash.com/random/?food";
    setImage(img);
  }, []);

  return (
    <Slide
      direction="left"
      timeout={1500}
      in={initialPageAnimation}
      mountOnEnter
      unmountOnExit
    >
      <Stack alignItems="flex-end" sx={{ height: "inherit" }}>
        <Box
          component="img"
          fullWidth
          sx={{
            height: {
              xs: "35vh",
              sm: "50vh",
              md: "50vh",
              lg: "60vh",
              xl: "60vh",
            },
            width: { xs: "100%", md: "90%" },
            objectFit: "cover",
          }}
          alt="The house from the offer."
          src={image}
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
