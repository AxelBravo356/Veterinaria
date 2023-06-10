"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const tipos_usu = [
  { key: "def", value: "", tipo: "Seleccione un tipo" },
  { key: "admin", value: "admin", tipo: "Administrador" },
  { key: "enfermera", value: "enfermera", tipo: "Enfermera" },
  { key: "medico", value: "medico", tipo: "Medico Veterinario" },
];

export default function FormRegister() {
  const router = useRouter();
  const [nombre, setNom] = useState("");
  const [tipo, setTipo] = useState("");
  const [correo, setCorreo] = useState("");
  const [pass, setPass] = useState("");

  const register = async () => {
    console.log("tipo: ", tipo);
    if (tipo == "") alert("Seleccione tipo");
    else {
      const response = await fetch("/api/users/register", {
        method: "POST",
        body: JSON.stringify({
          nombre: nombre,
          tipo: tipo,
          email: correo,
          pass: pass,
        }),
      });
      const data = await response.json();
      console.log("data: ", data);

      setTimeout(() => {
        if (!data.register) alert("Error en el registro");
        else {
          router.push("/admin/users");
        }
      }, 10);
    }
  };

  return (
    <div className="p-10 flex justify-center">
      <div className="bg-white px-10 py-10 rounded-3xl border-2 border-gray-100">
        <h1 className="text-center font-bold text-3xl">Usuarios</h1>
        <div className="mt-8">
          <div>
            <label htmlFor="name" className="text-lg font-medium">
              Nombre
            </label>
            <input
              className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
              placeholder="Name"
              name="name"
              value={nombre}
              onChange={(e) => {
                setNom(e.target.value);
              }}
            />
          </div>
          <div>
            <label htmlFor="tipo_usu" className="text-lg font-medium">
              Tipo de usuario
            </label>
            <select
              className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
              name="tipo_usu"
              id="tipo_usu"
              value={tipo}
              onChange={(e) => {
                setTipo(e.target.value);
              }}
            >
              {tipos_usu.map((i) => (
                <option key={i.key} value={i.value}>
                  {i.tipo}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="email" className="text-lg font-medium">
              Correo
            </label>
            <input
              name="email"
              value={correo}
              onChange={(e) => {
                setCorreo(e.target.value);
              }}
              type="text"
              className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
              placeholder=" example@hotmail.com"
            />
          </div>
          <div>
            <label className="text-lg font-medium">Contraseña</label>
            <input
              type="password"
              name="password"
              value={pass}
              onChange={(e) => {
                setPass(e.target.value);
              }}
              className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
            />
          </div>
          <div className="mt-8 flex flex-col gap-y-4">
            <button
              onClick={register}
              className=" active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-3 bg-sky-500 text-white text-lg font-bold rounded-xl "
            >
              Registrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
