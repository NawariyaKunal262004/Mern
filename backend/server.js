require("dotenv").config();
console.log("SERVER FILE LOADED");
const express = require("express");
const cors = require("cors");
const app = express();

console.log("SERVER FILE LOADED");


app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://capable-praline-8b6c4c.netlify.app"
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));



app.use(express.json());
 // INTENTIONALLY SIMPLE FOR NOW

 const path = require("path");

console.log("Current working directory:", process.cwd());
console.log("Server file location:", __dirname);

const testRoutes = require(path.join(__dirname, "routes", "test.routes"));
console.log("loaded test routes");


app.use("/api", testRoutes);


app.get("/", (req, res) => {
  res.send("Backend root working");
});




app.get("/api/health", (req, res) => {
  res.json({ status: "API alive" });
});

const PORT =  process.env.PORT || 10000;


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
