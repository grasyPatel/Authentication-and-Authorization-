import User from '../models/user.js';

export const createUser = async (req, res) => {
    const {username, email, password} = req.body;
    try{
        const isEmailExists = await User.findOne({email});
        if(isEmailExists){
            return res.status(400).json({message: "User already exists"});
        }
        const newUser =new User({
            username,
            email,
            password
        })
        await newUser.save();
        res.status(201).json({message: "User created successfully"});
    }catch(error){
        res.status(500).json({message: error.message});

    }
}