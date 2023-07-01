"use client"

import { useContext, useState } from 'react'
import styles from './calculator.module.css'
import Course from '../Course/Course'
import Navbar from '../Navbar/Navbar'
import { ToggleSwitch } from 'flowbite-react';
import ToggleSwitchElement from '../Toogle/Toggle'
import { ResultContext } from '@/src/context/ResultContext'

export default function Calculator({item}){
   
    const {courses, handleAddSemester} = useContext(ResultContext)

    return(
        <div className={styles.calculator}>
            <div className={styles.header}>
                <div className={styles.semester}>Semester {item.id}</div>
                <div className={styles.leftHead}>
                    <div className={styles.weigth} id="toggle" style={{display: 'flex'}}>
                    <ToggleSwitch
                        // label="Toggle me"
                        
                    />
                        Weighted
                    </div>
                    {/* <ToggleSwitchElement /> */}
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
                    item.map((course) => (
                        
                        <div key={course.id}>
                            <Course num={course.id} />
                        </div>
                    ))
                }
            </div>
            <div className={styles.gp}>
                <div className={styles.gpa}>Semester 1 GPA: 0.00</div>
                <div className={styles.addCourse}>Add Course</div>
            </div>
            <div className={styles.addSem}>
                <div className={styles.addSemes} onClick={handleAddSemester}>Add Semester</div>
            </div>
        </div>
    )
}
