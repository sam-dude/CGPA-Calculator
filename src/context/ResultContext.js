"use client"

import { createContext, useState } from "react";
import { toast } from 'react-toastify'

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

    const singleCourse = {id: 9, name: '', grade: '', credits: '', type: ''};
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

    //TOASTS
    const showToast = () => {
        toast.success('New Semester Added!🚀');
      };
      const showErrorToast = () => {
        toast.error('Limit reached');
      }

    //EVENTS HANDLERS
    const handleAddSemester = async () => {
        if(courses.length > 11){
           showErrorToast()
        }else{
            setCourses( [...courses, semester]);
            showToast()
        }
        
    }
    const handleAddCourse = async (id) => {
        courses.map(item => {
            // item.semester.push(singleCourse)
            //define clicked item
            if (item.id === id) {
                var clickedItem = item 
            }
            
            console.log(clickedItem)
            
        
        })
        let clickedItem = courses.filter()
        // console.log(clickedItem)
        
    }


    return(

        <ResultContext.Provider value={{courses, setCourses, handleAddSemester, handleAddCourse}}>
            {children}
        </ResultContext.Provider>
    )
}