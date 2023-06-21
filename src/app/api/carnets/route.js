import { NextResponse } from "next/server";
import {pool} from "../../../utils/db/database";
import { transporter, mailOptions } from "./nodemailer"

export async function GET(request){
    const [rows] = await pool.query('SELECT id_carnet, nom_mascota, nom_dueño, telefono, raza, descripcion  FROM Carnet');
    //const [rows] = await pool.query('SELECT id_carnet, nom_mascota, nom_dueno, raza  FROM Carnet');
    return NextResponse.json(rows)
}

export async function POST(request){
    const req = await request.json();
    const res = { register: false, message: ""}
    console.log(req)
    const [rows] = await pool.query(`INSERT INTO CARNET (nom_mascota, nom_dueño, edad, direccion, telefono, raza, tipo_animal, peso, descripcion, correo) VALUES (`+
    `\'${req.nomMas}\',\'${req.nameDue}\', ${req.edad}, \'${req.address}\', \'${req.phone}\', \'${req.raza}\', \'${req.tipo}\', ${req.peso}, \'${req.desc}\', \'${req.correo}\')`)
    /*const [rows] = await pool.query(`INSERT INTO Carnet (nom_mascota, nom_dueno, edad, direccion, telefono, raza, tipo_animal, peso, descripcion) VALUES (`+
    `\'${req.nomMas}\',\'${req.nameDue}\', ${req.edad}, \'${req.address}\', \'${req.phone}\', \'${req.raza}\', \'${req.tipo}\', ${req.peso}, \'${req.desc}\')`)*/
    console.log(rows)
    if(rows.affectedRows == 1){
        res.register = true
    }
    try {
        mailOptions.to = req.correo
        await transporter.sendMail({
            ...mailOptions,
            subject: "Bienvenido a la familia Petmon",
            text: "This is a test string",
            html: "<h1>Bienvenido</h1><p>Te damos la bienvenida a la familia petmon</p>",
        })
    } catch (error) {
        console.log(error);
    }
    console.log(res)
    return NextResponse.json(res)
}