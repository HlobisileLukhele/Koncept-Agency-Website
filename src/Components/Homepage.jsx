const Homepage = () => {
  return (
    <div>
    <h2 className='welcome-text '>
      At <span className='company-name '> Koncept Agency</span>, We Bring your ideas to life. 
    </h2>
    <div className=" container-fluid button-services">
        <button className="btn btn-service ">Design & Branding</button>
        <button className="btn btn-service">Social Media Marketing</button>
        <button className="btn btn-service ">Content Creation</button>
        <button className="btn btn-service">Digital illustration</button>


    </div>
    </div>
  )
}

export default Homepage