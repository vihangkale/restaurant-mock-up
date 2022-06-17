import * as React from "react";
import Chip from "@mui/material/Chip";

export default function Tag({ name, icon }) {
  return (
    <Chip
      // icon={tagIcon ? tagIcon : null}
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
  );
}
