// require('dotenv').config({path:'./env'})
import dotenv from 'dotenv'
import connectDB from "./db/db.js";

dotenv.config({
    path:'./env'
})

connectDB()





















// import mongoose from "mongoose";
// import express from 'express';
// import { DB_NAME } from "./constansts";

// const app=express()


// (async()=>{
//     try {
//        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)

//         app.on("error",(error)=>{
//             console.log('ERRR',error);
//             throw error
//         })
        
//         app.listen(process.env.PORT,()=>{
//             console.log(`APP IS LISTENING ON PORT ${process.env.PORT}`);
//         })

//     } catch (error) {
//         console.error('ERROR',error);
//         throw error
//     }
// })()
