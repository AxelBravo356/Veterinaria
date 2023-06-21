import { NextResponse } from "next/server";
import { pool } from "@/utils/db/database";

export async function GET(request){
    const req = await request.json();
    console.log(req)
    return NextResponse.json({})
}

export async function POST(request){
    const req = await request.json();
    console.log(req)
    const [rows] = await pool.query(`SELECT * FROM CARNET WHERE id_carnet=${req.id}`)
    console.log(rows)
    return NextResponse.json(rows[0])
}