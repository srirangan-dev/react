import './App.css'
import Course from './course';
import sunrise from './assets/sunrise.jpg'
import background from './assets/background.jpg'

    

function CourseList(){



  

      const courses = [
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
  ];


  courses.sort((x,y)=>y.rating-x.rating) //descending

  const  vfmCourses = courses.filter((course)=>
    course.price<=200 //filter the data

  )



const coursesList=courses.map(
    (course,index)=>
<Course  key={index} name={course.name}
 image ={course.image} 
 price={course.price} rating={course.rating}/>
)




    return(
        <>
        {coursesList}
        
        </>

    );
}


export default CourseList;

