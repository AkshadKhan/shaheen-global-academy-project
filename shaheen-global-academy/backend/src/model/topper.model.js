import mongoose from "mongoose";

const topperSchema = new mongoose.Schema({
    name: {
        type:String,
        required:true,
    } ,
    course: {
        type:String,
        required:true
    } ,
    marks: {
        type:Number,
        required:true
    },
    totalMarks: {
        type:Number,
        required: true
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