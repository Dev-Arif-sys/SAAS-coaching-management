const express = require("express");
const dotenv = require("dotenv");
const app = express();
const connectDB = require("./config/db");
const cors = require("cors");
const cookieParser = require("cookie-parser");

// requiring routes
const errorHandler = require("./middlewares/error");
const auth = require("./routes/auth.route");
const institution = require("./routes/institution.route");

const port = process.env.PORT || 8080;
app.use(express.json());
const whitelist = ['http://localhost:3000'];
const corsOptions = {
  credentials: true, // This is important.
  origin: (origin, callback) => {
    if(whitelist.includes(origin))
      return callback(null, true)

      callback(new Error('Not allowed by CORS'));
  }
}

app.use(cors(corsOptions));


app.use(cookieParser());
dotenv.config();

// connecting MongoDB
connectDB();

app.get("/", async (req, res) => {
  res.send("server is running");
});

//declaring routes

app.use("/api/v1/auth", auth);
app.use("/api/v1/institutions", institution);

// error handler

app.use(errorHandler);

app.listen(port, () => {
  console.log("server connected");
});
