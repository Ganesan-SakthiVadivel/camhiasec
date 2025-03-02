import React, { useRef, useEffect, useState } from "react";
import LogoofCamhi from '../img/camhi2.svg';
import Camhi from '../img/camhilogo.svg';
import { ReactTyped } from "react-typed";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
  // Refs for each section
  const aboutRef = useRef(null);
  const pathRef = useRef(null);
  const benefitsRef = useRef(null);
  const domainsRef = useRef(null);
  
  // Scroll progress for parallax effects
  const [scrollY, setScrollY] = useState(0);
  
  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  // Smooth scroll function
  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth'
    });
  };

  // Domain descriptions - expanded with clear explanations
  const domains = [
    {
      title: "Computer Vision",
      icon: "👁️",
      description: "Develop algorithms that enable computers to interpret and understand visual information from the world, including object detection, image recognition, and scene understanding."
    },
    {
      title: "Machine Learning",
      icon: "🧠",
      description: "Create intelligent systems that can learn patterns from data and make predictions or decisions without explicit programming, including supervised and unsupervised learning techniques."
    },
    {
      title: "Medical Imaging",
      icon: "🏥",
      description: "Apply AI and image processing technologies to medical diagnostics, creating tools for better interpretation of X-rays, MRIs, CT scans, and other medical image formats."
    },
    {
      title: "Embedded Systems",
      icon: "🔌",
      description: "Design specialized computing systems built for dedicated functions within larger mechanical or electrical systems, with a focus on real-time computing constraints."
    },
    {
      title: "Robotics",
      icon: "🤖",
      description: "Build and program mechanical devices that can autonomously or semi-autonomously perform tasks, combining electronics, computer science, and mechanical engineering."
    },
    {
      title: "Signal Processing",
      icon: "📡",
      description: "Analyze and manipulate signals such as sound, images, and biological measurements, creating algorithms for enhancement, compression, and feature extraction."
    },
    {
      title: "Radio Frequency",
      icon: "📻",
      description: "Work with electromagnetic wave technologies used in communications, from circuit design to antenna systems, covering wireless technologies and RF applications."
    },
    {
      title: "Edge AI-Vision Systems",
      icon: "📱",
      description: "Develop AI vision applications that run directly on edge devices like cameras and mobile phones, enabling real-time processing without cloud dependencies."
    },
    {
      title: "Quantum Electronics",
      icon: "⚛️",
      description: "Explore the intersection of quantum mechanics and electronics, working with quantum computing concepts and their applications in next-generation computing."
    },
    {
      title: "Human-Computer Interaction",
      icon: "🖱️",
      description: "Design and optimize interfaces between humans and machines, focusing on creating intuitive, accessible, and efficient ways for people to interact with technology."
    },
  ];

  // Club benefits
  const benefits = [
    {
      title: "Technical Workshops",
      description: "Regular hands-on sessions led by industry experts and senior members covering cutting-edge technologies",
      icon: "💻"
    },
    {
      title: "Project Mentorship",
      description: "One-on-one guidance from experienced mentors to help you develop real-world technical solutions",
      icon: "🔍"
    },
    {
      title: "Industry Connections",
      description: "Networking opportunities with leading tech companies through guest lectures and company visits",
      icon: "🤝"
    },
    {
      title: "Research Opportunities",
      description: "Collaborate on academic research projects with professors and publish your findings",
      icon: "📚"
    },
    {
      title: "Hackathons & Competitions",
      description: "Regular internal contests and support for participating in national and international competitions",
      icon: "🏆"
    },
    {
      title: "Equipment Access",
      description: "Use of specialized hardware, development kits, and computing resources exclusively for members",
      icon: "🛠️"
    }
  ];
  
  return (
    <div className="font-poppins w-screen overflow-x-hidden bg-black text-white">
      {/* Hero Section with Parallax Effect */}
      <section className="relative min-h-screen w-full flex justify-center items-center overflow-hidden">
        {/* Dynamic particles background */}
        <div className="absolute inset-0 bg-black">
          {Array.from({ length: 50 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-blue-500 opacity-80"
              animate={{
                x: ["0%", `${Math.random() * 100}%`, "0%"],
                y: ["0%", `${Math.random() * 100}%`, "0%"],
              }}
              transition={{
                duration: 20 + Math.random() * 30,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${3 + Math.random() * 5}px`,
                height: `${3 + Math.random() * 5}px`,
              }}
            />
          ))}
        </div>
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/30 via-black/60 to-black/90"></div>
        
        {/* Parallax logo effect */}
        <motion.div 
          className="absolute z-10 flex flex-col items-center justify-center w-full px-4"
          style={{ y: scrollY * -0.3 }}
        >
          <div className="flex justify-center w-full">
            <motion.img 
              src={LogoofCamhi} 
              className="w-[200px] md:w-[280px] lg:w-[350px] rounded-[10%] opacity-90 filter drop-shadow-[0px_0px_30px_#058ee3]" 
              alt="CAMHI Logo"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            />
          </div>
          
          <motion.div 
            className="flex justify-center w-full mt-8"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <h1 className="text-blue-900 text-center text-sm sm:text-base md:text-lg lg:text-5xl font-bold tracking-wider">
              <span className="text-white animate-pulse">C</span>omputer 
              <span className="text-white animate-pulse"> A</span>ided 
              <span className="text-white animate-pulse"> M</span>achine 
              <span className="text-white animate-pulse"> H</span>uman 
              <span className="text-white animate-pulse"> I</span>nteraction
            </h1>
          </motion.div>
          
          <motion.div 
            className="flex justify-center w-full mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="scale-[1.2] sm:scale-[1.4] md:scale-[1.6] lg:scale-[1.8] font-normal">
              <ReactTyped
                strings={[
                  "We can Innovate",
                  "We can Create",
                  "We can Execute",
                  "We can Elevate",
                  "We can Transform",
                  "We can Revolutionize",
                ]}
                typeSpeed={60}
                backSpeed={60}
                loop
                className="text-[18px] sm:text-[20px] md:text-[24px] text-[#058ee3] font-semibold"
              />
            </div>
          </motion.div>
          
          <motion.div 
            className="flex justify-center w-full mt-12"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <button 
              onClick={() => scrollToSection(aboutRef)} 
              className="text-white bg-[#058ee3] py-3 px-8 uppercase tracking-wider rounded-full opacity-90 transition-all hover:scale-[1.05] hover:bg-white hover:text-black text-sm md:text-base flex items-center gap-2 shadow-lg shadow-blue-500/50"
            >
              Discover CAMHI
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </button>
          </motion.div>
        </motion.div>
        
        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent"></div>
      </section>

      {/* About Section with Glass Morphism */}
      <section ref={aboutRef} id="about" className="py-16 md:py-24 relative w-full">
        <div className="absolute inset-0 bg-gradient-radial from-blue-900/20 to-black opacity-70"></div>
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <motion.div 
            className="flex flex-col lg:flex-row items-center gap-8 py-8 rounded-3xl border border-white/10 shadow-2xl p-6 sm:p-8 md:p-10 lg:p-12 mb-10 backdrop-blur-sm bg-gradient-to-br from-blue-950/40 to-black/40"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="w-full lg:w-1/2 flex justify-center">
              <img 
                src={Camhi} 
                className="mx-auto max-w-full h-auto w-4/5 drop-shadow-[0px_0px_25px_rgba(5,142,227,0.5)]" 
                alt="CAMHI" 
              />
            </div>
            <div className="w-full lg:w-1/2 mt-6 lg:mt-0">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-white relative">
                The CAMHI Vision
                <span className="absolute -bottom-2 left-0 w-24 h-1 bg-blue-500"></span>
              </h1>
              <p className="text-base sm:text-lg text-gray-200 mb-6 leading-relaxed">
                CAMHI is more than just a technical club — it's an ecosystem of innovation and collaboration where tomorrow's 
                tech leaders are born. We bring together passionate minds from diverse backgrounds to explore the frontiers 
                of technology, pushing boundaries and creating solutions that bridge the gap between machines and human experience.
              </p>
              <p className="text-base sm:text-lg text-gray-200 mb-8 leading-relaxed">
                Our mission is to foster a community where cutting-edge technical knowledge meets practical implementation, 
                empowering members to transform ideas into reality through interdisciplinary collaboration and hands-on learning.
              </p>
              <div className="flex flex-wrap gap-4">
                <button type="button" className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-3 px-6 rounded-full font-medium transition-all hover:shadow-lg hover:shadow-blue-500/50 hover:scale-105 group">
                  <Link to="/joincamhi" className="text-white flex items-center gap-2 no-underline">
                    Join CAMHI
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                </button>
                <button type="button" className="border border-blue-400/30 text-gray-200 py-3 px-6 rounded-full font-medium transition-all hover:bg-white/10 hover:border-blue-400">
                  <Link to="/timeline" className="text-white no-underline">Our Journey</Link>
                </button>
              </div>
            </div>
          </motion.div>
          <div className="flex justify-center mt-8">
            <button
              onClick={() => scrollToSection(benefitsRef)}
              className="text-white bg-blue-600/80 hover:bg-blue-600 px-6 py-3 rounded-full text-sm transition-all flex items-center gap-2 hover:shadow-lg hover:shadow-blue-500/30"
            >
              <span>Discover Benefits</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Club Benefits Section */}
      <section ref={benefitsRef} className="py-16 md:py-24 relative w-full min-h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/20 to-black"></div>
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">What CAMHI Offers</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Join CAMHI to access a comprehensive ecosystem of resources, mentorship, and opportunities designed to accelerate your technical growth.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div 
                key={index} 
                className="bg-gradient-to-br from-blue-900/20 to-black/60 rounded-xl p-8 border border-blue-500/10 hover:border-blue-500/30 transition-all group backdrop-blur-sm"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl mb-6 bg-blue-800/20 inline-block p-4 rounded-full border border-blue-600/20 group-hover:scale-110 transition-transform">{benefit.icon}</div>
                <h3 className="text-xl text-white mb-3 font-bold">{benefit.title}</h3>
                <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="flex justify-center mt-16">
            <button
              onClick={() => scrollToSection(domainsRef)}
              className="text-white bg-blue-600/80 hover:bg-blue-600 px-6 py-3 rounded-full text-sm transition-all flex items-center gap-2 hover:shadow-lg hover:shadow-blue-500/30"
            >
              <span>Explore Our Domains</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Technical Domains Section */}
      <section ref={domainsRef} className="py-16 md:py-24 relative w-full min-h-screen">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/10 to-black"></div>
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">Technical Domains</h2>
            <div className="h-24 sm:h-28 md:h-32 lg:h-36 flex justify-center items-center mx-auto max-w-4xl">
              <ReactTyped
                strings={[
                  "<span class='text-white'>CAMHI is the pathway to mastering </span><span class='text-blue-400'>Computer Vision</span>",
                  "<span class='text-white'>CAMHI is the pathway to mastering </span><span class='text-blue-400'>Medical Imaging</span>",
                  "<span class='text-white'>CAMHI is the pathway to mastering </span><span class='text-blue-400'>Edge AI-Vision Systems</span>",
                  "<span class='text-white'>CAMHI is the pathway to mastering </span><span class='text-blue-400'>Quantum Electronics</span>",
                  "<span class='text-white'>CAMHI is the pathway to mastering </span><span class='text-blue-400'>Signal Processing</span>",
                  "<span class='text-white'>CAMHI is the pathway to mastering </span><span class='text-blue-400'>Machine Learning</span>",
                  "<span class='text-white'>CAMHI is the pathway to mastering </span><span class='text-blue-400'>Embedded Systems</span>",
                  "<span class='text-white'>CAMHI is the pathway to mastering </span><span class='text-blue-400'>Robotics</span>",
                ]}
                typeSpeed={40}
                backSpeed={50}
                loop
                className="text-3xl sm:text-3xl md:text-4xl lg:text-6xl"
                html={true}
              />
            </div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {domains.map((domain, index) => (
              <motion.div 
                key={index} 
                className="bg-gradient-to-br from-blue-900/10 to-black/80 rounded-xl p-8 border border-white/5 hover:border-blue-400/30 transition-all group backdrop-blur-sm relative overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Background decoration */}
                <div className="absolute -right-10 -top-10 w-40 h-40 bg-blue-500/5 rounded-full blur-xl group-hover:bg-blue-500/10 transition-colors"></div>
                
                <div className="text-4xl mb-6 bg-gradient-to-br from-blue-800/20 to-black p-4 rounded-full border border-blue-600/10 inline-block relative z-10 group-hover:scale-110 transition-transform">{domain.icon}</div>
                <h3 className="text-xl text-white mb-4 font-bold relative z-10">{domain.title}</h3>
                <p className="text-gray-300 leading-relaxed relative z-10">{domain.description}</p>
                <div className="mt-6 relative z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="text-blue-400 text-sm border border-blue-400/50 px-4 py-2 rounded-full hover:bg-blue-400 hover:text-white transition-colors flex items-center gap-2">
                    <span>Learn More</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 md:py-24 relative w-full">
        <div className="absolute inset-0 bg-gradient-to-b from-black to-blue-950/30"></div>
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <motion.div 
            className="rounded-3xl overflow-hidden relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Decorative background */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 to-black/60"></div>
            <div className="absolute inset-0 opacity-20">
              {Array.from({ length: 20 }).map((_, i) => (
                <div 
                  key={i}
                  className="absolute rounded-full bg-blue-500"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    width: `${5 + Math.random() * 10}px`,
                    height: `${5 + Math.random() * 10}px`,
                    opacity: 0.3 + Math.random() * 0.7,
                  }}
                ></div>
              ))}
            </div>
            
            <div className="relative z-10 p-12 md:p-16 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Shape the Future of Technology?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
                Join CAMHI today and become part of a vibrant community pushing the boundaries of what's possible through technology and innovation.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <button className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-3 px-8 rounded-full font-medium transition-all hover:shadow-lg hover:shadow-blue-500/50 hover:scale-105 text-lg">
                  <Link to="/joincamhi" className="text-white">Apply Now</Link>
                </button>
                <button className="bg-white/10 backdrop-blur-sm border border-white/20 text-white py-3 px-8 rounded-full font-medium transition-all hover:bg-white/20 text-lg">
                  <Link to="/contactus" className="text-white">Contact Us</Link>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer with animated elements */}
      <footer className="bg-gradient-to-t from-black to-blue-950/10 text-white py-12 md:py-16 w-full relative overflow-hidden">
        {/* Animated dots */}
        <div className="absolute inset-0">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-blue-500 opacity-20"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 2 + Math.random() * 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 2,
              }}
              style={{
                left: `${Math.random() * 100}%`,
                bottom: `${Math.random() * 20}%`,
                width: `${2 + Math.random() * 3}px`,
                height: `${2 + Math.random() * 3}px`,
              }}
            />
          ))}
        </div>
        
        <div className="container mx-auto text-center px-4 max-w-7xl relative z-10">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-normal capitalize leading-loose animate-pulse">CAMHI</h3>
            <p className="max-w-lg mx-auto my-3 text-lg sm:text-xl leading-7">Computer Aided Machine Human Interaction</p>
            <div className="flex justify-center gap-8 my-6">
             
              
              <a href="https://www.linkedin.com/company/camhi-asec/" className="text-gray-400 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/company/camhi-asec/" className="text-gray-400 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/company/camhi-asec/" className="text-gray-400 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                </svg>
              </a>
            </div>
          </motion.div>
          
          <div className="border-t border-white/10 mt-6 pt-6">
            <p className="text-sm text-gray-400">
              Copyright &copy; 2025 <span><a href="#" className="uppercase text-gray-300 hover:text-white transition-colors">CAMHI</a></span> | All Rights Reserved
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;