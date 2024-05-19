// server.js
const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.get("/", function (req, res) {
  res.send("<h1>Hello World!</h1>");
});
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/initiatives", require("./routes/initiativeRoutes"));
app.use("/api/actions", require("./routes/actionRoutes"));
app.use("/api/posts", require("./routes/postRoutes"));
app.use("/api/challenges", require("./routes/challengeRoutes"));
app.use("/api/resources", require("./routes/resourceRoutes"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
