import NavigationBar from "./components/navigationBar";
import SearchBar from "./components/searchBar";
import ImageComponent from "./components/imageComponent";
import SearchBarHeader from "./components/searchBarHeader";
import Container from "@mui/material/Container";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Tag from "./components/tag";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
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
          justifyContent="center"
          height="inherit"
        >
          <Grid
            item
            xs={12}
            sm={6}
            lg={6}
            xl={6}
            sx={{ paddingTop: " 0 !important" }}
          >
            <Slide
              direction="right"
              timeout={2500}
              in={true}
              mountOnEnter
              unmountOnExit
            >
              <Stack sx={{ height: "inherit" }}>
                <SearchBarHeader />
                <SearchBar />
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
              backgroundImage: "radial-gradient(#cfc7bf 7%, transparent 7%)",
              backgroundPosition: "0 0, 50px 50px",
              backgroundSize: "30px 30px",
              paddingTop: " 0 !important",
            }}
          >
            <ImageComponent />
          </Grid>
        </Grid>
      </Container>

      <Tag
        name="Hydrabad"
        icon={
          <LocationOnIcon
            className="locationTagImage"
            sx={{ color: "#fff !important" }}
          />
        }
      />
    </div>
  );
}

export default App;
