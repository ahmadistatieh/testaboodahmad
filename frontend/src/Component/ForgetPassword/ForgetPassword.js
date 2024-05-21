import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './ForgetPassword.css';

const FindAccount = () => {
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    /* CHAT GPT */
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('http://localhost:4000/forgotPassword', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });
            const result = await response.json({});
            if (response.ok) {
                console.log('Email sent with code:', result.codeToSend);
                navigate('/email-verification');  // Navigate to email verification page
            } else {
                console.error('Error:', result.message);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };


    const handleCancel = () => {
        navigate('/');
        console.log('Cancel button clicked');
    };

    return (
        <div className='CenteredContainer'>
            <div className="ContainerForgetPassword">
                <h1 className='FindAacountHeader1'>Find your account</h1>
                <hr />
                <p className='ParagraphForgetPassword'>Please enter your email address to search for your account.</p>
                <form onSubmit={handleSubmit}>
                    <label className='ForgetPasswordLabel' htmlFor="email" ></label>
                    <input
                        type="email"
                        className="InputEmailForgetPassword"
                        name="email"
                        placeholder="Email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <button className='ButtonSearchForgetPassword' type="submit">Search</button>
                    <button className='ButtonCancelForgetPassword' type="button" onClick={handleCancel}>Cancel</button>
                </form>
                <Link to='/ForgetPassword' />
            </div>
        </div>
    );
};
export default FindAccount;