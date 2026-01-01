import dotenv from "dotenv";
dotenv.config();

import app from "./src/app.js";
import  db  from "./src/utils/model.js";
import cors from "cors";
import fs from "fs"

const allowedOrigins = process.env.CLIENT_URL ? process.env.CLIENT_URL.split(',') : [];
const port = process.env.PORT || 3000;

//middlewares
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
  origin: allowedOrigins,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials:true
}));

if (!fs.existsSync('./uploads')) {
  fs.mkdirSync('./uploads');
}

// app.use('/uploads', express.static('uploads'));

// DB connection
db();

// Start server
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
