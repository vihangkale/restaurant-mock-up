import NavigationBar from "./components/navigationBar";
import SearchBar from "./components/searchBar";
import Container from "@mui/material/Container";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Tag from "./components/tag";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Slide from "@mui/material/Slide";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Container
        disableGutters
        sx={{ height: "calc(100vh - 69.5px)", px: 9 }}
        maxWidth={false}
      >
        <Grid
          container
          alignItems="center"
          justifyCenter="center"
          height="inherit"
        >
          <Slide
            direction="right"
            timeout={2500}
            in={true}
            mountOnEnter
            unmountOnExit
          >
            <Grid
              item
              xs={12}
              sm={6}
              lg={6}
              xl={6}
              sx={{ paddingTop: " 0 !important" }}
            >
              <Stack
                // spacing={{ xs: 1, sm: 2, md: 4 }}
                sx={{ height: "inherit" }}
              >
                <Typography
                  variant="h1"
                  component="h1"
                  sx={{ fontWeight: 600, color: "#f7ece6" }}
                >
                  Food
                </Typography>
                <Typography
                  variant="h3"
                  component="h3"
                  sx={{ fontWeight: 600 }}
                >
                  Discover Restaurants
                  <br /> & Delicious Food
                </Typography>
                <SearchBar />
              </Stack>
            </Grid>
          </Slide>
          <Slide
            direction="left"
            timeout={2500}
            in={true}
            mountOnEnter
            unmountOnExit
          >
            <Grid
              item
              xs={12}
              sm={6}
              lg={6}
              xl={6}
              justifyContent="center"
              alignItems="center"
              sx={{
                backgroundImage: "radial-gradient(#cfc7bf 7%, transparent 7%)",
                backgroundPosition: "0 0, 50px 50px",
                backgroundSize: "30px 30px",
                paddingTop: " 0 !important",
              }}
            >
              <Stack
                // spacing={{ xs: 1, sm: 2, md: 4 }}
                alignItems="flex-end"
                sx={{ height: "inherit" }}
              >
                <Box
                  component="img"
                  sx={{
                    height: {
                      xs: "50vh",
                      sm: "60vh",
                      md: "60vh",
                      lg: "60vh",
                      xl: "60vh",
                    },
                    width: "100%",
                    objectFit: "cover",
                    // maxHeight: { xs: 233, md: 167 },
                    // maxWidth: { xs: 350, md: 250 },
                  }}
                  alt="The house from the offer."
                  src="https://source.unsplash.com/random/?food"
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
            </Grid>
          </Slide>
        </Grid>
      </Container>
      <Tag
        name="Hydrabad"
        icon={<LocationOnIcon sx={{ color: "#fff !important" }} />}
      />
    </div>
  );
}

export default App;
