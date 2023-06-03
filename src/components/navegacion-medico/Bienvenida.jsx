import React, { Fragment } from 'react';
import styles from './Sidebar.module.css';

const Bienvenida = () => {
  return (
    <Fragment>
      <div className={styles.Bienvenida}>
        <h1>Bienvenido</h1>
      </div>
      <div>
        <div>
        <h3 className={styles.Doctor}>Doctor</h3>
        </div>
        <div>
        <h4 className={styles.NameDoc}>Nombre del doctor</h4>  
        </div>  
      </div>
    </Fragment>
  );
};

export default Bienvenida;