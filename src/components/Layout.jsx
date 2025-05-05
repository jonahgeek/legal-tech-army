import { Link, useLocation } from "react-router";
import { useState } from "react";
import LogoImg from "../assets/logo-with-words.svg";
import LogoImgWords from "../assets/logo.svg";
import Footer from "./Footer";

function Layout({ children }) {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Command Center" },
    { to: "/compliance", label: "Compliance Ops" },
    { to: "/contracts", label: "Contracts Lab" },
    { to: "/cyberlaw", label: "Cyber Law Briefs" },
    { to: "/toolkit", label: "Founder Toolkit" },
    { to: "/contact", label: "Connect" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#0a0f1c] text-white">
      <nav className="bg-[#121c30] border-b border-[#1e2c4c] shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            {/* Branding */}
            <Link
              className="text-2xl font-extrabold flex flex-row items-center space-x-4 text-amber-400"
              to="/"
            >
              <img src={LogoImgWords} alt="Legal Tech Army Logo" className="h-12" />
              <img src={LogoImg} alt="Legal Tech Army Logo" className="h-6" />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all ${
                    location.pathname === link.to
                      ? "bg-amber-500 text-black"
                      : "text-gray-300 hover:text-white hover:bg-[#24344d]"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Mobile Nav Toggle */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md hover:bg-[#1e2c4c] focus:outline-none focus:ring-2 focus:ring-white"
              >
                <span className="sr-only">Toggle navigation</span>
                {isMenuOpen ? (
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#101a2c] px-4 pt-4 pb-6 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  location.pathname === link.to
                    ? "bg-amber-500 text-black"
                    : "text-gray-300 hover:text-white hover:bg-[#24344d]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </nav>

      {/* MAIN */}
      <main className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {children}
      </main>

      <Footer />
    </div>
  );
}

export default Layout;
