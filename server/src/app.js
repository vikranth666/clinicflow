const express = require("express");
const cors = require("cors");

const {protect} = require("./middleware/authMiddleware");
const {authorize} = require("./middleware/roleMiddleware")

const authRoutes = require("./routes/authRoutes")
const app = express();

app.use(cors());
app.use(express.json());


app.get("/api/admin-test",protect, authorize("ADMIN"),(req, res)=>{
    res.status(200).json({
      success:true,
      message:"welcome Admin",
      user: req.user,
    })
})

app.get("/api/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "ClinicFlow API is running",
  });
});
app.use("/api/auth", authRoutes)

module.exports = app;