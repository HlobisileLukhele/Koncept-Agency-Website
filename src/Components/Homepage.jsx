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
      At <span className="company-name-1"> Koncept Agency</span>, We Bring your ideas to life. 
    </h2>
    <div className="home-cont container-fluid button-services sm:grid-cols-2 mx-auto text-xl flex flex-wrap">
        <button className="btn btn-service ">
       <Link to="/Services">Design & Branding</Link> 
        </button>
        <button className="btn btn-service sm:text-sm">
        <Link to="/Services">Social MediaM Marketing</Link> 
        </button>
        <button className="btn btn-service ">
        <Link to="/Services">Content Creation</Link> 
        </button>
        <button className="btn btn-service">
        <Link to="/Services">Digital illustration</Link> 
        </button>
    </div>
    </div>
  )
}

export default Homepage