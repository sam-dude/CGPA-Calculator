"use client"
import styles from './course.module.css'

export default function Course({num, setCourses}){

    const handleChange = () =>{
        setCourses
    }
    return(
        <div className={styles.course} >
            <div className={styles.it}>{num}</div>
            <div className={styles.it}>
                <input type="text" onChange={handleChange} className={styles.inputText} placeholder='Eg. Data Science'/>
            </div>
            <div className={styles.it}>Grade</div>
            <div className={styles.it}>Credits</div>
            <div className={styles.it}>Course Type</div>
        </div>
    )
}