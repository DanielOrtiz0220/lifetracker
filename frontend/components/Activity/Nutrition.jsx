import React from "react";
import {
  Container,
  Typography,
  Stack,
  Button,
  TextField,
  Box,
  CssBaseline,
  Grid,
  Card,
  CardContent,
  Avatar,
} from "@mui/material";
import axios from "axios";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "/Users/daniel.ortiz/Codepath/week5project/lifetracker/frontend/src/theme.js";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";

export default function Nutrition({
  user,
  isLoggedIn,
  setIsLoggedIn,
  setIsClicked,
}) {
  const [nutritionData, setNutritionData] = useState([]);

  useEffect(() => {
    console.log(user);
    axios
      .get(`http://localhost:3001/nutrition/${user.id}`)
      .then((response) => {
        setNutritionData(response.data.nutritionData);
      })
      .catch((e) => {
        console.log("id is empty");
      });
  }, [user.id]);

  const renderFoodCards = () => {
    if (nutritionData.length > 0) {
      return (
        <Grid container spacing={4}>
          {nutritionData.map((nutrition, idx) => (
            <NutritionCard
              key={idx}
              nutritionName={nutrition.name}
              nutritionCategory={nutrition.category}
              calories={nutrition.calories}
              imageUrl={nutrition.image_url}
            />
          ))}
        </Grid>
      );
    } else {
      return (
        <Typography
          variant="h4"
          align="center"
          sx={{
            color: "black",
            top: 100,
            fontWeight: "bold",
            mb: 5,
            mt: 5,
          }}
        >
          Nothing to show!
        </Typography>
      );
    }
  };
  //Main Nutrition Page
  return (
    <div>
      <Navbar
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        setIsClicked={setIsClicked}
      />
      <Container maxWidth="xl" sx={{ mt: "10px" }}>
        <Typography
          variant="h3"
          align="center"
          sx={{
            color: "black",
            top: 100,
            fontWeight: "bold",
            mb: 5,
            mt: 5,
          }}
        >
          Nutrition
        </Typography>

        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography
            variant="h4"
            align="left"
            sx={{
              color: "black",
              top: 100,
              fontWeight: "bold",
              mb: 5,
              mt: 5,
            }}
          >
            Overview
          </Typography>
          <Button color="secondary" variant="contained" href="/addNutrition">
            Add Food
          </Button>
        </Stack>
        {renderFoodCards()}
      </Container>
    </div>
  );
}
//Add Nutrition Form
export function AddNutrition({ user }) {
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // Printing out the data retreived from the signup sheet
    const nutritionName = data.get("name");
    const nutritionCategory = data.get("category");
    const calories = data.get("calories");
    const imageUrl = data.get("imageUrl");
    const nutritionInfo = {
      nutritionName: nutritionName,
      nutritionCategory: nutritionCategory,
      calories: calories,
      imageUrl: imageUrl,
    };
    console.log(nutritionInfo);
    //Post the exercise info to the correct user id... Each user should have their own exercise info.
    let params = {
      nutritionInfo: nutritionInfo,
      userId: user.id,
    };
    axios
      .post("http://localhost:3001/topics/nutrition", params)
      .then((response) => {
        console.log("Successfully posted into the database!");
        navigate("/nutrition");
      });
  };

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xl" disableGutters={true}>
          <CssBaseline />
          <Typography
            variant="h3"
            align="center"
            sx={{
              color: "black",
              top: 100,
              fontWeight: "bold",
              mb: 5,
              mt: 5,
            }}
          >
            Nutrition
          </Typography>
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography component="h1" variant="h4">
              Record Nutrition
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    name="nutritionName"
                    required
                    fullWidth
                    id="nutritionName"
                    label="Nutrition name"
                    variant="outlined"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="nutritionCategory"
                    label="Nutrition Category"
                    name="nutritionCategory"
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    required
                    fullWidth
                    name="calories"
                    label="Calories"
                    type={"number"}
                    id="calories"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="imageUrl"
                    label="Image URL"
                    id="imageUrl"
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="secondary"
                sx={{ mt: 3, mb: 2 }}
              >
                Submit Nutrition
              </Button>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </div>
  );
}

export function NutritionCard({
  nutritionName,
  calories,
  nutritionCategory,
  imageUrl,
}) {
  return (
    <Grid item lg={4}>
      <Card
        sx={{
          boxShadow: 3,
          backgroundColor: "#FFCC00",
          color: "black",
          borderRadius: "15px",
        }}
      >
        <CardContent>
          <Grid container spacing={3}>
            <Grid item>
              <Avatar
                alt="Food image"
                src={imageUrl}
                sx={{ width: 56, height: 56 }}
              />
            </Grid>
            <Grid item>
              <Typography
                gutterBottom
                variant="h4"
                component="div"
                sx={{ mb: 3 }}
              >
                {nutritionName}
              </Typography>
            </Grid>
          </Grid>
          <Grid container sx={{ mb: 5 }}>
            <Grid item xs={8}>
              <Typography variant="h5" color="black">
                Calories Per Item
              </Typography>
              <Typography variant="h5" color="black">
                {calories}
              </Typography>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={4}>
              <Typography variant="h5">
                Category: {nutritionCategory}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
}

// import { Typography, Card, CardContent, Container, Grid } from "@mui/material";
// import React from "react";
// import Login from "../Login/Login";
// import Navbar from "../Navbar/Navbar";
// import { useState } from "react";
// import apiClient from "../../src/services/apiClient";
// import { Navigate, useNavigate } from "react-router-dom";

// export default function Nutrition({
//   isLoggedIn,
//   setIsLoggedIn,
//   name,
//   setName,
//   setIsClicked,
// }) {

//     const [isLoading, setIsLoading] = useState(false);

//   if (isLoggedIn) {
//     return (
//       <div className="dataDisplay">
//         <Navbar
//           isLoggedIn={isLoggedIn}
//           setIsLoggedIn={setIsLoggedIn}
//           setIsClicked={setIsClicked}
//         />
//         <Container maxWidth="xl" sx={{ mt: "10px" }}>
//           <Typography
//             variant="h3"
//             align="left"
//             sx={{
//               color: "white",
//               top: 100,
//               fontWeight: "bold",
//               mb: 5,
//               mt: 5,
//             }}
//           >
//             Here is your Nutrition feed, {name}
//           </Typography>
//           <Grid container spacing={4}>
//             <Grid item lg={4}>
//               <Card
//                 sx={{
//                   boxShadow: 3,
//                   backgroundColor: "#e5e5e5",
//                   color: "black",
//                 }}
//               >
//                 <CardContent>
//                   <Typography gutterBottom variant="h5" component="div">
//                     item_information
//                   </Typography>
//                   <Typography variant="" color="black">
//                     0
//                   </Typography>
//                 </CardContent>
//               </Card>
//             </Grid>
//           </Grid>
//         </Container>
//       </div>
//     );
//   } else {
//     return (
//       <Login name={name} setName={setName} setIsLoggedIn={setIsLoggedIn} />
//     );
//   }
// }
