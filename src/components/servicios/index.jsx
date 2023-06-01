import { FaSyringe, FaGlasses, FaLaptopMedical } from "react-icons/fa";

export default function Servicios() {
  return (
    <div className="p-5">
      <div className="flex grid-cols-3">
        <div className="border w-1/4">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo
            accusantium eaque in, consequatur, vel at, a nostrum fugit autem
            pariatur quam facere corporis delectus reprehenderit nihil accusamus
            atque doloribus fuga.
          </p>
        </div>
        <div className="border w-2/4  grid-rows-4 bg-gray-200">
          <div className="flex justify-center">
            <h2 className="font-bold text-3xl">Servicios</h2>
          </div>

          <div className="flex flex-rows-3 gap-10 xl:grid-cols-3 xl:gap-36 justify-center py-10">
            <div className="text-2xl p-5 xl:text-6xl bg-gray-400 xl:p-10">
              <FaSyringe />
            </div>
            <div className="text-2xl p-5 xl:text-6xl bg-gray-400 xl:p-10">
              <FaGlasses />
            </div>
            <div className="text-2xl p-5 xl:text-6xl bg-gray-400 xl:p-10">
              <FaLaptopMedical />
            </div>
          </div>
          <div className="text-sm xl:text-xl text-sky-500 flex grid-cols-3 justify-center gap-x-3 xl:gap-x-44 px-5">
            <div>Enfemería</div>
            <div>Laboratorios</div>
            <div>Carnet Digital</div>
          </div>
          <div className="text-center py-5">
            <p>
              Generar citas, controlar el acceso y uso de tus laboratorios, así
              como poder registrar el historial clínico de cada paciente
            </p>
          </div>
        </div>
        <div className="border w-1/4">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo
            accusantium eaque in, consequatur, vel at, a nostrum fugit autem
            pariatur quam facere corporis delectus reprehenderit nihil accusamus
            atque doloribus fuga.
          </p>
        </div>
      </div>
    </div>
  );
}
