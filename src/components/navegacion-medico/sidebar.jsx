"use client";
import React, {useState} from 'react';
import styles from './Sidebar.module.css';
import Image from "next/image";
import Bienvenida from './Bienvenida'
import Paciente from './Pacientes'



const Sidebar = () => {
    const Links = [
        { name: "Pacientes", link: "/" },
        { name: "Calendario", link: "/" },
      ];
    const [content, setContent] = useState('Bienvenido');
    const handleButtonClick = () => {
        setContent('Adios');
    
    }

    const renderContent = () => {
        if (content === 'Bienvenido') {
          return <Bienvenida />;
        } else {
          return <Paciente />;
        }
      };

  return (
    <div className={styles.container}>
    <div className={styles.sidebar}>
        <ul>
            <li>
                <button onClick={handleButtonClick}>Pacientes</button>

            </li>
        </ul>
      <footer >
    <a href="/">
    <div className={styles.linkContainer}>
      <Image src={"/vector.png"} width={20} height={20} />
      <span className={styles.linkText}>Configuración</span>
    </div>
  </a>
</footer>
    </div>
    <div className={styles.content}>
        <h1>{renderContent()}</h1>
    </div>
  </div>

  );
};

export default Sidebar;