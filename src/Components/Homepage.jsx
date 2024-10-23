 import  Homepattern from  "../assets/Images/Home-Pattern.jpg";
 import { Link } from 'react-router-dom';

const Homepage = () => {
  return (
    <div
    style={{
    backgroundImage: `url(${Homepattern})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover", 
    }}
     className="home container-fluid mx-auto sm:px-6 mb-8">
    <h2 className='welcome-text text-center'>
      At <span className="company-name-1"> Koncept Agency</span>, We Bring Your Ideas To Life. 
    </h2>
    </div>
  )
}

export default Homepage