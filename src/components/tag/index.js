import * as React from "react";
import Chip from "@mui/material/Chip";
import Slide from "@mui/material/Slide";

export default function Tag({ name, icon }) {
  return (
    <Slide
      direction="right"
      timeout={2500}
      in={true}
      mountOnEnter
      unmountOnExit
    >
      <Chip
        label={name}
        variant="outlined"
        icon={icon ? icon : null}
        size="large"
        sx={{
          position: "absolute",
          bottom: "100px",
          background: "#f30d39",
          color: "#fff",
          borderRadius: "0 16px 16px 0",
          width: "150px",
          fontWeight: 600,
        }}
      />
    </Slide>
  );
}
