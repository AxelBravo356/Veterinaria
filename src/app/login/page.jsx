import Forms from "@/components/formulario/form";
import "./styles.form.css"
import Image from "next/image";

export default function Login(){
  return(
    <div className="bg bg-right bg-transparent flex w-full h-screen">
      <div className="w-full flex items-center justify-center lg:w-1/2">
        <Forms/>
      </div>
      <div className="hidden relative lg:flex h-full w-1/2 items-start justify-center">
        <Image
        src={"/Logo.png"}
          width={500}
          height={500}
        />
      </div>
    </div>
  );
}