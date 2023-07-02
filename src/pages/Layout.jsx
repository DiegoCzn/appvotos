import Header from '../components/Header'
import { Outlet } from 'react-router-dom'
import styles from '../styles/layout.module.css'
const Layout = () => {
  return (
    <>
      <Header></Header>
      <main className={styles.mainContainer}>
        <Outlet>
        </Outlet>      
      </main>
    </>
  )
}

export default Layout


