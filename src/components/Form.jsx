import React, { useEffect, useState } from 'react'
import styles from '../styles/form.module.css'
import { useLocation, useNavigate } from 'react-router-dom';

const FormVotos = () => {
    // console.log(fiscal)
    const navigate = useNavigate()
    const location = useLocation()
    const fiscal = location.state

    const [votos, setVotos] = useState({
        votosJxCBulrrich: 0,
        votosJxCLarreta: 0,
        votosUPMassa: 0,
        votosUPGrabois: 0,
        votosLibertadMilei: 0,
        votosHacemosSchiarretti: 0,
        votosFrenteDeIzquierdaBregman: 0,
        votosFrenteDeIzquierdaSolano: 0,
        votosMasCastañeira: 0,
        votosPoliticaObreraRamal: 0,
        votosLibreEscobar: 0,
        votosValoresMoreno: 0,
        votosFrentePatriotaBiondini:0,
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
                            {/* <p className={styles.n}>N Lista</p> */}
                            <p className={styles.agrupacion}>JxC Bullrich</p>
                        </div>
                        <div className={styles.boxFormInput}>
                            <label htmlFor="votosJxCBulrrich" className={styles.labelStyle}>
                                Cantidad de votos obtenidos
                            </label>
                            <input
                                type="text"
                                id="votosJxCBulrrich"
                                name="votosJxCBulrrich"
                                onChange={handleInputChange}
                                className={styles.inputStyle}
                                placeholder="0"
                            />
                        </div>
                    </div>
            
                    <div className={styles.boxForm}>
                        <div className={styles.dataAgrupacionContainer}>
                            {/* <p className={styles.n}>502</p> */}
                            <p className={styles.agrupacion}>JxC Larreta</p>
                        </div>
                        <div className={styles.boxFormInput}>
                            <label htmlFor="votosJxCLarreta" className={styles.labelStyle}>
                            Cantidad de votos obtenidos
                            </label>
                            <input
                                type="text"
                                id="votosJxCLarreta"
                                name="votosJxCLarreta"
                                // value={votos.votosFrenteCambiaJujuy}
                                onChange={handleInputChange}
                                className={styles.inputStyle}
                                placeholder="0"
                            />
                        </div>
                    </div>
            
                    <div className={styles.boxForm}>
                        <div className={styles.dataAgrupacionContainer}>
                            {/* <p className={styles.n}>503</p> */}
                            <p className={styles.agrupacion}>UP Massa</p>
                        </div>
                        <div className={styles.boxFormInput}>
                            <label htmlFor="votosUPMassa" className={styles.labelStyle}>
                                Cantidad de votos obtenidos
                            </label>
                            <input
                                type="text"
                                id="votosUPMassa"
                                name="votosUPMassa"
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
                            <p className={styles.agrupacion}>UP Grabois</p>
                        </div>
                        <div className={styles.boxFormInput}>
                            <label htmlFor="votosUPGrabois" className={styles.labelStyle}>
                                Cantidad de votos obtenidos
                            </label>
                            <input
                                type="text"
                                id="votosUPGrabois"
                                name="votosUPGrabois"
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
                            <p className={styles.agrupacion}>Libertad Milei</p>
                        </div>
                        <div className={styles.boxFormInput}>
                            <label htmlFor="votosLibertadMilei" className={styles.labelStyle}>
                                Cantidad de votos obtenidos
                            </label>
                            <input
                                type="text"
                                id="votosLibertadMilei"
                                name="votosLibertadMilei"
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
                            <p className={styles.agrupacion}>Hacemos Schiaretti</p>
                        </div>
                        <div className={styles.boxFormInput}>
                            <label htmlFor="votosHacemosSchiarretti" className={styles.labelStyle}>
                                Cantidad de votos obtenidos
                            </label>
                            <input
                                type="text"
                                id="votosHacemosSchiarretti"
                                name="votosHacemosSchiarretti"
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
                            <p className={styles.agrupacion}>Frente de Izquierda Bregman</p>
                        </div>
                        <div className={styles.boxFormInput}>
                            <label htmlFor="votosFrenteDeIzquierdaBregman" className={styles.labelStyle}>
                                Cantidad de votos obtenidos
                            </label>
                            <input
                                type="text"
                                id="votosFrenteDeIzquierdaBregman"
                                name="votosFrenteDeIzquierdaBregman"
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
                            <p className={styles.agrupacion}>Frente de Izquierda Solano</p>
                        </div>
                        <div className={styles.boxFormInput}>
                            <label htmlFor="votosFrenteDeIzquierdaSolano" className={styles.labelStyle}>
                                Cantidad de votos obtenidos
                            </label>
                            <input
                                type="text"
                                id="votosFrenteDeIzquierdaSolano"
                                name="votosFrenteDeIzquierdaSolano"
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
                            <p className={styles.agrupacion}>Mas Castañeira</p>
                        </div>
                        <div className={styles.boxFormInput}>
                            <label htmlFor="votosMasCastañeira" className={styles.labelStyle}>
                                Cantidad de votos obtenidos
                            </label>
                            <input
                                type="text"
                                id="votosMasCastañeira"
                                name="votosMasCastañeira"
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
                            <p className={styles.agrupacion}>Política Obrera Ramal</p>
                        </div>
                        <div className={styles.boxFormInput}>
                            <label htmlFor="votosPoliticaObreraRamal" className={styles.labelStyle}>
                                Cantidad de votos obtenidos
                            </label>
                            <input
                                type="text"
                                id="votosPoliticaObreraRamal"
                                name="votosPoliticaObreraRamal"
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
                            <p className={styles.agrupacion}>Libres Escobar</p>
                        </div>
                        <div className={styles.boxFormInput}>
                            <label htmlFor="votosLibreEscobar" className={styles.labelStyle}>
                                Cantidad de votos obtenidos
                            </label>
                            <input
                                type="text"
                                id="votosLibreEscobar"
                                name="votosLibreEscobar"
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
                            <p className={styles.agrupacion}>Valores Moreno</p>
                        </div>
                        <div className={styles.boxFormInput}>
                            <label htmlFor="votosValoresMoreno" className={styles.labelStyle}>
                                Cantidad de votos obtenidos
                            </label>
                            <input
                                type="text"
                                id="votosValoresMoreno"
                                name="votosValoresMoreno"
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
                            <p className={styles.agrupacion}>Frente Patriota Biondini</p>
                        </div>
                        <div className={styles.boxFormInput}>
                            <label htmlFor="votosFrentePatriotaBiondini" className={styles.labelStyle}>
                                Cantidad de votos obtenidos
                            </label>
                            <input
                                type="text"
                                id="votosFrentePatriotaBiondini"
                                name="votosFrentePatriotaBiondini"
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
