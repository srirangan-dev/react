import './App.css'
import Course from './course';
import sunrise from './assets/sunrise.jpg'
import background from './assets/background.jpg'
import { useState,useEffect } from 'react';

    

function CourseList(){
      const [courses,setCourses] =useState([
    {

        id:1,
      name: 'html course',
      price: 100,
      image: sunrise,
      rating: 2,
      show: true
    },
    {

        id:2,
      name: 'css course',
      price: 200,
      image: background,
      rating: 3,
      show: true
    },
    {
        id:3,
      name: 'js course',
      price: 300,
      image: sunrise,
      rating: 4,
      show: true
    },
    {
        id:4,
      name: 'react course',
      price: 600,
      image: background,
      rating: 5,
      show:true
    }
  ]);


  const[dummy,SetDummy]= useState(true);


  useEffect(()=>{
    console.log('use Effect called');
    console.log(dummy);

  } , [courses]);

  function HandleDelete(id ){
    console.log(id);
    const newCourse=courses.filter((course)=>course.id!= id);
    setCourses(newCourse);
}



  courses.sort((x,y)=>y.rating-x.rating) //descending

  const  vfmCourses = courses.filter((course)=>
    course.price<=200)



const coursesList=courses.map(
    (course)=>
<Course  key={course.id} name={course.name}
 image ={course.image} 
 price={course.price} rating={course.rating}
 delete= {HandleDelete} id={course.id}/>
)




    return(
        <>
        {coursesList}
        <button onClick={()=> {SetDummy(false)}}>  Dummy button</button>

        
        </>

    );
}


export default CourseList;
