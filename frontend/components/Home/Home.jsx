import * as React from "react";
import Navbar from "../Navbar/Navbar";
// import Hero from "../Hero/Hero";
<<<<<<< HEAD
import HomeImg from "/Users/daniel.ortiz/Codepath/week5project/lifetracker/frontend/assets/battling-ropes.png";
=======
import HomeImg from "/Users/daniel.ortiz/Codepath/week4project/lifetracker(vite)/lifetracker/frontend/assets/battling-ropes.png";
>>>>>>> 26c6fc3 (Full fledged new frontend)
import { Grid } from "@mui/material";
import { Container } from "@mui/material";
import { Paper } from "@mui/material";
import { CssBaseline } from "@mui/material";

export default function Home({}) {
  return (
    <Container maxWidth="xl">
      <Grid container>
        <Grid item lg={12}>
          <Navbar /> {}
          <img
            src={HomeImg}
            alt="Athletic male excercising with battling ropes"
          />
        </Grid>
      </Grid>
    </Container>
  );
}
