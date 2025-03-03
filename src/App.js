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
      <Router>
      
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>} ></Route>
        <Route path='/officers' element={<Members></Members>} ></Route>
        <Route path='/timeline' element={<Timeline></Timeline>}></Route>
        <Route path='/events' element={<Events></Events>}></Route>
        <Route path='/joincamhi' element={<Forms/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>

      </Routes>
      
      </Router>
      
    
    </div>
  );
}

export default App;
