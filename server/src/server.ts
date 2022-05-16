import express, {Request, Response, NextFunction} from "express"
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

app.use('/api/recipes', recipeRouter)
app.use('/api/category', categoryRouter)

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../dist/build")))
  app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname,  "../dist/build/index.html"))
      })
}


  // app.get("*", (req, res) => {
  //   res.sendFile(path.join(__dirname, "public", "index.html"))
  // })


// app.use('/public', express.static(path.join(__dirname, 'public')));
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname, "public")))
// }
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname, "../../client/build/")))

//   app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname, "client", "build", "index.html"))
//   })
// }

app.use( (err: { message: string; status: number }, _req: Request, res: Response, _next: NextFunction) => {
  console.error(err.message)
  res.status(err.status || 500)
  res.json({ 
    error:{ 
    status: err.status || 500, 
    message: err.message }})
});

app.use( (_req, res) => {
  res.status(404).send("404 not found")
})

app.listen(port, () => {
  console.log(`[server]: Server is running at https://localhost:${port}`);
});