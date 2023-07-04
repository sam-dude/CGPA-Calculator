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

    //define click counters
    let [clickCounter, setClickCounter] = useState(2);

    const semester = {
        semester: [
            {id: 1, name: '', grade: '', credits: '', type: ''},
            {id: 2, name: '', grade: '', credits: '', type: ''},
            {id: 3, name: '', grade: '', credits: '', type: ''},
            {id: 4, name: '', grade: '', credits: '', type: ''},
            {id: 5, name: '', grade: '', credits: '', type: ''},
        ],
        id: clickCounter
    }

    
    //TOASTS
    const showToast = () => {
        toast.success('New Semester Added! 🚀');
      };
      const showErrorToast = () => {
        toast.error('Limit reached');
      }
      const showRemoveSemesterToast = () =>{
        toast.warn('Semester Removed')
      }

    //EVENTS HANDLERS
    const handleAddSemester = async () => {
        if(courses.length > 11){
           showErrorToast()
        }else{
            setClickCounter(clickCounter += 1 );
            setCourses( [...courses, semester]);
            showToast()
        }
    }

    const handleAddCourse = async (id) => {
        //define clicked item
        let clickedItem = courses
            .filter(course => course.id === id)
        
        //define unClicked items
        let unClickedItems = courses.filter(course => course.id !== id);

        //push a new course field to the displayed list
        clickedItem.forEach(item => item.semester.push(singleCourse))

        // log clicked item
        console.log( [...unClickedItems, ...clickedItem]);

        //update the displayed course list
        setCourses( [...unClickedItems, ...clickedItem]);
    }

    //handle remove semester function
    const handleRemoveSemester = (id) => {
        //define clicked item
        let clickedItem = courses
            .filter(course => course.id === id)
        
        //filter semesters without the clicked
        let filterSemester = courses.filter(item => item.id !== clickedItem[0].id)

        //remove clicked item from the list
        showRemoveSemesterToast()
        setCourses(filterSemester)  
    }

    //handle reomve course field
    const handleRemoveCourse = () => {
        
    }

    return(

        <ResultContext.Provider value={{courses, setCourses, handleAddSemester, handleAddCourse, handleRemoveSemester}}>
            {children}
        </ResultContext.Provider>
    )
}