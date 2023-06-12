import NavAdmin from "../navbar-admin";
import SidebarRecepcion from "../sidebar-recepcion";
import "./styles.recepcion.css";

export default function Layout({ children }) {
  return (
    <>
      <NavAdmin />

      <div className=" bg flex justify-center">
        <SidebarRecepcion />

        <div className="flex-1 p-1 h-full text-black ">{children}</div>
      </div>
    </>
  );
}
