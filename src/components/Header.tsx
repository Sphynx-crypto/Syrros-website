import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Bot } from 'lucide-react';
import { ArrowRightIcon } from "@heroicons/react/24/outline";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { href: '/', label: 'Accueil' },
    { href: '/services', label: 'Nos Services' },
    //{ href: '/articles', label: 'Articles' },
    //{ href: '/a-propos', label: 'À Propos' }, 
  
    //{ href: '/témoignages', label: 'Témoignages' }, 
    { href: '/contact', label: 'Contact' },
   
  ];

  return (
    <header className="bg-white/10 backdrop-blur-md fixed top-0 left-0 w-full z-50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
        <Link to="/" className="flex items-center space-x-2 text-xl font-bold text-white">
          
 
  <img src="../src/assets/logos/Syrros.png" alt="Syrros" className="h-[70px] w-auto translate-y-[3px]" />
          <span className="hidden md:block text-2x1 font-bold font-sora bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
          SYRROS
          </span>
</Link>

          {/* Navigation Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`text-sm font-sora font-medium transition-colors hover:text-blue-400 ${
                  location.pathname === link.href ? 'text-blue-400' : 'text-gray-300'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
      <Link
  to="/rendez-vous"
  className="hidden md:inline-flex relative group items-center px-12 py-3 rounded-lg bg-white/20 backdrop-blur-md text-white text-sm font-sora font-medium overflow-hidden transition-colors duration-300 hover:bg-white/30"
>
  <span
    className="ml-2 inline-block translate-x-0 whitespace-nowrap
               will-change-transform transition-transform duration-700 ease-in-out
               group-hover:-translate-x-4 group-focus-visible:-translate-x-4 active:-translate-x-2"
  >
    Nous contacter
  </span>


  {/* Flèche avec fond flou */}
  <span
    className="absolute top-1/2 -translate-y-1/2 left-3 w-8 h-7 rounded-md bg-white/30 backdrop-blur-sm flex items-center justify-center transition-all duration-1000 ease-in-out group-hover:left-[75%]"
  >
    <ArrowRightIcon className="w-5 h-5 text-white" />
  </span>
</Link>
          {/*mobile Bouton */}       

<button
  onClick={() => setIsMenuOpen(v => !v)}
  className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-white/20 bg-gray hover:bg-gray-500 text-white"
  aria-expanded={isMenuOpen}
  aria-controls="mobile-nav"
  aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
>
  {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
  <span className="sr-only">{isMenuOpen ? "Fermer" : "Ouvrir"} le menu</span>
</button>
    
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute inset-x-0 top-14 w-full z-50 bg-gray-800/95 backdrop-blur border-b border-gray-900">
            <div className="px-4 py-2 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`group block px-4 py-2 rounded-full bg-white/5 text-gray-200 ring-1 ring-white/10 hover:bg-white/10 hover:ring-white/25 shadow-sm transition ${
                    location.pathname === link.href ? 'text-blue-400 ring-blue-400/40 bg-white/10' : 'hover:text-white'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/rendez-vous"
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-2 bg-blue-700 text-white text-sm font-sora font-medium rounded-lg hover:bg-blue-800 transition-colors text-center"
              >
                Nous contacter 
              </Link>
            </div>
          </div>
        )}
      </div>
      </div>
    </header>
  );
};

export default Header;