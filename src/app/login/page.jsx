import Forms from "@/components/formulario";
import "./styles.form.css";
import Image from "next/image";
import Link from "next/link";

export default function Login() {
  return (
    <div className="bg bg-right bg-transparent flex w-full h-screen">
      <div className="w-full flex items-center justify-center lg:w-1/2">
        <Forms />
      </div>
      <div className="hidden relative lg:flex h-full w-1/2 items-start justify-center">
        <Link href={"/"}><Image src={"/Logo.png"} width={500} height={500} alt="Logo" /></Link>
      </div>
    </div>
  );
}
