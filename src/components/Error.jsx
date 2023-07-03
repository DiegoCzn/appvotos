import React from 'react'
import styles from '../styles/form.module.css'
const Error = ({msj}) => {
  return (
    <div className={styles.error}>
      <p className={styles.errorText}>{msj}</p>
    </div>
  )
}

export default Error
