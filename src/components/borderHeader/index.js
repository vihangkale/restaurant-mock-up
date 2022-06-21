import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export default function BorderHeader({
  topText,
  bottomText,
  description,
  direction,
}) {
  return (
    <Stack direction="row" px={{ xs: 1, sm: 10 }}>
      <Typography
        variant="h5"
        sx={{
          fontWeight: "bold",
          borderLeft: "10px solid #fe043c",
          pl: 2,
          lineHeight: 1.2,
          width: "50%",
          height: "fit-content",
        }}
      >
        {topText}
        <br />
        {bottomText}
      </Typography>
      <Typography variant="body2" sx={{ width: "50%" }}>
        {description}
      </Typography>
    </Stack>
  );
}
