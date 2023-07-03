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

        </div>

        <form action="">
            <div className={styles.agrupacionesContainer}>
                <div className={styles.boxForm}>
                    <div className={styles.dataAgrupacionContainer}>
                        <p className={styles.n}>501</p>
                        <p className={styles.agrupacion}>FRENTE DE TODOS</p>
                    </div>
                    <div className={styles.boxFormInput}>
                        <label htmlFor="" className={styles.labelStyle}>Cantidad de votos obtenidos</label>
                        <input type="text" className={styles.inputStyle} placeholder="Cantidad de Votos"/>
                    </div>
                </div>

                <div className={styles.boxForm}>
                    <div className={styles.dataAgrupacionContainer}>
                        <p className={styles.n}>502</p>
                        <p className={styles.agrupacion}>FRENTE CAMBIA JUJUY</p>
                    </div>
                    <div className={styles.boxFormInput}>
                        <label htmlFor="" className={styles.labelStyle}>Cantidad de votos obtenidos</label>
                        <input type="text" className={styles.inputStyle} placeholder="Cantidad de Votos"/>
                    </div>
                </div>

                <div className={styles.boxForm}>
                    <div className={styles.dataAgrupacionContainer}>
                        <p className={styles.n}>503</p>
                        <p className={styles.agrupacion}>FRENTE DE IZQUIERDA Y DE TRABJADORES-UNIDAD</p>
                    </div>
                    <div className={styles.boxFormInput}>
                        <label htmlFor="" className={styles.labelStyle}>Cantidad de votos obtenidos</label>
                        <input type="text" className={styles.inputStyle} placeholder="Cantidad de Votos"/>
                    </div>
                </div>

            {/* <div className={styles.votosContainer}> */}
                <div className={styles.boxForm}>
                    <label className={styles.labelStyle}>Votos Nulos</label>
                    <input type="text" className={styles.inputStyle} placeholder="Cantidad de Votos"/>
                </div>
                <div className={styles.boxForm}>
                    <label className={styles.labelStyle}>Votos Recurridos</label>
                    <input type="text" className={styles.inputStyle} placeholder="Cantidad de Votos"/>
                </div>
                <div className={styles.boxForm}>
                    <label className={styles.labelStyle}>Votos de Identidad Impugnada</label>
                    <input type="text" className={styles.inputStyle} placeholder="Cantidad de Votos"/>
                </div>
                <div className={styles.boxForm}>
                    <label className={styles.labelStyle}>Votos en Blanco</label>
                    <input type="text" className={styles.inputStyle} placeholder="Cantidad de Votos"/>
                </div>
            {/* </div> */}

                <input type="submit"/>
            </div>
        </form>

        
        {/* <div className={styles.dataContainer}>
                <p className={styles.text}>Cantidad de votantes:{' '}<span className={styles.textData}>912</span></p>
        </div> */}
        <div className={styles.totalVotosContainer}>
            <p className={styles.text}>Total de votos:{' '}<span className={styles.totalVotos}>0</span></p>
            
            <p className={styles.text}>Cantidad de sobres utilizados:{' '}<span className={styles.textData}>0</span></p>
            <p className={styles.text}>Resultado de la resta:{' '}<span className={styles.textData}>0</span></p>
        </div>
    </>
  )
}

export default Form
