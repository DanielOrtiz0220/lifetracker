const express = require("express");
const app = express();
const { PORT } = require("./config");
const cors = require("cors");
const morgan = require("morgan");
const authRoute = require("./routes/auth.js");
const { NotFoundError } = require("./utils/errors");

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

app.use((req, res, next) => {
  return next(new NotFoundError());
});

/** Generic error handler; anything unhandled goes here. */
app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message;
  console.log(err);

  return res.status(status).json({
    error: { message, status },
  });
});

app.listen(PORT, () => {
  console.log(`🤗 Starter app listening on port ${PORT}`);
});
