require("dotenv").config();
console.log("SERVER FILE LOADED");
const express = require("express");
const cors = require("cors");
app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://capable-praline-8b6c4c.netlify.app"
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

const app = express();

app.use(express.json());
 // INTENTIONALLY SIMPLE FOR NOW

app.get("/", (req, res) => {
  res.send("Backend root working");
});


const testRoutes = require("./routes/test.routes");

// console.log("About to load test routes");

app.use("/api", testRoutes);

app.get("/api/health", (req, res) => {
  res.json({ status: "API alive" });
});

const PORT =  process.env.PORT || 10000;


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
