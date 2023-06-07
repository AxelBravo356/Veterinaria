"use client";
import React from 'react'
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const tipos_usu = [ {key: "def", value: '', tipo: "Seleccione un tipo"}, {key: "admin", value: "admin", tipo: "Administrador"}, {key: "enfermera", value: "enfermera", tipo: "Enfermera"}, {key: "medico", value: "medico",  tipo: "Medico Veterinario"}]

export default function FormRegister() {
    const router = useRouter();
    const [nombre, setNom] = useState('');
    const [tipo, setTipo] = useState('');
    const [correo, setCorreo] = useState('');
    const [pass, setPass] = useState('');

    const register = async () => {
        console.log('tipo: ',tipo)
        if(tipo=='') alert('Seleccione tipo')
        else{
            const response = await fetch('/api/users/register', {
                method: 'POST',
                body: JSON.stringify({nombre: nombre, tipo: tipo, email: correo, pass: pass})
            })
            const data = await response.json();
            console.log('data: ', data)
            
                setTimeout(()=>{
                    if(!data.register) alert('Error en el registro')
                    else{
                      router.push('/admin/users');
                    }
                  },10);
            
        }
    }

  return (
    <div>
    <label htmlFor='name'>Nombre: </label>
    <input type='text' name='name' value={nombre} onChange={(e) => {setNom(e.target.value)}}></input>
    <br/>
    <label htmlFor='tipo_usu'>Tipo usuario:</label>
    <select name='tipo_usu' id='tipo_usu' value={tipo} onChange={(e) => {setTipo(e.target.value)}}>
        {tipos_usu.map((i)=>
        <option key={i.key} value={i.value}>{i.tipo}</option>
        )}
    </select>
    <br/>
    <label htmlFor='email'>Correo: </label>
    <input type='email' name='email' value={correo} onChange={(e) => {setCorreo(e.target.value)}}></input>
    <br/>
    <label htmlFor='password'>contraseña: </label>
    <input type='password' name='password' value={pass} onChange={(e) => {setPass(e.target.value)}}></input>
    <br/>
    <button onClick={register}>Registrar</button>
    </div>
  )
}
