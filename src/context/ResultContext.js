"use client"
import { createContext, useState } from "react";
import { toast } from 'react-toastify'

export const ResultContext = createContext()
export const ResultProvider = ({children}) => {
    const [courses, setCourses] = useState([
        {semester: [
            {id: 1, name: '', grade: 0, credits: 0, type: '', courseStrength: 0},
            {id: 2, name: '', grade: 0, credits: 0, type: '', courseStrength: 0},
            {id: 3, name: '', grade: 0, credits: 0, type: '', courseStrength: 0},
            {id: 4, name: '', grade: 0, credits: 0, type: '', courseStrength: 0},
            {id: 5, name:'', grade: 0, credits: 0, type: '', courseStrength: 0},
        ],
        gpa: 0.00,
        id: 1
        },

    ])

    const singleCourse = {id: 9, name: '', grade: 0, credits: '', type: ''};

    //define click counters
    let [clickCounter, setClickCounter] = useState(2);

    const semester = {
        semester: [
            {id: 1, name: '', grade: 0, credits: 0, type: '', courseStrength: 0},
            {id: 2, name: '', grade: 0, credits: 0, type: '', courseStrength: 0},
            {id: 3, name: '', grade: 0, credits: 0, type: '', courseStrength: 0},
            {id: 4, name: '', grade: 0, credits: 0, type: '', courseStrength: 0},
            {id: 5, name: '', grade: 0, credits: 0, type: '', courseStrength: 0},
        ],
        gpa: 0.00,
        id: clickCounter
    }

    //defi ne grade s0rength
    const [A, B, C, D, E, F] = [5, 4, 3, 2, 1, 0]
    
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

        //push a new course field to the displayed list
        clickedItem.forEach(item => item.semester.push({id: lastId[0] + 1, name: '', grade: 0, credits: 5, type: ''}))

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

        //filter out the clicked item 
        let filteredItems = clickedParentItem[0].semester.filter(item => item.id !== id)
        console.log(filteredItems);

        let gp = clickedParentItem[0].gpa;

        //define unClicked parent items
        let unClickedItems = courses.filter(course => course.id !== parentId);

        console.log({semester: filteredItems,gpa: gp, id: parentId})
        setCourses([...unClickedItems, {semester: filteredItems,gpa: gp, id: parentId}])
    }

    //handle grade c0ange
    const handleGradeChange = (e, id, parentId) => {
        let gradePoint = parseInt(e.target.value);

        let clickedParentItem = courses
            .filter(course => course.id === parentId)
        clickedParentItem[0].semester
            .filter(course => course.id === id)[0].grade = gradePoint

        let unitPoint = parseInt(clickedParentItem[0].semester.filter(course => course.id === id)[0].credits)

        clickedParentItem[0].semester.filter(course => course.id === id)[0].courseStrength = gradePoint * unitPoint
        
        let unClickedParentItem = courses
            .filter(course => course.id !== parentId)
        
        console.log(gradePoint, clickedParentItem);

        //update screen gpa
        clickedParentItem[0].gpa = calculateGP(parentId);
        
        setCourses([...unClickedParentItem, ...clickedParentItem])
        console.log(courses)
    } 

    //handle units change
    const handleUnitChange = (e, id, parentId) => {
        let unitPoint = parseInt(e.target.value);

        let clickedParentItem = courses
            .filter(course => course.id === parentId)
        clickedParentItem[0].semester
            .filter(course => course.id === id)[0].credits = unitPoint
        
        let gradePoint = parseInt(clickedParentItem[0].semester.filter(course => course.id === id)[0].grade)

        
        clickedParentItem[0].semester.filter(course => course.id === id)[0].courseStrength = gradePoint * unitPoint

        let unClickedParentItem = courses
            .filter(course => course.id !== parentId)
        
        //grab the gpa from the screen
        clickedParentItem[0].gpa = calculateGP(parentId);
        
        setCourses([...unClickedParentItem, ...clickedParentItem])
        
        console.log(courses)
    } 

    //function to calculate gp
    function calculateGP(parentId){
        let parentItem = courses.filter(course => course.id === parentId)

        //sum the course weight
        let totalCourseWeight = 0;
        let courseWeigth = parentItem[0].semester.map(item => item.courseStrength)
        //sum the units weight
        let totalUnitWeight = 0;
        let unitWeight = parentItem[0].semester.map(item => item.credits)

        courseWeigth.forEach(item => totalCourseWeight += item)
        unitWeight.forEach(item => totalUnitWeight += item)

        let gpa = parseFloat((totalCourseWeight / totalUnitWeight)).toFixed(2)
        console.log('From gp cal, ', totalCourseWeight, totalUnitWeight, gpa)

        if ( isNaN(gpa) === true){
            return 0.00
        }else{
            return gpa
        }
    }

    return(

        <ResultContext.Provider value={{
            courses, 
            setCourses, 
            handleAddSemester, 
            handleAddCourse, 
            handleRemoveSemester,
            handleRemoveCourse,
            handleGradeChange,
            handleUnitChange
        }}>
            {children}
        </ResultContext.Provider>
    )
}