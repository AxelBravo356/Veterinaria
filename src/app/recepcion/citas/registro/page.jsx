import Layout from "@/components/layout-recepcion";
import CitaForm from "@/components/form-cita";
import Calendar from "@/components/calendar";

function RegistroCitas() {
  return (
    <>
      <Layout>
        <CitaForm></CitaForm>
        <Calendar />
      </Layout>
    </>
  );
}

export default RegistroCitas;
