"use client";
import { useEffect } from "react";
import { useTasks } from "@/context/TasksContext";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

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
      toast.success("task updated successfully");
    } else {
      createTask(data.title, data.description);
      toast.success("task created successfully");
    }
    router.push("/recepcion/citas");
  });

  useEffect(() => {
    if (params.id) {
      const taskFound = tasks.find((task) => task.id === params.id);
      if (taskFound) {
        setValue("title", taskFound.title);
        setValue("description", taskFound.description);
      }
    }
  }, []);

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Write a title"
        {...register("title", { required: true })}
      />
      {errors.title && <span>Este campo es requerido</span>}
      <textarea
        placeholder="write a description"
        {...register("description", { required: true })}
      ></textarea>
      {errors.description && <span>Este campo es requerido</span>}

      <button>Save</button>
    </form>
  );
}
