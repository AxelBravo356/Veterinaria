import { NextResponse } from "next/server";
import {pool} from "../../../../utils/db/database";

export async function POST(request){
    const req = await request.json();
    const res = { register: false}
    console.log(req)
    //const [rows] = await pool.query(`INSERT INTO PERSONAL (NOMBRE, TIPO_USU, CORREO, CONTRASEÑA) VALUES (\'${req.nombre}\', \'${req.tipo}\', \'${req.email}\', \'${req.pass}\')`)
    const [rows] = await pool.query(`INSERT INTO Personal (NOMBRE, TIPO_USU, CORREO, CONTRASENA) VALUES (\'${req.nombre}\', \'${req.tipo}\', \'${req.email}\', \'${req.pass}\')`)
    console.log(rows)
    if(rows.affectedRows == 1){
        res.register = true
    }
    console.log(res)
    return NextResponse.json(res);
}