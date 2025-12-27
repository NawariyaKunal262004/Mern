require("dotenv").config();
const express = require("express");
const cors = require("cors");


const testRoutes = require("./routes/test.routes");

const app = express();

app.use(express.json());
app.use(cors()); // INTENTIONALLY SIMPLE FOR NOW
console.log("About to load test routes");

app.use("/api", testRoutes);


const PORT =  process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Backend root working");
});


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
