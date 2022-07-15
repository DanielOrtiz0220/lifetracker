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

function App() {
  const [count, setCount] = useState(0);
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
              <Route path="/" element={<Home />}></Route>
              <Route path="/register" element={<p />}></Route>
              <Route path="/login" element={<p />}></Route>
              <Route path="/activity" element={<p />}></Route>
            </Routes>
          </main>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
