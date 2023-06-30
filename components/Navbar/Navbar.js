import Link from "next/link"
import styles from './navbar.module.css'

export default function Navbar(){
    return(
        <nav className={styles.container}>
            <h2 className={styles.logo}>CGPA Calculator</h2>
        </nav>
    )
}