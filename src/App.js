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
  // Get the basename from the homepage in package.json
  // For GitHub Pages deployment, this will be '/camhiasec'
  // For local development, this can be empty
  const basename = process.env.NODE_ENV === 'production' 
    ? '/camhiasec' 
    : '';

  return (
    <div className="App">
      <Router basename={basename}>
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