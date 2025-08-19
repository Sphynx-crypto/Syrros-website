import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import { ArrowLeft } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  });
   const location = useLocation();
  const navigate = useNavigate();
  
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ici vous intégreriez avec votre système de contact
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (isSubmitted) {
    return (
      <div className="home-background">
      <div className="pt-32">
         {location.pathname !== "/" && (
  <button
    onClick={() => navigate(-1)}
    className="absolute top-20 left-1 z-50 flex items-center justify-center px-2 py-1 gap-2 bg-blue-900 hover:bg-blue-700 rounded shadow text-white transition font-manrope"
  >
    <ArrowLeft className="h-4 w-4" />
    <span className = "text-sm">Retour</span>
  </button>
)}
        <div className="max-w-md mx-auto text-center">
          <CheckCircle className="h-16 w-16 text-green-400 mx-auto mb-6" />
          <h2 className="text-2xl font-sora font-semibold text-white mb-4">Message envoyé !</h2>
          <p className="font-manrope text-gray-300 mb-6">
            Merci pour votre message. Notre équipe vous contactera dans les plus brefs délais.
          </p>
          <div className="bg-gray-800 p-4 rounded-lg">
            <p className="font-manrope text-sm text-gray-400">
              Temps de réponse habituel : sous 24h
            </p>
          </div>
        </div>
      </div>
      </div>
    );
  }

  return (
    <div className="home-background">
    <div className="pt-16">
      {/* Hero Section */}
      <section className=" py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-sora font-bold text-white mb-6">
              Contactez-nous
            </h1>
            <p className="text-xl font-manrope text-gray-300 max-w-3xl mx-auto">
             Parce que chaque projet est unique, nous prenons le temps de vous écouter et de comprendre vos objectifs. Contactez-nous dès aujourd’hui et avançons ensemble vers vos solutions d’automatisation.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Formulaire de contact */}
            <div className="bg-gray-900 p-8 rounded-lg">
              <h2 className="text-2xl font-sora font-semibold text-white mb-6">Envoyez-nous un message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-sora font-medium text-gray-300 mb-2">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-sora font-medium text-gray-300 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-sora font-medium text-gray-300 mb-2">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-sora font-medium text-gray-300 mb-2">
                      Entreprise
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-sora font-medium text-gray-300 mb-2">
                    Sujet *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Sélectionnez un sujet</option>
                    <option value="audit">Demande d'audit gratuit</option>
                    <option value="projet">Nouveau projet d'automatisation</option>
                    <option value="support">Support technique</option>
                    <option value="partenariat">Partenariat</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-sora font-medium text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Décrivez votre projet, vos besoins ou votre question..."
                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition-colors font-sora font-medium flex items-center justify-center"
                >
                  <Send className="h-5 w-5 mr-2" />
                  Envoyer le message
                </button>
              </form>
            </div>

            {/* Informations de contact */}
            <div className="space-y-8">
              <div className="bg-gray-900 p-8 rounded-lg">
                <h3 className="text-2xl font-sora font-semibold text-white mb-6">Nos coordonnées</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-blue-400 mt-1 mr-4" />
                    <div>
                      <h4 className="font-sora text-white font-medium mb-1">Email</h4>
                      <p className="font-manrope text-gray-300">contact@syrros.fr</p>
                      <p className="font-manrope text-gray-400 text-sm">Réponse sous 24h</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-blue-400 mt-1 mr-4" />
                    <div>
                      <h4 className="font-sora text-white font-medium mb-1">Téléphone</h4>
                      <p className="font-manrope text-gray-300">+33 6 02 12 20 50</p>
                      <p className="font-manrope text-gray-400 text-sm">Lun-Ven 9h-18h</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-blue-400 mt-1 mr-4" />
                    <div>
                      <h4 className="font-sora text-white font-medium mb-1">Adresse</h4>
                      <p className="font-manrope text-gray-300"> 1 Rue Chamborand</p>
                      <p className="font-manrope text-gray-300">57200 Sarreguemines, France</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="h-6 w-6 text-blue-400 mt-1 mr-4" />
                    <div>
                      <h4 className="font-sora text-white font-medium mb-1">Horaires</h4>
                      <p className="font-manrope text-gray-300">Lundi - Vendredi : 9h00 - 18h00</p>
                      <p className="font-manrope text-gray-300">Weekend : Sur rendez-vous</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900 p-8 rounded-lg">
                <h3 className="text-2xl font-sora font-semibold text-white mb-6">Réseaux sociaux</h3>
                
                <div className="space-y-4">
                  <a
                    href="https://linkedin.com/company/syrros"
                    className="flex items-center font-manrope text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    <svg className="h-5 w-5 mr-3" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    LinkedIn
                  </a>
                  
                  <a
                    href="https://twitter.com/syrros"
                    className="flex items-center font-manrope text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    <svg className="h-5 w-5 mr-3" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                    Twitter
                  </a>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-8 rounded-lg text-center">
                <h3 className="text-2xl font-sora font-semibold text-white mb-4">Besoin d'aide rapidement ?</h3>
                <p className="font-manrope text-blue-100 mb-6">
                  Réservez directement un audit gratuit de 30 minutes avec nos experts
                </p>
                <a
                  href="/rendez-vous"
                  className="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-sora font-medium hover:bg-gray-100 transition-colors"
                >
                  Réserver un audit gratuit
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
      
  );
};

export default Contact;