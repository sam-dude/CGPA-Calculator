"use client"
import { createContext, useState } from "react";
import { toast } from 'react-toastify'

export const ResultContext = createContext()
export const ResultProvider = ({children}) => {
    const [courses, setCourses] = useState([
        {semester: [
            {id: 1, name: '', grade: 5, credits: 5, type: ''},
            {id: 2, name: '', grade: 5, credits: 5, type: ''},
            {id: 3, name: '', grade: 5, credits: 5, type: ''},
            {id: 4, name: '', grade: 5, credits: 5, type: ''},
            {id: 5, name:'', grade: 5, credits: 5, type: ''},
        ],
        id: 1
        },

    ])

    const singleCourse = {id: 9, name: '', grade: '', credits: '', type: ''};

    //define click counters
    let [clickCounter, setClickCounter] = useState(2);

    const semester = {
        semester: [
            {id: 1, name: '', grade: 5, credits: 5, type: ''},
            {id: 2, name: '', grade: 5, credits: 5, type: ''},
            {id: 3, name: '', grade: 5, credits: 5, type: ''},
            {id: 4, name: '', grade: 5, credits: 5, type: ''},
            {id: 5, name: '', grade: 5, credits: 5, type: ''},
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
           navigator.vibrate(200)
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

        let lastId = clickedItem.map(item => item.semester.length > 0 ? item.semester[item.semester.length - 1].id : 1)
        // let lastId = item.semester.length > 0 ? item.semester[item.semester.length - 1].id : 1;


        //push a new course field to the displayed list
        clickedItem.forEach(item => item.semester.push({id: lastId[0] + 1, name: '', grade: 5, credits: 5, type: ''}))

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
    const handleRemoveCourse = (id, parentId) => {
        //define clicked parent item
        let clickedParentItem = courses
            .filter(course => course.id === parentId)

        let filteredItem = clickedParentItem[0].semester.filter(item => item.id !== id)
        console.log(filteredItem);

        //define unClicked parent items
        let unClickedItems = courses.filter(course => course.id !== parentId);

        console.log({semester: filteredItem, id: parentId})
        setCourses([...unClickedItems, {semester: filteredItem, id: parentId}])
    }

    return(

        <ResultContext.Provider value={{
            courses, 
            setCourses, 
            handleAddSemester, 
            handleAddCourse, 
            handleRemoveSemester,
            handleRemoveCourse
        }}>
            {children}
        </ResultContext.Provider>
    )
}