"use client";
import { useState } from "react";
import { format } from "date-fns";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TimePicker from "react-time-picker";
import "react-time-picker/dist/TimePicker.css";

export default function CitaForm() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const [selectedTime, setSelectedTime] = useState("12:00");

  const handleTimeChange = (time) => {
    setSelectedTime(time);
  };

  return (
    <div className="container">
      <div className="mx-auto py-6 px-4">
        <h1 className="text-black text-5xl mb-2">Citas</h1>
        <div className="w-full py-1 bg-sky-500"></div>
      </div>
      <div className=" p-10 grid-rows-2 rounded-3xl mt-5 ">
        <div className="grid grid-cols-2">
          <div>
            <p className="font-bold text-xl">Folio: </p>
          </div>
          <div className="grid-cols-3 flex justify-between mb-3">
            <button className="bg-sky-500 text-white p-2 rounded-lg">
              Guardar
            </button>
            <button className="bg-sky-600 text-white p-2 rounded-lg">
              Asignar Carnet
            </button>
            <button className="bg-slate-50 border border-black p-2 rounded-lg">
              Cancelar
            </button>
          </div>
        </div>
        <div className="bg-white rounded-xl grid grid-cols-2 gap-5 px-10 py-10 shadow-lg">
          <div>
            <div>
              <label className="text-lg font-medium">
                Nombre de la mascota
              </label>
              <input
                className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
                placeholder="Firulais"
              />
            </div>
            <div>
              <label className="text-lg font-medium">Nombre del dueño</label>
              <input
                className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
                placeholder=""
              />
            </div>
            <div>
              <label className="text-lg font-medium">Doctor</label>
              <input //AQUÏ DEBE SER UN SELECT
                type="text"
                className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
                placeholder="Doctor Fulano de tal"
              />
            </div>
          </div>
          <div>
            <div>
              <div>
                <label className="text-lg font-medium">Seleccionar fecha</label>
                <DatePicker
                  className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
                  selected={selectedDate}
                  onChange={handleDateChange}
                  dateFormat="dd/MM/yyyy"
                />
              </div>
            </div>
            <div>
              <label className="text-lg font-medium">Selecciona la hora</label>
              <TimePicker
                className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
                value={selectedTime}
                onChange={handleTimeChange}
                format="HH:mm"
                disableClock={true}
              />
            </div>
            <div>
              <label className="text-lg font-medium">Consultorio</label>
              <input //AQUÏ TAMBIÉN DEBE SER UN SELECT
                type="text"
                className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
                placeholder="Consultorio"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
