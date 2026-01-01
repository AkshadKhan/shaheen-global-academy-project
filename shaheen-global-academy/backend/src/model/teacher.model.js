import mongoose from "mongoose";


const teacherSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    qualification: {
        type: String, required: true
    },
    specialization: {
        type: String, required: true
    },
    department: {
        type: String, required: true
    },
    experience: {
        type: Number, required: true
    },
    profilePicture: {
        type: String
    }
},{timestamps:true});


const Teacher = mongoose.model("Teacher",teacherSchema);
export default Teacher;
