import { NextResponse } from "next/server";
import {pool} from "../../../utils/db/database";

export async function GET(request){
    //const [rows] = await pool.query('SELECT id_carnet, nom_mascota, nom_dueño, raza  FROM Carnet');
    const [rows] = await pool.query('SELECT id_carnet, nom_mascota, nom_dueno, raza  FROM Carnet');
    return NextResponse.json(rows)
}

export async function POST(request){
    const req = await request.json();
    const res = { register: false}
    console.log(req)
    const [rows] = await pool.query(`INSERT INTO CARNET (nom_mascota, nom_dueño, edad, direccion, telefono, raza, tipo_animal, peso, descripcion) VALUES (`+
    `\'${req.nomMas}\',\'${req.nameDue}\', ${req.edad}, \'${req.address}\', \'${req.phone}\', \'${req.raza}\', \'${req.tipo}\', ${req.peso}, \'${req.desc}\')`)
    /*const [rows] = await pool.query(`INSERT INTO Carnet (nom_mascota, nom_dueno, edad, direccion, telefono, raza, tipo_animal, peso, descripcion) VALUES (`+
    `\'${req.nomMas}\',\'${req.nameDue}\', ${req.edad}, \'${req.address}\', \'${req.phone}\', \'${req.raza}\', \'${req.tipo}\', ${req.peso}, \'${req.desc}\')`)*/
    console.log(rows)
    if(rows.affectedRows == 1){
        res.register = true
    }
    console.log(res)
    return NextResponse.json(res)
}