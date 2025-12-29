import dotenv from "dotenv";
dotenv.config();

import app from "./src/app.js";
import  db  from "./src/utils/model.js";
import cors from "cors";
import fs from "fs"

app.use(cors({
  origin:"process.env.CLIENT_URL",
  credentials:true
}))

const port = process.env.PORT || 3000;

if (!fs.existsSync('./uploads')) {
  fs.mkdirSync('./uploads');
}


// DB connection
db();

// Start server
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
