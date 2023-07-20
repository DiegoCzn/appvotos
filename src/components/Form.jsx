import React, { useEffect, useState } from 'react'
import styles from '../styles/form.module.css'
import { useLocation, useNavigate } from 'react-router-dom';

const FormVotos = () => {
    // console.log(fiscal)
    const navigate = useNavigate()
    const location = useLocation()
    const fiscal = location.state

    const [votos, setVotos] = useState({
        juntosPorElCambio1: 0,
        fuerzaDelCambio: 0,
        unionPorLaPatria: 0,
        unidadRenovadora: 0,
        hacemosPorNuestroPais: 0,
        libertadAvanza: 0,
        unidadDeLuchadores: 0,
        fitu: 0,
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
                    
                    {/* Lista 1 de juntos por el cambio */}
                    <div className={styles.boxForm}>
                        <div className={styles.dataAgrupacionContainer}>
                            {/* <p className={styles.n}>503</p> */}
                            <p className={styles.agrupacionTitulo}> Lista 1 de Juntos por el Cambio </p>
                            <p className={styles.agrupacion}> Precandidatos a Diputados Nacionales</p>
                            <p className={styles.agrupacionCandidatos}> Jorge Rizzotti, Claudia Machaca y Félix Pérez</p>
                        </div>
                        <div className={styles.boxFormInput}>
                            <label htmlFor="juntosPorElCambio1" className={styles.labelStyle}>
                                Cantidad de votos obtenidos
                            </label>
                            <input
                                type="text"
                                id="juntosPorElCambio1"
                                name="juntosPorElCambio1"
                                // value={votos.votosFrenteIzquierda}
                                onChange={handleInputChange}
                                className={styles.inputStyle}
                                placeholder="0"
                            />
                        </div>
                    </div>
                    
                    {/* Lista 2 de juntos por el cambio ********** */}
                    <div className={styles.boxForm}>
                        <div className={styles.dataAgrupacionContainer}>
                            {/* <p className={styles.n}>503</p> */}
                            <p className={styles.agrupacion}>Lista 2 de Juntos por el Cambio - "Fuerza del Cambio"</p>
                            <p className={styles.agrupacion}> Precandidatos a Diputados Nacionales</p>
                            <p className={styles.agrupacionCandidatos}> Rosario Agostini y Santiago Imposte</p>
                        </div>
                        <div className={styles.boxFormInput}>
                            <label htmlFor="fuerzaDelCambio" className={styles.labelStyle}>
                                Cantidad de votos obtenidos
                            </label>
                            <input
                                type="text"
                                id="fuerzaDelCambio"
                                name="fuerzaDelCambio"
                                // value={votos.votosFrenteIzquierda}
                                onChange={handleInputChange}
                                className={styles.inputStyle}
                                placeholder="0"
                            />
                        </div>
                    </div>

                    {/* Union Por la patria */}
                    <div className={styles.boxForm}>
                        <div className={styles.dataAgrupacionContainer}>
                            {/* <p className={styles.n}>N Lista</p> */}
                            <p className={styles.agrupacionTitulo}>Unión por la Patria</p>
                            <p className={styles.agrupacion}> Precandidatos a Diputados Nacionales</p>
                            <p className={styles.agrupacionCandidatos}> Nilson Ortega, Mariela Segovia y Luis Moreno</p>
                        </div>
                        <div className={styles.boxFormInput}>
                            <label htmlFor="unionPorLaPatria" className={styles.labelStyle}>
                                Cantidad de votos obtenidos
                            </label>
                            <input
                                type="text"
                                id="unionPorLaPatria"
                                name="unionPorLaPatria"
                                onChange={handleInputChange}
                                className={styles.inputStyle}
                                placeholder="0"
                            />
                        </div>
                    </div>

                    {/* Lista Unidad Renovadora */}
                    <div className={styles.boxForm}>
                        <div className={styles.dataAgrupacionContainer}>
                            {/* <p className={styles.n}>502</p> */}
                            <p className={styles.agrupacionTitulo}>Lista Unidad Renovadora</p>
                            <p className={styles.agrupacion}> Precandidatos a Diputados Nacionales</p>
                            <p className={styles.agrupacionCandidatos}> Guillermo Snopek, Amelia de Dios y Cristian Lettier</p>
                        </div>
                        <div className={styles.boxFormInput}>
                            <label htmlFor="unidadRenovadora" className={styles.labelStyle}>
                            Cantidad de votos obtenidos
                            </label>
                            <input
                                type="text"
                                id="unidadRenovadora"
                                name="unidadRenovadora"
                                // value={votos.votosFrenteCambiaJujuy}
                                onChange={handleInputChange}
                                className={styles.inputStyle}
                                placeholder="0"
                            />
                        </div>
                    </div>
                    
                    {/* Hacemos por Nuestro País */}
                    <div className={styles.boxForm}>
                        <div className={styles.dataAgrupacionContainer}>
                            {/* <p className={styles.n}>503</p> */}
                            <p className={styles.agrupacionTitulo}>Hacemos Por Nuestro País</p>
                            <p className={styles.agrupacion}> Precandidatos a Diputados Nacionales</p>
                            <p className={styles.agrupacionCandidatos}> Hugo Horvart y Claudia Sánchez</p>
                        </div>
                        <div className={styles.boxFormInput}>
                            <label htmlFor="hacemosPorNuestroPais" className={styles.labelStyle}>
                                Cantidad de votos obtenidos
                            </label>
                            <input
                                type="text"
                                id="hacemosPorNuestroPais"
                                name="hacemosPorNuestroPais"
                                // value={votos.votosFrenteIzquierda}
                                onChange={handleInputChange}
                                className={styles.inputStyle}
                                placeholder="0"
                            />
                        </div>
                    </div>
                    
                    {/* La Libertad Avanza  */}
                    <div className={styles.boxForm}>
                        <div className={styles.dataAgrupacionContainer}>
                            {/* <p className={styles.n}>503</p> */}
                            <p className={styles.agrupacionTitulo}>La Libertad Avanza - Partido Renovador Federal</p>
                            <p className={styles.agrupacion}> Precandidatos a Diputados Nacionales</p>
                            <p className={styles.agrupacionCandidatos}> Manuel Quintar y Claudia Neme Scheij</p>
                        </div>
                        <div className={styles.boxFormInput}>
                            <label htmlFor="libertadAvanza" className={styles.labelStyle}>
                                Cantidad de votos obtenidos
                            </label>
                            <input
                                type="text"
                                id="libertadAvanza"
                                name="libertadAvanza"
                                // value={votos.votosFrenteIzquierda}
                                onChange={handleInputChange}
                                className={styles.inputStyle}
                                placeholder="0"
                            />
                        </div>
                    </div>

                    {/* Union Por la Patria */}
                    <div className={styles.boxForm}>
                        <div className={styles.dataAgrupacionContainer}>
                            {/* <p className={styles.n}>503</p> */}
                            <p className={styles.agrupacionTitulo}> Unión por la Patria en Jujuy ( La Unidad Peronista, massista y kirchnerista)</p>
                            <p className={styles.agrupacion}> Precandidatos a Diputados Nacionales</p>
                            <p className={styles.agrupacionCandidatos}> Alejandro Snopek</p>
                        </div>
                        <div className={styles.boxFormInput}>
                            <label htmlFor="unionPorLaPatria" className={styles.labelStyle}>
                                Cantidad de votos obtenidos
                            </label>
                            <input
                                type="text"
                                id="unionPorLaPatria"
                                name="unionPorLaPatria"
                                // value={votos.votosFrenteIzquierda}
                                onChange={handleInputChange}
                                className={styles.inputStyle}
                                placeholder="0"
                            />
                        </div>
                    </div>


                    <div className={styles.boxForm}>
                        <div className={styles.dataAgrupacionContainer}>
                            {/* <p className={styles.n}>503</p> */}
                            <p className={styles.agrupacionTitulo}>Unidad de luchadores y la izquierda</p>
                            <p className={styles.agrupacion}> Precandidatos a Diputados Nacionales</p>
                            <p className={styles.agrupacionCandidatos}> Betina Rivero, Luis Carrillo y Patricia Amante</p>
                        </div>
                        <div className={styles.boxFormInput}>
                            <label htmlFor="unidadDeLuchadores" className={styles.labelStyle}>
                                Cantidad de votos obtenidos
                            </label>
                            <input
                                type="text"
                                id="unidadDeLuchadores"
                                name="unidadDeLuchadores"
                                // value={votos.votosFrenteIzquierda}
                                onChange={handleInputChange}
                                className={styles.inputStyle}
                                placeholder="0"
                            />
                        </div>
                    </div>

                    <div className={styles.boxForm}>
                        <div className={styles.dataAgrupacionContainer}>
                            {/* <p className={styles.n}>503</p> */}
                            <p className={styles.agrupacionTitulo}>Frente de Izquierda y los Trabajadores-Unidad (FITU)</p>
                            <p className={styles.agrupacion}> Precandidatos a Diputados Nacionales</p>
                            <p className={styles.agrupacionCandidatos}> Natalia Morales, Ivan Blacutt (IS) y Andrea Gutiérrez</p>
                        </div>
                        <div className={styles.boxFormInput}>
                            <label htmlFor="fitu" className={styles.labelStyle}>
                                Cantidad de votos obtenidos
                            </label>
                            <input
                                type="text"
                                id="fitu"
                                name="fitu"
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
