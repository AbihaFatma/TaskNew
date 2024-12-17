import express from 'express';
import mongoose from 'mongoose';
// import express from "mongoose";
import bodyParser from 'express';
import userRouter from './routes/user_route.js'
import taskRouter from './routes/task_route.js'
import cors from 'cors'
import dotenv from 'dotenv';
dotenv.config();
const app=express();

app.use(bodyParser.json())

app.use(cors({
  origin:true,
  methods:["GET","POST","PUT","DELETE"],
  credentials:true
}))
//userRouter
app.use('/api',userRouter)

//taskRouter
app.use('/api',taskRouter)

mongoose.connect(process.env.MONGODB_URI,{
  dbName:"task",
}).then(()=>console.log("MongoDB is connected..!")).catch((err)=>console.log(err.message));

const port=process.env.PORT || 3000;
app.listen(port,()=>console.log(`server is running on port ${port}`))