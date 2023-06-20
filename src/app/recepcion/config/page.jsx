"use client";
import Layout from '@/components/layout-recepcion'
import React from 'react'

function Config() {
    const correo = async () => {
        const response = await fetch("/api/mail", {
            method: "POST",
            body: JSON.stringify({}),
        });
        const res = await response.json();
        console.log(res);
    }
  return (
    <>
        <Layout>
            <button onClick={correo}>Enviar correo</button>
        </Layout>
    </>
  )
}

export default Config