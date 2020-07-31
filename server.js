const mongoose = require("mongoose");
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const toDoRouter = require("./routes/todo");

const app = express();
app.use(cors());
// dotenv is used to fetched env variables from .env file
dotenv.config();

// middleware
app.use(express.json());

// mongoDb connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB connnected"));
mongoose.connection.on("error", (err) => {
  console.log(`DB connection err:${err.message}`);
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

// router is used
app.use("/apiTodo", toDoRouter);
const port = process.env.PORT || 5002;
app.listen(port, () => console.log("server is started on", port));
