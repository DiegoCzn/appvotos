import styles from '../styles/header.module.css'
import { Link } from 'react-router-dom'
import { AiOutlineMenu } from "react-icons/ai";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div>
          <h2>JxC</h2>
        </div>

        <div>
          <AiOutlineMenu></AiOutlineMenu>
        </div>
      </div>
    </header>
  )
}

export default Header

