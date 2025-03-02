import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import './Forms.css';

export const Forms = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [stateMessage, setStateMessage] = useState(null);
  const [animationPhase, setAnimationPhase] = useState(0);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationPhase(1);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(form.current);
    const email = formData.get('user_email');
    const phoneNumber = formData.get('phone_number');

    // Validate email and phone number
    const emailPattern = /^[\w.-]+@ch\.students\.amrita\.edu$/;
    const phonePattern = /^[0-9]{10}$/;

    if (!emailPattern.test(email)) {
      setErrorMessage('Please enter a valid university email address ending with @ch.students.amrita.edu');
      setIsSubmitting(false);
      return;
    }

    if (!phonePattern.test(phoneNumber)) {
      setErrorMessage('Please enter a valid phone number (10 digits).');
      setIsSubmitting(false);
      return;
    }

    setErrorMessage(''); // Clear any previous error messages

    emailjs
      .sendForm('service_ibb2lgf', 'template_m9jvx7k', form.current, {
        publicKey: 'A05aEVqrSiEw2E1Sw',
      })
      .then(
        (result) => {
          setStateMessage('Message sent!');
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000); // hide message after 5 seconds
        },
        (error) => {
          setStateMessage('Something went wrong, please try again later');
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000); // hide message after 5 seconds
        }
      );

    // Clears the form after sending the email
    e.target.reset();
  };

  return (
    <div className="bg-black min-h-screen relative overflow-hidden flex items-center justify-center w-screen py-12 px-4 pt-32">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-purple-700 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600 rounded-full filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: "1s"}}></div>
        <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-pink-600 rounded-full filter blur-3xl opacity-10 animate-pulse" style={{animationDelay: "2s"}}></div>
        
        {/* Floating shapes */}
        <div className={`absolute transition-all duration-1000 ease-in-out ${animationPhase === 1 ? "opacity-100" : "opacity-0 translate-y-8"}`}>
          <div className="absolute top-24 left-1/4 w-8 h-8 border-4 border-blue-400 rounded-md rotate-12 animate-float"></div>
          <div className="absolute top-1/3 right-1/4 w-12 h-12 border-4 border-pink-400 rounded-full animate-float" style={{animationDelay: "1.5s"}}></div>
          <div className="absolute bottom-36 left-1/3 w-10 h-10 border-4 border-purple-400 rounded-lg rotate-45 animate-float" style={{animationDelay: "0.7s"}}></div>
        </div>
      </div>

      {/* Main content */}
      <div className={`relative max-w-2xl w-screen transition-all duration-1000 ease-out ${animationPhase === 1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
        <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-lg p-8 lg:p-10 rounded-2xl border border-gray-700/50 shadow-xl overflow-hidden relative z-10">
          {/* Abstract decorative elements */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full opacity-30 blur-2xl"></div>
          <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full opacity-20 blur-2xl"></div>
          
          <h2 className="text-4xl font-bold mb-4  text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
            Join CAMHI
          </h2>
          
          <p className="text-gray-300 mb-4 relative z-10">
            Fill out this application to become part of our vibrant community where innovation meets collaboration.
          </p>

          {isSubmitting ? (
            <div className="py- flex flex-col items-center justify-center animate-fadeIn">
              <div className="w-16 h-16 mb-6 flex items-center justify-center rounded-full bg-blue-500/20 border-2 border-blue-500">
                <svg className="animate-spin h-8 w-8 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-medium text-white mb-2">Submitting your application...</h3>
              <p className="text-gray-400 text-center">Please wait while we process your information.</p>
            </div>
          ) : stateMessage ? (
            <div className="py-12 flex flex-col items-center justify-center animate-fadeIn">
              <div className="w-16 h-16 mb-6 flex items-center justify-center rounded-full bg-green-500/20 border-2 border-green-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-white mb-2">Success!</h3>
              <p className="text-gray-400 text-center">{stateMessage}</p>
            </div>
          ) : (
            <form ref={form} onSubmit={sendEmail} className="space-y-3 relative z-10">
              <div className="group relative">
                <input
                  type="text"
                  name="user_name"
                  className="peer w-full bg-gray-800/30 border-2 border-gray-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder=" "
                  required
                />
                <label 
                  className="absolute text-sm text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-gray-900 px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-blue-500 left-2"
                >
                  Name
                </label>
              </div>
              
              <div className="group relative">
                <input
                  type="text"
                  name="register_number"
                  className="peer w-full bg-gray-800/30 border-2 border-gray-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder=" "
                  required
                />
                <label 
                  className="absolute text-sm text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-gray-900 px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-blue-500 left-2"
                >
                  Register Number (CH.xx.uyxxxyyyyy)
                </label>
              </div>
              
              <div className="group relative">
                <input
                  type="text"
                  name="phone_number"
                  className="peer w-full bg-gray-800/30 border-2 border-gray-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder=" "
                  required
                />
                <label 
                  className="absolute text-sm text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-gray-900 px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-blue-500 left-2"
                >
                  Mobile Number (10 digits)
                </label>
              </div>
              
              <div className="group relative">
                <input
                  type="email"
                  name="user_email"
                  className="peer w-full bg-gray-800/30 border-2 border-gray-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder=" "
                  required
                />
                <label 
                  className="absolute text-sm text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-gray-900 px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-blue-500 left-2"
                >
                  College Email(ch...@ch.students.amrita.edu)
                </label>
              </div>
              
              <div className="group relative">
                <textarea
                  name="message"
                  rows="4"
                  className="peer w-full bg-gray-800/30 border-2 border-gray-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder=" "
                  required
                ></textarea>
                <label 
                  className="absolute text-sm text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-gray-900 px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:top-3 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-blue-500 left-2"
                >
                  Why You want to join CAMHI?
                </label>
              </div>
              
              <button
                type="submit"
                className="relative group w-full overflow-hidden rounded-lg bg-gray-800 text-white font-medium h-12"
              >
                <div className="absolute inset-0 w-3 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-500 ease-out group-hover:w-full"></div>
                <span className="relative group-hover:text-white transition-colors duration-200 z-10">Submit Application</span>
              </button>
              
              {errorMessage && (
                <div className="bg-red-900/30 border border-red-500 rounded-lg p-3 text-red-300 text-sm">
                  <div className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    <span>{errorMessage}</span>
                  </div>
                </div>
              )}
            </form>
          )}
          
          {/* Optional footer with branding */}
          <div className="mt-8 pt-6 border-t border-gray-700/50 text-center text-gray-500 text-sm">
            <p>CAMHI — Computer aided machine human interaction</p>
            <p className="mt-1">Amrita School of Engineering, Chennai Campus</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forms;