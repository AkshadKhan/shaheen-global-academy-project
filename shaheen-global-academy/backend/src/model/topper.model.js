import mongoose from "mongoose";

const topperSchema = new mongoose.Schema({
    name: {
        type:String,
        required:true,
    } ,
    exam: {
        type:String,
        required:true
    } ,
    score: {
        type:String,
        required:true
    },
    rank: {
        type:Number,
        required:true
    } ,
    year: {
        type:Number,
        required:true
    } ,
    profilePicture:{
        type:String
    }
},{timestamps:true});


const Topper = mongoose.model("Topper",topperSchema);
export default Topper;