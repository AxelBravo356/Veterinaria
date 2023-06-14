import Layout from '@/components/layout-recepcion'
import React from 'react'
import LayoutTable from '@/components/layout-table-carnets'
import CarnetTable from '@/view/CarnetTable'
function Carnets() {
  return (
    <>
        <Layout>
        <LayoutTable>
          <CarnetTable></CarnetTable>
        </LayoutTable>
        </Layout>
    </>
  )
}

export default Carnets