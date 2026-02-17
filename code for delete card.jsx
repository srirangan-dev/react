import sunrise from './assets/sunrise.jpg'
import background from './assets/background.jpg'
import PropTypes from 'prop-types'
import { useState } from 'react';


function Course(props) {

  // conditional rendering

  //let purchased=false;

   const [purchased, setPurchased]= useState(false);
  //  const [discount,setDiscount]=useState(props.price);



  function BuyCourse(amt){
    console.log(props.name,"purchasesd",amt,"% discount");
    setPurchased(true);
    // setDiscount(discount-amt);
    console.log(purchased);
  }

 
    return (
     props.name  && <div className="card">
        <img src={props.image} alt="" />
        <h3>{props.name}</h3>
        <p>{props.price}</p>
       <button  onClick={()=>BuyCourse(20)}>Buy now</button><br></br><br></br>
       /* <button onClick={()=>props.delete(props.id)}  > Delete</button> {//delete button for card */}
       <p> {purchased ? "Already purchases" : " Get it now"} </p> 
      </div>
    );

  
}

Course.propTypes = {
  name: PropTypes.string,
  rating: PropTypes.number,
  show: PropTypes.bool,
  price: PropTypes.string,
  image: PropTypes.string
};

export default Course;



import './App.css'
import Course from './course';
import sunrise from './assets/sunrise.jpg'
import background from './assets/background.jpg'
import { useState } from 'react';

    

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


  function HandleDelete(id ){
    console.log(id);
    const newCourse=courses.filter((course)=>course.id!= id);
    setCourses(newCourse);
}



  courses.sort((x,y)=>y.rating-x.rating) //descending

  const  vfmCourses = courses.filter((course)=>
     course.price<=200) {//It is used for filter the object  */}



const coursesList=courses.map(
    (course)=>
<Course  key={course.id} name={course.name}
 image ={course.image} 
 price={course.price} rating={course.rating}
 delete= {HandleDelete} id={course.id}/> 
      {/* It wiil delete cars with calling function /handle Chanage */}
)




    return(
        <>
        {coursesList}
        
        </>

    );
}


export default CourseList;



