import sunrise from './assets/sunrise.jpg'
import background from './assets/background.jpg'
import PropTypes from 'prop-types'
import { useState } from 'react';//hook concept in react


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
       <button  onClick={()=>BuyCourse(20)}>Buy now</button>
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
