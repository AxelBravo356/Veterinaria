"use client";
import { add } from 'date-fns';
import React, { useState } from 'react'

const razas = [
    { key: "def", value: "", raza: "Seleccione una raza" },
    { key: "perro", value: "perro", raza: "Perro" },
    { key: "gato", value: "gato", raza: "Gato" },
    { key: "ave", value: "ave", raza: "Ave" },
    { key: "roedor", value: "roedor", raza: "Roedor" },
    { key: "reptil", value: "reptil", raza: "Reptil" },
    { key: "aracnido", value: "aracnido", raza: "Aracnido" },
    { key: "insecto", value: "insecto", raza: "Insecto" },
    { key: "otro", value: "otro", raza: "Otro" },
  ];
const tipos = [
    { key: 'def', value: "", tipo: "Seleccione un tipo"},
    { key: 'pequeño', value: "pequeño", tipo: "Pequeño"},
    { key: 'mediano', value: "mediano", tipo: "Mediano"},
    { key: 'grande', value: "grande", tipo: "Grande"},
];

export default function CarnetForm() {
  const [nomMas, setNomMas] = useState("");
  const [edad, setEdad] = useState(0);
  const [nameDue, setNomDue] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [raza, setRaza] = useState("");
  const [tipo, setTipo] = useState("");
  const [peso, setPeso] = useState(0);
  const [desc, setDesc] = useState("");

  const regCarnet = async () =>{
    let val_err = "";
    const data = {nomMas, edad, nameDue, address, phone, raza, tipo, peso, desc};
    console.log(data)
    
    if(data.nomMas == "" ) val_err+='Nombre de la mascota,';
    if(data.edad == "" || Number(data.edad) <= 0 || Number(data.edad) >= 25) val_err+=' Edad de la mascota';
    if(data.nameDue == "") val_err+=' Nombre del dueño,';
    if(data.address == "") val_err+=' Direccion,';
    if(data.phone.length != 10 || data.phone.match(/[a-z|A-Z]/g) != null) val_err+=' Telefono,';
    if(data.raza == "") val_err+=" Raza,";
    if(data.tipo == "") val_err+=" Tipo,";
    if(data.peso == "" || Number(data.peso) <= 0 || Number(data.peso) >= 80) val_err+=' Peso,';
    if(val_err != "") alert('Existe un error en los campos: '+val_err)
    else{ 
      console.log('Se envian datos')
    }

  }

  return (
    <>
    <div>CarnetForm</div>
    <button>NFC</button>
    <br/>
    <label htmlFor='nameMas'>Nombre de la mascota:</label>
    <input type='text' name='nameMas' id='nameMas'
      value={nomMas} 
      onChange={(e)=> setNomMas(e.target.value)}
    ></input>
    <br/>
    <label htmlFor='edad'>Edad de la mascota:</label>
    <input type='number' max={50} min={1} name='edad' id='edad'
      value={edad} 
      onChange={(e)=> setEdad(e.target.value)}
    ></input>
    <br/>
    <label htmlFor='nameD'>Nombre del dueño:</label>
    <input type='text' name='nameD' id='nameD'
      value={nameDue} 
      onChange={(e)=> setNomDue(e.target.value)}
    ></input>
    <br/>
    <label htmlFor='address'>Direccion:</label>
    <input type='text' name='address' id='address'
      value={address}
      onChange={(e)=> setAddress(e.target.value)}
    ></input>
    <br/>
    <label htmlFor='phone'>Telefono:</label>
    <input type='text' name='phone' id='phone' maxLength={10} placeholder={5512345678}
      value={phone}
      onChange={(e)=> setPhone(e.target.value)}
    ></input>
    <br/>
    <label htmlFor='raza'>Seleccione una raza: </label>
    <select name='raza' id='raza'
      value={raza}
      onChange={(e)=> setRaza(e.target.value)}>
        {razas.map((raza)=>(
            <option key={raza.key} value={raza.value}>
                  {raza.raza}
                </option>
        ))}
    </select>
    <label htmlFor='tipo'>Tipo de animal:</label>
    <select name='tipo' id='tipo'
      value={tipo}
      onChange={(e)=> setTipo(e.target.value)}>
        {tipos.map((tipo)=>(
            <option key={tipo.key} value={tipo.value}>
                  {tipo.tipo}
                </option>
        ))}
    </select>
    <br/>
    <label htmlFor='peso'>Peso(kg):</label>
    <input type='number' step={0.01} min={0} max={70}
      value={peso}
      onChange={(e)=>setPeso(e.target.value)}></input>
    <br/>
    <label htmlFor='desc'>Descripcion:</label>
    <br/>
    <textarea id='desc' name='desc' rows="4" cols="50" maxLength={500}
      value={desc}
      onChange={(e)=>setDesc(e.target.value)}
      ></textarea>
    <br></br>
    <button onClick={regCarnet}>Registrar</button>
    </>
  )
}
