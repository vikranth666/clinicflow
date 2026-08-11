require("dotenv").config();

const app = require("./app");
const connectDB = require("./config/db")

const PORT = process.env.PORT || 5050;

const startServer = async()=>{
    await connectDB()
}

app.listen(PORT, () => {
  console.log(`ClinicFlow API running on port ${PORT}`);
});

startServer()
console.log("MONGO_URI:", process.env.MONGO_URI);
console.log("JWT_SECRET:", process.env.JWT_SECRET);