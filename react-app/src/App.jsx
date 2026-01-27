import './App.css'
import Course from './course';
import Footer from './Footer';
import sunrise from './assets/sunrise.jpg'
import background from './assets/background.jpg'



function App() {
  

  return (

    <>
     <Course  name="Html" price="$200"  image={sunrise}  show={true}   />
     <Course  name="Html" price="$200"  image={background}  show={true}   />
     <Course  name="Html" price="$200"  image={sunrise}  show={true}   />


    </>
    

  );
}  



export default App;
