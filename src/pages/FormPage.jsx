import { Link } from "react-router-dom"
import FormVotos from "../components/Form"
import { BsArrowLeft } from "react-icons/bs";
import styles from '../styles/form.module.css'
const FormPage = () => {
  return (
      <>
        <Link to={'/'} className={styles.textIcon}><BsArrowLeft className={styles.icon}></BsArrowLeft>Volver</Link>
        <FormVotos></FormVotos>        
      </>
    
  )
}

export default FormPage
