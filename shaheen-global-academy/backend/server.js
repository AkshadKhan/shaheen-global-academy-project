import dotenv from "dotenv";
dotenv.config();

import app from "./src/app.js";
import  db  from "./src/utils/model.js";
import cors from "cors";

app.use(cors({
  origin:"http://localhost:5173",
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
