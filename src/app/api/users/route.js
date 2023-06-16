import { NextResponse } from "next/server";
import {pool} from "../../../utils/db/database";

export async function GET(request){
  //console.log("entro")
  const [rows] = await pool.query('SELECT id_personal, tipo_usu, nombre FROM PERSONAL');
  //const [rows] = await pool.query('SELECT id_personal, tipo_usu, nombre FROM Personal');
  //console.log(rows)
  return NextResponse.json(rows);
}

export async function POST(request){
    const req = await request.json();
    const res = { tipo_user: false}
    //console.log(req)
    const [rows] = await pool.query(`SELECT (tipo_usu) FROM Personal WHERE correo=\'${req.usuario}\' AND contraseña=\'${req.contraseña}\'`)
    //const [rows] = await pool.query(`SELECT (tipo_usu) FROM Personal WHERE correo=\'${req.usuario}\' AND contrasena=\'${req.contraseña}\'`)
    console.log(rows)
    if(rows.length >= 1){
        res.tipo_user = String(rows[0].tipo_usu)
    }
    //console.log(res)
    return NextResponse.json(res);
}