import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './EmailVerification.css';

const EmailVerification = () => {
    const [code, setCode] = useState('');
    const navigate = useNavigate();

    /* CHAT GPT */
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('http://localhost:4000/verifyCode', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ code }),
            });
            const result = await response.json();
            if (response.ok) {
                console.log('Code verified:', result);
                navigate('/change-password');  // Navigate to change password page
            } else {
                console.error('Error:', result.message);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleCancel = () => {
        navigate('/ForgetPassword');
        console.log('Cancel button clicked');
    };

    return (
        <div className='CenteredContainer'>
            <div className="container-verification">
                <h1 className='header-verification'>Enter the code</h1>
                <hr />
                <p className='paragraph-verification'>Please enter the code that you received in your email.</p>

                <form onSubmit={handleSubmit}>
                    <label className='label-verification' htmlFor="code"></label>
                    <input
                        type="text"
                        className="input-verification"
                        name="code"
                        placeholder="The Code"
                        required
                        value={code}
                        pattern="\d{4}"
                        maxLength="4"
                        onChange={(e) => setCode(e.target.value)}
                    />
                    
                    <button className='button-verify' type="submit">Verify</button>
                    <button className='button-cancel' type="button" onClick={handleCancel}>Cancel</button>
                </form>
                <Link to='/ForgetPassword' />
            </div>
        </div>
    );
};

export default EmailVerification;
