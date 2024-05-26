import Navbar from '../Components/Navbar.jsx';
import Homepage from '../Components/Homepage.jsx';
import CallToAction from '../Components/CallToAction';
import CompaniesWorkedWith from '../Components/CompaniesWorkedWith';
import Footer from '../Components/Footer';

const Home = () => {
  return (
    <div className='Container-fluid'>
    <Navbar />
    <Homepage />
    <CallToAction />
    <CompaniesWorkedWith />
    <Footer />
    </div>
  )
}

export default Home