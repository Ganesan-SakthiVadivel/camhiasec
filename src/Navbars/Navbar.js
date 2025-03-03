import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import LogoofCamhi from "../img/camhi2.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("/");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    setActiveTab(location.pathname);
  }, [location]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Close mobile menu when clicking a link
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Desktop and Tablet Navbar */}
      <nav className="fixed top-2 left-1/2 transform -translate-x-1/2 z-50 bg-gradient-to-r from-indigo-50/70 to-purple-50/50 backdrop-blur-md bg-opacity-90 shadow-lg rounded-full px-5 py-1 hidden md:flex items-center no-underline w-auto max-w-4xl">
        {/* Logo Button with pulse effect */}
        <div className="relative mr-6">
          <span className="absolute inset-0 rounded-full animate-pulse opacity-90"></span>
          <Link to="/" className="no-underline text-black font-bold" onClick={closeMobileMenu}>
            <button className="relative rounded-full p-3 flex items-center justify-center shadow-md">
              <img src={LogoofCamhi} alt="CAMHI Logo" className="w-12 h-8" /> 
              <span className="hidden sm:inline">CAMHI</span>
            </button>
          </Link>
        </div>

        {/* Navigation Links in a capsule layout */}
        <div className="rounded-full p-1 shadow-inner flex no-underline">
          <NavItem to="/events" active={activeTab === "/events"} onClick={closeMobileMenu}>
            events
          </NavItem>
          <NavItem to="/officers" active={activeTab === "/officers"} onClick={closeMobileMenu}>
            officers
          </NavItem>
          <NavItem to="/timeline" active={activeTab === "/timeline"} onClick={closeMobileMenu}>
            timeline
          </NavItem>
          <NavItem to="/contact" active={activeTab === "/contact"} onClick={closeMobileMenu}>
            contact
          </NavItem>
          <NavItem to="/joincamhi" active={activeTab === "/joincamhi"} onClick={closeMobileMenu}>
            joincamhi
          </NavItem>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-indigo-50/90 to-purple-50/90 backdrop-blur-md shadow-md py-2 px-4 flex md:hidden items-center justify-between">
        <Link to="/" className="no-underline text-black font-bold" onClick={closeMobileMenu}>
          <div className="flex items-center">
            <img src={LogoofCamhi} alt="CAMHI Logo" className="w-12 h-8" />
            <span>CAMHI</span>
          </div>
        </Link>
        
        <button 
          onClick={toggleMobileMenu}
          className="p-2 rounded-lg bg-indigo-100 hover:bg-indigo-200 transition-colors"
          aria-label="Toggle menu"
        >
          <FontAwesomeIcon icon={mobileMenuOpen ? faTimes : faBars} className="text-indigo-700" />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-40 bg-indigo-50/95 backdrop-blur-md transition-transform duration-300 transform ${mobileMenuOpen ? 'translate-y-0' : '-translate-y-full'} pt-16 md:hidden`}>
        <div className="flex flex-col items-center space-y-4 p-4">
          <MobileNavItem to="/" active={activeTab === "/"} onClick={closeMobileMenu}>
            Home
          </MobileNavItem>
          <MobileNavItem to="/events" active={activeTab === "/events"} onClick={closeMobileMenu}>
            Events
          </MobileNavItem>
          <MobileNavItem to="/officers" active={activeTab === "/officers"} onClick={closeMobileMenu}>
            Officers
          </MobileNavItem>
          <MobileNavItem to="/timeline" active={activeTab === "/timeline"} onClick={closeMobileMenu}>
            Timeline
          </MobileNavItem>
          <MobileNavItem to="/contact" active={activeTab === "/contact"} onClick={closeMobileMenu}>
            Contact
          </MobileNavItem>
          <MobileNavItem to="/joincamhi" active={activeTab === "/joincamhi"} onClick={closeMobileMenu}>
            Join CAMHI
          </MobileNavItem>
        </div>
      </div>
    </>
  );
};

const NavItem = ({ to, children, active, onClick }) => {
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`flex items-center px-1 py-1 rounded-full transition-all duration-300 no-underline ${
        active 
          ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-medium shadow-md" 
          : "text-gray-900 hover:bg-indigo-100"
      }`}
    >
      <p className="mx-2 sm:mx-4 pt-3 text-sm sm:text-base">{children}</p> 
    </Link>
  );
};

const MobileNavItem = ({ to, children, active, onClick }) => {
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`w-full py-3 px-6 rounded-full text-center text-lg font-medium transition-all duration-300 no-underline ${
        active 
          ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-md" 
          : "bg-white/50 text-gray-900 hover:bg-indigo-100"
      }`}
    >
      {children}
    </Link>
  );
};

export default Navbar;