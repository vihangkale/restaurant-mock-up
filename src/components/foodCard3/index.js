import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

export default function FoodCard3({ name, description, price, image }) {
  return (
    <Card sx={{ height: "55vh" }}>
      <CardMedia
        component="img"
        height="250"
        image={image}
        alt="green iguana"
      />
      <CardContent>
        <Stack direction="row" justifyContent="space-between">
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ color: "#2e266f", fontWeight: "bold" }}
          >
            {name}
          </Typography>
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", color: "#ff4e2a" }}
          >
            {price}
          </Typography>
        </Stack>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}
