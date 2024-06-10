import { Link } from 'react-router-dom';

const CallToAction = () => {
  const backgroundImageUrl = "../assets/Images/Background-Pattern.jpg";
  return (
<div style={{
  backgroundImage: `url(${backgroundImageUrl})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
}}
    className="container-fluid text-center cta-container pt-7 pb-10 items-cente sm:mx-auto md:mx-auto w-auto">
      <div className=" items-center pr-10 md:mx-auto w-auto">
        <h2 className="text-hook pb-5 pt-5 md:p-0 m-0 text-sm">Let us bring your ideas to life!</h2>
        <p className="text-paragraph pb-5 pt-3">Let’s have a chat about how we can creatively breathe life into your ideas and brands.</p>
        <Link to="../Contact" className="text-2xl">
        <button className="btn btn-cta">Get In Touch</button>
        </Link>
      </div>
    </div>
  )
}

export default CallToAction