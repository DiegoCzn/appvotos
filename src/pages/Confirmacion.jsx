import React from 'react'
import styles from '../styles/confirmacion.module.css'
import { Link, useLocation } from 'react-router-dom'
import { BsArrowLeft } from "react-icons/bs";
import stylesForm from '../styles/form.module.css'

const Confirmacion = () => {
    const location = useLocation()
    const datos = location.state

    return (
    <>
        <Link to={'/'} className={stylesForm.textIcon}><BsArrowLeft className={styles.icon}></BsArrowLeft>Volver</Link>
        <div className={styles.bodyConfirmacion}>
            <div className={styles.container}>
                <h2 className={styles.titulo}>Se ha enviado el formulario con éxito</h2>
                
                <div className={styles.containerFiscal}>
                    <div className={styles.dataFiscal}>
                        <h4>Datos del Fiscal</h4>
                        <p>Nombre: <span>{datos.nombreFiscal}</span></p>
                        <p>DNI: <span>{datos.dniFiscal}</span></p>
                    </div>
                </div>
                
                <div className={styles.containerFormulario}>
                    <h4>Código del Formulario</h4>
                    <p>{datos.codigo}</p>    
                </div>
                
                <h4>¡Gracias por tu colaboración en el recuento de votos!</h4>
            </div>
    </div>
    </>
  )
}

export default Confirmacion
