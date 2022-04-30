import express from "express"
import {connect, ConnectOptions} from "mongoose"
import dotenv from "dotenv"
import path from "path"

import recipeRouter from "./routes/recipe"

//import types to req and res
dotenv.config({ path: path.resolve(__dirname, '../config/local.env') });

connect(`${process.env.DB_URI}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
 } as ConnectOptions).catch(err => console.log(err))

const app = express();
const port = process.env.PORT || 3000;

app.use('/recipes', recipeRouter)

// app.get('/', (req, res) => {
//   res.send('Express + TypeScript Server');
// });

app.listen(port, () => {
  console.log(`[server]: Server is running at https://localhost:${port}`);
});