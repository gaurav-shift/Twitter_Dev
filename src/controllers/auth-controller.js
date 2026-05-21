
import UserService from "../services/user-service.js";
const userService = new UserService();

export const signUp = async (req,res) => {
    try {
        const response = await userService.signUp({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        });
        res.status(200).json({
            success: true, 
            message: 'User created successfully',
            data: response,
            error: {}
        });
    } catch (error) {
        res.status(500).json({
            success: false, 
            message: 'User creation failed',
            data: {},
            error: error
        });
    }
}

export const login = async(req,res) => {
    try {
        const token = await userService.signIn(req.body);
        res.status(200).json({
            success: true, 
            message: 'Login successful',
            data: token ,
            error: {}
        });
    } catch (error) {
        res.status(500).json({
            success: false, 
            message: 'Login failed',
            data: {},
            error: error
        });
    }
}