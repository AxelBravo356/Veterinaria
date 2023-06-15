"use client";
import { useEffect, useState } from "react";
import { useTasks } from "@/context/TasksContext";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import Layout from "@/components/layout-recepcion";
import { format } from "date-fns";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TimePicker from "react-time-picker";
import "react-time-picker/dist/TimePicker.css";

export default function New({ params }) {
  const { tasks, createTask, updateTask } = useTasks();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit((data) => {
    if (params.id) {
      updateTask(params.id, data);
      toast.success("Cita actualizada correctamente");
    } else {
      createTask(data.mascota, data.dueño, data.fecha, data.hora, data.doctor);
      toast.success("Cita creada correctamente");
    }
    router.push("/recepcion/citas");
  });

  useEffect(() => {
    if (params.id) {
      const taskFound = tasks.find((task) => task.id === params.id);
      if (taskFound) {
        setValue("mascota", taskFound.mascota);
        setValue("dueño", taskFound.dueño);
        setValue("fecha", taskFound.fecha);
        setValue("hora", taskFound.hora);
        setValue("doctor", taskFound.doctor);
        setValue("consultorio", taskFound.consultorio);
      }
    }
  }, []);

  return (
    <>
      <Layout>
        <div className="mx-auto">
          <div className="mx-auto py-6 px-4">
            <h1 className="text-black text-5xl mb-2">Nuevas Citas</h1>
            <div className="w-full py-1 bg-sky-500"></div>
          </div>
          <form onSubmit={onSubmit} className="rounded-xl mt-5 bg-sky-50 mx-16">
            <div className="grid grid-cols-2 p-10 rounded-xl mt-5 bg-sky-50 mx-16">
              <div>
                <div>
                  <label className="text-xl font-bold">
                    Nombre de la mascota
                  </label>
                  <input
                    className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
                    type="text"
                    placeholder="Nombre de la mascota"
                    {...register("mascota", { required: true })}
                  />
                  {errors.mascota && (
                    <span className="block text-red-400 mb-2">
                      Este campo es requerido
                    </span>
                  )}
                </div>
                <div>
                  <label className="text-xl font-bold">Nombre del dueño</label>
                  <input
                    className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
                    placeholder="Nombre del dueño"
                    {...register("dueño", { required: true })}
                  ></input>
                  {errors.dueño && (
                    <span className="block text-red-400 mb-2">
                      Este campo es requerido
                    </span>
                  )}
                </div>
                <div>
                  <label className="text-xl font-bold">Fecha</label>
                  <input
                    className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
                    placeholder="dd/mm/aaaa"
                    {...register("fecha", { required: true })}
                  ></input>
                  {errors.fecha && (
                    <span className="block text-red-400 mb-2">
                      Este campo es requerido
                    </span>
                  )}
                </div>
              </div>

              <div>
                <div>
                  <label className="text-xl font-bold">Hora</label>
                  <input
                    className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
                    placeholder="00:00"
                    {...register("hora", { required: true })}
                  ></input>
                  {errors.hora && (
                    <span className="block text-red-400 mb-2">
                      Este campo es requerido
                    </span>
                  )}
                </div>
                <div>
                  <label className="text-xl font-bold">Doctor</label>
                  <input
                    className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
                    placeholder="doctor"
                    {...register("doctor", { required: true })}
                  ></input>
                  {errors.doctor && (
                    <span className="block text-red-400 mb-2">
                      Este campo es requerido
                    </span>
                  )}
                </div>
                <div>
                  <label className="text-xl font-bold">Consultorio</label>
                  <input
                    className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
                    placeholder="consultorio"
                    {...register("consultorio", { required: true })}
                  ></input>
                  {errors.consultorio && (
                    <span className="block text-red-400 mb-2">
                      Este campo es requerido
                    </span>
                  )}
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <button className="text-center px-4 py-2 mb-3 rounded-xl bg-green-800 text-white hover:bg-green-600">
                Save
              </button>
            </div>
          </form>
        </div>
      </Layout>
    </>
  );
}
