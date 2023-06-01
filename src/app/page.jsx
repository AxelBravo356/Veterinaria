import CarnetDigital from "@/components/carnet-digital";
import Navbar from "@/components/navbar";
import ProfessionalService from "@/components/prof-service";
import Servicios from "@/components/servicios";

export default function Home() {
  return (
    <>
      <Navbar />
      <ProfessionalService />
      <Servicios />
      <CarnetDigital />
    </>
  );
}
