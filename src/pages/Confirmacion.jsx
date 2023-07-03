import React from 'react'
import styles from '../styles/confirmacion.module.css'

const Confirmacion = () => {
  return (
    <div className={styles.bodyConfirmacion}>
        <div className={styles.container}>
            <h2 className={styles.titulo}>Se ha enviado el formulario con éxito</h2>
            
            <div className={styles.containerFiscal}>
                <div className={styles.dataFiscal}>
                    <h4>Datos del Fiscal</h4>
                    <p>Nombre: <span>Diego Ignacio Cazón</span></p>
                    <p>DNI: <span>45881088</span></p>
                </div>
            </div>
            
            <div className={styles.containerFormulario}>
                <h4>Código del Formulario</h4>
                <p>0000</p>    
            </div>
            
            <h4>¡Gracias por tu colaboración en el recuento de votos!</h4>
        </div>
  </div>
  )
}

export default Confirmacion
