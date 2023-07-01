"use client"

import { Dropdown } from 'flowbite-react';
import styles from './course.module.css'

export default function Course({num}){

    const handleChange = () =>{
        console.log('')
    }
    return(
        <div className={styles.course} >
            <div className={styles.it}>{num}</div>
            <div className={styles.it}>
                <input type="text" onChange={handleChange} className={styles.inputText} placeholder='Eg. Data Science'/>
            </div>
            <div className={styles.it}>
            <Dropdown label="Grade">
                    <Dropdown.Item>
                        Dashboard
                    </Dropdown.Item>
                    <Dropdown.Item>
                        Settings
                    </Dropdown.Item>
                    <Dropdown.Item>
                        Earnings
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item>
                        Separated link
                    </Dropdown.Item>
                </Dropdown>
            </div>
            <div className={styles.it}>Credits</div>
            <div className={styles.it}>Course Type</div>
        </div>
    )
}