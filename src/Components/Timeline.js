import React, { useEffect, useRef } from 'react';
import Camhilogo from '../img/camhi-white.png';

const Timeline = () => {
  const timelineRef = useRef(null);
  
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.25
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeInUp', 'opacity-100');
          entry.target.classList.remove('opacity-0', 'translate-y-16');
        }
      });
    }, observerOptions);

    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach(item => {
      observer.observe(item);
    });

    return () => {
      timelineItems.forEach(item => {
        observer.unobserve(item);
      });
    };
  }, []);

  const events = [
    {
      title: "Inauguration",
      date: "Feb 2023",
      description: "Dr. Jeevakala officially inaugurated the CAMHI club, marking the beginning of a new chapter in innovation and research. Her presence and support set a strong foundation for the club's mission to advance human-computer interaction and signal processing technologies.",
      imgSrc: "../img/camhi-white.png",
      color: "from-blue-500 to-purple-600"
    },
    {
      title: "Hands on Arduino session",
      date: "Sept 2023",
      description: "The CAMHI club hosted a hands-on Arduino session for first-year students, led by experienced fourth-year mentors. This interactive workshop provided an excellent opportunity for newcomers to gain practical skills and knowledge in electronics and programming.",
      imgSrc: "../img/camhi-white.png",
      color: "from-green-500 to-teal-600"
    },
    {
      title: "Movella Xsens and Gallore systems - Research showcase",
      date: "Oct 2023",
      description: "CAMHI featured a research showcase in collaboration with Movella Xsens and Gallore Systems, highlighting motion detection sensor-integrated suits used in Avatar-like movies. The event demonstrated cutting-edge technology behind these suits, which capture and translate human movements into digital characters for immersive cinematic experiences.",
      imgSrc: "../img/camhi-white.png",
      color: "from-purple-500 to-indigo-600"
    },
    {
      title: "E-waste recycling drive",
      date: "Oct 2023",
      description: "The CAMHI club organized an E-waste recycling drive, which included a skit and an awareness session to educate participants on the importance of responsible e-waste disposal. To facilitate ongoing recycling efforts, an e-waste collection bin was also installed on campus.",
      imgSrc: "../img/camhi-white.png",
      color: "from-yellow-500 to-orange-600"
    },
    {
      title: "Learning Path sessions",
      date: "Nov 2023",
      description: "CAMHI hosted a series of Learning Path sessions, featuring expert-led discussions on emerging topics like AI technology in healthcare and an introduction to computer vision. These sessions provided valuable insights and knowledge to participants eager to explore these cutting-edge fields.",
      imgSrc: "../img/camhi-white.png",
      color: "from-red-500 to-pink-600"
    },
    {
      title: "Ingenium - 24 hr Hackathon",
      date: "Feb 2024",
      description: "CAMHI has successfully organized 'Ingenium,' a 24-hour hackathon, focusing on themes like 'Sustainability and Agriculture – Cultivating a Greener Future' and 'E-waste Management.' With a prize pool of over ₹30,000, the event attracted innovative minds to develop impactful solutions for pressing environmental challenges.",
      imgSrc: "../img/camhi-white.png",
      color: "from-blue-600 to-cyan-500"
    },
    {
      title: "Innovate - ideathon",
      date: "Feb 2024",
      description: "CAMHI hosted 'Innovate,' an on-the-spot theme ideathon that challenged teams to compete in generating creative and viable solutions. This dynamic competition encouraged participants to think on their feet and collaborate effectively to tackle real-world problems.",
      imgSrc: "../img/camhi-white.png",
      color: "from-emerald-500 to-lime-600"
    },
    {
      title: "Multi sensor fusion in ADAS (Workshop)",
      date: "Feb 2024",
      description: "Dr. Jeevakala conducted an insightful workshop on 'Multi-Sensor Fusion in Advanced Driver Assistance Systems (ADAS),' exploring the integration of various sensors to enhance vehicle safety and performance.",
      imgSrc: "../img/camhi-white.png",
      color: "from-violet-500 to-fuchsia-600"
    },
    {
      title: "ROS in Edge AI robot (Workshop)",
      date: "Feb 2024",
      description: "Mr. Kabilan, an NVIDIA ambassador, led a workshop on 'ROS in Edge AI Robots,' focusing on the integration of Robot Operating System (ROS) with edge AI technologies.",
      imgSrc: "../img/camhi-white.png",
      color: "from-cyan-500 to-blue-600"
    },
    {
      title: "Line Follower (The Ultimate Robo Race)",
      date: "Feb 2024",
      description: "The 'Line Follower - The Ultimate Robo Race' was held successfully, where participants showcased their line-following robots in an exciting and competitive event.",
      imgSrc: "../img/camhi-white.png",
      color: "from-amber-500 to-orange-600"
    },
    {
      title: "Robo soccer",
      date: "Feb 2024",
      description: "The 'Robo Soccer' event was a thrilling competition where teams pitted their soccer-playing robots against each other.",
      imgSrc: "../img/camhi-white.png",
      color: "from-indigo-500 to-blue-600"
    },
    {
      title: "CAMHI Orientation Program",
      date: "Sep 2024",
      description: "The CAMHI club kicked off the year with an orientation program to welcome new members. This event marked the beginning of their journey with CAMHI.",
      imgSrc: "../img/camhi-white.png",
      color: "from-pink-500 to-rose-600"
    },
    {
      title: "INGENIUM 4.0",
      date: "Jan 2025",
      description: "Ingenium 4.0 is a 24 hour hardware hackathon where contestants were given a problem statement and 24 hours along with the nescessary components to solve the problem statement. Refreshments and other facilities were also provided to the contestants. There were a total of four evealuation rounds and the team with the highest marks was deemed the winner",
      imgSrc: "../img/camhi-white.png",
      color: "from-blue-500 to-purple-600"
    },
    {
      title: "MAZE SOLVER",
      date: "Jan 2025",
      description: "Maze solver is an event where the contestants were given a predefined maze and the contestants had to solve the maze from one end to the other and the team with the lowest time taken added with penalities was deemed the winner",
      imgSrc: "../img/camhi-white.png",
      color: "from-yellow-500 to-orange-600"
    },
    
    {
      title: "TECHNOPOLY",
      date: "Jan 2025",
      description: "Technopoly is a board game like monopoly but with technical twists . Contestants had to earn money and invest in stocks and the team with the highest turnover by the end of a 2 hours round was deemed the winner.",
      imgSrc: "../img/camhi-white.png",
      color: "from-emerald-500 to-lime-600"
    },
    {
      title: "HUNGER GAMES",
      date: "Jan 2025",
      description: "Hunger Games consists of ten sub events and teams had a total of 10 people and the team to amass the highest amount of points by participating in all the sub events was deemed the winner",
      imgSrc: "../img/camhi-white.png",
      color: "from-pink-500 to-rose-600"
    },
    {
      title: "FPGA WORKSHOP",
      date: "Jan 2025",
      description: "This workshop involved Mr Akshayraj , honorable research fellow from NIT Trichy and he shared his knowledge on FPGAs to the participants .  The agenda included IP Catalog, block definitions etc which the participants found helpful.",
      imgSrc: "../img/camhi-white.png",
      color: "from-green-500 to-teal-600"
    },
    {
      title: "QR PURSUIT",
      date: "Jan 2025",
      description: "Ingenium 4.0 is a 24 hour hardware hackathon where contestants were given a problem statement and 24 hours along with the nescessary components to solve the problem statement. Refreshments and other facilities were also provided to the contestants. There were a total of four evealuation rounds and the team with the highest marks was deemed the winner",
      imgSrc: "../img/camhi-white.png",
      color: "from-pink-500 to-rose-600"
    },
    {
      title: "DIGITAL DESIGN COLLOSEUM",
      date: "Jan 2025",
      description: "This event consisted of  a problem statement and the contestants had to solve this digital electronics questions , but in order to get the components to solve this question the contestants had to take part in a quiz going on side by side and each component was awarded a certain amount of points the contestants had to pay by winning points in the quiz.",
      imgSrc: "../img/camhi-white.png",
      color: "from-purple-500 to-indigo-600"
    },
  ];

  return (
    <div className="bg-black/90 min-h-screen flex justify-center w-full py-16 flex-col items-center overflow-hidden pt-32">
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
          CAMHI Timeline
        </span>
      </h1>
      
      <div ref={timelineRef} className="relative w-full max-w-6xl px-4">
        {/* Center line with animated pulse effect */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-600 via-purple-600 to-pink-600 z-0">
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-b from-blue-400 via-purple-500 to-pink-500 animate-pulse"></div>
        </div>
        
        {/* Timeline items */}
        <div className="relative z-10">
          {events.map((event, index) => (
            <div 
              key={index} 
              className={`timeline-item opacity-0 translate-y-16 transition-all duration-700 flex items-center mb-16 ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              } relative`}
            >
              {/* Date circle */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-br from-white to-gray-400 flex items-center justify-center shadow-lg shadow-purple-500/30 z-10 border-2 border-purple-800">
                <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center">
                  <span className="text-xs font-bold text-white">{event.date.split(" ")[0]}</span>
                </div>
              </div>
              
              {/* Content side */}
              <div className={`w-5/12 ${index % 2 === 0 ? 'pr-12' : 'pl-12'}`}>
                <div className={`bg-gradient-to-br ${event.color} rounded-2xl p-px shadow-lg transform hover:scale-105 transition-transform duration-300`}>
                  <div className="bg-black bg-opacity-80 backdrop-blur-md rounded-2xl p-6 h-full">
                    <div className="flex items-center mb-3">
                      <img src={Camhilogo} alt="CAMHI" className="w-8 h-8 mr-3" />
                      <h3 className="text-xl font-semibold text-white">{event.title}</h3>
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed">{event.description}</p>
                    
                    {/* Interactive elements */}
                    <div className="mt-4 flex justify-between items-center">
                      <span className="text-xs font-semibold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                        {event.date}
                      </span>
                      <div className="flex space-x-2">
                        <span className="w-2 h-2 rounded-full bg-white animate-ping"></span>
                        <span className="w-2 h-2 rounded-full bg-white animate-ping" style={{ animationDelay: '0.3s' }}></span>
                        <span className="w-2 h-2 rounded-full bg-white animate-ping" style={{ animationDelay: '0.6s' }}></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Empty space for the other side */}
              <div className="w-5/12"></div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Bottom decorative element */}
      <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 mt-8 relative">
        <div className="absolute inset-1 rounded-full bg-black flex items-center justify-center">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 animate-ping opacity-75"></div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;