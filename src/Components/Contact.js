import React, { useState, useEffect, useRef } from "react";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [activeSection, setActiveSection] = useState("info");
  const [animationPhase, setAnimationPhase] = useState(0);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationPhase(1);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);
    
    // Replace these with your actual EmailJS credentials
    const serviceId = 'service_ibb2lgf';
    const templateId = 'A05aEVqrSiEw2E1Sw';
    const publicKey = 'A05aEVqrSiEw2E1Sw';
    
    emailjs.sendForm(serviceId, templateId, form.current, publicKey)
      .then((result) => {
        console.log('Email sent successfully:', result.text);
        setIsSubmitted(true);
        setIsSubmitting(false);
        
        // Reset form after successful submission
        setTimeout(() => {
          setFormData({
            name: "",
            email: "",
            phone: "",
            message: ""
          });
          setIsSubmitted(false);
        }, 3000);
      })
      .catch((error) => {
        console.error('Email send failed:', error.text);
        setSubmitError('Failed to send your message. Please try again later.');
        setIsSubmitting(false);
      });
  };
  
  const toggleSection = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="bg-black min-h-screen relative overflow-hidden flex items-center justify-center w-screen py-12 px-4 pt-32">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-purple-700 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600 rounded-full filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: "1s"}}></div>
        <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-pink-600 rounded-full filter blur-3xl opacity-10 animate-pulse" style={{animationDelay: "2s"}}></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        
        {/* Floating shapes */}
        <div className={`absolute transition-all duration-1000 ease-in-out ${animationPhase === 1 ? "opacity-100" : "opacity-0 translate-y-8"}`}>
          <div className="absolute top-24 left-1/4 w-8 h-8 border-4 border-blue-400 rounded-md rotate-12 animate-float"></div>
          <div className="absolute top-1/3 right-1/4 w-12 h-12 border-4 border-pink-400 rounded-full animate-float" style={{animationDelay: "1.5s"}}></div>
          <div className="absolute bottom-36 left-1/3 w-10 h-10 border-4 border-purple-400 rounded-lg rotate-45 animate-float" style={{animationDelay: "0.7s"}}></div>
        </div>
      </div>

      {/* Main content */}
      <div className={`relative max-w-6xl w-full transition-all duration-1000 ease-out ${animationPhase === 1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          {/* Left panel - Styled info section */}
          <div className="lg:w-2/5 relative">
            <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-lg p-8 lg:p-10 rounded-2xl border border-gray-700/50 shadow-xl overflow-hidden relative z-10">
              {/* Abstract decorative element */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full opacity-30 blur-2xl"></div>
              <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full opacity-20 blur-2xl"></div>
              
              <h2 className="text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                Let's Create<br />Together
              </h2>
              
              <p className="text-gray-300 mb-10 relative z-10">
                CAMHI is a vibrant community where innovation meets collaboration. Join our network of tech enthusiasts and industry professionals to explore new horizons together.
              </p>
              
              <div className="space-y-8 mb-10 relative z-10">
                <div className="transform hover:translate-x-2 transition-transform duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-3 rounded-lg shadow-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium text-white">Our Campus</h3>
                      <p className="text-sm text-gray-400 mt-1">
                        Amrita School of Engineering,<br />
                        Amrita Vishwa Vidyapeetam,<br />
                        Chennai Campus
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="transform hover:translate-x-2 transition-transform duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-lg shadow-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium text-white">Reach Out</h3>
                      <p className="text-sm text-gray-400 mt-1">camhiasec@ch.amrita.edu</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Social links */}
              <div className="relative z-10">
                <h3 className="text-white font-medium mb-4">Connect With Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                    <div className="relative bg-gray-900 p-3 rounded-xl group-hover:translate-y-1 transition duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                      </svg>
                    </div>
                  </a>
                  <a href="#" className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-pink-400 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                    <div className="relative bg-gray-900 p-3 rounded-xl group-hover:translate-y-1 transition duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-pink-400" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </div>
                  </a>
                  <a href="#" className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-800 to-blue-600 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                    <div className="relative bg-gray-900 p-3 rounded-xl group-hover:translate-y-1 transition duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right panel - Interactive form with toggle */}
          <div className="lg:w-3/5">
            <div className="bg-gray-900/80 backdrop-blur-lg rounded-2xl border border-gray-700/50 shadow-xl overflow-hidden">
              {/* Section toggle */}
              <div className="flex border-b border-gray-700/50">
                <button 
                  onClick={() => toggleSection("info")} 
                  className={`flex-1 py-4 px-6 text-center font-medium transition-colors ${activeSection === "info" ? "bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-white" : "text-gray-400 hover:text-gray-300"}`}
                >
                  About Us
                </button>
                <button 
                  onClick={() => toggleSection("form")} 
                  className={`flex-1 py-4 px-6 text-center font-medium transition-colors ${activeSection === "form" ? "bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-white" : "text-gray-400 hover:text-gray-300"}`}
                >
                  Contact Form
                </button>
              </div>
              
              {/* Content area */}
              <div className="p-8 min-h-[400px]">
                {activeSection === "info" && (
                  <div className="animate-fadeIn">
                    <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                      About CAMHI
                    </h2>
                    
                    <div className="space-y-6 text-gray-300">
                      <p>
                        CAMHI (Computer Aided Machine Human Interaction) is an initiative at Amrita School of Engineering dedicated to bridging technological advancements with human-centered design.
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                        <div className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm border border-gray-700/50 hover:border-purple-500/50 transition-colors">
                          <h3 className="text-xl font-medium mb-3 text-white">Our Mission</h3>
                          <p className="text-gray-400">To foster a collaborative environment where students can explore emerging technologies and develop solutions that positively impact society.</p>
                        </div>
                        
                        <div className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm border border-gray-700/50 hover:border-blue-500/50 transition-colors">
                          <h3 className="text-xl font-medium mb-3 text-white">Our Vision</h3>
                          <p className="text-gray-400">To become a leading hub for technological innovation that inspires the next generation of thoughtful, ethical tech leaders.</p>
                        </div>
                      </div>
                      
                      <button 
                        onClick={() => toggleSection("form")} 
                        className="mt-8 inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-white font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                      >
                        collaborate 
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </button>
                    </div>
                  </div>
                )}
                
                {activeSection === "form" && (
                  <div className="animate-fadeIn">
                    <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                      Send Us a Message
                    </h2>
                    
                    {isSubmitted ? (
                      <div className="py-12 flex flex-col items-center justify-center animate-fadeIn">
                        <div className="w-16 h-16 mb-6 flex items-center justify-center rounded-full bg-green-500/20 border-2 border-green-500">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <h3 className="text-xl font-medium text-white mb-2">Message Sent!</h3>
                        <p className="text-gray-400 text-center">Thank you for reaching out. We'll get back to you shortly.</p>
                      </div>
                    ) : (
                      <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                        <div className="group relative">
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="peer w-full bg-gray-800/30 border-2 border-gray-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-blue-500 transition-colors"
                            placeholder=" "
                            required
                          />
                          <label 
                            htmlFor="name" 
                            className="absolute text-sm text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-gray-900 px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-blue-500 left-2"
                          >
                            Your Name
                          </label>
                        </div>
                        
                        <div className="group relative">
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="peer w-full bg-gray-800/30 border-2 border-gray-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-blue-500 transition-colors"
                            placeholder=" "
                            required
                          />
                          <label 
                            htmlFor="email" 
                            className="absolute text-sm text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-gray-900 px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-blue-500 left-2"
                          >
                            Email Address
                          </label>
                        </div>
                        
                        <div className="group relative">
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="peer w-full bg-gray-800/30 border-2 border-gray-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-blue-500 transition-colors"
                            placeholder=" "
                          />
                          <label 
                            htmlFor="phone" 
                            className="absolute text-sm text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-gray-900 px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-blue-500 left-2"
                          >
                            Phone Number (Optional)
                          </label>
                        </div>
                        
                        <div className="group relative">
                          <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows="4"
                            className="peer w-full bg-gray-800/30 border-2 border-gray-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-blue-500 transition-colors"
                            placeholder=" "
                            required
                          ></textarea>
                          <label 
                            htmlFor="message" 
                            className="absolute text-sm text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-gray-900 px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:top-3 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-blue-500 left-2"
                          >
                            Your Message
                          </label>
                        </div>
                        
                        {submitError && (
                          <div className="bg-red-500/20 border border-red-500 text-red-300 px-4 py-3 rounded-lg">
                            {submitError}
                          </div>
                        )}
                        
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="relative group w-full overflow-hidden rounded-lg bg-gray-800 text-white font-medium h-12 disabled:opacity-70"
                        >
                          <div className="absolute inset-0 w-3 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-500 ease-out group-hover:w-full"></div>
                          <span className="relative group-hover:text-white transition-colors duration-200 z-10">
                            {isSubmitting ? 'Sending...' : 'Send Message'}
                          </span>
                        </button>
                      </form>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;