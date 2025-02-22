import { Typography, Card, CardContent, Container, Grid } from "@mui/material";
import React from "react";
import Login from "../Login/Login";
import Navbar from "../Navbar/Navbar";
import apiClient from "../../src/services/apiClient";
import { Navigate, useNavigate } from "react-router-dom";

export default function Activity({
  isLoggedIn,
  setIsLoggedIn,
  name,
  setName,
  setIsClicked,
  i,
}) {
  if (isLoggedIn) {
    return (
      <div className="Portal">
        <Navbar
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
          setIsClicked={setIsClicked}
        />
        <Container maxWidth="xl" sx={{ mt: "10px" }}>
          <Typography
            variant="h3"
            align="left"
            sx={{
              color: "white",
              top: 100,
              fontWeight: "bold",
              mb: 5,
              mt: 5,
            }}
          >
            Here is your activity feed, {name}
          </Typography>
          <Grid container spacing={4}>
            <Grid item lg={4}>
              <Card
                sx={{
                  boxShadow: 3,
                  backgroundColor: "#e5e5e5",
                  color: "black",
                }}
              >
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Total Exercise Minutes
                  </Typography>
                  <Typography variant="" color="black">
                    0
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item lg={4}>
              <Card
                sx={{
                  boxShadow: 3,
                  backgroundColor: "#e5e5e5",
                  color: "black",
                }}
              >
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Average Sleep Hours
                  </Typography>
                  <Typography variant="" color="black">
                    0
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item lg={4}>
              <Card
                sx={{
                  boxShadow: 3,
                  backgroundColor: "#e5e5e5",
                  color: "black",
                }}
              >
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Average Daily Calories
                  </Typography>
                  <Typography variant="" color="black">
                    0
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          <Typography
            variant="h4"
            align="left"
            sx={{
              color: "white",
              top: 100,
              fontWeight: "bold",
              mb: 5,
              mt: 5,
            }}
          >
            More Stats
          </Typography>
          <Grid container spacing={4}>
            <Grid item lg={4}>
              <Card
                sx={{
                  boxShadow: 3,
                  backgroundColor: "#e5e5e5",
                  color: "black",
                }}
              >
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Maximum Hourly Calories
                  </Typography>
                  <Typography variant="" color="black">
                    0
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item lg={4}>
              <Card
                sx={{
                  boxShadow: 3,
                  backgroundColor: "#e5e5e5",
                  color: "black",
                }}
              >
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Avg Exercise Intensity
                  </Typography>
                  <Typography variant="" color="black">
                    0
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item lg={4}>
              <Card
                sx={{
                  boxShadow: 3,
                  backgroundColor: "#e5e5e5",
                  color: "black",
                }}
              >
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Total Hours Slept
                  </Typography>
                  <Typography variant="" color="black">
                    0
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </div>
    );
  } else {
    return (
      <Login name={name} setName={setName} setIsLoggedIn={setIsLoggedIn} />
    );
  }
}
