import { Link } from 'react-router-dom';


const CoreServices = () => {
  return (
    <div>
      <div className="button-services sm:grid-cols-2 mx-auto text-xl flex flex-wrap" data-aos="fade-up" data-aos-anchor-placement="top-center">
        <button className="btn btn-service ">
       <Link to="/Services">Design & Branding</Link> 
        </button>
        <button className="btn btn-service ">
        <Link to="/Services">Content Creation</Link> 
        </button>
        <button className="btn btn-service sm:text-sm">
        <Link to="/Services">Social Media Marketing</Link> 
        </button>
        <button className="btn btn-service">
        <Link to="/Services">Digital illustration</Link> 
        </button>
    </div>
    </div>
  );
}

export default CoreServices;
