const mongoose = require("mongoose");

const connectDB = async () => {
 
  mongoose
    .connect(
      `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASS}@cluster0.ffgwy.mongodb.net/?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .then(() => console.log("MongoDB connected successfully"))
  .catch((error) => console.log(error));
};

module.exports = connectDB;