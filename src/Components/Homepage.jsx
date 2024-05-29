const Homepage = () => {
  return (
    <div className="home container-fluidmx-auto px-6 sm:px-6 lg:px-8   ">
    <h2 className='welcome-text text-center'>
      At <span className="company-name-1"> Koncept Agency</span>, We Bring your ideas to life. 
    </h2>
    <div className="home-cont container-fluid button-services sm:grid sm:grid-cols-2 sm:mx-auto text-1xl md:col-span-2 flex flex-wrap">
        <button className="btn btn-service ">Design & Branding</button>
        <button className="btn btn-service sm:text-sm">Social MediaM Marketing</button>
        <button className="btn btn-service ">Content Creation</button>
        <button className="btn btn-service">Digital illustration</button>
    </div>
    </div>
  )
}

export default Homepage