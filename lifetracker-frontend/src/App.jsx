import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Box } from "@chakra-ui/react";
// import Navbar from "../components/Navbar";

function App() {
  const [count, setCount] = useState(0);

  // checking hot reload is working
  var today = new Date().toLocaleString("en-US", { timeZone: "PST" });
  console.log(today);
  // it is!
  return <h1>Hello World!</h1>;
}

export default App;
