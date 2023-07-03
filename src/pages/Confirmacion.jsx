import React from 'react'
import styles from '../styles/form.module.css'

const Confirmacion = () => {
  return (
    <div className={styles.container}>
        <h2 className={styles.titulo}>Se ha enviado el formulario con éxito</h2>
        
        <div className={styles.containerFiscal}>
            <h4>Datos del Fiscal</h4>
            <div className={styles.dataFiscal}>
                <p><span>Nombre:</span> Diego Ignacio Cazón</p>
                <p><span>DNI:</span> 45881088</p>
            </div>
        </div>
        
        <div className={styles.containerFormulario}>
            <h4>Código del Formulario</h4>
            <p>0000</p>    
        </div>
        
        <p>¡Gracias por tu colaboración en el recuento de votos!</p>
    </div>
  )
}

export default Confirmacion
