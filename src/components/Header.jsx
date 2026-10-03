// import React from "react";
// import { Link } from "react-router-dom";

// function Header() {
//   return (
//     <header className="py-6  ">
//       <div className="container mx-auto flex justify-between items-center">
//         <Link to="/">
//           <img src={logo} alt="jayto" className="w-20" />
//         </Link>
//         <div className="flex items-center gap-6">
//           <Link
//             to="/"
//             className="hover:text-red-600  px-4 py-3 hover:scale-70  rounded-lg transition"
//           >
//             ورود به حساب
//           </Link>
//           <Link
//             to="/"
//             className="bg-red-500 hover:bg-red-600 transition text-white px-4 py-3 rounded-lg"
//           >
//             ثبت نام
//           </Link>
//         </div>
//       </div>
//     </header>
//   );
// }

// export default Header;

import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Home, Menu, X } from "lucide-react";
import logo from "../assets/img/images/jayetoLogo.png";

const SITE_NAME = "جای تو ";
const NAV = [
  { label: "صفحه اصلی", to: "/" },
  { label: "اجاره ویلا", to: "/" },

  { label: "درباره ما", to: "/" },
  { label: "تماس با ما", to: "/" },
];

function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const linkClass = ({ isActive }) =>
    `relative py-2 transition hover:text-red-500 ${
      isActive ? "text-red-500" : "text-gray-700"
    }`;

  return (
    <header
      dir="rtl"
      className={`sticky top-0 z-50 bg-white/85 backdrop-blur-md transition-shadow duration-300 ${
        scrolled ? "shadow-md" : "border-b border-gray-100"
      }`}
    >
      <div className="container mx-auto px-4 h-20 flex items-center justify-between gap-6">
        <Link to="/" className="flex items-center gap-3 bg-blu">
          <img
            src={logo}
            alt={SITE_NAME}
            className="h-10 w-auto object-contain"
          />
        </Link>

   
        <nav className="hidden lg:flex items-center gap-8">
          {NAV.map((item) => (
            <NavLink key={item.label} to={item.to} className={linkClass} end>
              {item.label}
            </NavLink>
          ))}
        </nav>

  
        <div className="hidden lg:flex items-center gap-3">
          <Link
            to="/login"
            className="px-5 h-11 flex items-center rounded-full text-gray-700 hover:text-red-500 transition"
          >
            ورود
          </Link>
          <Link
            to="/register"
            className="px-6 h-11 flex items-center rounded-full bg-red-500 hover:bg-red-600 text-white transition"
          >
            ثبت نام
          </Link>
        </div>

      
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "بستن منو" : "باز کردن منو"}
          aria-expanded={open}
          className="lg:hidden w-11 h-11 rounded-lg flex items-center justify-center text-gray-800 hover:bg-gray-100 transition"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

    
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 border-t border-gray-100" : "max-h-0"
        }`}
      >
        <nav className="container mx-auto px-4 py-4 flex flex-col">
          {NAV.map((item) => (
            <NavLink
              key={item.label}
              to={item.to}
              end
              className={({ isActive }) =>
                `py-3 border-b border-gray-100 transition ${
                  isActive ? "text-red-500" : "text-gray-700 hover:text-red-500"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}

          <div className="mt-4 grid grid-cols-2 gap-3">
            <Link
              to="/login"
              className="flex items-center justify-center h-12 rounded-lg border border-gray-300 text-gray-800 hover:border-red-500 hover:text-red-500 transition"
            >
              ورود
            </Link>
            <Link
              to="/register"
              className="flex items-center justify-center h-12 rounded-lg bg-red-500 hover:bg-red-600 text-white transition"
            >
              ثبت نام
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
