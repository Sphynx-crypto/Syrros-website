import React from 'react';
import { Link } from 'react-router-dom';
import { Bot, Mail, Linkedin } from 'lucide-react';
 import syrrosLogo from "../assets/logos/Syrros.png";
const Footer = () => {
  return (
    <footer className="bg-[#121212]">
      {/* Ligne de séparation */}
      <div className="flex justify-center">
        <div className="w-[80%] mx-auto my-8 wavy-line"></div>
      </div>

      {/* Contenu principal */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Logo et Description */}
          <div className="col-span-1 md:col-span-2">
            {/* Logo */}
        <Link to="/" className="flex items-center space-x-2 text-xl font-bold text-white">
          
 
  <img src={syrrosLogo} alt="Syrros" className="h-[90px] w-auto translate-y-[3px]" />
          <span className="text-2x1 font-bold font-sora bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
          SYRROS
          </span> 
</Link>
            <p className="font-manrope text-gray-400 mb-4 max-w-md">
              Votre partenaire en automatisation IA pour optimiser vos processus métiers et 
              booster votre productivité grâce à l'intelligence artificielle.
            </p>
            <div className="flex space-x-4">
              <a href="mailto:contact@syrros.fr" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Mail className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com/company/syrros" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-sora text-white font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="font-manrope text-gray-400 hover:text-white transition-colors">Accueil</Link></li>
              <li><Link to="/services" className="font-manrope text-gray-400 hover:text-white transition-colors">Nos Services</Link></li>
              <li><Link to="/a-propos" className="font-manrope text-gray-400 hover:text-white transition-colors">À Propos</Link></li>
              <li><Link to="/témoignages" className="font-manrope text-gray-400 hover:text-white transition-colors">Témoignages</Link></li>
              <li><Link to="/contact" className="font-manrope text-gray-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-sora text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><span className="font-manrope text-gray-400">Agents IA</span></li>
              <li><span className="font-manrope text-gray-400">Automatisation</span></li>
              <li><span className="font-manrope text-gray-400">Intégrations</span></li>
              <li><span className="font-manrope text-gray-400">Audit Gratuit</span></li>
            </ul>
          </div>
        </div>

        {/* Ligne séparatrice */}
        <div className="flex justify-center mt-8 pt-8">
          <div className="w-[80%] mx-auto my-8 wavy-line"></div>
        </div>

        {/* Bas du footer */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="font-manrope text-gray-400 text-sm">
            © 2024 SYRROS. Tous droits réservés.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/mentions-legales" className="font-manrope text-gray-400 hover:text-white text-sm transition-colors">
              Mentions légales
            </Link>
            <Link to="/mentions-legales" className="font-manrope text-gray-400 hover:text-white text-sm transition-colors">
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
