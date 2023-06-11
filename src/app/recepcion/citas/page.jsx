"use client";
import Layout from '@/components/layout-recepcion'
import Link from 'next/link';
import React from 'react'


export  default function Citas() {
  return (
    <>
        <Layout>
        <Link href={"/recepcion/citas/registro"}><button>Agendar</button></Link>
        </Layout>
    </>
  )
}
