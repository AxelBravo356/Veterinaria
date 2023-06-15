"use client";
import { useLocalStorage } from "@/hooks/useLocalstorage";
import { createContext, useContext} from "react";
import { v4 as uuid } from "uuid";

export const TaskContext = createContext();

export const useTasks = () => {
  const context = useContext(TaskContext);
  if (!context) throw new Error("useTasks must used withing a provider");
  return context;
};

export const TaskProvideer = ({ children }) => {

  const [tasks, setTasks] =useLocalStorage('tasks', [])
  

  const createTask = (mascota, dueño, fecha, hora, doctor, consultorio) =>
    setTasks([
      ...tasks,
      {
        mascota,
        dueño,
        fecha, 
        hora, 
        doctor,
        consultorio,
        id: uuid(),
      },
    ]);

  const deleteTask = (id) =>
    setTasks([...tasks.filter((task) => task.id !== id)]);

  const updateTask = (id, newData) =>
    setTasks([
      ...tasks.map((task) => (task.id === id ? { ...task, ...newData } : task)),
    ]);

  return (
    <TaskContext.Provider value={{ tasks, createTask, deleteTask, updateTask }}>
      {children}
    </TaskContext.Provider>
  );
};
