import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import LogoofCamhi from "../img/camhi2.svg";

const Navbar = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("/wearable");
  
  useEffect(() => {
    setActiveTab(location.pathname);
  }, [location]);

  return (
    <nav className="fixed top-2 left-1/2 transform -translate-x-1/2 z-50 bg-gradient-to-r from-indigo-50/70 to-purple-50/50 backdrop-blur-md bg-opacity-90 shadow-lg rounded-full px-6 py-1 flex items-center no-underline">
      {/* Logo Button with pulse effect */}
      <div className="relative mr-6">
        <span className="absolute inset-0 rounded-full animate-pulse opacity-90"></span>
        <Link to="/" className="no-underline text-black font-bold">
        <button className="relative rounded-full p-3 flex items-center justify-center shadow-md">
          <img src={LogoofCamhi} alt="CAMHI Logo" className="w-12 h-6" /> CAMHI
        </button>
        </Link>
      </div>

      {/* Navigation Links in a capsule layout */}
      <div className=" rounded-full p-1 shadow-inner flex no-underline">
       
        <NavItem to="/events" active={activeTab === "/events"} className="no-underline">
         events
        </NavItem>
        <NavItem to="/officers" active={activeTab === "/officers"}>
         officers
        </NavItem>
        <NavItem to="/timeline" active={activeTab === "/timeline"} >
          timeline
        </NavItem>
        <NavItem to="/contact" active={activeTab === "/contact"}>
          contact
        </NavItem>
        <NavItem to="/joincamhi" active={activeTab === "/joincamhi"} className="no-underline">
          joincamhi
        </NavItem>
      </div>
    </nav>
  );
};

const NavItem = ({ to, children, active }) => {
  return (
    <Link
      to={to}
      className={`flex items-center px-1 py-1 rounded-full transition-all duration-300 no-underline ${
        active 
          ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-medium shadow-md" 
          : "text-gray-900 hover:bg-indigo-100"
      }`}
    >
      <p className="mx-4 pt-3 ">{children}</p> 
    </Link>
  );
};


export default Navbar;