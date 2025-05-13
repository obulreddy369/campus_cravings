import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config({
    path:'../config/.env'
})

export const dbConnection=()=>{
     mongoose.connect(process.env.MONGO_URI).then(()=>{
        console.log("connected to db");
     }).catch((error)=>{
        console.log(error);
     })
}