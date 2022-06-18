import Typography from "@mui/material/Typography";

export default function SearchBarHeader() {
  return (
    <div>
      <Typography
        variant="h1"
        component="h1"
        sx={{ fontWeight: 600, color: "#f7ece6" }}
      >
        Food
      </Typography>
      <Typography variant="h3" component="h3" sx={{ fontWeight: 600 }}>
        Discover Restaurants
        <br /> & Delicious Food
      </Typography>
    </div>
  );
}
