import Admin from "../model/admin.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


import dotenv from "dotenv";
dotenv.config();


// register admin
const register = async (req, res) => {
    try {
        const { userName, password } = req.body;
        const existingAdmin = await Admin.findOne({ userName })
        if (existingAdmin) {
            return res.status(400).json({
                message: "Admin already registered"
            })
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const admin = new Admin({
            userName,
            password : hashedPassword
        })
        await admin.save();
        return res.status(201).json({
            message: "Admin saved successfuly"
        })
    } catch (error) {
        return res.status(400).json({
            message: "Error registering user",
            error: error.message
        })

    }


}

// login admin

const login = async (req, res) => {
    try {
        const { userName, password } = req.body;
        const searchAdmin = await Admin.findOne({userName});
        if (!searchAdmin) {
            return res.status(400).json({
                message: "Invalid credentials"
            })
        }
        const isPasswordValid = await bcrypt.compare(password, searchAdmin.password);
        if (!isPasswordValid) {
            return res.status(400).json({
                message: "Invalid credentials"
            })
        }

        const token = jwt.sign({
            id: searchAdmin._id
        }, process.env.JWT_SECRET,
            { expiresIn: '12h' }
        )

        return res.json({
            message: "Login Successful",
            token: token
        });
    } catch (error) {
        return res.status(500).json({
            message: 'Error logging in',
            error: error.message,
        });
    }
}

export {login,register};