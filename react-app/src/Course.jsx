import sunrise from './assets/sunrise.jpg'
import background from './assets/background.jpg'
import PropTypes from 'prop-types'

function Course(props) {

  // conditional rendering
  if (props.show === true) {
    return (
      <div className="card">
        <img src={props.image} alt="" />
        <h3>{props.name}</h3>
        <p>{props.price}</p>
        <span>{props.rating}</span>
      </div>
    );
  } else {
    return (
      <div className="card">Course not available</div>
    );
  }
}

Course.propTypes = {
  name: PropTypes.string,
  rating: PropTypes.number,
  show: PropTypes.bool,
  price: PropTypes.string,
  image: PropTypes.string
};

export default Course;
