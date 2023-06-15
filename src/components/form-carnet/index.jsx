"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { useState } from "react";

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
  { key: "def", value: "", tipo: "Seleccione un tipo" },
  { key: "pequeño", value: "pequeño", tipo: "Pequeño" },
  { key: "mediano", value: "mediano", tipo: "Mediano" },
  { key: "grande", value: "grande", tipo: "Grande" },
];

export default function CarnetForm() {
  const router = useRouter();
  const [nomMas, setNomMas] = useState("");
  const [edad, setEdad] = useState(0);
  const [nameDue, setNomDue] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [raza, setRaza] = useState("");
  const [tipo, setTipo] = useState("");
  const [peso, setPeso] = useState(0);
  const [desc, setDesc] = useState("");

  const regCarnet = async () => {
    let val_err = "";
    const data = {
      nomMas,
      edad,
      nameDue,
      address,
      phone,
      raza,
      tipo,
      peso,
      desc,
    };
    console.log(data);

    if (data.nomMas == "") val_err += "Nombre de la mascota,";
    if (data.edad == "" || Number(data.edad) <= 0 || Number(data.edad) >= 25)
      val_err += " Edad de la mascota";
    if (data.nameDue == "") val_err += " Nombre del dueño,";
    if (data.address == "") val_err += " Direccion,";
    if (data.phone.length != 10 || data.phone.match(/[a-z|A-Z]/g) != null)
      val_err += " Telefono,";
    if (data.raza == "") val_err += " Raza,";
    if (data.tipo == "") val_err += " Tipo,";
    if (data.peso == "" || Number(data.peso) <= 0 || Number(data.peso) >= 80)
      val_err += " Peso,";
    if (val_err != "") alert("Existe un error en los campos: " + val_err);
    else {
      console.log("Se envian datos");
      const response = await fetch("/api/carnets", {
        method: "POST",
        body: JSON.stringify(data),
      });
      const res = await response.json();
      console.log("data recv: ", res);
      setTimeout(() => {
        if (!res.register) alert("Error en el registro");
        else {
          router.push("/recepcion/carnets");
        }
      }, 10);
    }
  };

  return (
    <div className="container mx-auto">
      <div className="mx-auto py-6 px-4">
        <div className="flex justify-between mb-2">
          <h1 className="text-black text-5xl mb-2">Carnets</h1>
          <button className="bg-sky-500 rounded-lg px-4 hover:bg-sky-300 hover:text-black  text-white ">
            NFC
          </button>
        </div>
        <div className="w-full py-1 bg-sky-500"></div>
      </div>
      <div className="grid grid-cols-2 gap-5 bg-slate-50 m-10 p-8 rounded-xl">
        <div>
          <div>
            <label htmlFor="nameMas" className="text-lg font-bold">
              Nombre de la mascota:
            </label>
            <input
              className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
              type="text"
              name="nameMas"
              id="nameMas"
              value={nomMas}
              onChange={(e) => setNomMas(e.target.value)}
            ></input>
          </div>
          <div>
            <label htmlFor="edad" className="text-lg font-bold">
              Edad de la mascota:
            </label>
            <input
              className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
              type="number"
              max={50}
              min={1}
              name="edad"
              id="edad"
              value={edad}
              onChange={(e) => setEdad(e.target.value)}
            ></input>
          </div>
          <div>
            <label htmlFor="nameD" className="text-lg font-bold">
              Nombre del dueño:
            </label>
            <input
              className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
              type="text"
              name="nameD"
              id="nameD"
              value={nameDue}
              onChange={(e) => setNomDue(e.target.value)}
            ></input>
          </div>
          <div>
            <label htmlFor="address" className="text-lg font-bold">
              Direccion:
            </label>
            <input
              className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
              type="text"
              name="address"
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            ></input>
          </div>
          <div>
            <label htmlFor="phone" className="text-lg font-bold">
              Telefono:
            </label>
            <input
              className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
              type="text"
              name="phone"
              id="phone"
              maxLength={10}
              placeholder={5512345678}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            ></input>
          </div>
        </div>
        <div>
          <div>
            <label htmlFor="raza" className="text-lg font-bold">
              Seleccione una raza:{" "}
            </label>
            <select
              className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
              name="raza"
              id="raza"
              value={raza}
              onChange={(e) => setRaza(e.target.value)}
            >
              {razas.map((raza) => (
                <option key={raza.key} value={raza.value}>
                  {raza.raza}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="tipo" className="text-lg font-bold">
              Tipo de animal:
            </label>
            <select
              className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
              name="tipo"
              id="tipo"
              value={tipo}
              onChange={(e) => setTipo(e.target.value)}
            >
              {tipos.map((tipo) => (
                <option key={tipo.key} value={tipo.value}>
                  {tipo.tipo}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="peso" className="text-lg font-bold">
              Peso(kg):
            </label>
            <input
              className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
              type="number"
              step={0.01}
              min={0}
              max={70}
              value={peso}
              onChange={(e) => setPeso(e.target.value)}
            ></input>
          </div>
          <div>
            <label htmlFor="desc" className="text-lg font-bold">
              Descripcion:
            </label>
            <br />
            <textarea
              className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
              id="desc"
              name="desc"
              rows="4"
              cols="50"
              maxLength={500}
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            ></textarea>
          </div>
          <div className="flex justify-end">
            <button
              className="bg-sky-500 rounded-lg px-5 py-2 text-white hover:bg-sky-200 hover:text-black"
              onClick={regCarnet}
            >
              Registrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
