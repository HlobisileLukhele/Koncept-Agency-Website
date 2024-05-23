const Homepage = () => {
  return (
    <div className="container-fluid pb-10 pt-20  mx-auto px-6 sm:px-6 lg:px-8   ">
    <h2 className='welcome-text '>
      At <span className="company-name-1"> Koncept Agency</span>, We Bring your ideas to life. 
    </h2>
    <div className=" container-fluid button-services pt-20 pb-20">
        <button className="btn btn-service ">Design & Branding</button>
        <button className="btn btn-service">Social Media Marketing</button>
        <button className="btn btn-service ">Content Creation</button>
        <button className="btn btn-service">Digital illustration</button>
    </div>
    </div>
  )
}

export default Homepage