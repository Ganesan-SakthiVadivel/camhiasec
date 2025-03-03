import React, { useState } from 'react';
import { motion } from 'framer-motion';
// Import images
import lokesh from '../img/Camhi-member/lokeshkumar.jpg';
import thanya from '../img/Camhi-member/Thanya.jpg';
import samsitha from '../img/Camhi-member/samsitha.jpg';
import ganesan from '../img/Camhi-member/ganesan.jpg';
import jayadurga from '../img/Camhi-member/jayadurga.jpg';
import bhavaneesh from '../img/Camhi-member/bhavaneesh.jpg';
import sarvesh from '../img/Camhi-member/sarvesh.jpg';
import sriram from '../img/Camhi-member/srirams.jpg';
import arunaadhithiyan from '../img/Camhi-member/arunaadhithiyan.jpg';
import aadhithiyaan from '../img/Camhi-member/aadhithiyan.jpg';
import kavyasri from '../img/Camhi-member/kavyasri.jpg';
import ashwin from '../img/Camhi-member/Ashwinb.jpg';
import varshini from '../img/Camhi-member/varshini.jpg';
import Soundar from '../img/CAMHI-Alumini/soundar.jpg';
import jousha from '../img/CAMHI-Alumini/joshua.jpg';
import yathish from '../img/CAMHI-Alumini/yathish.jpg';
import vishwa from '../img/CAMHI-Alumini/vishwa.jpg';
import nithish from '../img/CAMHI-Alumini/nithish.jpg';
import vinesh from '../img/CAMHI-Alumini/vinesh.jpg';
import siva from '../img/CAMHI-Alumini/siva sai.jpg';
import amisha from '../img/CAMHI-Alumini/amisha.jpg';
import gresshma from '../img/CAMHI-Alumini/greeshma.jpg';
import hithesh from '../img/CAMHI-Alumini/hitesh .jpg';
import neha from '../img/CAMHI-Alumini/neha.jpg';
import agilan from '../img/CAMHI-Alumini/agilan.jpg';
import sakthi from '../img/Camhi-member/sakthi.jpg';

const teamMembers = [
  { name: 'Lokesh Kumar KM', role: 'CHAIRMAN', photo: lokesh, socials: { Linkedin: '#', Email: '#' } },
  { name: 'Ashwin B', role: 'SECRETARY', photo: ashwin, socials: { Linkedin: '#', Email: '#' } },
  { name: 'Sakthi Saran R', role: 'TREASURER', photo: sakthi, socials: { Linkedin: '#', Email: '#' } },
  { name: 'Thanya Y', role: 'INDUSTRY RELATION Head', photo: thanya, socials: { Linkedin: '#', Email: '#' } },
  { name: 'Samsthidhaa Sridharan', role: 'EVENT ORGANIZER', photo: samsitha, socials: { Linkedin: '#', Email: '#' } },
  { name: 'Ganesan SV', role: 'Media Team Head', photo: ganesan, socials: { Linkedin: '#', Email: '#' } },
  { name: 'Yendreddy Jayadurga', role: 'Marketing Head', photo: jayadurga, socials: { Linkedin: '#', Email: '#' } },
  { name: 'L Bhavaneesh', role: 'Co-CHAIRMAN', photo: bhavaneesh, socials: { Linkedin: '#', Email: '#' } },
  { name: 'Sarveshwaran B', role: 'CO-SECRETARY', photo: sarvesh, socials: { Linkedin: '#', Email: '#' } },
  { name: 'Adhithiyan P', role: 'CO-TREASURER', photo: aadhithiyaan, socials: { Linkedin: '#', Email: '#' } },
  { name: 'Sriram S', role: 'INDUSTRY RELATION Co-Head', photo: sriram, socials: { Linkedin: '#', Email: '#' } },
  { name: 'Kavya Sri G', role: 'Co-EVENT ORGANIZER', photo: kavyasri, socials: { Linkedin: '#', Email: '#' } },
  { name: 'Arun AAdhithyan S J', role: 'Media Team Co-Head', photo: arunaadhithiyan, socials: { Linkedin: '#', Email: '#' } },
  { name: 'Shrie Varshini V', role: 'Marketing Co-Head', photo: varshini, socials: { Linkedin: '#', Email: '#' } },
];

const teamAlumini = [
  { name: 'Soundar Rajan G', role: 'Ex-Chairman', photo: Soundar, socials: { Linkedin: '#', Email: '#' } },
  { name: 'Yaythish Kanaa', role: 'Ex-CoChairman', photo: yathish, socials: { Linkedin: '#', Email: '#' } },
  { name: 'Dennis Joshua D', role: 'Ex-Secretary', photo: jousha, socials: { Linkedin: '#', Email: '#' } },
  { name: 'Agilan A', role: 'Ex-treasurer', photo: agilan, socials: { Linkedin: '#', Email: '#' } },
  { name: 'Vishwanathan R', role: 'Ex-Event Organizer', photo: vishwa, socials: { Linkedin: '#', Email: '#' } },
  { name: 'Vinesh Kumar R', role: 'Ex-Research day Head', photo: vinesh, socials: { Linkedin: '#', Email: '#' } },
  { name: 'Hithesh Reddy', role: 'Ex-Learning Path', photo: hithesh, socials: { Linkedin: '#', Email: '#' } },
  { name: 'Pokala Shiva Sai', role: 'Ex-Marketing Head', photo: siva, socials: { Linkedin: '#', Email: '#' } },
  { name: 'Nithish S', role: 'Ex-Skill Based Learning Head', photo: nithish, socials: { Linkedin: '#', Email: '#' } },
  { name: 'nimmagadda Greeshma', role: 'Ex-hackathon Head', photo: gresshma, socials: { Linkedin: '#', Email: '#' } },
  { name: 'Amisha Dutta', role: 'Ex-Member', photo: amisha, socials: { Linkedin: '#', Email: '#' } },
  { name: 'Arava Neha', role: 'Ex-Member', photo: neha, socials: { Linkedin: '#', Email: '#' } },
];

const Members = () => {
  const [activeTab, setActiveTab] = useState('current');
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="bg-gradient-to-b from-gray-900 via-blue-900 to-gray-900 min-h-screen w-full pt-28">
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
            CAMHI Team
          </h1>
          <div className="h-1 w-48 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-300 text-lg">Building innovation together</p>
        </div>

        {/* Tab navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-800/50 p-1 rounded-xl backdrop-blur-sm">
            <button 
              className={`px-6 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${activeTab === 'current' ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg' : 'text-gray-300 hover:text-white'}`}
              onClick={() => setActiveTab('current')}
            >
              Current Team
            </button>
            <button 
              className={`px-6 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${activeTab === 'alumni' ? 'bg-gradient-to-r from-yellow-400 to-amber-500 text-white shadow-lg' : 'text-gray-300 hover:text-white'}`}
              onClick={() => setActiveTab('alumni')}
            >
              Alumni
            </button>
          </div>
        </div>

        {/* Current team section */}
        {activeTab === 'current' && (
          <motion.div 
            className="mb-20"
            initial="hidden"
            animate="show"
            variants={container}
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-2">CAMHI Office Bearers</h2>
              <p className="text-cyan-400">2024-2025</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  variants={item}
                  className="relative"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div className={`h-full bg-gray-800/40 rounded-2xl backdrop-blur-md overflow-hidden transition-all duration-500 transform group ${hoveredIndex === index ? 'scale-105' : ''}`}>
                    {/* Decorative elements */}
                    <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-cyan-500/10 blur-xl"></div>
                    <div className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-blue-500/10 blur-xl"></div>
                    
                    <div className="p-6 relative z-10 h-full flex flex-col">
                      {/* Image with custom clip path */}
                      <div className="relative w-48 h-56 mx-auto mb-4">
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-tl-3xl rounded-br-3xl rounded-tr-lg rounded-bl-lg opacity-80"></div>
                        <img 
                          src={member.photo} 
                          alt={member.name} 
                          className="absolute inset-2 object-cover rounded-tl-3xl rounded-br-3xl rounded-tr-lg rounded-bl-lg z-10 filter drop-shadow-lg"
                        />
                        <div className="absolute -inset-0.5 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-tl-3xl rounded-br-3xl rounded-tr-lg rounded-bl-lg opacity-75 blur-sm group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                      
                      {/* Content */}
                      <div className="mt-2 text-center flex-1 flex flex-col">
                        <h3 className="font-bold text-white text-xl mb-1">{member.name}</h3>
                        <p className="text-cyan-400 font-medium italic mb-4">{member.role}</p>
                        
                        {/* Social links with animated hover */}
                        <div className="mt-auto flex justify-center space-x-4">
                          <a 
                            href={member.socials.Linkedin} 
                            className="w-10 h-10 rounded-full bg-gray-700/50 flex items-center justify-center text-gray-300 hover:text-white hover:bg-blue-600 transition-all duration-300 group"
                            target="_blank" 
                            rel="noopener noreferrer"
                          >
                            <i className="fab fa-linkedin-in"></i>
                          </a>
                          <a 
                            href={member.socials.Email} 
                            className="w-10 h-10 rounded-full bg-gray-700/50 flex items-center justify-center text-gray-300 hover:text-white hover:bg-cyan-600 transition-all duration-300"
                            target="_blank" 
                            rel="noopener noreferrer"
                          >
                            <i className="fas fa-envelope"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Alumni section */}
        {activeTab === 'alumni' && (
          <motion.div 
            initial="hidden"
            animate="show"
            variants={container}
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-2">CAMHI Alumni</h2>
              <p className="text-amber-400">2023-2024</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {teamAlumini.map((alumnus, index) => (
                <motion.div
                  key={index}
                  variants={item}
                  className="relative"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div className={`h-full bg-gray-800/40 rounded-2xl backdrop-blur-md overflow-hidden transition-all duration-500 transform group ${hoveredIndex === index ? 'scale-105' : ''}`}>
                    {/* Decorative elements */}
                    <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-amber-500/10 blur-xl"></div>
                    <div className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-yellow-500/10 blur-xl"></div>
                    
                    <div className="p-6 relative z-10 h-full flex flex-col">
                      {/* Image with custom clip path */}
                      <div className="relative w-48 h-56 mx-auto mb-4">
                        <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-yellow-600 rounded-tr-3xl rounded-bl-3xl rounded-tl-lg rounded-br-lg opacity-80"></div>
                        <img 
                          src={alumnus.photo} 
                          alt={alumnus.name} 
                          className="absolute inset-2 object-cover rounded-tr-3xl rounded-bl-3xl rounded-tl-lg rounded-br-lg z-10 filter drop-shadow-lg"
                        />
                        <div className="absolute -inset-0.5 bg-gradient-to-br from-amber-400 to-yellow-600 rounded-tr-3xl rounded-bl-3xl rounded-tl-lg rounded-br-lg opacity-75 blur-sm group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                      
                      {/* Content */}
                      <div className="mt-2 text-center flex-1 flex flex-col">
                        <h3 className="font-bold text-white text-xl mb-1">{alumnus.name}</h3>
                        <p className="text-amber-400 font-medium italic mb-4">{alumnus.role}</p>
                        
                        {/* Social links with animated hover */}
                        <div className="mt-auto flex justify-center space-x-4">
                          <a 
                            href={alumnus.socials.Linkedin} 
                            className="w-10 h-10 rounded-full bg-gray-700/50 flex items-center justify-center text-gray-300 hover:text-white hover:bg-amber-600 transition-all duration-300"
                            target="_blank" 
                            rel="noopener noreferrer"
                          >
                            <i className="fab fa-linkedin-in"></i>
                          </a>
                          <a 
                            href={alumnus.socials.Email} 
                            className="w-10 h-10 rounded-full bg-gray-700/50 flex items-center justify-center text-gray-300 hover:text-white hover:bg-yellow-600 transition-all duration-300"
                            target="_blank" 
                            rel="noopener noreferrer"
                          >
                            <i className="fas fa-envelope"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Members;