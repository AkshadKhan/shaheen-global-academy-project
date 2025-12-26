import mongoose from "mongoose";
import dotenv from "dotenv";
import express from "express";

dotenv.config();

async function db(){
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connection established to database");
    } catch (error) {

        console.log("Error connecting to database ",error);
        
    }
}

export default db;
