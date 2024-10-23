import Homepage from '../Components/Homepage.jsx';
import CompaniesWorkedWith from '../Components/CompaniesWorkedWith';
import CoreServices from '../Components/Core-services.jsx';

const Home = () => {
  return (
    <div className='Container-fluid'>
    <Homepage />
    <CoreServices />
    <CompaniesWorkedWith />
    </div>
  )
}

export default Home