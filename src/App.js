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
import BorderHeader from "./components/borderHeader";
import BorderHeader2 from "./components/borderHeader2";
import FoodCard2 from "./components/foodCard2";
import SplitLine from "./components/splitLine";
import FoodCard3 from "./components/foodCard3";
import EmailBar from "./components/emailBar";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import Zoom from "@mui/material/Zoom";
import Fade from "@mui/material/Fade";
import Grow from "@mui/material/Grow";
import { useInView } from "react-intersection-observer";

function App() {
  const { ref: myRef, inView: animation } = useInView();
  const { ref: initialPage, inView: initialPageAnimation } = useInView();
  const { ref: foodCardCarousalPage, inView: foodCardCarousalPageAnimation } =
    useInView();
  const { ref: foodcard, inView: foodCardAnimation } = useInView();
  const { ref: foodcard2, inView: foodCardAnimation2 } = useInView();
  const { ref: mobilePage, inView: mobilePageAnimation } = useInView();
  const { ref: notifiedPage, inView: notifiedPageAnimation } = useInView();

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

  let foodData2 = [
    {
      name: "Ham Sandwich",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      price: "$40.05",
      image: "https://source.unsplash.com/random/?sandwich",
    },
    {
      name: "Chicken Sandwich",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      price: "$60.05",
      image: "https://source.unsplash.com/random/?sandwich",
    },
    {
      name: "Veg Sandwich",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      price: "$47.05",
      image: "https://source.unsplash.com/random/?sandwich",
    },
    {
      name: "Salad",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      price: "$76.05",
      image: "https://source.unsplash.com/random/?salad",
    },
    {
      name: "Pastry",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      price: "$89.05",
      image: "https://source.unsplash.com/random/?pastry",
    },
    {
      name: "Finger Chips",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      price: "$444",
      image: "https://source.unsplash.com/random/?chips",
    },
  ];
  return (
    <div className="App">
      <NavigationBar initialPageAnimation={initialPageAnimation} />
      <Container
        ref={initialPage}
        disableGutters
        sx={{
          px: { xs: 3, md: 9 },
          py: { xs: 3, md: 12 },
          background: "linear-gradient(to right, #fff5ec 75%, #fe043c 25%)",
          position: "relative",
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
              timeout={1500}
              easing={{
                enter: "linear",
                exit: "linear",
              }}
              in={initialPageAnimation}
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
            <ImageComponent initialPageAnimation={initialPageAnimation} />
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
      <Container
        ref={foodCardCarousalPage}
        disableGutters
        maxWidth={false}
        sx={{ mt: 2 }}
      >
        <BorderHeader
          topText="some top restaurant for"
          bottomText="dining out!"
          description=" Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book."
        />
        <Grid container spacing={1} sx={{ my: 15 }}>
          {foodData &&
            foodData.map((food, index) => (
              <Fade
                in={foodCardCarousalPageAnimation}
                timeout={index === 1 ? 4000 : 3000}
                mountOnEnter
                unmountOnExit
              >
                <Grid item xs={12} sm={5} md={3} lg={3} xl={3} key={food.name}>
                  <FoodCard
                    key={food.name}
                    name={food.name}
                    description={food.description}
                    location={food.location}
                  />
                </Grid>
              </Fade>
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
                  xmlns="http://www.w3.org/1500/svg"
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
              <Fade
                in={foodCardCarousalPageAnimation}
                timeout={3000}
                mountOnEnter
                unmountOnExit
              >
                <Typography color="#fe043c" variant="body1">
                  see more
                </Typography>
              </Fade>
            </Stack>
          </Grid>
        </Grid>
      </Container>
      <Container
        maxWidth={false}
        disableGutters
        sx={{
          background: "#ffedde",
          display: "flex",
          justifyContent: "center",
          py: 20,
        }}
      >
        <Zoom in={animation}>
          <Paper
            ref={myRef}
            className="advanceBooking"
            sx={{
              height: "60vh",
              width: { xs: "50%", sm: "60%", md: "60%", lg: "50%" },
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
              alignItems: "center",
              px: { xs: 10, sm: 10, md: 10, lg: 20 },
            }}
          >
            <div>
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
            </div>
            <SearchBar placeholder="search restaurant" buttonRadius="normal" />
            <Stack
              direction="row"
              spacing={{ xs: 6, md: 15 }}
              justifyContent="center"
            >
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
        </Zoom>
      </Container>
      <Container
        maxWidth={false}
        disableGutters
        sx={{ py: 20, position: "relative" }}
      >
        <BorderHeader
          topText="Our"
          bottomText="Services"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book."
        />
        <Grid
          container
          spacing={1}
          ref={foodcard}
          sx={{
            mt: 10,
            backgroundImage: "radial-gradient(#cfc7bf 10%, transparent 10%)",
            backgroundPosition: "0 0,0 0",
            backgroundSize: "30px 30px",
            py: 10,
            px: { xs: 0, sm: 5, md: 10, lg: 20 },
            overflow: "hidden",
          }}
          alignItems="center"
          justifyContent="center"
        >
          <Grid xs={12} sm={8} md={8} lg={8} xl={8}>
            <Grid container alignItems="center" justifyContent="center">
              <Slide
                direction="left"
                timeout={1500}
                easing={{
                  enter: "linear",
                  exit: "linear",
                }}
                in={foodCardAnimation}
                mountOnEnter
                unmountOnExit
              >
                <Grid xs={6} sm={6} md={6} lg={6} xl={6}>
                  <div style={{ position: "relative" }}>
                    <FoodCard2 imageOnly={true} />
                    <svg
                      xmlns="http://www.w3.org/1500/svg"
                      height="48"
                      width="48"
                      fill="#fe043c"
                      className="foodLeftArrow"
                    >
                      <path d="M35.1 32.95 32.95 30.85 38.25 25.55H6V22.55H38.3L33 17.25L35.1 15.15L44 24.05Z" />
                    </svg>
                  </div>
                </Grid>
              </Slide>
              <Slide
                direction="down"
                timeout={1500}
                easing={{
                  enter: "linear",
                  exit: "linear",
                }}
                in={foodCardAnimation}
                mountOnEnter
                unmountOnExit
              >
                <Grid xs={6} sm={6} md={6} lg={6} xl={6}>
                  <Stack alignItems="center">
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      sx={{
                        color: "#2e266f",
                        fontWeight: "bold",
                        textAlign: "center",
                        lineHeight: "1",
                      }}
                    >
                      advanced table
                    </Typography>
                    <Stack direction="row" alignItems="center" spacing={1}>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        sx={{
                          color: "#2e266f",
                          fontWeight: "bold",
                          textAlign: "center",
                          lineHeight: "1",
                        }}
                      >
                        booking
                      </Typography>
                      <SplitLine
                        leftLineWidth="50px"
                        rightLineWidth="10px"
                        height="6px"
                      />
                    </Stack>
                  </Stack>
                  <Typography variant="body2" sx={{ textAlign: "center" }}>
                    Lorem ipsum dolor sit <br />
                    amet, consectetur
                  </Typography>
                </Grid>
              </Slide>
              <Slide
                direction="up"
                timeout={1500}
                easing={{
                  enter: "linear",
                  exit: "linear",
                }}
                in={foodCardAnimation}
                mountOnEnter
                unmountOnExit
              >
                <Grid xs={6} sm={6} md={6} lg={6} xl={6}>
                  <Stack direction="column" alignItems="center">
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
                      Food for free
                    </Typography>
                    <Stack direction="row" alignItems="center" spacing={1}>
                      <SplitLine
                        leftLineWidth="50px"
                        rightLineWidth="10px"
                        height="6px"
                      />

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
                        24/7
                      </Typography>
                    </Stack>
                  </Stack>
                  <Typography variant="body2" sx={{ textAlign: "center" }}>
                    Lorem ipsum dolor sit <br />
                    amet, consectetur
                  </Typography>
                </Grid>
              </Slide>
              <Slide
                direction="right"
                timeout={1500}
                easing={{
                  enter: "linear",
                  exit: "linear",
                }}
                in={foodCardAnimation}
                mountOnEnter
                unmountOnExit
              >
                <Grid xs={6} sm={6} md={6} lg={6} xl={6}>
                  <div style={{ position: "relative" }}>
                    <FoodCard2 imageOnly={true} />
                    <svg
                      xmlns="http://www.w3.org/1500/svg"
                      height="48"
                      width="48"
                      fill="#fe043c"
                      className="foodRightArrow"
                    >
                      <path d="M35.1 32.95 32.95 30.85 38.25 25.55H6V22.55H38.3L33 17.25L35.1 15.15L44 24.05Z" />
                    </svg>
                  </div>
                </Grid>
              </Slide>
              <Grid />
            </Grid>
          </Grid>
          <Grow
            in={foodCardAnimation}
            timeout={4000}
            mountOnEnter
            unmountOnExit
          >
            <Grid xs={12} sm={4} md={4} lg={4} xl={4}>
              <FoodCard2 padding={5} height="400px" />
            </Grid>
          </Grow>
        </Grid>
      </Container>
      <Container
        maxWidth={false}
        disableGutters
        sx={{ py: 20, position: "relative" }}
      >
        <Stack spacing={1} alignItems="center">
          <Typography
            variant="h5"
            sx={{ fontWeight: "bold", color: "#2e266f" }}
          >
            Explore Our Foods
          </Typography>
          <Typography variant="body2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </Typography>
        </Stack>

        <Grid
          container
          ref={foodcard2}
          spacing={5}
          sx={{
            mt: 3,
            px: { xs: 0, sm: 10, md: 10, lg: 25 },
            position: "relative",
            overflow: "hidden",
          }}
        >
          {foodData2 &&
            foodData2.map((food, index) => (
              <Slide
                sx={{ position: "relative" }}
                direction={
                  index === 0
                    ? "right"
                    : index === 1
                    ? "down"
                    : index === 2
                    ? "left"
                    : index === 4
                    ? "up"
                    : index === 3
                    ? "right"
                    : index === 5
                    ? "left"
                    : null
                }
                timeout={1500}
                easing={{
                  enter: "linear",
                  exit: "linear",
                }}
                in={foodCardAnimation2}
                mountOnEnter
                unmountOnExit
              >
                <Grid key={food.name} item xs={12} sm={6} md={4} lg={4} xl={4}>
                  <FoodCard3
                    key={food.name}
                    name={food.name}
                    description={food.description}
                    price={food.price}
                    image={food.image}
                  />
                </Grid>
              </Slide>
            ))}
        </Grid>
      </Container>
      <Container
        disableGutters
        maxWidth={false}
        sx={{ background: "#ffedde", py: 5 }}
        ref={mobilePage}
      >
        <Grid container>
          <Grid item xs={12} xm={6} md={6} lg={6} xl={6}>
            <Stack>
              <BorderHeader2
                topText="Download app for"
                bottomText="Exciting Deals"
                description=" Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book."
                mobilePageAnimation={mobilePageAnimation}
              />
            </Stack>
          </Grid>
          <Slide
            direction="left"
            timeout={1500}
            easing={{
              enter: "linear",
              exit: "linear",
            }}
            in={mobilePageAnimation}
            mountOnEnter
            unmountOnExit
          >
            <Grid item xs={12} xm={6} md={6} lg={6} xl={6}>
              <svg
                className="rotateZAnimation"
                xmlns="http://www.w3.org/1500/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="100%"
                height="500"
                version="1.1"
                viewBox="0 0 102.183 205.371"
              >
                <defs>
                  <linearGradient id="linearGradient4630">
                    <stop offset="0" stopColor="#4d4d4d" stopOpacity="1"></stop>
                    <stop offset="1" stopColor="#1a1a1a" stopOpacity="1"></stop>
                  </linearGradient>
                  <linearGradient id="linearGradient4601">
                    <stop offset="0" stopColor="#ff8080" stopOpacity="1"></stop>
                    <stop offset="1" stopColor="#0ff" stopOpacity="1"></stop>
                  </linearGradient>
                  <linearGradient
                    id="linearGradient4603"
                    x1="82.052"
                    x2="148.067"
                    y1="45.767"
                    y2="210.672"
                    gradientTransform="translate(.189 .189)"
                    gradientUnits="userSpaceOnUse"
                    xlinkHref="#linearGradient4601"
                  ></linearGradient>
                  <linearGradient
                    id="linearGradient4624"
                    x1="430.325"
                    x2="925.3"
                    y1="449.758"
                    y2="370.966"
                    gradientUnits="userSpaceOnUse"
                    xlinkHref="#linearGradient4630"
                  ></linearGradient>
                </defs>
                <g strokeOpacity="1" transform="translate(-59.968 -21.326)">
                  <rect
                    width="102.183"
                    height="205.371"
                    x="59.969"
                    y="21.326"
                    fill="#f0f"
                    fillOpacity="1"
                    stroke="none"
                    strokeDasharray="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit="4"
                    strokeWidth="1.665"
                    opacity="1"
                    rx="15.64"
                    ry="18.067"
                  ></rect>
                  <rect
                    width="89.488"
                    height="194.999"
                    x="66.171"
                    y="25.698"
                    fill="url(#linearGradient4603)"
                    fillOpacity="1"
                    stroke="none"
                    strokeDasharray="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit="4"
                    strokeWidth="1.665"
                    opacity="1"
                    rx="13.83"
                    ry="10.206"
                  ></rect>
                  <path
                    fill="#000"
                    stroke="none"
                    strokeLinecap="butt"
                    strokeLinejoin="miter"
                    strokeWidth="0.265"
                    d="M65.295 37.141s.378-5.575 4.63-8.126c4.253-2.551 14.08-1.89 15.214-1.418 1.134.473-.065 3.17 2.457 5.292 1.953 1.644 3.307 1.701 4.82 1.607h39.025s2.174-.19 3.496-2.74c1.247-2.404.284-3.214 1.701-4.064 1.418-.85 17.954-2.079 18.616 6.898.661 8.977 1.228 7.843 1.228 7.843l-1.012-16.924L139 23.534l-68.602 1.323-6.142 7.843z"
                  ></path>
                  <path
                    fill="#000"
                    fillOpacity="1"
                    stroke="none"
                    strokeDasharray="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit="4"
                    strokeWidth="1.665"
                    d="M76.526 22.662c-8.44 0-15.235 7.96-15.235 17.848V207.7c0 9.889 6.795 17.85 15.235 17.85h69.068c8.44 0 15.235-7.961 15.235-17.85V40.51c0-9.888-6.795-17.848-15.235-17.848zm4.096 4.132h60.226c7.463 0 13.472 4.497 13.472 10.083v172.477c0 5.586-6.009 10.082-13.472 10.082H80.622c-7.464 0-13.473-4.496-13.473-10.082V36.877c0-5.586 6.01-10.083 13.473-10.083z"
                    opacity="1"
                  ></path>
                  <path
                    fill="url(#linearGradient4624)"
                    fillOpacity="1"
                    stroke="none"
                    strokeDasharray="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit="4"
                    strokeWidth="6.293"
                    d="M285.764 80.602c-32.748 0-59.112 30.455-59.112 68.285V788.52c0 37.83 26.364 68.285 59.112 68.285h267.982c32.748 0 59.111-30.455 59.111-68.285V148.887c0-37.83-26.363-68.285-59.11-68.285zm15.89 15.81H535.33c28.96 0 52.274 17.203 52.274 38.572v659.862c0 21.37-23.315 38.572-52.274 38.572H301.654c-28.959 0-52.273-17.203-52.273-38.572V134.984c0-21.37 23.314-38.572 52.273-38.572z"
                    opacity="1"
                    transform="scale(.26458)"
                  ></path>
                  <ellipse
                    cx="121.674"
                    cy="29.63"
                    fill="#000"
                    fillOpacity="1"
                    stroke="#4e4e4e"
                    strokeDasharray="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit="4"
                    strokeWidth="0.6"
                    opacity="1"
                    rx="1.27"
                    ry="1.236"
                  ></ellipse>
                  <path
                    fill="none"
                    stroke="#3a3a3a"
                    strokeDasharray="none"
                    strokeLinecap="round"
                    strokeLinejoin="miter"
                    strokeMiterlimit="4"
                    strokeWidth="1.665"
                    d="M105.571 29.53c.244.134 10.491 0 10.491 0"
                  ></path>
                </g>
              </svg>
            </Grid>
          </Slide>
        </Grid>
      </Container>
      <Container
        maxWidth={false}
        disableGutters
        ref={notifiedPage}
        sx={{
          textAlign: "center",
          py: 15,
          px: { xs: 0, sm: 10, md: 10, lg: 20 },
        }}
      >
        <Stack spacing={3} alignItems="center" sx={{ mb: 10 }}>
          <Typography variant="h4" sx={{ color: "#2e266f" }}>
            Get notified <br />
            about new amazing products
          </Typography>
          <Typography variant="body2" sx={{ lineHeight: "2.5" }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
            <br /> Lorem Ipsum has been the industry's standard dummy text ever
            since
          </Typography>
        </Stack>
        <EmailBar
          placeholder="Email"
          notifiedPageAnimation={notifiedPageAnimation}
        />
        <Stack
          direction="row"
          spacing={3}
          justifyContent="center"
          alignItems="center"
          sx={{ mt: 6 }}
        >
          <Typography>Product</Typography>
          <Typography>Company</Typography>
          <Typography>Learn more</Typography>
          <Typography>Get in touch</Typography>
        </Stack>
        <Stack
          direction="row"
          spacing={5}
          justifyContent={{ xs: "center", sm: "flex-end" }}
          alignItems="center"
          sx={{ mt: 10 }}
        >
          <LinkedInIcon sx={{ color: "#000" }} />
          <FacebookIcon sx={{ color: "#000" }} />
          <InstagramIcon sx={{ color: "#000" }} />
          <svg
            fill="#000000"
            xmlns="http://www.w3.org/1500/svg"
            viewBox="0 0 50 50"
            width="24px"
            height="24px"
          >
            <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M30.65,18 c0.19,0,0.35,0.17,0.35,0.37v4.26c0,0.2-0.16,0.37-0.35,0.37H26c0,0,0,7.98,0,8.19c0,0.2,0.18,2.69,2.78,2.69 c2.15,0,3.67-1.14,3.69-1.15c0.05-0.04,0.12-0.06,0.18-0.06s0.12,0.02,0.17,0.05C32.93,32.78,33,32.9,33,33.03v3.7 c0,0.1-0.04,0.2-0.12,0.26C32.79,37.08,30.32,39,25.25,39C19.17,39,19,32.1,19,31.31V23h-2.65C16.16,23,16,22.85,16,22.65v-3.57 c0-0.15,0.09-0.28,0.22-0.33c0.06-0.02,5.5-2.19,5.5-7.41c0-0.2,0.15-0.36,0.34-0.36L25.65,11c0.19,0,0.35,0.16,0.35,0.35V18H30.65z" />
          </svg>
          <Typography>@2019 indianpix</Typography>
        </Stack>
      </Container>
    </div>
  );
}

export default App;
