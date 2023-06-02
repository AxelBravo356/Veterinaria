import CarnetDigital from "@/components/carnet-digital";
import CotizaWithUs from "@/components/quote-w-u";
import Navbar from "@/components/navbar";
import ProfessionalService from "@/components/prof-service";
import Servicios from "@/components/servicios";
import FormsToQuote from "@/components/forms-to-quote";

export default function Home() {
  return (
    <>
      <Navbar />
      <ProfessionalService />
      <Servicios />
      <CarnetDigital />
      <CotizaWithUs />
      <FormsToQuote />
    </>
  );
}
