import Homepage from '../Components/Homepage.jsx';
import ProjectCarousel from '../Components/ProjectsCarousel'
import CallToAction from '../Components/CallToAction';
import CompaniesWorkedWith from '../Components/CompaniesWorkedWith';
import Footer from '../Components/Footer';

const Home = () => {
  return (
    <div className='Container-fluid'>
    <Homepage />
    <ProjectCarousel />
    <CallToAction />
    <CompaniesWorkedWith />
    <Footer />
    </div>
  )
}

export default Home