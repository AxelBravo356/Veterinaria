
//email    |    petmon805@gmail.com  chyozypwddiiwtkf

import nodemailer from 'nodemailer';

export const email = process.env.EMAIL;
const pass = process.env.EMAIL_PASS;

export const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: email,
            pass:pass,
        },
    });

export const mailOptions = {
    from: email,
    to: email,
}