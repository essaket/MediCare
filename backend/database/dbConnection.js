import mongoose from "mongoose";

export const dbConnection = ()=>{
    mongoose.connect(process.env.MONGO_URL,{
        dbName: "ESSAKET_HOSPITAL_MANAGEMENT_SYSTEM",
    }).then(()=>{
        console.log("Connected to database");
    }).catch(err=>{
        console.log(`Error connecting to database: ${err}`);
    });
};