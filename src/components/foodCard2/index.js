import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import food from "../../assets/food.svg";

export default function FoodCard2({ imageOnly, padding, height }) {
  return (
    <Card
      elevation={0}
      sx={{
        maxWidth: 345,
        background: "#ffedde",
        px: padding,
        height: height ? height : "auto",
      }}
    >
      <CardMedia
        component="img"
        height="200"
        image={food}
        alt="food"
        sx={{ objectFit: "contain" }}
      />
      {!imageOnly && (
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            sx={{
              color: "#2e266f",
              fontWeight: "bold",
              textAlign: "center",
              lineHeight: "1",
            }}
          >
            free home delivery
            <br /> at your doorsteps
          </Typography>
          <Typography variant="body2" sx={{ textAlign: "center" }}>
            Lorem ipsum dolor sit <br />
            amet, consectetur
          </Typography>
          <Stack direction="row" spacing={1} sx={{ mt: 3 }}>
            <div
              style={{
                width: "150px",
                background: "#f30d39",
                height: "6px",
              }}
            />
            <div
              style={{
                width: "20px",
                background: "#f30d39",
                height: "6px",
              }}
            />
          </Stack>
        </CardContent>
      )}
    </Card>
  );
}
