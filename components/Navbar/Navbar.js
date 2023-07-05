import Link from "next/link"
import styles from './navbar.module.css'
import Image from "next/image"
import logo from '../../public/gpa-cal.png'

export default function Navbar(){
    return(
        <nav className={styles.container}>
            <Image src={logo} className={styles.img} alt="CGPA Calculator logo"/>
            <h2 className={styles.logo}>CGPA Calculator</h2>
        </nav>
    )
}