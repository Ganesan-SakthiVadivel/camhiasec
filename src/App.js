import './App.css';
import Home from './Components/Home';
import Darkanimation from './VIDEOS/darkanimation.json';
import Members from './Components/Members';
import Lottie from "lottie-react";
import Navbar from './Navbars/Navbar';
import Timeline from './Components/Timeline';
import Events from './Components/Events';
import { Forms } from './Components/Forms';
import Contact from './Components/Contact';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router basename="/camhi-page">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/officers" element={<Members />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/events" element={<Events />} />
          <Route path="/joincamhi" element={<Forms />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
