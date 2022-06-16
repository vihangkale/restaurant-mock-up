import * as React from "react";
import Badge from "@mui/material/Badge";

export default function SimpleBadge({ children }) {
  return (
    <Badge badgeContent="" overlap="circular" variant="dot" color="primary">
      {children}
    </Badge>
  );
}
