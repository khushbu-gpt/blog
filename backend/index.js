import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import { connectDB } from './src/config/db.js';
import { authRouter } from './src/routes/auth.routes.js';
dotenv.config({path:""})
const app=express()
const PORT=process.env.PORT||5001
connectDB().then(()=>{
    console.log("DB IS CONNECTED")
}).catch((err)=>{
    console.log("DB CONNECTION FAILED",err.message)
})
app.use(cors())
app.use(bodyParser.json())
app.get("/",(req,res)=>{
    res.send("Hello Blog!")
})
app.use("/auth",authRouter)

app.listen(PORT,()=>{
    console.log("APP IS RUNNING ON",PORT)
})