import './App.css'
import Navbar from './Components/Navbar';
import Homepage from './Components/Homepage';
import CallToAction from './Components/CallToAction';
import CompaniesWorkedWith from './Components/CompaniesWorkedWith';
import Footer from './Components/Footer';


const App = ()  => {
  return (
    <div className="header">
       <Navbar />
       <Homepage />
       <CallToAction />
       <CompaniesWorkedWith />
       <Footer />
    </div>
  )
}

export default App;
