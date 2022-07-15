import { useState } from "react";
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

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [nutrition, setNutrition] = useState([]);
  const [sleep, setSleep] = useState([]);
  const [exercise, setExercise] = useState([]);
  const [name, setName] = useState("");
  const [isClicked, setIsClicked] = useState(false);
  const [user, setUser] = useState(null);
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
                  />
                }
              ></Route>
              <Route path="/activity" element={<p />}></Route>
            </Routes>
          </main>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
