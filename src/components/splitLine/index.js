import { Stack } from "@mui/material";

export default function SplitLine({ leftLineWidth, rightLineWidth, height }) {
  return (
    <Stack direction="row" spacing={1}>
      <div
        style={{
          width: leftLineWidth,
          background: "#f30d39",
          height: height,
        }}
      />
      <div
        style={{
          width: rightLineWidth,
          background: "#f30d39",
          height: height,
        }}
      />
    </Stack>
  );
}
