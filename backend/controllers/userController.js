import userModel from "../models/userModel.js";

// Route for user Login
const loginUser = async (req, res) => {

}

// Route for user register
const registerUser = async (req, res) => {
    try {
        const{name, email, password} = req.body;

        // checking user already exist or not
        const exists = await userModel.findOne({email});

    } catch (error) {
        
    }
}

// Route for Admin Login
const adminLogin = async (req, res) => {

}

export { loginUser, registerUser, adminLogin }