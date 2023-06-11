import React from 'react'
import NavEnf from '../navbar-enfermera'
import SidebarEnf from '../sidebar-enfermera'
import "../layout-admin/styles.admin.css";

function LayoutEnf({children}) {
  return (
    <>
        <NavEnf />
      <div className=" bg flex justify-center">
        <SidebarEnf />
        <div className="flex-1 p-1 h-full text-black ">{children}</div>
      </div>
    </>
  )
}

export default LayoutEnf