import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import Home from "../components/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  Typography,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  GlobalStyles,
} from "@mui/material";

import Login from "../components/Login/Login.jsx";
import Register from "../components/Register/Register";
import Activity from "../components/Activity/Activity";
import Nutrition from "../components/Activity/Nutrition";
import Exercise from "../components/Activity/Exercise";
import Sleep from "../components/Activity/Sleep";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [nutrition, setNutrition] = useState([]);
  const [sleep, setSleep] = useState([]);
  const [exercise, setExercise] = useState([]);
  const [name, setName] = useState("");
  const [isClicked, setIsClicked] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchAuthedUser = async () => {
      const data = await apiClient.loginUser();
      if (data.data) {
        setIsLoggedIn(true);
        setUser(data.data.user);
      }
    };

    const token = localStorage.getItem("token");

    if (token) {
      apiClient.setToken(token);
      fetchAuthedUser();
    }
  }, []);

  return (
    <>
      <div className="app">
        <GlobalStyles
          styles={{
            body: { backgroundColor: "#21282B" },
          }}
        />
        <BrowserRouter>
          <main>
            <Routes>
              <Route
                path="/"
                element={
                  <Home
                    isLoggedIn={isLoggedIn}
                    setIsLoggedIn={setIsLoggedIn}
                    setIsClicked={setIsClicked}
                  />
                }
              ></Route>
              <Route
                path="/register"
                element={
                  <Register
                    isClicked={isClicked}
                    setIsClicked={setIsClicked}
                    isLoggedIn={isLoggedIn}
                    setIsLoggedIn={setIsLoggedIn}
                    name={name}
                    setName={setName}
                    setUser={setUser}
                  />
                }
              ></Route>
              <Route
                path="/login"
                element={
                  <Login
                    isClicked={isClicked}
                    setIsClicked={setIsClicked}
                    isLoggedIn={isLoggedIn}
                    setIsLoggedIn={setIsLoggedIn}
                    name={name}
                    setName={setName}
                    setUser={setUser}
                  />
                }
              ></Route>
              {/* <Route path="/activity" element={<p>Activities Page</p>}></Route> */}
              <Route
                path="/activity"
                element={
                  <Activity
                    isClicked={isClicked}
                    setIsClicked={setIsClicked}
                    isLoggedIn={isLoggedIn}
                    setIsLoggedIn={setIsLoggedIn}
                    name={name}
                    setName={setName}
                    user={user}
                  />
                }
              ></Route>
              <Route
                path="/nutrition"
                element={
                  <Nutrition
                    isClicked={isClicked}
                    setIsClicked={setIsClicked}
                    isLoggedIn={isLoggedIn}
                    setIsLoggedIn={setIsLoggedIn}
                    name={name}
                    setName={setName}
                    user={user}
                  />
                }
              ></Route>
              <Route
                path="/sleep"
                element={
                  <Sleep
                    isClicked={isClicked}
                    setIsClicked={setIsClicked}
                    isLoggedIn={isLoggedIn}
                    setIsLoggedIn={setIsLoggedIn}
                    name={name}
                    setName={setName}
                    user={user}
                  />
                }
              ></Route>
              <Route
                path="/exercise"
                element={
                  <Exercise
                    isClicked={isClicked}
                    setIsClicked={setIsClicked}
                    isLoggedIn={isLoggedIn}
                    setIsLoggedIn={setIsLoggedIn}
                    name={name}
                    setName={setName}
                    user={user}
                  />
                }
              ></Route>
            </Routes>
          </main>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
