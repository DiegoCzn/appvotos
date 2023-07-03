import React, { useState } from 'react'
import styles from '../styles/form.module.css'
import { useNavigate } from 'react-router-dom'
import Error from '../components/Error'

const Identificacion = () => {
    const navigate = useNavigate()
    const [fiscal,setFiscal] = useState({
        nombreFiscal: '',
        dniFiscal: '',
        seccion: '',
        municipio: '',
        circuito: '',
        mesa: '',
        escuela: '',
    })
    const [error,setError] = useState(false)
    const handleInputChange = (e) => {
        setFiscal({
          ...fiscal,
          [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        //validaciones
        if(fiscal.nombreFiscal.trim() !== '' && fiscal.dniFiscal.trim() !== '' && fiscal.seccion.trim() !== '' && fiscal.municipio.trim() !== '' && fiscal.circuito.trim() !== '' && fiscal.mesa.trim() !== '' && fiscal.escuela.trim() !== ''){
            navigate('/formulario',{state: fiscal})
            setError(false)
        }else{
            setError(true)
        }
        
    }

  return (
    <>
        <form action='/formulario' className={styles.boxForm} onSubmit={handleSubmit}>
            <h2 className={styles.tituloForm}>Datos del Fiscal</h2>
            {error && <Error msj='Todos los campos son obligatorios'></Error>}
            <div className={styles.inputBox}>
                <label htmlFor='nombreFiscal' className={styles.text}>Nombre completo:</label>
                <input type="text" name="nombreFiscal" id="nombreFiscal" value={fiscal.nombre} onChange={handleInputChange}/>
            </div>
            <div className={styles.inputBox}>
                <label htmlFor='dniFiscal' className={styles.text}>Dni:</label>
                <input type="text" name="dniFiscal" id="dniFiscal" value={fiscal.dni} onChange={handleInputChange}/>
            </div>
            <div className={styles.inputBox}>
                <label htmlFor='seccion' className={styles.text}>Seccion:</label>
                <input type="text" name='seccion' id='seccion' value={fiscal.seccion} onChange={handleInputChange}/>
            </div>
            <div className={styles.inputBox}>
                <label htmlFor='municipio' className={styles.text}>Municipio:</label>
                <input type="text" name='municipio' id='municipio' value={fiscal.municipio} onChange={handleInputChange}/>
            </div>
            <div className={styles.inputBox}>
                <label htmlFor='circuito' className={styles.text}>Circuito:</label>
                <input type="text" name='circuito' id='circuito' value={fiscal.circuito} onChange={handleInputChange}/>
            </div>
            <div className={styles.inputBox}>
                <label htmlFor='mesa' className={styles.text}>Mesa:</label>
                <input type="text" name='mesa' id='mesa' value={fiscal.mesa} onChange={handleInputChange}/>
            </div>
            <div className={styles.inputBox}>
                <label htmlFor='escuela' className={styles.text}>Escuela:</label>
                <input type="text" name='escuela' id='escuela' value={fiscal.escuela} onChange={handleInputChange}/> 
            </div>

            <input type="submit"/> 
        </form>
    </>
    
  )
}

export default Identificacion
