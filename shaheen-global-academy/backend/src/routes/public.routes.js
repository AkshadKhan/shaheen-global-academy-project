import express from "express";
import Topper from "../model/topper.model.js";

const router = express.Router();

// PUBLIC – for main website
router.get("/toppers", async (req, res) => {
  try {
    const toppers = await Topper.find().sort({ rank: 1 });
    res.json(toppers);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching toppers",
      error: error.message,
    });
  }
});

export default router;
