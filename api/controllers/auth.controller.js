import { User } from "../models/user.model.js";
import { errorHandler } from '../utils/error.js';
import bcryptjs from "bcryptjs";
import jwt from 'jsonwebtoken';

export const signup = async (req, res, next) => {
    const { username, fullname, number, id, role, password } = req.body;
    const hashedPassword = bcryptjs.hashSync(password, 10);
    const newUser = new User({ username, fullname, number, id, role, password: hashedPassword });
    try {
        await newUser.save();
        res.status(201).json({ message: 'New user created' });
    } catch (err) {
        next(err);
    }
}

export const signin = async (req, res, next) => {
    const { username, password } = req.body;
    try {
        const validUser = await User.findOne({ username });
        if (!validUser) {
            return next(errorHandler(404, 'User not found!'));
        }
        const validPassword = bcryptjs.compareSync(password, validUser.password);
        if (!validPassword) return next(errorHandler(401, 'Incorrect username or password!'));
        const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
        const { password: pass, ...rest } = validUser._doc;
        res.cookie('access_token', token, {
            httpOnly: true
        }).status(200).json(rest);
    } catch (err) {
        next(err);
    }
}