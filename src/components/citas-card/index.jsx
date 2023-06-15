import { useRouter } from "next/navigation";
import { useTasks } from "@/context/TasksContext";
import { toast } from "react-hot-toast";

export const CitasCard = ({ task }) => {
  const router = useRouter();
  const { deleteTask } = useTasks();
  return (
    <div
      className="bg-slate-100 hover:bg-sky-100 cursor-pointer px-20 py-5 m-2 rounded-2xl"
      onClick={() => router.push(`/recepcion/citas/edit/${task.id}`)}
    >
      <div className="flex justify-between">
        <h1>{task.title}</h1>
        <button
          className="bg-red-700 hover:bg-red-600 px-3 py-1 inline-flex items-center text-white rounded-md"
          onClick={(e) => {
            e.stopPropagation();
            const accept = window.confirm("¿Estás seguro de querer eliminar?");
            if (accept) {
              deleteTask(task.id);
              toast.success("task deleted successfully");
            }
          }}
        >
          Delete
        </button>
      </div>
      <p>{task.description}</p>
      <span className="text-gray-400 text-xs"> {task.id}</span>
    </div>
  );
};
