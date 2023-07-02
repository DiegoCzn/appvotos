import React from 'react'
import styles from '../styles/form.module.css'

const Form = () => {
  return (
    <>
        <div className={styles.container}>
            <div className={styles.dataContainer}>
                <p className={styles.text}>Seccion:{' '}<span className={styles.textData}>0002-Palpalá</span></p>
                <p className={styles.text}>Municipio:{' '}<span className={styles.textData}>Palpalá</span></p>
                <p className={styles.text}>Circuito:{' '}<span className={styles.textData}>22-Palpalá</span></p>
                <p className={styles.text}>Mesa:{' '}<span className={styles.textData}>68</span></p>
                <p className={styles.text}>Escuela:{' '}<span className={styles.textData}>Sagrado Corazón</span></p>
            </div>
            <div className={styles.dataContainer}>
                <p className={styles.text}>Cantidad de votantes:{' '}<span className={styles.textData}>912</span></p>
                <p className={styles.text}>Cantidad de sobres utilizados:{' '}<span className={styles.textData}>912</span></p>
                <p className={styles.text}>Resultado de la resta:{' '}<span className={styles.textData}>0</span></p>
            </div>
        </div>
{/* 
        <div>
            <div>
                <p>
                    Agrupaciones
                </p>
            </div>
            <div>
                <p>

                </p>
            </div>
            <form action="">
                <label htmlFor=""></label>
            </form>
        </div> */}
    </>
  )
}

export default Form
