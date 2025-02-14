import "dotenv/config.js"; // Load environment variables
import express from "express";
import cors from "cors";
import connectDB from "./Database/dbConfig.js";
import restaurantRoutes from "./Routes/restauratRoutes.js";
import { seedDatabase } from "./Controller/restauratController.js";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

connectDB();

seedDatabase();

app.get("/",(req,res)=>{
    res.send("Welcome to backend");
})
  

app.use("/api", restaurantRoutes);

app.listen(PORT, () => {
    console.log(` Server running on port ${PORT}`);
});


