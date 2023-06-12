"use client";
import { useState } from "react";

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [showAppointments, setShowAppointments] = useState(false);
  const today = new Date();
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [appointmentData, setAppointmentData] = useState({});

  const handleDateClick = (date) => {
    setSelectedDate(date);
    setShowAppointments(true);
  };

  const handlePrevMonth = () => {
    setCurrentMonth(currentMonth - 1);
    if (currentMonth === 0) {
      setCurrentYear(currentYear - 1);
    }
  };

  const handleNextMonth = () => {
    setCurrentMonth(currentMonth + 1);
    if (currentMonth === 11) {
      setCurrentYear(currentYear + 1);
    }
  };

  const handleHideAppointments = () => {
    setSelectedDate(null);
    setShowAppointments(false);
    setAppointmentData({});
  };

  const handlePatientNameChange = (event, hour) => {
    const { value } = event.target;
    setAppointmentData((prevData) => ({
      ...prevData,
      [hour]: value,
    }));
  };

  const renderCalendar = () => {
    // Lógica para generar los días del calendario
    // Puedes personalizar esta lógica según tus necesidades

    const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

    const days = [];
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(
        <div
          key={i}
          onClick={() =>
            handleDateClick(`${currentYear}-${currentMonth + 1}-${i}`)
          }
          className={`calendar-day  hover:bg-gray-200 text-center${
            selectedDate === `${currentYear}-${currentMonth + 1}-${i}`
              ? " selected"
              : ""
          }`}
        >
          {i}
        </div>
      );
    }

    const emptyDays = [];
    for (let i = 0; i < firstDayOfMonth; i++) {
      emptyDays.push(
        <div key={`empty-${i}`} className="calendar-empty-day"></div>
      );
    }

    return emptyDays.concat(days);
  };

  const renderAppointmentTable = () => {
    if (showAppointments && selectedDate) {
      // Lógica para generar la tabla de citas para el día seleccionado
      // Puedes personalizar esta lógica según tus necesidades

      const hours = [
        "9:00",
        "10:00",
        "11:00",
        "12:00",
        "13:00",
        "14:00",
        "15:00",
        "16:00",
        "17:00",
        "18:00",
      ];
      return (
        <div className="appointment-table bg-sky-200 rounded-xl p-5 mb-4">
          <h3 className="text-center font-sans m-1">
            Citas para el {selectedDate}
          </h3>
          <table>
            <thead>
              <tr>
                <th>Hora</th>
                <th>Nombre del paciente</th>
                {/* Agrega más columnas según los campos que necesites para la cita */}
              </tr>
            </thead>
            <tbody>
              {hours.map((hour) => (
                <tr key={hour}>
                  <td>{hour}</td>
                  <td>
                    <input
                      type="text"
                      value={appointmentData[hour] || ""}
                      onChange={(event) => handlePatientNameChange(event, hour)}
                      placeholder="Nombre del paciente"
                    />
                  </td>
                  {/* Agrega más celdas según los campos que necesites para la cita */}
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex justify-center">
            <button
              className="bg-green-300 rounded-lg p-2 m-1 items-center"
              onClick={handleHideAppointments}
            >
              Ocultar citas
            </button>
          </div>
        </div>
      );
    }

    return null;
  };

  return (
    <div className="calendar flex flex-col items-center bg-slate-50 rounded-lg ">
      <h2 className="text-2xl font-bold mb-4">Calendario</h2>
      <div className="calendar-nav flex justify-between w-full mb-2">
        <button className="px-2" onClick={handlePrevMonth}>
          {"<"}
        </button>
        <div>{`${currentYear}-${currentMonth + 1}`}</div>
        <button className="px-2" onClick={handleNextMonth}>
          {">"}
        </button>
      </div>
      <div className="calendar-container rounded border border-black">
        <div className="calendar-header grid grid-cols-7 gap-2 mb-2 bg-sky-500">
          <span className="text-center">Domingo</span>
          <span className="text-center">Lunes</span>
          <span className="text-center">Martes</span>
          <span className="text-center">Miércoles</span>
          <span className="text-center">Jueves</span>
          <span className="text-center">Viernes</span>
          <span className="text-center">Sábado</span>
        </div>
        <div className="calendar-days grid grid-cols-7 gap-2 p-2">
          {renderCalendar()}
        </div>
      </div>
      {renderAppointmentTable()}
    </div>
  );
};

export default Calendar;
