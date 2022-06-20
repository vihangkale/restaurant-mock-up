import SearchBar from "./components/searchBar";
import ImageComponent from "./components/imageComponent";
import SearchBarHeader from "./components/searchBarHeader";
import Container from "@mui/material/Container";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Tag from "./components/tag";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Slide from "@mui/material/Slide";
import NavigationBar from "./components/appBar";
import FoodCard from "./components/foodCard";
import Typography from "@mui/material/Typography";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Paper from "@mui/material/Paper";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
function App() {
  let foodData = [
    {
      name: "Fire Water",
      description:
        "Lorem Ipsum is simply dummy text of the printing and type setting industry.",
      location: "Hitech City",
    },
    {
      name: "The Wonton",
      description:
        "Lorem Ipsum is simply dummy text of the printing and type setting industry.",
      location: "New York",
    },
  ];
  return (
    <div className="App">
      <NavigationBar />
      <Container
        disableGutters
        sx={{
          px: { xs: 3, md: 9 },
          py: { xs: 3, md: 9 },
          background: "linear-gradient(to right, #fff5ec 75%, #fe043c 25%)",
        }}
        maxWidth={false}
      >
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          height="inherit"
          spacing={2}
        >
          <Grid item xs={12} sm={6} lg={6} xl={6}>
            <Slide
              direction="right"
              timeout={2500}
              easing={{
                enter: "linear",
                exit: "linear",
              }}
              in={true}
              mountOnEnter
              unmountOnExit
            >
              <Stack sx={{ height: "inherit" }}>
                <SearchBarHeader />
                <SearchBar placeholder="search restaurant,food" />
              </Stack>
            </Slide>
          </Grid>

          <Grid
            item
            xs={12}
            sm={6}
            lg={6}
            xl={6}
            justifyContent="center"
            alignItems="center"
            sx={{
              backgroundImage: "radial-gradient(#cfc7bf 10%, transparent 10%)",
              backgroundPosition: "0 0,0 0",
              backgroundSize: "30px 30px",
            }}
          >
            <ImageComponent />
          </Grid>
        </Grid>
        <Tag
          name="Hydrabad"
          icon={
            <LocationOnIcon
              className="locationTagImage"
              sx={{ color: "#fff !important" }}
            />
          }
        />
      </Container>
      <Container disableGutters maxWidth={false} sx={{ mt: 2 }}>
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
            some top restaurant for <br />
            dining out!
          </Typography>
          <Typography variant="body2" sx={{ width: "50%" }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </Typography>
        </Stack>
        <Grid container spacing={1} sx={{ mt: 5 }}>
          {foodData &&
            foodData.map((food) => (
              <Grid item xs={12} sm={5} md={3} lg={3} xl={3} key={food.name}>
                <FoodCard
                  key={food.name}
                  name={food.name}
                  description={food.description}
                  location={food.location}
                />
              </Grid>
            ))}
          <Grid item xs={12} sm={2} md={6} lg={6} xl={6}>
            <Stack
              spacing={2}
              justifyContent="center"
              alignItems="center"
              sx={{ height: "100%" }}
            >
              <Stack direction="row" alignItems="center" spacing={0}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="15"
                  width="48"
                  fill="#fe043c"
                >
                  <path d="M5.95 9.5V6.5H42V9.5Z" />
                </svg>
                <span
                  style={{
                    width: "fit-content",
                    borderRadius: "50%",
                    background: "#fe043c",
                    padding: "5px",
                    display: "flex",
                    marginLeft: "-9px",
                  }}
                >
                  <ArrowForwardIosIcon sx={{ color: "#fff" }} />
                </span>
              </Stack>
              <Typography color="#fe043c" variant="body1">
                see more
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Container>
      <Container
        maxWidth={false}
        sx={{
          background: "#ffedde",
          display: "flex",
          justifyContent: "center",
          py: 20,
        }}
      >
        <Paper
          sx={{
            height: "60vh",
            width: "70%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            px: 50,
          }}
        >
          <div
            style={{
              width: "80px",
              background: "#f30d39",
              height: "9px",
              marginBottom: "15px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          />
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              color: "#2e266f",
              paddingBottom: "50px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            advanced booking
          </Typography>
          <SearchBar placeholder="search restaurant" buttonRadius="normal" />
          <Stack direction="row" spacing={15} justifyContent="center">
            <Stack direction="column">
              <Stack direction="row">
                <Typography sx={{ color: "#2e266f", fontWeight: "bold" }}>
                  Date
                </Typography>
                <ArrowDropDownIcon sx={{ color: "#f30d39" }} />
              </Stack>
              <Typography>15-9-19</Typography>
            </Stack>
            <Stack direction="column">
              <Stack direction="row">
                <Typography sx={{ color: "#2e266f", fontWeight: "bold" }}>
                  Time
                </Typography>
                <ArrowDropDownIcon sx={{ color: "#f30d39" }} />
              </Stack>
              <Typography>9:30 PM</Typography>
            </Stack>
            <Stack>
              <Stack direction="row">
                <Typography sx={{ color: "#2e266f", fontWeight: "bold" }}>
                  Guests
                </Typography>
                <ArrowDropDownIcon sx={{ color: "#f30d39" }} />
              </Stack>
              <Typography>2 People</Typography>
            </Stack>
          </Stack>
        </Paper>
      </Container>
    </div>
  );
}

export default App;
