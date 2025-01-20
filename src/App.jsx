import './App.css';
import { Fragment, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import Services from "./Pages/Services";
import HowWeWork from "./Pages/HowWeWork";
import Projects from './Pages/Projects';
import Contact from "./Pages/Contact";
import AOS from 'aos';
const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 5000,
      once: true,
    });
  }, []);

  return (
    <div className="App ">
      <Fragment>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route path="/" element={<Home />} />
            <Route path="/AboutUs" element={<AboutUs />} />
            <Route path="/HowWeWork" element={<HowWeWork />} />
            <Route path="/Services" element={<Services />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/Contact" element={<Contact />} />
          </Route>
        </Routes>
      </Fragment>
    </div>
  );
};

export default App;
