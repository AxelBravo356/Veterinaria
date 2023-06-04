import Layout from "@/components/layout-admin";

export default function Admin() {
  return (
    <>
      <Layout>
        <div className=" grid grid-rows-3 py-52  w-full">
          <div className="text-7xl">
            <h2>Bienvenido</h2>
            <div className="bg-sky-500 py-1"></div>
          </div>
          <div className="text-2xl font-medium text-sky-600">
            <h2>Administrador</h2>
          </div>
          <div className="text-3xl">
            <h2>Nombre</h2>
          </div>
        </div>
      </Layout>
    </>
  );
}
