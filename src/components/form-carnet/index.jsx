import React from 'react'

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
  return (
    <>
    <div>CarnetForm</div>
    <button>NFC</button>
    <br/>
    <label htmlFor='nameMas'>Nombre de la mascota:</label>
    <input type='text' name='nameMas' id='nameMas'></input>
    <br/>
    <label htmlFor='edad'>Edad de la mascota:</label>
    <input type='number' max={50} min={1} name='edad' id='edad'></input>
    <br/>
    <label htmlFor='nameD'>Nombre del dueño:</label>
    <input type='text' name='nameD' id='nameD'></input>
    <br/>
    <label htmlFor='address'>Direccion:</label>
    <input type='text' name='address' id='address'></input>
    <br/>
    <label htmlFor='phone'>Telefono:</label>
    <input type='text' name='phone' id='phone' maxLength={10} defaultValue={5512345678}></input>
    <br/>
    <label htmlFor='raza'>Seleccione una raza: </label>
    <select name='raza' id='raza'>
        {razas.map((raza)=>(
            <option key={raza.key} value={raza.value}>
                  {raza.raza}
                </option>
        ))}
    </select>
    <label htmlFor='tipo'>Tipo de animal:</label>
    <select name='tipo' id='tipo'>
        {tipos.map((tipo)=>(
            <option key={tipo.key} value={tipo.value}>
                  {tipo.tipo}
                </option>
        ))}
    </select>
    <br/>
    <label htmlFor='peso'>Peso(kg):</label>
    <input type='number' step={0.01} min={0} max={70}></input>
    <br/>
    <label htmlFor='desc'>Descripcion:</label>
    <br/>
    <textarea id='desc' name='desc' rows="4" cols="50" maxLength={500}></textarea>
    <br></br>
    <button>Registrar</button>
    </>
  )
}
