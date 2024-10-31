import { Link } from 'react-router-dom';


const CoreServices = () => {
  return (
    <div>
      <div className="button-services sm:grid-cols-2 mx-auto text-xl flex flex-wrap" data-aos="fade-up" data-aos-anchor-placement="top-center">
        <button className="btn btn-service offer text-xl ">
       <Link to="/Services offer">
       <p className='offer text-xl'> Design & Branding</p>
       </Link> 
        </button>
        <button className="btn btn-service offer text-xl ">
        <Link to="/Services ">
        <p className='offer text-xl'>Content Creation</p>
        </Link> 
        </button>
        <button className="btn btn-service sm:text-sm offer text-xl">
        <Link to="/Services ">
        <p className='offer text-xl'>Social Media Marketing</p>
        </Link> 
        </button>
        <button className="btn btn-service offer text-xl">
        <Link to="/Services">
        <p className='offer text-xl'>Digital illustration</p>
        </Link> 
        </button>
    </div>
    </div>
  );
}

export default CoreServices;
