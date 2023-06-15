"use client";
import Layout from "@/components/layout-recepcion";
import TablaCitas from "@/components/calendar-citas";
import CitasShow from "@/components/citas-show";

export default function Citas() {
  return (
    <>
      <Layout>
        {/* <TablaCitas /> */}
        <CitasShow />
      </Layout>
    </>
  );
}
