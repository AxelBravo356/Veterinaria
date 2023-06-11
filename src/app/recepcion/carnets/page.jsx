import Layout from '@/components/layout-recepcion'
import React from 'react'
import Link from 'next/link'
function Carnets() {
  return (
    <>
        <Layout>
        <Link href={"/recepcion/carnets/registro"}><button>Nuevo Carnet</button></Link>
        </Layout>
    </>
  )
}

export default Carnets