import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import Services from "./Pages/Services";
import HowWeWork from "./Pages/HowWeWork";
import Projects from './Pages/Projects';
import ContactUs from "./Pages/ContactUs";


const App = ()  => {
  return (
    <Router>
    <div className="App"> 
    <Routes>
      <Route path="/" element={<Navbar />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/AboutUs" element={<AboutUs />} />
      <Route path="/HowWeWork" element={<HowWeWork />} />
      <Route path="/Services" element={<Services />} />
      <Route path="/Projects" element={<Projects />} />
      <Route path="/ContactUs" element={<ContactUs />} />
    </Routes>
    </div>
  </Router>
);
}

export default App;
