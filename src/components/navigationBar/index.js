import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import SimpleBadge from "../../components/badge";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Stack from "@mui/material/Stack";
import Grow from "@mui/material/Grow";

const pages = ["Menu One", "Menu Two", "Menu Three", "Menu Four"];

const NavigationBar = () => {
  return (
    <Grow in={true} timeout={2500} mountOnEnter unmountOnExit>
      <AppBar
        position="static"
        style={{ width: "100%", minWidth: "100vw" }}
        sx={{
          color: "#2e266f",
          boxShadow: "none",
          px: { xs: 0, md: 9 },
          background: "linear-gradient(to right, #fff5ec 75%, #fe043c 25%)",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h3"
              href="/"
              className="text-red"
              title="header"
              sx={{
                // mr: 2,
                display: "flex",
                fontWeight: 900,
                textDecoration: "none",
              }}
            >
              eatiz
            </Typography>
            <Box
              sx={{
                flexGrow: 1,
                display: "flex",
                px: { xs: 0 },
              }}
            >
              {pages.map((page) => (
                <Button
                  title="Menu Item"
                  key={page}
                  //onClick={handleCloseNavMenu}
                  sx={{
                    // my: 2,
                    mx: { md: 4, lg: 4, xl: 4 },
                    display: "block",
                    textTransform: "none",
                    color: "#2e266f",
                    fontWeight: 500,
                  }}
                >
                  {page}
                </Button>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Stack direction="row" spacing={0.1}>
                <SimpleBadge>
                  <IconButton sx={{ p: 0 }}>
                    <Avatar
                      alt="Remy Sharp"
                      src="https://source.unsplash.com/random/?profile"
                    />
                  </IconButton>
                </SimpleBadge>
                <FormControl size="small" sx={{ width: "100px" }}>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value="user"
                  >
                    <MenuItem value="user">User</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </Stack>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Grow>
  );
};
export default NavigationBar;
