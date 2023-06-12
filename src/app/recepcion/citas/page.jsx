"use client";
import Layout from "@/components/layout-recepcion";
import Link from "next/link";
import React from "react";
import Calendar from "@/components/calendar";
import TablaCitas from "@/components/calendar-citas";
export default function Citas() {
  return (
    <>
      <Layout>
        <TablaCitas />
      </Layout>
    </>
  );
}
