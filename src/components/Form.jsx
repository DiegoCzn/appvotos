import React, { useEffect, useState } from 'react'
import styles from '../styles/form.module.css'
import { useLocation, useNavigate } from 'react-router-dom';

const FormVotos = () => {
    // console.log(fiscal)
    const navigate = useNavigate()
    const location = useLocation()
    const fiscal = location.state

    const [votos, setVotos] = useState({
        votosFrenteTodos: 0,
        votosFrenteCambiaJujuy: 0,
        votosFrenteIzquierda: 0,
        votosNulos: 0,
        votosRecurridos: 0,
        votosIdentidadImpugnada: 0,
        votosEnBlanco: 0,
    });

    const [totalVotos,setTotalVotos] = useState(0)

    useEffect(() => { //suma de los votos
        const total = Object.values(votos).reduce((acc, curr) => acc + parseInt(curr), 0)
        setTotalVotos(total)

        
    },[votos])

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        if (!isNaN(value) && value >= 0) {
            setVotos((prevVotos) => ({
              ...prevVotos,
              [name]: value === "" ? 0 : value
            }))    
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
    
        //validaciones
        const datosConfirmacion = {
            nombreFiscal: fiscal.nombreFiscal,
            dniFiscal: fiscal.dniFiscal,
            codigo: '0123509290',
        }
        navigate('/formulario/confirmacion',{state:datosConfirmacion})
    };

    return (
        <>
            <div className={styles.container}>
                <div className={styles.dataContainer}>
                    <p className={styles.text}>Fiscal:{' '}<span className={styles.textData}>{fiscal.nombreFiscal}</span></p>
                    <p className={styles.text}>Dni:{' '}<span className={styles.textData}>{fiscal.dniFiscal}</span></p>
                    <p className={styles.text}>Seccion:{' '}<span className={styles.textData}>{fiscal.seccion}</span></p>
                    <p className={styles.text}>Municipio:{' '}<span className={styles.textData}>{fiscal.municipio}</span></p>
                    <p className={styles.text}>Circuito:{' '}<span className={styles.textData}>{fiscal.circuito}</span></p>
                    <p className={styles.text}>Mesa:{' '}<span className={styles.textData}>{fiscal.mesa}</span></p>
                    <p className={styles.text}>Escuela:{' '}<span className={styles.textData}>{fiscal.escuela}</span></p>
            </div>

            </div>
            <form onSubmit={handleSubmit}>
                <div className={styles.agrupacionesContainer}>
                    <div className={styles.boxForm}>
                        <div className={styles.dataAgrupacionContainer}>
                            <p className={styles.n}>501</p>
                            <p className={styles.agrupacion}>FRENTE DE TODOS</p>
                        </div>
                        <div className={styles.boxFormInput}>
                            <label htmlFor="votosFrenteTodos" className={styles.labelStyle}>
                                Cantidad de votos obtenidos
                            </label>
                            <input
                                type="text"
                                id="votosFrenteTodos"
                                name="votosFrenteTodos"
                                onChange={handleInputChange}
                                className={styles.inputStyle}
                                placeholder="0"
                            />
                        </div>
                    </div>
            
                    <div className={styles.boxForm}>
                        <div className={styles.dataAgrupacionContainer}>
                            <p className={styles.n}>502</p>
                            <p className={styles.agrupacion}>FRENTE CAMBIA JUJUY</p>
                        </div>
                        <div className={styles.boxFormInput}>
                            <label htmlFor="votosFrenteCambiaJujuy" className={styles.labelStyle}>
                            Cantidad de votos obtenidos
                            </label>
                            <input
                                type="text"
                                id="votosFrenteCambiaJujuy"
                                name="votosFrenteCambiaJujuy"
                                // value={votos.votosFrenteCambiaJujuy}
                                onChange={handleInputChange}
                                className={styles.inputStyle}
                                placeholder="0"
                            />
                        </div>
                    </div>
            
                    <div className={styles.boxForm}>
                        <div className={styles.dataAgrupacionContainer}>
                            <p className={styles.n}>503</p>
                            <p className={styles.agrupacion}>FRENTE DE IZQUIERDA Y DE TRABJADORES-UNIDAD</p>
                        </div>
                        <div className={styles.boxFormInput}>
                            <label htmlFor="votosFrenteIzquierda" className={styles.labelStyle}>
                                Cantidad de votos obtenidos
                            </label>
                            <input
                                type="text"
                                id="votosFrenteIzquierda"
                                name="votosFrenteIzquierda"
                                // value={votos.votosFrenteIzquierda}
                                onChange={handleInputChange}
                                className={styles.inputStyle}
                                placeholder="0"
                            />
                        </div>
                    </div>
            
                    
                    <div className={styles.boxForm}>
                        <label className={styles.labelStyle}>Votos Nulos</label>
                        <input
                            type="text"
                            name="votosNulos"
                            // value={votos.votosNulos}
                            onChange={handleInputChange}
                            className={styles.inputStyle}
                            placeholder="0"
                        />
                    </div>
                    <div className={styles.boxForm}>
                        <label className={styles.labelStyle}>Votos Recurridos</label>
                        <input
                            type="text"
                            name="votosRecurridos"
                            // value={votos.votosRecurridos}
                            onChange={handleInputChange}
                            className={styles.inputStyle}
                            placeholder="0"
                        />
                    </div>

                    <div className={styles.boxForm}>
                        <label className={styles.labelStyle}>Votos de Identidad Impugnada</label>
                        <input
                            type="text"
                            name="votosIdentidadImpugnada"
                            // value={votos.votosIdentidadImpugnada}
                            onChange={handleInputChange}
                            className={styles.inputStyle}
                            placeholder="0"
                        />
                    </div>
                    <div className={styles.boxForm}>
                        <label className={styles.labelStyle}>Votos en Blanco</label>
                        <input
                            type="text"
                            name="votosEnBlanco"
                            // value={votos.votosEnBlanco}
                            onChange={handleInputChange}
                            className={styles.inputStyle}
                            placeholder="0"
                        />
                    </div>
        
                    <input type="submit" value="Enviar" />
                </div>
            </form>

            <div className={styles.totalVotosContainer}>
                <p className={styles.text}>Total de votos:{' '}<span className={styles.totalVotos}>{totalVotos}</span></p>
                <p className={styles.text}>Cantidad de sobres utilizados:{' '}<span className={styles.textData}>0</span></p>
                <p className={styles.text}>Resultado de la resta:{' '}<span className={styles.textData}>0</span></p>
            </div>
        
        </>

        
    );
}

export default FormVotos
