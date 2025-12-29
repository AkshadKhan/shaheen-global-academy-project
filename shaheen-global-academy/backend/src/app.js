import express from "express";
import cors from "cors";
import adminRoutes from "./routes/admin.routes.js";
import topperRoutes from "./routes/topper.routes.js"
import teacherRoutes from "./routes/teacher.routes.js"

const app = express();

const allowedOrigins = process.env.CLIENT_URL ? process.env.CLIENT_URL.split(',') : [];

app.use(cors({
  origin: function (origin, callback) {
    // allow requests with no origin 
    if (!origin) return callback(null, true);

    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  // credentials:true
}));

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/v1/admin/auth", adminRoutes);
app.use("/api/v1/admin/topper", topperRoutes);
app.use("/api/v1/admin/teach", teacherRoutes);

// Health check
app.get("/", (req, res) => {
  res.send("Health Check Success");
});

export default app;
