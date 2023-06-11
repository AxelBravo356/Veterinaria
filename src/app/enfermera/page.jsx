import LayoutEnf from '@/components/layout-enfermera'
import React from 'react'

function Enfermera() {
  return (
    <>
        <LayoutEnf>
        <div className=" grid grid-rows-3 py-52  w-full">
          <div className="text-7xl">
            <h2>Bienvenida/o</h2>
            <div className="bg-sky-500 py-1"></div>
          </div>
          <div className="text-2xl font-medium text-sky-600">
            <h2>Enfermera</h2>
          </div>
          <div className="text-3xl">
            <h2>Nombre</h2>
          </div>
        </div>
        </LayoutEnf>
    </>
  )
}

export default Enfermera