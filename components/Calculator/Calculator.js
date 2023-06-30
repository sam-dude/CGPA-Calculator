"use client"

import { useState } from 'react'
import styles from './calculator.module.css'
import Course from '../Course/Course'
import Navbar from '../Navbar/Navbar'


export default function Calculator(){
    const [courses, setCourses] = useState([
        {id: 1, name: '', grade: '', credits: '', type: ''},
        {id: 2, name: '', grade: '', credits: '', type: ''},
        {id: 3, name: '', grade: '', credits: '', type: ''},
        {id: 4, name: '', grade: '', credits: '', type: ''},
        {id: 5, name: '', grade: '', credits: '', type: ''},
    ])

    return(
        <div className={styles.calculator}>
            <div className={styles.header}>
                <div className={styles.semester}>Semester 1</div>
                <div className={styles.leftHead}>
                    <div className={styles.weigth}>Weighted</div>
                    <div className={styles.close}></div>
                </div>
            </div>

            <div className={styles.title}>
                <div className={styles.til}>#</div>
                <div className={styles.til}>Course Name</div>
                <div className={styles.til}>Grade</div>
                <div className={styles.til}>Credits</div>
                <div className={styles.til}>Course Type</div>
            </div>
            
            <div className={styles.courses}>
                {
                    courses.map((course) => (
                        
                        <div key={course.id}>
                            <Course num={course.id} setCourses={setCourses}/>
                        </div>
                    ))
                }
            </div>
            <div className={styles.gp}>
                <div className={styles.gpa}>Semester 1 GPA: 0.00</div>
                <div className={styles.addCourse}>Add Course</div>
            </div>
            <div className={styles.addSem}>
                <div className={styles.addSemes}>Add Semester</div>
            </div>
        </div>
    )
}
