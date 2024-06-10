
const Homepage = () => {
  const  Homebackground = "../assets/images/Home-Pattern.jpg";

  return (
    <div
    style={{
    backgroundImage: `url(${Homebackground})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover", 
    }}
     className="home container-fluid mx-auto px-3 sm:px-6">
    <h2 className='welcome-text text-center'>
      At <span className="company-name-1"> Koncept Agency</span>, We Bring your ideas to life. 
    </h2>
    <div className="home-cont container-fluid button-services sm:grid-cols-2 mx-auto text-xl flex flex-wrap pb-8">
        <button className="btn btn-service ">Design & Branding</button>
        <button className="btn btn-service sm:text-sm">Social MediaM Marketing</button>
        <button className="btn btn-service ">Content Creation</button>
        <button className="btn btn-service">Digital illustration</button>
    </div>
    </div>
  )
}

export default Homepage