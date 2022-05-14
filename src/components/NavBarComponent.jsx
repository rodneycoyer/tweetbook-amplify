import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Slide from "@mui/material/Slide";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Toolbar from "@mui/material/Toolbar";
import useScrollTrigger from "@mui/material/useScrollTrigger";
// icons
import Avatar from "@mui/material/Avatar"
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import MessageIcon from "@mui/icons-material/Message";
import NotificationsIcon from "@mui/icons-material/Notifications";
import logo from "../styles/logo.svg";

// AWS hook
import { useAuthenticator } from "@aws-amplify/ui-react";



// nav buttons
const NavBarOptions = ({ Icon, avatar }) => {
  return (
    <IconButton >
      <Badge badgeContent={1} overlap="circular" color="error">
        {Icon && <Icon/>}
        {avatar && <Avatar />}
      </Badge>
    </IconButton>
  );
}

function NavBar() {
  // user state
  const { signOut } = useAuthenticator(context => [context.user]);

  // hide nav when scrolling
  const trigger = useScrollTrigger();

  return (
    <Slide in={!trigger}>
      <AppBar position="sticky" color="transparent">
        <Container sx={{ flexGrow: 1, width: 1}}>
          <Toolbar disableGutters>
            <Link
              to="/"
              variant="button"
            >
              <IconButton
                size="small"
                edge="start"
                color="inherit"
                aria-label="home button"
                sx={{ mr: 2 }}
              >
                <img src={logo} alt="react logo" width={45} height={45} />
              </IconButton>
            </Link>
            <TextField
              id="navbar-search"
              label="search"
              variant="outlined"
              size="small"
              sx={{ maxWidth: "30ch", mr: 5}}
            />
            <Box sx={{ display: { md: 'flex' }, ml: "auto" }}>
              <Stack direction="row" spacing={{ xs: 1, sm: 2, md: 3 }}>
                <NavBarOptions Icon={NotificationsIcon} />
                <NavBarOptions Icon={MessageIcon} />
                <Button variant="contained" onClick={signOut}> SignOut </Button>
              </Stack>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Slide>
  );
}

export default NavBar;