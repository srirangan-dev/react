import './App.css'
import Course from './course';
import sunrise from './assets/sunrise.jpg'
import background from './assets/background.jpg'



function CourseList(){


      const courses = [
    {
      name: 'HTML course',
      price: '$199',
      image: sunrise,
      rating: 4,
      show: true
    },
    {
      name: 'CSS course',
      price: '$199',
      image: background,
      rating: 4,
      show: true
    },
    {
      name: 'JS course',
      price: '$199',
      image: sunrise,
      rating: 4,
      show: true
    }
  ];




const coursesList=courses.map(
    (course)=>
<Course name={course.name}
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