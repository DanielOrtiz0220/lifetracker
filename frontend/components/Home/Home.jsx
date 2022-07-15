import * as React from "react";
import Navbar from "../Navbar/Navbar";
// import Hero from "../Hero/Hero";
import HomeImg from "/Users/daniel.ortiz/Codepath/week4project/lifetracker(vite)/lifetracker/frontend/assets/battling-ropes.png";
import { Grid } from "@mui/material";
import { Container } from "@mui/material";
import { Paper } from "@mui/material";
import { CssBaseline } from "@mui/material";

export default function Home({ isLoggedIn, setIsLoggedIn, setIsClicked }) {
  return (
    <Container maxWidth="xl">
      <Grid container>
        <Grid item lg={12}>
          <Navbar
            isLoggedIn={isLoggedIn}
            setIsLoggedIn={setIsLoggedIn}
            setIsClicked={setIsClicked}
          />
           {}
          <img
            src={HomeImg}
            alt="Athletic male excercising with battling ropes"
          />
        </Grid>
      </Grid>
    </Container>
  );
}
