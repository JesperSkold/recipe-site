import express from "express"
import {connect, ConnectOptions} from "mongoose"
import dotenv from "dotenv"
import path from "path"
import cors from "cors"

import recipeRouter from "./routes/recipe"
import categoryRouter from "./routes/category"

//import types to req and res?
dotenv.config({ path: path.resolve(__dirname, '../config/local.env') });

connect(`${process.env.DB_URI}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
 } as ConnectOptions).catch(err => console.log(err))

const app = express();
app.use(express.json())
app.use(cors())
const port = process.env.PORT || 3000;

app.use('/recipes', recipeRouter)
app.use('/category', categoryRouter)

app.listen(port, () => {
  console.log(`[server]: Server is running at https://localhost:${port}`);
});