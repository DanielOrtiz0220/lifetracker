const express = require("express");
const app = express();
const port = 3001;
const cors = require("cors");
const morgan = require("morgan");
const authRoute = require("./routes/auth.js");

app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());
app.use("/auth", authRoute);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

app.listen(port, () => {
  console.log(`🤗 Starter app listening on port ${port}`);
});
