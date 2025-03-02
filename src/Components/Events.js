import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
// Import images
import flyer from '../img/camhiflyer.png'
import flyer1 from '../img/camhieventflyer1.jpg';
import flyer2 from '../img/camhieventflyer2.jpg';
import flyer3 from '../img/camhieventflyer3.jpg';
import flyer4 from '../img/camhieventflyer4.jpg';
import flyer5 from '../img/camhieventflyer5.jpg';
import flyer6 from '../img/camhieventflyer6.jpg';
import flyer7 from '../img/camhieventflyer7.jpg';
import flyer8 from '../img/camhieventflyer8.jpg';
import flyer9 from '../img/camhieventflyer9.jpg';
import flyer10 from '../img/camhieventflyer10.jpg';
import flyer11 from '../img/camhieventflyer11.jpg';
import flyer12 from '../img/camhieventflyer12.jpg';
import flyer13 from '../img/camhieventflyer13.jpg';
import flyer14 from '../img/camhieventflyer14.jpg';
import flyer15 from '../img/camhieventflyer15.jpg';
import flyer16 from '../img/camhieventflyer16.jpg';
import flyer17 from '../img/camhieventflyer17.jpg';
import flyer18 from '../img/camhieventflyer18.jpg';
import flyer19 from '../img/camhieventflyer19.jpg';
import flyer20 from '../img/2025fly (1).jpg';
import flyer21 from '../img/2025fly (2).jpg';
import flyer22 from '../img/2025fly (3).jpg';
import flyer23 from '../img/2025fly (4).jpg';
import flyer24 from '../img/2025fly (5).jpg';
import flyer25 from '../img/2025fly (6).jpg';
import flyer26 from '../img/2025fly (7).jpg';



const teamEvents = [
  { name: 'Inaguration of CAMHI Club', imgevent: flyer, date: 'Feb 2023', alignment: 'portrait' },
  { name: 'Ingenium3.0', imgevent: flyer1, date: 'March 2024', alignment: 'portrait' },
  { name: 'Innovate1.0 - an Ideathon', imgevent: flyer2, date: 'March 2024', alignment: 'portrait' },
  { name: 'Worshop on Multi sensor fusion in ADAS', imgevent: flyer3, date: 'March 2024', alignment: 'portrait' },
  { name: 'Ninja Circuit CHallenge(Non-techincal)', imgevent: flyer4, date: 'March 2024', alignment: 'portrait' },
  { name: 'Circuit Forge', imgevent: flyer5, date: 'March 2024', alignment: 'portrait' },
  { name: 'Line Follower', imgevent: flyer6, date: 'March 2024', alignment: 'portrait' },
  { name: 'Handson and Workshop on ROS in Edge AI Robot', imgevent: flyer7, date: 'March 2024', alignment: 'portrait' },
  { name: 'Robo Soccer', imgevent: flyer8, date: 'March 2024', alignment: 'portrait' },
  { name: 'Harry Potter Quidditch-Inner Spectra Game(Non-technical)', imgevent: flyer9, date: 'March 2024', alignment: 'portrait' },
  { name: 'Proto-tronics and Epoch Runners', imgevent: flyer10, date: 'March 2024 ', alignment: 'portrait' },
  { name: 'Research Showcase', imgevent: flyer11, date: 'October 2023', alignment: 'portrait' },
  { name: 'Research Showcase by Galore System', imgevent: flyer12, date: 'October 2023', alignment: 'portrait' },
  { name: 'Research Showcase by Movella', imgevent: flyer13, date: 'October 2023', alignment: 'portrait' },
  { name: 'Unraveling STM32: A Series of Deep Dives', imgevent: flyer14, date: 'September 2023', alignment: 'portrait' },
  { name: 'Freshman Orientation Day', imgevent: flyer15, date: 'Augest 2024', alignment: 'portrait' },
  { name: 'Project EXPO23', imgevent: flyer16, date: 'Oct 2023', alignment: 'portrait' },
  { name: 'Learning Path on AI in Healthcare', imgevent: flyer17, date: 'March 2024', alignment: 'landscape' },
  { name: 'Learning Path on Computer Vision', imgevent: flyer18, date: 'Feburary 2024', alignment: 'landscape' },
  { name: 'E-waste Recycling Drive', imgevent: flyer19, date: 'October 2023', alignment: 'landscape' },

  { name: 'INGENIUM 4.0', imgevent: flyer23, date: 'January 2025', alignment: 'portrait' },
  { name: 'MAZE SOLVER', imgevent: flyer22, date: 'January 2025', alignment: 'portrait' },
  { name: 'TECHNOPOLY ', imgevent: flyer21, date: 'January 2025',alignment: 'portrait' },
  { name: 'HUNGER GAMES', imgevent: flyer24, date: 'January 2025', alignment: 'portrait' },
  { name: 'FPGA WORKSHOP', imgevent: flyer25, date: 'January 2025', alignment: 'portrait' },
  { name: 'QR PURSUIT', imgevent: flyer20, date: 'January 2025', alignment: 'portrait' },
  { name: 'DIGITAL DESIGN COLLOSEUM', imgevent: flyer26, date: 'January 2025', alignment: 'portrait' },
  
];

const Events = () => {
  const [filter, setFilter] = useState('all');
  const [filteredEvents, setFilteredEvents] = useState(teamEvents);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Get unique dates for filter
  const uniqueDates = [...new Set(teamEvents.map(event => {
    // Extract year and month
    const dateParts = event.date.split(' ');
    return dateParts[dateParts.length - 1]; // Get the year
  }))].sort().reverse();

  useEffect(() => {
    if (filter === 'all') {
      setFilteredEvents(teamEvents);
    } else {
      setFilteredEvents(teamEvents.filter(event => event.date.includes(filter)));
    }
  }, [filter]);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="bg-gradient-to-b from-gray-900 via-blue-900 to-gray-900 min-h-screen w-full pt-24">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-blue-500 opacity-10 blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 rounded-full bg-purple-500 opacity-10 blur-xl"></div>
        <div className="absolute top-1/4 right-1/3 w-24 h-24 rounded-full bg-cyan-300 opacity-10 blur-xl"></div>
      </div>

      <div className="relative container mx-auto px-4 py-16">
        {/* Header with glow effect */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 mb-4 relative inline-block">
            CAMHI Events
          </h1>
          <div className="h-1 w-48 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-300 text-lg">2023 - Present</p>
        </div>

        {/* Filter section */}
        <div className="flex justify-center mb-12 overflow-x-auto pb-2">
          <div className="bg-gray-800/50 p-1 rounded-xl backdrop-blur-sm flex flex-wrap justify-center">
            <button 
              className={`px-6 py-2 m-1 rounded-lg text-sm font-medium transition-all duration-300 ${filter === 'all' ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg' : 'text-gray-300 hover:text-white'}`}
              onClick={() => setFilter('all')}
            >
              All Events
            </button>
            
            {uniqueDates.map((year) => (
              <button 
                key={year}
                className={`px-6 py-2 m-1 rounded-lg text-sm font-medium transition-all duration-300 ${filter === year ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg' : 'text-gray-300 hover:text-white'}`}
                onClick={() => setFilter(year)}
              >
                {year}
              </button>
            ))}
          </div>
        </div>

        {/* Events grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {filteredEvents.map((event, index) => (
            <motion.div 
              key={index}
              variants={item}
              className="relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => setSelectedEvent(event)}
            >
              <div className={`group h-full bg-gray-800/40 rounded-2xl backdrop-blur-md overflow-hidden transition-all duration-500 transform cursor-pointer ${hoveredIndex === index ? 'scale-105' : ''}`}>
                {/* Decorative elements */}
                <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-cyan-500/10 blur-xl"></div>
                <div className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-blue-500/10 blur-xl"></div>
                
                <div className="p-6 relative z-10 h-full flex flex-col">
                  {/* Image with custom frame effect */}
                  <div className={`relative mx-auto mb-4 ${event.alignment === 'portrait' ? 'w-40 h-56' : 'w-56 h-40'}`}>
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg opacity-80"></div>
                    <img 
                      src={event.imgevent} 
                      alt={event.name} 
                      className="absolute inset-1 object-cover rounded-lg z-10 filter drop-shadow-lg"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300 blur"></div>
                  </div>
                  
                  {/* Content */}
                  <div className="mt-2 text-center flex-1 flex flex-col">
                    <h3 className="font-bold text-white text-lg mb-1 line-clamp-2">{event.name}</h3>
                    <p className="text-cyan-400 font-medium italic">{event.date}</p>
                    
                    {/* View details button */}
                    <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="inline-block px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-white text-sm">
                        View Details
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Event Popup Modal */}
        {selectedEvent && (
          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-gray-900/90 rounded-2xl overflow-hidden max-w-4xl w-full max-h-[90vh] flex flex-col md:flex-row relative"
            >
              {/* Close button */}
              <button 
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 hover:text-white z-10"
                onClick={() => setSelectedEvent(null)}
              >
                <i className="fas fa-times"></i>
              </button>
              
              {/* Image section */}
              <div className={`md:w-1/2 p-6 flex items-center justify-center ${selectedEvent.alignment === 'portrait' ? 'aspect-[3/4]' : 'aspect-[4/3]'}`}>
                <div className="relative w-full h-full max-h-[70vh]">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-blue-600/20 rounded-lg"></div>
                  <img 
                    src={selectedEvent.imgevent} 
                    alt={selectedEvent.name} 
                    className="absolute inset-0 w-full h-full object-contain rounded-lg z-10"
                  />
                </div>
              </div>
              
              {/* Content section */}
              <div className="md:w-1/2 p-6 flex flex-col">
                <h2 className="text-2xl font-bold text-white mb-4">{selectedEvent.name}</h2>
                <div className="mb-6 flex items-center">
                  <div className="bg-cyan-500/20 rounded-full px-4 py-1 text-cyan-400">
                    <i className="far fa-calendar-alt mr-2"></i>
                    {selectedEvent.date}
                  </div>
                </div>
                
                <p className="text-gray-300 text-sm mb-6">
                  Explore this exciting CAMHI event! This event showcases our commitment to innovation and learning in the field of technology.
                </p>
                
                <div className="mt-auto">
                  <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg text-white font-medium hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300">
                    Register Interest
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}

        {/* No events found message */}
        {filteredEvents.length === 0 && (
          <div className="text-center p-12">
            <div className="text-3xl text-gray-400 mb-4">
              <i className="fas fa-calendar-times"></i>
            </div>
            <h3 className="text-xl text-white font-medium mb-2">No events found</h3>
            <p className="text-gray-400">Try changing your filter selection</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Events;