import nodemailer from 'nodemailer';

export const sendEmail = async (to, subject, html) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAILSENDER,
            pass: process.env.EMAILPASS,
        },
    });

    const mailOptions = {
        from: `Unibooks <${process.env.EMAILSENDER}>`,
        to,
        subject,
        html,
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent: ' + info.response);
        return info;
    } catch (error) {
        console.error('Error sending email:', error);
        throw error;
    }
};
