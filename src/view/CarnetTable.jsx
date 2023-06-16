"use client";
import {
  FaAngleDoubleLeft,
  FaAngleLeft,
  FaAngleRight,
  FaAngleDoubleRight,
} from "react-icons/fa";
import { useEffect, useState } from "react";
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  getPaginationRowModel,
} from "@tanstack/react-table";
import classNames from "classnames";


export default function CarnetTable() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/api/carnets/")
      .then(async (res) => await res.json())
      .then((data) => {
        setData(data);
      });
  }, []);
  
  const handleEditar = (info) => {
    console.log("Editar fila:", info.cell.row.original);
    alert('Se va a modificar el carnet con id: ' + info.cell.row.original.id_carnet)
  };

  const columns = [
    {
      accessorKey: "id_carnet",
      header: () => <span>Folio</span>,
    },
    {
      accessorKey: "nom_mascota",
      header: () => <span>Mascota</span>,
    },
    {
      // accessorKey: "nom_dueño",
      accessorKey: "nom_dueno",
      header: () => <span>Dueño</span>,
    },
    {
        accessorKey: "raza",
        header: () => <span>Especie</span>,
    },
    {
      accessorKey: "EDITAR",
      header: () => <span>Editar</span>,
      cell: (info) => (
        <button className="font-extrabold py-1" onClick={() => handleEditar(info)}>Modificar</button>
      ),
    },
  ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <div className="px-6 py-4 bg-slate-200">
      <table className="table-fixed w-full bg-slate-200">
        <thead className="bg-sky-500">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id} className="text-gray-600 bg-gray-100">
              {headerGroup.headers.map((header) => (
                <th key={header.id} className=" py-2 px-4 uppercase">
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className="bg-white ">
          {table.getRowModel().rows.map((row) => (
            <tr
              key={row.id}
              className="text-gray-600 text-center p-5 hover:bg-gray-200"
            >
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="py-2 px-14 ">
                  {/* {console.log(cell.getValue())}
                  {console.log(row.original.id_carnet)}  */}
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-center gap-2 text-xl">
          <button
            onClick={() => table.setPageIndex(0)}
            disabled={!table.getCanPreviousPage()}
            className="text-sky-500 py-0.5 px-1 rounded-md border-gray-300"
          >
            <FaAngleDoubleLeft />
          </button>

          <button
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
            className="text-sky-500 py-0.5 px-1 rounded-md"
          >
            <FaAngleLeft />
          </button>

          {table.getPageOptions().map((value, key) => (
            <button
              key={key}
              className={classNames({
                "text-sky-500 py-0.5 px-2": true,
                "bg-indigo-100 text-indigo-700":
                  value === table.getState().pagination.pageIndex,
              })}
              onClick={() => table.setPageIndex(value)}
            >
              {value + 1}
            </button>
          ))}

          <button
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
            className="text-sky-500 py-0.5 px-1 rounded-md"
          >
            <FaAngleRight />
          </button>

          <button
            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
            disabled={!table.getCanNextPage()}
            className="text-sky-500 py-0.5 px-1 rounded-md"
          >
            <FaAngleDoubleRight />
          </button>
        </div>
        <div className="text-black font-semibold">
          {/* Mostrando de {Number(table.getRowModel().rows[0].id) + 1} a{" "}
          {Number(
            table.getRowModel().rows[table.getRowModel().rows.length - 1].id
          ) + 1}{" "}
          del total {defaultData.length} registros */}
        </div>
        <select
          className="text-gray-600 border border-gray-300 rounded outline-indigo-600"
          onChange={(e) => {
            table.setPageSize(Number(e.target.value));
          }}
        >
          <option value="5">5 pág.</option>
          <option value="10">10 pág.</option>
          <option value="15">15 pág.</option>
        </select>
      </div>
    </div>
  );
}
