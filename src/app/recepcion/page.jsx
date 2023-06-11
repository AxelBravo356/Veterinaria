import SidebarRecepcion from "@/components/sidebar-recepcion";
import Layout from "@/components/layout-recepcion";
export default function Recepcion() {
  return (
    <>
      <Layout>
        <div className=" grid grid-rows-3 py-52  w-full">
          <div className="text-7xl">
            <h2>Bienvenido</h2>
            <div className="bg-sky-500 py-1"></div>
          </div>
          <div className="text-2xl font-medium text-sky-600">
            <h2>Recepción</h2>
          </div>
          <div className="text-3xl">
            <h2>Nombre</h2>
          </div>
        </div>
      </Layout>
    </>
  );
}
