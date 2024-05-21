import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { customAlphabet } from 'nanoid';
import usersModel  from './models/user.js';
import { sendEmail } from './sendEmail.js';

const app = express();
app.use(cors());
app.use(express.json());


mongoose.connect('mongodb+srv://mhmadawawdy:test123@cluster0.qagomj3.mongodb.net/mern')
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Error connecting to MongoDB:', err));  

app.get('/getUsers1',  async (req, res) => {
    try {
        const allusers = await usersModel.find();
        console.log(allusers);
        res.json(allusers);
    } catch (err) {
        console.error('Error fetching Users info:', err);
        res.status(500).json({ message: 'Internal Server Error' });
    } 
});

export const forgotPassword = async (req, res) => {
    const { email } = req.body;
    try {
        const RandomCode = customAlphabet('ABCDMNY123456789', 4);
        const codeToSend = RandomCode();

        const user = await User.findOneAndUpdate(
            { email },
            { sendCode: codeToSend },
            { new: true }
        );

        if (!user) return res.status(404)
            .json({ message: 'User not found' });

        await sendEmail(email, 'Reset Password', `<h1>${codeToSend}</h1>`);
        return res.status(200)
        .json({ 
            message: 'Success', codeToSend 
        });
    } catch (err) {
        console.error('Error processing forgot password:', err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};


app.listen(4000, () => {
    console.log("Started on port 4000!");
});