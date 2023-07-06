"use client"

import { Dropdown } from 'flowbite-react';
import { Select } from 'flowbite-react';
import styles from './course.module.css'
import { FaTimesCircle } from 'react-icons/fa';
import { ResultContext } from '@/src/context/ResultContext'
import { useContext } from 'react';

export default function Course({ i, id, parentId }){
    const {handleRemoveCourse, handleGradeChange, handleUnitChange} = useContext(ResultContext);

    const handleChange = () =>{
        console.log()
    }
    return(
        <div className={styles.course} >
            <div className={styles.it}>{i + 1}</div>
            <div className={styles.it}>
                <input type="text" onChange={handleChange} className={styles.inputText} placeholder='Course Name' required/>
            </div>

            <div className={styles.it}>
            <div
                className="w-20"
                id="select"
            >
    
            <Select
                id="grades"
                required
                style={{boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px', border: 'none'}}
                onChange={(e) => {handleGradeChange(e, id, parentId)}}
            >
                <option value='0'>
                Grade
                </option>
                <option value='5'>
                A
                </option>
                <option value='4'>
                B
                </option>
                <option value='3'>
                C
                </option>
                <option value='2'>
                D
                </option>
                <option value='1'>E</option>
                <option value='0'>F</option>
                
            </Select>
        </div>
            </div>
            <div className={styles.it}>
            <div
                className="w-20"
                id="weight"
                
            >
                
                <Select
                    id="weights"
                    required
                    style={{boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px', border: 'none'}}
                    onChange={(e) => {handleUnitChange(e, id, parentId)}}
                >
                    <option value='0'>
                    Unit
                    </option>
                    <option >
                    5
                    </option>
                    <option>
                    4
                    </option>
                    <option>
                    3
                    </option>
                    <option>
                    2
                    </option>
                    <option >1</option>
                    
                    
                </Select>
            </div>
            </div>
            <div className={styles.it}>
                <div
                    // className="w-20"
                    styles={{width: '12px'}}
                    id="courseTyp"
                >
        
                    <Select
                        id="courseType"
                        required
                        style={{boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px', border: 'none'}}
                    >
                        <option>
                        Regular
                        </option>
                        <option>
                        Restricted Elective
                        </option>
                        <option>
                        Special Elective
                        </option>
                        <option>
                        AP
                        </option>
                        
                    </Select>
                </div>
            </div>
            <div className={styles.it} onClick={async () => {await handleRemoveCourse(id, parentId)}}><FaTimesCircle/></div>
        </div>
    )
}