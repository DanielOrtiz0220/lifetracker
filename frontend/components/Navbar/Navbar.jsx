import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";
import { Container } from "@mui/material";
import { Link } from "react-router-dom";
import SportsGymnasticsIcon from "@mui/icons-material/SportsGymnastics";

export default function Navbar() {
  return (
    <Container
      maxWidth="100vh"
      sx={{ borderBottom: "solid #E2E8F0 2px" }}
      disableGutters={true}
    >
      <AppBar position="fixed">
        <Toolbar>
          <Hero />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Lifetracker by 4Life
          </Typography>
          <Button
            component={Link}
            to="/login"
            variant="contained"
            color="secondary"
            sx={{ mr: 8 }}
          >
            Login
          </Button>
          <Button
            component={Link}
            to="/register"
            variant="contained"
            color="secondary"
            sx={{ mr: 8 }}
          >
            Register
          </Button>
        </Toolbar>
      </AppBar>
    </Container>
  );
}

export function Hero() {
  return (
    <IconButton
      size="large"
      edge="start"
      color="inherit"
      aria-label="menu"
      sx={{ mr: 2 }}
    >
      <SportsGymnasticsIcon />
    </IconButton>
  );
}
