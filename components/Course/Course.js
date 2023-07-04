"use client"

import { Dropdown } from 'flowbite-react';
import { Select } from 'flowbite-react';
import styles from './course.module.css'

export default function Course({ i}){

    const handleChange = () =>{
        console.log()
    }
    return(
        <div className={styles.course} >
            <div className={styles.it}>{i + 1}</div>
            <div className={styles.it}>
                <input type="text" onChange={handleChange} className={styles.inputText} placeholder='Eg. Data Science' required/>
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
            >
                <option>
                A
                </option>
                <option>
                B
                </option>
                <option>
                C
                </option>
                <option>
                D
                </option>
                <option value="">E</option>
                <option value="">F</option>
                
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
                >
                    <option>
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
                    <option value="">1</option>
                    
                    
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
        </div>
    )
}