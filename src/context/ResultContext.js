"use client"
import { createContext, useState } from "react";

export const ResultContext = createContext()
export const ResultProvider = ({children}) => {
    const [courses, setCourses] = useState([
        {semester: [
            {id: 1, name: '', grade: '', credits: '', type: ''},
            {id: 2, name: '', grade: '', credits: '', type: ''},
            {id: 3, name: '', grade: '', credits: '', type: ''},
            {id: 4, name: '', grade: '', credits: '', type: ''},
            {id: 5, name: '', grade: '', credits: '', type: ''},
        ],
        id: 1
        },

    ])

    const singleCourse = {id: '', name: '', grade: '', credits: '', type: ''};
    const semester = {
        semester: [
            {id: 1, name: '', grade: '', credits: '', type: ''},
            {id: 2, name: '', grade: '', credits: '', type: ''},
            {id: 3, name: '', grade: '', credits: '', type: ''},
            {id: 4, name: '', grade: '', credits: '', type: ''},
            {id: 5, name: '', grade: '', credits: '', type: ''},
        ],
        id: 3
    }

    const handleAddCourse = () => {

    }
    const handleAddSemester = async () => {
        setCourses( [...courses, semester]);
        console.log(courses)
    }


    return(

        <ResultContext.Provider value={{courses, setCourses, handleAddSemester}}>
            {children}
        </ResultContext.Provider>
    )
}