"use client";
import Link from "next/link";
import { useState } from "react";
import classNames from "classnames";
import {
  FaCompass,
  FaArrowAltCircleLeft,
  FaUsers,
  FaTools,
  FaHome,
} from "react-icons/fa";

const menuItems = [
  { id: 1, label: "Home", icon: FaHome, link: "/admin" },
  { id: 2, label: "Usuarios", icon: FaUsers, link: "/admin/users" },
  { id: 3, label: "Registro usuarios", icon: FaTools, link: "/admin/register" },
];

export default function Sidebar() {
  const [toggleCollapse, setToggleCollapse] = useState(false);
  const [isCollapsible, setIsCollapsible] = useState(false);

  const wrapperClasses = classNames(
    "h-screen px-4 pt-8 pb-4 bg-white flex justify-start flex-col",
    {
      "w-72": !toggleCollapse,
      "w-28": toggleCollapse,
    }
  );

  const collapseIconClasses = classNames("p-4 rounded absolute right-0", {
    "rotate-180": toggleCollapse,
  });

  const getNavItemClasses = (menu) => {
    return classNames(
      "flex items-center cursor-pointer hover:bg-gray-200 rounded w-full overflow-hidden whitespace-nowrap"
    );
  };

  const onMouseOver = () => {
    setIsCollapsible(!isCollapsible);
  };

  const handleSidebarToggle = () => {
    setToggleCollapse(!toggleCollapse);
  };

  return (
    <div
      className={wrapperClasses}
      onMouseEnter={onMouseOver}
      onMouseLeave={onMouseOver}
      style={{ transition: "width 300ms cubic-bezier(0.2, 0, 0, 1) 0s" }}
    >
      <div className="flex flex-col">
        <div className="flex items-center justify-between relative">
          <div className="flex items-center pl-1 gap-4">
            <FaCompass className="text-2xl" />
            <span
              className={classNames("mt-2 text-lg font-medium text-black", {
                hidden: toggleCollapse,
              })}
            >
              Navegación
            </span>
          </div>
          {isCollapsible && (
            <button
              className={collapseIconClasses}
              onClick={handleSidebarToggle}
            >
              <FaArrowAltCircleLeft className="text-2xl" />
            </button>
          )}
        </div>
        <div className="flex flex-col items-start mt-24 h-full">
          {menuItems.map(({ icon: Icon, ...menu }) => {
            const classes = getNavItemClasses(menu);
            return (
              <div key={menu.id} className={classes}>
                <Link href={menu.link}>
                  <div className="flex py-4 px-3 items-center w-full h-full">
                    <div style={{ width: "2.5rem" }}>
                      <Icon className="text-2xl" />
                    </div>
                    {!toggleCollapse && (
                      <span
                        className={classNames(
                          "text-md font-medium text-text-light"
                        )}
                      >
                        {menu.label}
                      </span>
                    )}
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
