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

        <form action="">
            <div className={styles.agrupacionesContainer}>
                <div className={styles.agrupacionContainer}>
                    <div className={styles.dataAgrupacionContainer}>
                        <p className={styles.n}>501</p>
                        <p className={styles.agrupacion}>FRENTE DE TODOS</p>
                    </div>
                    <div className={styles.votosAgrupacionContainer}>
                        <label htmlFor="">Cantidad de votos obtenidos</label>
                        <input type="number"/>
                    </div>
                </div>

                <div className={styles.agrupacionContainer}>
                    <div className={styles.dataAgrupacionContainer}>
                        <p className={styles.n}>502</p>
                        <p className={styles.agrupacion}>FRENTE CAMBIA JUJUY</p>
                    </div>
                    <div className={styles.votosAgrupacionContainer}>
                        <label htmlFor="">Cantidad de votos obtenidos</label>
                        <input type="number"/>
                    </div>
                </div>

                <div className={styles.agrupacionContainer}>
                    <div className={styles.dataAgrupacionContainer}>
                        <p className={styles.n}>503</p>
                        <p className={styles.agrupacion}>FRENTE DE IZQUIERDA Y DE TRABJADORES-UNIDAD</p>
                    </div>
                    <div className={styles.votosAgrupacionContainer}>
                        <label htmlFor="">Cantidad de votos obtenidos</label>
                        <input type="number"/>
                    </div>
                </div>
            </div>

            <div className={styles.votosContainer}>
                <div className={styles.dataVotosContainer}>
                    <label>VOTOS NULOS</label>
                    <input type="number"/>
                </div>
                <div className={styles.dataVotosContainer}>
                    <label>VOTOS RECURRIDOS</label>
                    <input type="number"/>
                </div>
                <div className={styles.dataVotosContainer}>
                    <label>VOTOS DE IDENTIDAD IMPUGNADA</label>
                    <input type="number"/>
                </div>
                <div className={styles.dataVotosContainer}>
                    <label>VOTOS EN BLANCO</label>
                    <input type="number"/>
                </div>
            </div>

            
        </form>
        
        <div className={styles.totalVotosContainer}>
            <p>TOTAL DE VOTOS</p>
            <p className={styles.totalVotos}>9102</p>
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
