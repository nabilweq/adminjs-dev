import mongoose from "mongoose";

import { appConfig } from "../config/env.js";

export const connectDB = async () => {
  try {
    await mongoose.connect(appConfig.mongoUrl);
    console.log("✅ MongoDB connected");
  } catch (err) {
    console.error("❌ MongoDB connection failed:", err);
    process.exit(1);
  }
};
