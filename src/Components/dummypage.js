import React, { useRef, useEffect, useState } from "react";
import LogoofCamhi from '../img/camhi2.svg';
import Camhi from '../img/camhilogo.svg';
import { ReactTyped } from "react-typed";
import { Link } from 'react-router-dom';
import { motion } from "framer-motion"; // You'll need to install framer-motion

const Home = () => {
  // Refs for each section
  const aboutRef = useRef(null);
  const pathRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  
  // Monitor scroll position for animations
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Determine active section
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      
      if (aboutRef.current && pathRef.current) {
        if (scrollPosition < aboutRef.current.offsetTop) {
          setActiveSection('hero');
        } else if (scrollPosition < pathRef.current.offsetTop) {
          setActiveSection('about');
        } else {
          setActiveSection('path');
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Smooth scroll function
  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth'
    });
  };

  // Animation variants for framer-motion
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  // Path card data with more detailed descriptions
  const pathCards = [
    { 
      title: "Computer Vision", 
      icon: "👁️",
      description: "Develop algorithms that enable computers to interpret and understand visual information from the world.",
      gradient: "from-blue-600 to-purple-600"
    },
    { 
      title: "Machine Learning", 
      icon: "🧠",
      description: "Create systems that learn patterns from data to make intelligent decisions without explicit programming.",
      gradient: "from-green-500 to-teal-500"
    },
    { 
      title: "Medical Imaging", 
      icon: "🏥",
      description: "Apply AI to medical images for improved diagnostics, disease detection, and treatment planning.",
      gradient: "from-red-500 to-pink-500"
    },
    { 
      title: "Embedded Systems", 
      icon: "🔌",
      description: "Design specialized computer systems built into hardware with real-time computing constraints.",
      gradient: "from-yellow-500 to-orange-500"
    },
    { 
      title: "Robotics", 
      icon: "🤖",
      description: "Build autonomous machines capable of sensing, processing, and interacting with their environment.",
      gradient: "from-indigo-500 to-blue-500"
    },
    { 
      title: "Signal Processing", 
      icon: "📡",
      description: "Analyze and manipulate signals representing real-world physical quantities in various domains.",
      gradient: "from-purple-500 to-violet-500"
    },
    { 
      title: "Radio Frequency", 
      icon: "📻",
      description: "Work with electromagnetic wave propagation and wireless communication technologies.",
      gradient: "from-cyan-500 to-blue-500"
    },
    { 
      title: "Edge AI", 
      icon: "💻",
      description: "Deploy AI algorithms directly on devices at the edge of networks, enabling local processing.",
      gradient: "from-emerald-500 to-green-500"
    },
    { 
      title: "Quantum Computing", 
      icon: "⚛️",
      description: "Explore the frontier of quantum electronic systems and quantum machine learning algorithms.",
      gradient: "from-violet-500 to-purple-500"
    },
    { 
      title: "Human-Computer Interaction", 
      icon: "🖱️",
      description: "Design intuitive interfaces and interaction models between humans and computational systems.",
      gradient: "from-rose-500 to-red-500"
    },
  ];
  
  return (
    <div className="font-poppins w-screen overflow-x-hidden">
      {/* Fixed Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/80 backdrop-blur-md py-2' : 'bg-transparent py-4'}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img src={LogoofCamhi} className="h-10 w-10 rounded-md" alt="CAMHI" />
            <span className={`font-bold text-lg text-white transition-opacity duration-300 ${isScrolled ? 'opacity-100' : 'opacity-0'}`}>CAMHI</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-white text-sm">
            <button onClick={() => scrollToSection({ current: document.body })} className={`transition-all hover:text-blue-400 ${activeSection === 'hero' ? 'text-blue-400' : ''}`}>Home</button>
            <button onClick={() => scrollToSection(aboutRef)} className={`transition-all hover:text-blue-400 ${activeSection === 'about' ? 'text-blue-400' : ''}`}>About</button>
            <button onClick={() => scrollToSection(pathRef)} className={`transition-all hover:text-blue-400 ${activeSection === 'path' ? 'text-blue-400' : ''}`}>Paths</button>
            <Link to="/joincamhi" className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-full text-white transition-all">Join CAMHI</Link>
          </div>
          
          <button className="md:hidden text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Hero Section with Particle Effect */}
      <section className="relative min-h-screen w-full flex justify-center items-center overflow-hidden">
        {/* Dynamic background */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/30 via-black/50 to-black/90 z-0"></div>
        
        {/* Animated particles background */}
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 20 }).map((_, index) => (
            <div 
              key={index}
              className="absolute rounded-full bg-blue-500/30 blur-xl animate-float"
              style={{
                width: `${Math.random() * 200 + 50}px`,
                height: `${Math.random() * 200 + 50}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDuration: `${Math.random() * 10 + 20}s`,
                animationDelay: `${Math.random() * 10}s`,
              }}
            ></div>
          ))}
        </div>
        
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="absolute z-10 flex flex-col items-center justify-center w-full px-4"
        >
          <motion.div variants={fadeInUp} className="flex justify-center w-full">
            <img 
              src={LogoofCamhi} 
              className="w-[180px] md:w-[250px] lg:w-[300px] rounded-[10%] opacity-90 filter drop-shadow-[0px_0px_30px_#058ee3] animate-pulse-slow" 
              alt="CAMHI Logo" 
            />
          </motion.div>
          
          <motion.div variants={fadeInUp} className="flex justify-center w-full mt-4">
            <h1 className="text-blue-900 text-center text-sm sm:text-base md:text-lg lg:text-5xl">
              <span className="text-white animate-glow">C</span>omputer 
              <span className="text-white animate-glow"> A</span>ided 
              <span className="text-white animate-glow"> M</span>achine 
              <span className="text-white animate-glow"> H</span>uman 
              <span className="text-white animate-glow"> I</span>nteraction
            </h1>
          </motion.div>
          
          <motion.div variants={fadeInUp} className="flex justify-center w-full mt-6">
            <div className="scale-[1.2] sm:scale-[1.4] md:scale-[1.6] lg:scale-[1.75] font-normal">
              <ReactTyped
                strings={[
                  "We can Gravitate",
                  "We can Innovate",
                  "We can Execute",
                  "We can Elevate",
                ]}
                typeSpeed={60}
                backSpeed={60}
                loop
                className="text-[16px] sm:text-[18px] md:text-[20px] text-[#058ee3] font-semibold"
              />
            </div>
          </motion.div>
          
          <motion.div 
            variants={fadeInUp}
            className="flex justify-center w-full mt-8"
          >
            <button 
              onClick={() => scrollToSection(aboutRef)} 
              className="group relative bg-blue-600/80 text-white py-3 px-8 rounded-full overflow-hidden transition-all duration-300 hover:bg-blue-700 hover:scale-105"
            >
              <span className="relative z-10 flex items-center gap-2">
                <span>Explore CAMHI</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -translate-x-full group-hover:translate-x-0"></span>
            </button>
          </motion.div>
          
          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
          >
            <span className="text-white/80 text-sm mb-2">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center p-1">
              <div className="w-1.5 h-1.5 bg-white rounded-full animate-scroll-down"></div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* About Section with Parallax */}
      <section 
        ref={aboutRef} 
        id="about" 
        className="relative py-20 md:py-28 bg-gray-900 w-full overflow-hidden"
      >
        {/* Decorative elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(5,142,227,0.1),transparent_50%)]"></div>
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="container mx-auto px-4 max-w-6xl relative z-10"
        >
          <motion.div 
            variants={fadeInUp}
            className="mb-12 text-center"
          >
            <h2 className="text-sm font-semibold tracking-widest text-blue-500 uppercase">Discover</h2>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-2">Why CAMHI?</h1>
            <div className="w-16 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
          </motion.div>
          
          <div className="flex flex-col lg:flex-row-reverse items-center gap-10 py-8">
            <motion.div 
              variants={fadeInUp}
              className="w-full lg:w-1/2 flex justify-center"
            >
              <div className="relative">
                <div className="absolute inset-0 -rotate-6 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-2xl blur-xl opacity-30 transform-gpu"></div>
                <img 
                  src={Camhi} 
                  className="relative mx-auto max-w-full h-auto w-4/5 md:w-3/4 lg:w-full rounded-xl transform transition-transform duration-700 hover:scale-105 hover:rotate-1" 
                  alt="CAMHI" 
                />
              </div>
            </motion.div>
            
            <motion.div 
              variants={fadeInUp}
              className="w-full lg:w-1/2 mt-6 lg:mt-0"
            >
              <div className="space-y-6">
                <div className="relative">
                  <div className="h-12 w-12 rounded-lg bg-gradient-to-tr from-blue-500 to-blue-700 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                </div>
                
                <p className="text-lg text-gray-300 leading-relaxed">
                  The CAMHI Club fosters innovation in technology through collaborative learning and hands-on projects. We focus on bridging the gap between theoretical knowledge and practical applications in cutting-edge fields like AI, machine learning, computer vision, and embedded systems.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { title: "Skill Development", desc: "Workshops and practical projects" },
                    { title: "Innovation Hub", desc: "Collaborate on groundbreaking ideas" },
                    { title: "Competition Prep", desc: "Train for tech competitions" },
                    { title: "Industry Network", desc: "Connect with professionals" }
                  ].map((item, idx) => (
                    <div key={idx} className="bg-blue-900/20 border border-blue-800/30 rounded-lg p-4">
                      <h3 className="text-white font-medium text-lg">{item.title}</h3>
                      <p className="text-gray-400 text-sm mt-1">{item.desc}</p>
                    </div>
                  ))}
                </div>
                
                <div className="flex flex-wrap gap-4 mt-4">
                  <Link to="/joincamhi" className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-3 px-6 rounded-lg font-medium transition-all hover:shadow-lg hover:shadow-blue-500/20 hover:-translate-y-1">
                    Join CAMHI
                  </Link>
                  <Link to="/restrospective" className="bg-gray-800/60 border border-gray-700 text-gray-200 py-3 px-6 rounded-lg font-medium transition-all hover:bg-gray-700/80">
                    Our Roadmap
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            variants={fadeInUp}
            className="flex justify-center mt-16"
          >
            <button
              onClick={() => scrollToSection(pathRef)}
              className="flex items-center gap-2 text-white bg-transparent border border-blue-500/50 px-6 py-3 rounded-full transition-all hover:bg-blue-500/10"
            >
              <span>Explore Our Paths</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* Path Section with Interactive Cards */}
      <section 
        ref={pathRef} 
        className="relative py-20 bg-black w-full min-h-screen flex flex-col justify-center overflow-hidden"
      >
        {/* Decorative grid background */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMTI3M2YiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRoLTJ2LTRoMnY0em0wLTZoLTJ2LTRoMnY0em0wLTZoLTJ2LTRoMnY0em0wLTZoLTJWNmgydjR6bTAgMjRoLTJ2LTRoMnY0em0wIDZoLTJ2LTRoMnY0em0wIDZoLTJ2LTRoMnY0em0wIDZoLTJ2LTRoMnY0em02LTQ4aC00djJoNHYtMnptLTYgMGgtNHYyaDR2LTJ6bS02IDBoLTR2Mmg0di0yem0tNiAwaC00djJoNHYtMnptLTYgMGgtNHYyaDR2LTJ6bS02IDBoLTR2Mmg0di0yem0zNiA2aC00djJoNHYtMnptLTYgMGgtNHYyaDR2LTJ6bS02IDBoLTR2Mmg0di0yem0tNiAwaC00djJoNHYtMnptLTYgMGgtNHYyaDR2LTJ6bS02IDBoLTR2Mmg0di0yem0zNiA2aC00djJoNHYtMnptLTYgMGgtNHYyaDR2LTJ6bS02IDBoLTR2Mmg0di0yem0tNiAwaC00djJoNHYtMnptLTYgMGgtNHYyaDR2LTJ6bS02IDBoLTR2Mmg0di0yem0zNiA2aC00djJoNHYtMnptLTYgMGgtNHYyaDR2LTJ6bS02IDBoLTR2Mmg0di0yem0tNiAwaC00djJoNHYtMnptLTYgMGgtNHYyaDR2LTJ6bS02IDBoLTR2Mmg0di0yem0zNiA2aC00djJoNHYtMnptLTYgMGgtNHYyaDR2LTJ6bS02IDBoLTR2Mmg0di0yem0tNiAwaC00djJoNHYtMnptLTYgMGgtNHYyaDR2LTJ6bS02IDBoLTR2Mmg0di0yem0zNiA2aC00djJoNHYtMnptLTYgMGgtNHYyaDR2LTJ6bS02IDBoLTR2Mmg0di0yem0tNiAwaC00djJoNHYtMnptLTYgMGgtNHYyaDR2LTJ6bS02IDBoLTR2Mmg0di0yem0zNiA2aC00djJoNHYtMnptLTYgMGgtNHYyaDR2LTJ6bS02IDBoLTR2Mmg0di0yem0tNiAwaC00djJoNHYtMnptLTYgMGgtNHYyaDR2LTJ6bS02IDBoLTR2Mmg0di0yem0zNiA2aC00djJoNHYtMnptLTYgMGgtNHYyaDR2LTJ6bS02IDBoLTR2Mmg0di0yem0tNiAwaC00djJoNHYtMnptLTYgMGgtNHYyaDR2LTJ6bS02IDBoLTR2Mmg0di0yeiIvPjwvZz48L2c+PC9zdmc+')]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black/90"></div>
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className="container mx-auto text-center px-4 max-w-6xl relative z-10"
        >
          <motion.div variants={fadeInUp} className="mb-12">
            <h2 className="text-sm font-semibold tracking-widest text-blue-500 uppercase">Specializations</h2>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-2">Our Technology Paths</h1>
            <div className="w-16 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
          </motion.div>
          
          <motion.div variants={fadeInUp} className="mb-16">
            <div className="h-20 sm:h-24 md:h-28 flex items-center justify-center">
              <ReactTyped
                strings={[
                  "<span class='text-white'>CAMHI is your gateway to </span><span class='text-blue-400'>Computer Vision</span>",
                  "<span class='text-white'>CAMHI is your gateway to </span><span class='text-blue-400'>Medical Imaging</span>",
                  "<span class='text-white'>CAMHI is your gateway to </span><span class='text-blue-400'>Edge AI Systems</span>",
                  "<span class='text-white'>CAMHI is your gateway to </span><span class='text-blue-400'>Quantum Computing</span>",
                  "<span class='text-white'>CAMHI is your gateway to </span><span class='text-blue-400'>Signal Processing</span>",
                  "<span class='text-white'>CAMHI is your gateway to </span><span class='text-blue-400'>Machine Learning</span>",
                  "<span class='text-white'>CAMHI is your gateway to </span><span class='text-blue-400'>Embedded Systems</span>",
                  "<span class='text-white'>CAMHI is your gateway to </span><span class='text-blue-400'>Robotics</span>",
                ]}
                typeSpeed={40}
                backSpeed={50}
                loop
                className="text-2xl sm:text-3xl md:text-4xl font-semibold"
                html={true}
              />
            </div>
          </motion.div>
          
          <motion.div 
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {pathCards.map((path, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="relative bg-gray-900/40 backdrop-blur-sm rounded-xl overflow-hidden group"
              >
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${path.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                {/* Border glow effect */}
                <div className="absolute inset-0 rounded-xl border border-gray-700 group-hover:border-blue-500/50 transition-colors duration-500"></div>
                
                <div className="relative p-6 flex flex-col items-center">
                  <div className="text-5xl mb-4 transform transition-transform group-hover:scale-110 duration-500">{path.icon}</div>
                  <h3 className="text-xl text-white font-semibold mb-3 group-hover:text-blue-400 transition-colors">{path.title}</h3>
                  <p className="text-gray-400 text-sm text-center mb-6">{path.description}</p>
                  
                  <div className="mt-auto pt-4 w-full">
                    <button className="w-full py-2 px-4 border border-blue-500/30 text-blue-400 rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300 flex items-center justify-center gap-2 group-hover:border-blue-500">
                      <span>Explore Path</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div
            variants={fadeInUp}
            className="mt-16"
          >
            <Link 
              to="/programs" 
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-800 text-white py-3 px-8 rounded-full font-medium transition-all hover:shadow-lg hover:shadow-blue-500/20 hover:-translate-y-1"
            >
              <span>View All Programs</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Footer with animated elements */}
      <footer className="relative bg-gray-900 text-white py-12 w-full overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(5,142,227,0.1),transparent_50%)]"></div>
        
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <img src={LogoofCamhi} className="h-12 w-12 rounded-md" alt="CAMHI" />
                <h3 className="text-xl font-bold">CAMHI</h3>
              </div>
              <p className="text-gray-400">Computer Aided Machine Human Interaction</p>
              <p className="text-sm text-gray-500">Empowering technological innovation through collaborative learning and cutting-edge research.</p>
              <div className="flex space-x-4 pt-2">
                {['facebook', 'twitter', 'instagram', 'linkedin', 'github'].map((platform) => (
                  <a key={platform} href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                    <span className="sr-only">{platform}</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {[
                  { name: 'About Us', link: '#' },
                  { name: 'Programs', link: '#' },
                  { name: 'Events', link: '#' },
                  { name: 'Resources', link: '#' },
                  { name: 'Join CAMHI', link: '/joincamhi' },
                ].map((item, index) => (
                  <li key={index}>
                    <Link 
                      to={item.link} 
                      className="text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-2"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-gray-400">University Campus, Innovation Hub, Tech City</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-gray-400">info@camhi.org</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-gray-400">+1 (555) 123-4567</span>
                </li>
              </ul>
              
              <div className="mt-6">
                <h4 className="text-sm font-semibold mb-2">Subscribe to our newsletter</h4>
                <div className="flex">
                  <input 
                    type="email" 
                    placeholder="Your email address" 
                    className="bg-gray-800 border border-gray-700 text-white px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full text-sm"
                  />
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r-lg transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-10 pt-6 text-center">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} CAMHI | Computer Aided Machine Human Interaction | All rights reserved
            </p>
          </div>
        </div>
        
        {/* Back to top button */}
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors z-50 group"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform group-hover:-translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      </footer>
      
      {/* Add the required CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-20px) translateX(10px); }
          100% { transform: translateY(0px) translateX(0px); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.8; }
          50% { opacity: 1; }
        }
        
        @keyframes scroll-down {
          0% { transform: translateY(0); opacity: 0; }
          30% { opacity: 1; }
          60% { opacity: 1; }
          100% { transform: translateY(6px); opacity: 0; }
        }
        
        .animate-float {
          animation: float ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
        
        .animate-scroll-down {
          animation: scroll-down 1.5s ease infinite;
        }
      `}</style>
    </div>
  );
};

export default Home;