import NavAdmin from "../navbar-admin";
import Sidebar from "../sidebar";
import "./styles.admin.css";

export default function Layout({ children }) {
  return (
    <>
      <NavAdmin />
      <div className=" bg flex justify-center">
        <Sidebar />
        <div className="flex-1 p-1 h-full text-black ">{children}</div>
      </div>
    </>
  );
}
