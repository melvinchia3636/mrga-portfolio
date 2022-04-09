import React from 'react';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import Logo from "../mrga-logo.png";

function Navbar() {
  const location = useLocation();
  return <nav className="flex items-center justify-between w-full px-8 py-6">
    <Link to="http://localhost:3000/project">
      <img src={Logo} className="h-10" />
    </Link>
    <ul className="flex relative text-xl uppercase">
      {[
        ["/", "Home"],
        ["/projects", "Projects"],
        ["/about", "About"],
        ["/contact", "Contact"]
      ].map(([path, label]) => (
        <li className="w-36 text-center">
          <Link to={path}>
            {label}
          </Link>
        </li>
      ))}
      {true && <span className="w-6 transition-all absolute bottom-0 border-b-2 border-teal-500" style={{
        transform: `translateX(${["/", "/projects", "/about", "/contact"].indexOf(location.pathname)*9+4.5-0.75 }rem)`
      }} />}
    </ul>
  </nav>
}

export default Navbar