import { User } from "../models/user.model.js";
import bcryptjs from "bcryptjs";

export const signup = async (req, res) => {
    const { name, number, id, role, password } = req.body;
    const hashedPassword = bcryptjs.hashSync(password, 10);
    const newUser = new User({ name, number, id, role, password: hashedPassword });
    await newUser.save();
    res.status(201).json('New user created');
}