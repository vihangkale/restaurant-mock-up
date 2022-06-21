import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Stack from "@mui/material/Stack";
import Grow from "@mui/material/Grow";

const pages = ["Menu One", "Menu Two", "Menu Three", "Menu Four"];
const settings = ["User", "User 2", "User 3"];

const NavigationBar = ({ initialPageAnimation }) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [profileSelect, setProfileSelection] = React.useState("user");

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleProfileDropDown = (event) => {
    setProfileSelection(event.target.value);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Grow in={initialPageAnimation} timeout={2500} mountOnEnter unmountOnExit>
      <AppBar
        position="static"
        sx={{
          color: "#2e266f",
          boxShadow: "none",
          background: "linear-gradient(to right, #fff5ec 75%, #fe043c 25%)",
          px: { xs: 0, md: 9 },
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
                display: "flex",
                fontWeight: 900,
                textDecoration: "none",
              }}
            >
              eatiz
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <Tooltip title="Menu Items">
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
              </Tooltip>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Box
              sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
              justifyContent="center"
            >
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, mx: { md: 2, lg: 3, xl: 3 }, display: "block" }}
                >
                  {page}
                </Button>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Stack direction="row" spacing={2} alignItems="center">
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar
                      alt="Remy Sharp"
                      src="https://source.unsplash.com/random/?profile"
                    />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                      <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
                <FormControl
                  size="large"
                  className="profileDropdown"
                  sx={{
                    width: "100px",
                    display: {
                      xs: "none",
                      md: "flex",
                      boxShadow: "none",
                      background: "#fe043c",
                    },
                  }}
                  variant="standard"
                >
                  <Select
                    className="profileDropdown"
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={profileSelect}
                    sx={{ color: "#fff" }}
                    disableUnderline
                    onChange={handleProfileDropDown}
                  >
                    <MenuItem value="user">User</MenuItem>
                    <MenuItem value="user2">User 2</MenuItem>
                    <MenuItem value="user3">User 3</MenuItem>
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
