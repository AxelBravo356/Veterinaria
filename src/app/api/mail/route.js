import { NextRequest, NextResponse } from 'next/server';
import { transporter, email, mailOptions } from './nodemailer';

export async function POST(request) {
    const data = await request.json()
    console.log(data)
    try {
        await transporter.sendMail({
            ...mailOptions,
            subject: "Bienvenido a la familia Petmon",
            text: "This is a test string",
            html: "<h1>Bienvenido</h1><p>Te damos la bienvenida a la familia petmon</p>",
        })
        return NextResponse.json({message:"done"});
    } catch (error) {
        console.log(error);
        return NextResponse.json({message:"error"});
    }
    return NextResponse.json({message:"ok"});
}