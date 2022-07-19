import { Typography, Card, CardContent, Container, Grid } from "@mui/material";
import React from "react";
import Login from "../Login/Login";
import Navbar from "../Navbar/Navbar";
import apiClient from "../../src/services/apiClient";
import { Navigate, useNavigate } from "react-router-dom";

export default function Sleep({
  isLoggedIn,
  setIsLoggedIn,
  name,
  setName,
  setIsClicked,
  i,
}) {
  <div>
    <Navbar
      isLoggedIn={isLoggedIn}
      setIsLoggedIn={setIsLoggedIn}
      setIsClicked={setIsClicked}
    />
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
  </div>;
}
