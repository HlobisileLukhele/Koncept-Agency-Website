import Homepage from '../Components/Homepage.jsx';
import CallToAction from '../Components/CallToAction';
import CompaniesWorkedWith from '../Components/CompaniesWorkedWith';

const Home = () => {
  return (
    <div className='Container-fluid'>
    <Homepage />
    <CallToAction />
    <CompaniesWorkedWith />
    </div>
  )
}

export default Home