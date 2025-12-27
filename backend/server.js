require("dotenv").config();
console.log("SERVER FILE LOADED");
const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors()); // INTENTIONALLY SIMPLE FOR NOW

app.get("/", (req, res) => {
  res.send("Backend root working");
});


const testRoutes = require("./routes/test.routes");

// console.log("About to load test routes");

app.use("/api", testRoutes);

app.get("/api/health", (req, res) => {
  res.json({ status: "API alive" });
});

const PORT =  process.env.PORT || 5000;


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
