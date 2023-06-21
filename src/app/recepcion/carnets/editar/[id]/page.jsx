"use client";
import FormCarnetEdit from '@/components/form-carnet-edit';
import Layout from '@/components/layout-recepcion'
import { set } from 'date-fns';
import { useEffect } from 'react';
import { useState } from 'react';

function ModificarCarnet({ params }) {
    const id_carnet = params.id;

    const [nomMas, setNomMas] = useState("");
    const [edad, setEdad] = useState(0);
    const [nameDue, setNomDue] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [correo, setCorreo] = useState("");
    const [raza, setRaza] = useState("");
    const [tipo, setTipo] = useState("");
    const [peso, setPeso] = useState(0);
    const [desc, setDesc] = useState("");
    const [data, setData] = useState("");
    useEffect(async () => {
        const req = await fetch("/api/carnets/getCarnet", {
            method: "POST",
            body: JSON.stringify({
                id: id_carnet,
            }),
        })
        const res = await req.json();
        console.log('res: ', res);
        // setNomMas(res.nom_mascota);
        // setEdad(res.edad)
        setData(JSON.stringify(res));
    }, []);

    // useEffect(() => {
    //     fetch("/api/carnets/getCarnet", {
    //         method: "POST",
    //         body: JSON.stringify({
    //             id: id_carnet,
    //         }),
    //     })
    //       .then((res) => res.json())
    //       .then((data) => {
    //         //setData(data);
    //         console.log(data)
    //         setNomMas(data.nomMas);
    //       });
    //   }, []);

    //<FormCarnetEdit datos={data}></FormCarnetEdit>

    return (
        <>
            <Layout>
                <p>Modificar Carnet {id_carnet}</p>
                <p>Data:</p>
                <div>{data}</div>
            </Layout>
        </>
    )
}

export default ModificarCarnet