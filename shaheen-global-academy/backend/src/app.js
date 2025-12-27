import express from "express";
import adminRoutes from "./routes/admin.routes.js";
import topperRoutes from "./routes/topper.routes.js"
import teachRoutes from "./routes/teacher.routes.js"

const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/v1/admin/auth", adminRoutes);
app.use("/api/v1/admin/topper",topperRoutes);
app.use("/api/v1/admin/teach",teacherRoutes);

// Health check
app.get("/", (req, res) => {
  res.send("Health Check Success");
});

export default app;
