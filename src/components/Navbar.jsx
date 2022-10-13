import { Icon } from "@iconify/react";
import React, { useState } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import Logo from "../mrga-logo.png";

function Navbar() {
  const location = useLocation();
  const [navOpen, setNavOpen] = useState(false);
  return (
    <nav className="flex items-center justify-between w-full pl-8 pr-8 md:pr-2 py-6">
      <Link to="/" className="relative z-[9999]">
        <img src={Logo} className="h-10" />
      </Link>
      <button
        className="relative z-[9999] md:hidden"
        onClick={() => setNavOpen(!navOpen)}
      >
        <Icon icon="ci:menu-alt-02" className="w-8 h-8" />
      </button>
      <div
        className={`absolute top-0 left-0 transition-transform flex items-center justify-center bg-teal-500 ${
          navOpen ? "translate-x-0" : "-translate-x-full"
        } w-full h-screen`}
      >
        <ul className="flex flex-col relative text-xl uppercase gap-8">
          {[
            ["/", "Home"],
            ["/projects", "Projects"],
            ["blog", "Blog"],
            ["/about", "About"],
          ].map(([path, label]) => (
            <li className="w-36 text-center">
              <Link onClick={() => setNavOpen(false)} to={path}>
                {label}
              </Link>
            </li>
          ))}
          {true && (
            <span
              className="w-6 transition-all absolute bottom-0 border-b-2 border-teal-500"
              style={{
                transform: `translateX(${
                  ["/", "/projects", "/blog", "/about"].indexOf(
                    location.pathname
                  ) *
                    9 +
                  4.5 -
                  0.75
                }rem)`,
              }}
            />
          )}
        </ul>
      </div>
      <ul className="hidden md:flex relative text-xl uppercase">
        {[
          ["/", "Home"],
          ["/projects", "Projects"],
          ["/blog", "Blog"],
          ["/about", "About"],
        ].map(([path, label]) => (
          <li className="w-36 text-center">
            <Link to={path}>{label}</Link>
          </li>
        ))}
        {true && (
          <span
            className="w-6 transition-all absolute bottom-0 border-b-2 border-teal-500"
            style={{
              transform: `translateX(${
                ["/", "/projects", "/blog", "/about"].indexOf(
                  location.pathname
                ) *
                  9 +
                4.5 -
                0.75
              }rem)`,
            }}
          />
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
