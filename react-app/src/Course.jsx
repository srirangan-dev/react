import sunrise from './assets/sunrise.jpg'
import background from './assets/background.jpg'
import PropTypes from 'prop-types'

function Course(props) {

  // conditional rendering

  function BuyCourse(discount,e){
    console.log(props.name,"purchasesd",discount,"% discount");
    console.log(e);

  }

 
    return (
     props.name  && <div className="card">
        <img src={props.image} alt="" />
        <h3>{props.name}</h3>
        <p>{props.price}</p>
       <button  onClick={(event)=>BuyCourse(20,event)}>Buy Now</button>
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

