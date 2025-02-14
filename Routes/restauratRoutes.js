import express from "express";
import { getRestaurants } from "../Controller/restauratController.js";

const router = express.Router();

// Define a GET route for fetching all restaurants
router.get("/restaurants", getRestaurants);

export default router;
