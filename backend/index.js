import express from "express";
const app = express();
import dotenv from "dotenv";
import Connection from "./db/conn.js";
import userRouter from "./routes/userRouter.js";
import cors from "cors"

dotenv.config()
app.use(express.json())
app.use(cors())
const port = process.env.PORT || 8000


app.use("/api/users", userRouter)
Connection()

app.listen(port, ()=>{
    console.log(`listening on port ${port}`);
    
})