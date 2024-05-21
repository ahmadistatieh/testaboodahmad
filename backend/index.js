import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { customAlphabet } from 'nanoid';
import usersModel from './models/user.js';
import { sendEmail } from './sendEmail.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());


mongoose.connect(process.env.Urlmongo)
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


export const ForgotPassword = async (req, res) => {
    const { email } = req.body;
    console.log('Received email:', email); 

    try {
        const RandomCode = customAlphabet('1234567890', 6);
        const codeToSend = RandomCode();
        console.log('Generated code:', codeToSend);

        const user = await usersModel.findOneAndUpdate(
            { email },
            { sendCode: codeToSend },
            { new: true }
        );

        if (!user) {
            console.error('User not found for email:', email); 
            return res.status(404).json({ message: 'User not found' });
        }

        await sendEmail(email, 'Reset Password', `<h1>${codeToSend}</h1>`);
        console.log('Email sent to:', email); 
        return res.status(200).json({ message: 'Success', codeToSend });
    } catch (err) {
        console.error('Error processing forgot password:', err); 
        res.status(500).json({ message: 'Internal Server Error' , data:err});
    }
};

app.post('/ForgotPassword', ForgotPassword); 

app.post('/verifyCode', async (req, res) => {

    const { code } = req.body; 
    console.log('Received code:', code);

    try {
        const user = await usersModel.findOne({ sendCode: code });

        if (!user) {
            console.error('Invalid code');
            return res.status(400).json({ message: 'Invalid code' });
        }

        console.log('Code verified for user:', user.email);
        return res.status(200).json({ message: 'Code verified' });
    } catch (err) {
        console.error('Error verifying code:', err);
        res.status(500).json({ message: 'Internal Server Error', data: err });
    }
});

const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
    console.log("Started on port 4000!");
});