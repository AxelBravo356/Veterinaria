import { useState } from "react";
import { FaPlus, FaCaretRight, FaCaretLeft } from "react-icons/fa";
import Link from "next/link";
import { format, isSameMonth, isToday, addDays, isSameDay } from "date-fns";

export default function TablaCitas() {
  const [appointments, setAppointments] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentDate, setCurrentDate] = useState(new Date());
  const [initialDate] = useState(new Date());

  const handlePatientNameChange = (event, index) => {
    const { value } = event.target;
    setAppointments((prevAppointments) => {
      const updatedAppointments = [...prevAppointments];
      updatedAppointments[index].patientName = value;
      return updatedAppointments;
    });
  };

  const filteredAppointments = appointments.filter((appointment) => {
    const { patientName, reason } = appointment;
    const query = searchQuery.toLowerCase().trim();
    return (
      patientName.toLowerCase().includes(query) ||
      reason.toLowerCase().includes(query)
    );
  });

  const daysOfWeek = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
  ];

  const handleNextDay = () => {
    setCurrentDate(addDays(currentDate, 7));
  };

  const handlePreviousDay = () => {
    setCurrentDate(addDays(currentDate, -7));
  };

  const renderCells = () => {
    const cells = [];
    for (let i = 0; i < 10; i++) {
      const hour = `${i + 9}:00`;
      cells.push(
        <tr key={hour} className="text-center">
          <td className="py-3">{hour}</td>
          {daysOfWeek.map((day, index) => {
            const cellDate = addDays(currentDate, index);
            const isCurrentMonth = isSameMonth(cellDate, currentDate);
            const isCurrentDay = isToday(cellDate);
            const isHidden = !isCurrentMonth;
            return (
              <td
                key={index}
                className={`p-2 ${isHidden ? "hidden" : ""} ${
                  !isCurrentMonth ? "text-gray-400" : ""
                }`}
              >
                {!isHidden && (
                  <Link href={"/recepcion/citas/registro"}>
                    <button>
                      <FaPlus />
                    </button>
                  </Link>
                )}
              </td>
            );
          })}
        </tr>
      );
    }
    return cells;
  };

  return (
    <div className="cotainer my-auto">
      <div className="mx-auto py-6 px-4">
        <h1 className="text-black text-5xl mb-2">Citas</h1>
        <div className="w-full py-1 bg-sky-500"></div>
      </div>
      <div className="flex flex-col items-center">
        <div className="mb-4">
          <input
            type="text"
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
            placeholder="Buscar citas"
            className="p-2 rounded-md"
          />
        </div>
        <table className="bg-slate-50 rounded-lg">
          <thead className="bg-sky-500">
            <tr>
              <th></th>
              {daysOfWeek.map((day, index) => (
                <th key={index} className="px-3 ">
                  {day} {format(addDays(currentDate, index), "d MMM")}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="mx-auto">{renderCells()}</tbody>
        </table>
        {/* <button onClick={() => setAppointments([])} className="mt-4">
          Reiniciar citas
        </button> */}
        <div className="justify-between text-3xl">
          <button
            onClick={handlePreviousDay}
            disabled={isSameDay(currentDate, initialDate)}
          >
            <FaCaretLeft />
          </button>
          <button onClick={handleNextDay} className="mt-4">
            <FaCaretRight />
          </button>
        </div>
      </div>
    </div>
  );
}
