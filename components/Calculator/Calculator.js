"use client"

import { useContext, useState } from 'react'
import styles from './calculator.module.css'
import Course from '../Course/Course'
import Navbar from '../Navbar/Navbar'
// import { ToggleSwitch } from 'flowbite-react';
// import ToggleSwitchElement from '../Toogle/Toggle'
import { ResultContext } from '@/src/context/ResultContext'
import Toggle from '../Toogle/Toggle'
import { FaClock, FaTimesCircle } from 'react-icons/fa'

export default function Calculator({item, id, index,}){
   
    const {courses, handleAddSemester, handleAddCourse, handleRemoveSemester} = useContext(ResultContext);

    return(
        <div className={styles.calculator}>
            <div className={styles.header}>
                <div className={styles.semester}>Semester {index + 1}</div>
                <div className={styles.leftHead}>
                    {index + 1 === 1 ? <div className={styles.weigth} id="toggle" style={{display: 'flex'}}>
                    <Toggle />
                        Weighted
                    </div> : <div className={styles.close} onClick={async () => {await handleRemoveSemester(id)}} name="Close"><FaTimesCircle/></div>}
                    
                    {/* <ToggleSwitchElement /> */}
                    
                </div>
            </div>

            <div className={styles.title}>
                <div className={styles.til}>#</div>
                <div className={styles.til}>Course Name</div>
                <div className={styles.til}>Grade</div>
                <div className={styles.til}>Credits/Units</div>
                <div className={styles.til}>Course Type</div>
            </div>
            
            <div className={styles.courses}>
                {
                    item.map((course, index) => (
                        
                        <div key={course.id}>
                            <Course i={index} id={course.id} parentId={id}/>
                        </div>
                    ))
                }
            </div>
            <div className={styles.gp}>
                <div className={styles.gpa}>Semester {index + 1} GPA: 0.00</div>
                <div className={styles.addCourse} onClick={async () => {await handleAddCourse(id)}}>Add Course</div>
            </div>
            <div className={styles.addSem}>
                <div className={styles.addSemes} onClick={handleAddSemester}>Add Semester</div>
            </div>
        </div>
    )
}
