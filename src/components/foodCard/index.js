import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Stack from "@mui/material/Stack";

export default function FoodCard({ name, description, location }) {
  return (
    <Card
      sx={{
        width: "100%",
        maxWidth: 345,
        height: "50vh",
        backgroundImage: "url('https://source.unsplash.com/random/?food')",
        backgroundSize: "cover",
        display: "flex",
        alignItems: "end",
      }}
    >
      <Stack sx={{ background: "#fe043cb0" }}>
        <CardContent sx={{ color: "#fff" }}>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ fontWeight: "bold" }}
          >
            {name}
          </Typography>
          <Typography variant="body2">{description}</Typography>
        </CardContent>
        <CardActions>
          <Stack
            direction="row"
            justifyContent="space-between"
            sx={{ width: "100%" }}
          >
            <Stack direction="row">
              <LocationOnIcon sx={{ color: "#fff" }} />
              <Typography sx={{ color: "#fff" }}> {location}</Typography>
            </Stack>
            <Button
              variant="contained"
              endIcon={<ArrowRightAltIcon />}
              sx={{
                color: "#fe043c",
                background: "#fff5ec",
                borderRadius: "0 0 5px 0",
              }}
            >
              Book Now
            </Button>
          </Stack>
        </CardActions>
      </Stack>
    </Card>
  );
}
