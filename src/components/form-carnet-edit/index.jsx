"use client"
import { useEffect, useState } from 'react'

async function parseo(texto){
    const data = JSON.parse(texto);
    return data;
}

function FormCarnetEdit({ datos }) {

    const data = parseo(datos);
    console.log("data", data);
     
  return (
    <>
        <div>
            <p>Datos:</p>
            <p>{data}</p>
        </div>
    </>
  )
}

export default FormCarnetEdit