import React, { useState } from 'react';
import { Calendar, Clock, CheckCircle, User, Mail, Phone, MessageSquare } from 'lucide-react';
import {useEffect} from "react"


const BookAppointment = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    currentTools: '',
    mainChallenge: '',
    expectedResults: '',
    preferredDate: '',
    preferredTime: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ici vous intégreriez avec votre système de réservation (Calendly, etc.)
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
      <div className="pt-16 min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="max-w-md mx-auto text-center">
          <CheckCircle className="h-16 w-16 text-green-400 mx-auto mb-6" />
          <h2 className="text-2xl font-sora font-semibold text-white mb-4">Merci pour votre demande !</h2>
          <p className="font-manrope text-gray-300 mb-6">
            Votre demande d'audit gratuit a été envoyée avec succès. 
            Notre équipe vous contactera dans les 24h pour confirmer votre rendez-vous.
          </p>
          <div className="bg-gray-800 p-4 rounded-lg">
            <p className="font-manrope text-sm text-gray-400">
              Vous recevrez un email de confirmation à l'adresse : {formData.email}
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16 bg-gray-900 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-[#4382B1]/20 to-gray-900 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-sora font-bold text-white mb-6">
            Audit Gratuit de 30 Minutes
          </h1>
          <p className="text-xl font-manrope text-gray-300 mb-8">
            Découvrez le potentiel d'automatisation de votre entreprise avec nos experts IA
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center text-left">
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
              <span className="font-manrope text-gray-300">Sans engagement</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-5 w-5 text-green-400 mr-2" />
              <span className="font-manrope text-gray-300">30 minutes</span>
            </div>
            <div className="flex items-center">
              <User className="h-5 w-5 text-green-400 mr-2" />
              <span className="font-manrope text-gray-300">Avec un expert</span>
            </div>
          </div>
        </div>
      </section>

      {/* Formulaire */}
      <section className="py-16 bg-gradient-to-b from-gray-900 via-gray-800 to-[#4382B1]/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-800 rounded-lg p-8">
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
                    Email professionnel *
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
                    Entreprise *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="currentTools" className="block text-sm font-sora font-medium text-gray-300 mb-2">
                  Outils actuellement utilisés
                </label>
                <input
                  type="text"
                  id="currentTools"
                  name="currentTools"
                  value={formData.currentTools}
                  onChange={handleChange}
                  placeholder="Ex: Airtable, Slack, Notion, CRM..."
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="mainChallenge" className="block text-sm font-sora font-medium text-gray-300 mb-2">
                  Quel est votre principal défi actuellement ? *
                </label>
                <textarea
                  id="mainChallenge"
                  name="mainChallenge"
                  required
                  rows={3}
                  value={formData.mainChallenge}
                  onChange={handleChange}
                  placeholder="Ex: Trop de temps passé sur les tâches répétitives, gestion manuelle des tickets..."
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="expectedResults" className="block text-sm font-sora font-medium text-gray-300 mb-2">
                  Quels résultats espérez-vous ?
                </label>
                <textarea
                  id="expectedResults"
                  name="expectedResults"
                  rows={3}
                  value={formData.expectedResults}
                  onChange={handleChange}
                  placeholder="Ex: Réduire le temps de traitement, améliorer la satisfaction client..."
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="preferredDate" className="block text-sm font-sora font-medium text-gray-300 mb-2">
                    Date préférée
                  </label>
                  <input
                    type="date"
                    id="preferredDate"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="preferredTime" className="block text-sm font-sora font-medium text-gray-300 mb-2">
                    Horaire préféré
                  </label>
                  <select
                    id="preferredTime"
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Sélectionner</option>
                    <option value="9h-12h">Matin (9h-12h)</option>
                    <option value="14h-17h">Après-midi (14h-17h)</option>
                    <option value="flexible">Flexible</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-sora font-medium text-gray-300 mb-2">
                  Message complémentaire
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Autres informations que vous souhaitez partager..."
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition-colors font-medium"
                >
                  Réserver mon audit gratuit
                </button>
              </div>
            </form>
          </div>

          {/* Informations complémentaires */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Calendar className="h-8 w-8 text-blue-400 mx-auto mb-4" />
              <h3 className="text-lg font-sora font-semibold text-white mb-2">Flexible</h3>
              <p className="font-manrope text-gray-300">Nous nous adaptons à votre emploi du temps</p>
            </div>
            <div className="text-center">
              <MessageSquare className="h-8 w-8 text-blue-400 mx-auto mb-4" />
              <h3 className="text-lg font-sora font-semibold text-white mb-2">Personnalisé</h3>
              <p className="font-manrope text-gray-300">Audit adapté à vos besoins spécifiques</p>
            </div>
            <div className="text-center">
              <CheckCircle className="h-8 w-8 text-blue-400 mx-auto mb-4" />
              <h3 className="text-lg font-sora font-semibold text-white mb-2">Actionnable</h3>
              <p className="font-manrope text-gray-300">Recommandations concrètes et réalisables</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookAppointment;