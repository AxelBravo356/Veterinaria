"use client";
import { useTasks } from "@/context/TasksContext";
import { CitasCard } from "../citas-card";
import { useRouter } from "next/navigation";

export default function CitasShow() {
  const router = useRouter();
  const { tasks } = useTasks();
  console.log(tasks);
  return (
    <div>
      <div className="mx-auto py-6 px-4">
        <div className="flex justify-between">
          <h1 className="text-black text-5xl mb-2">Citas</h1>
          <button
            onClick={() => router.push("/recepcion/citas/new")}
            className="bg-green-400 rounded-xl mb-2 px-5"
          >
            Crear nueva cita
          </button>
        </div>
        <div className="w-full py-1 bg-sky-500"></div>
      </div>
      <div className="flex justify-center">
        <div className="xl:w-7/12 ">
          {tasks.map((task) => (
            <CitasCard task={task} key={task.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
