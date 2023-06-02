import Image from "next/image";

export default function CarnetDigital() {
  return (
    <div className="py-9">
      <div className="inline-grid grid-cols-2 divide-x-2 divide-black">
        <div className="p-16 xl:px-36">
          <h3 className="font-bold text-4xl">Carnet Digital</h3>
          <p className="py-5 text-justify xl:text-2xl">
            Contamos con un inovador sistema de carnet digital que permite la
            comunicación con una tarjeta NFC que el paciente puede ocupar para
            facilitar su bitácora, registro y movimiento dentro de tu clínica de
            forma organizada y semi automatizada. Logrando una experiencia única
            en tu servicio.
          </p>
          <button className="bg-sky-500 p-4 rounded-lg text-white text-xl active:scale-[.98] active:duration-60 hover:scale-[1.01] ease-in-out transition-all ">
            Más Información
          </button>
        </div>
        <div className="flex justify-center">
          <Image
            src={"/Presentacion3.png"}
            width={500}
            height={500}
            className="object-fill drop-shadow-lg  "
          />
        </div>
      </div>
    </div>
  );
}
