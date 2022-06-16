import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import SimpleBadge from "../../components/badge";
import Fade from "@mui/material/Fade";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Stack from "@mui/material/Stack";

const pages = ["Menu One", "Menu Two", "Menu Three", "Menu Four"];

const NavigationBar = () => {
  // const [anchorElNav, setAnchorElNav] = useState(null);
  // const [anchorElUser, setAnchorElUser] = useState(null);

  // const handleOpenNavMenu = (event) => {
  //   setAnchorElNav(event.currentTarget);
  // };
  // const handleOpenUserMenu = (event) => {
  //   setAnchorElUser(event.currentTarget);
  // };

  // const handleCloseNavMenu = () => {
  //   setAnchorElNav(null);
  // };

  // const handleCloseUserMenu = () => {
  //   setAnchorElUser(null);
  // };

  return (
    <Fade in={true} timeout={2500}>
      <AppBar
        position="static"
        sx={{
          background: "#fff5ec",
          color: "#2e266f",
          boxShadow: "none",
          px: { xs: 1, sm: 5, md: 5, lg: 6, xl: 6 },
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
                mr: 2,
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
                px: { xs: 0, sm: 0, md: 5, lg: 5, xl: 5 },
              }}
            >
              {pages.map((page) => (
                <Button
                  title="Menu Item"
                  key={page}
                  //onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    mx: { xs: 1, sm: 1, md: 4, lg: 4, xl: 4 },
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
                <Tooltip title="Profile">
                  <SimpleBadge>
                    <IconButton
                      //onClick={handleOpenUserMenu}
                      sx={{ p: 0 }}
                    >
                      <Avatar
                        alt="Remy Sharp"
                        src="https://source.unsplash.com/random/?profile"
                      />
                    </IconButton>
                  </SimpleBadge>
                </Tooltip>
                <FormControl size="small" sx={{ width: "100px" }}>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value="user"
                    // onChange={handleChange}
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
    </Fade>
  );
};
export default NavigationBar;
