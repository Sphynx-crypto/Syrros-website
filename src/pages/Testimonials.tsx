import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Quote, ArrowRight, Building, TrendingUp, Clock, Users } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Marie Dubois",
      role: "CEO",
      company: "TechStart",
      logo: "TS",
      content: "Grâce à SYRROS, nous avons automatisé 80% de notre support client. Le temps de réponse est passé de 4 heures à 15 minutes. Un gain de temps incroyable qui nous permet de nous concentrer sur l'innovation !",
      rating: 5,
      results: "80% de support automatisé",
      industry: "SaaS"
    },
    {
      name: "Pierre Martin",
      role: "Directeur Opérations",
      company: "InnovCorp",
      logo: "IC",
      content: "L'intégration avec nos outils existants s'est faite en douceur. L'équipe SYRROS est très professionnelle et à l'écoute. Nos processus sont maintenant 3 fois plus rapides.",
      rating: 5,
      results: "3x plus rapide",
      industry: "Industrie"
    },
    {
      name: "Sarah Johnson",
      role: "CMO",
      company: "GrowthLab",
      logo: "GL",
      content: "ROI positif dès le premier mois ! L'automatisation de nos campagnes marketing nous a permis d'augmenter notre efficacité de 150%. Je recommande vivement SYRROS.",
      rating: 5,
      results: "+150% d'efficacité",
      industry: "Marketing"
    },
    {
      name: "Thomas Leroy",
      role: "Fondateur",
      company: "E-Smart",
      logo: "ES",
      content: "Impressionné par la qualité du travail. Notre chatbot traite maintenant 90% des demandes clients automatiquement. L'équipe nous a accompagnés du début à la fin.",
      rating: 5,
      results: "90% de demandes automatisées",
      industry: "E-commerce"
    },
    {
      name: "Julie Moreau",
      role: "DRH",
      company: "People First",
      logo: "PF",
      content: "L'automatisation de notre processus de recrutement nous fait gagner 20 heures par semaine. Plus de temps pour se concentrer sur l'humain. Exactement ce que nous cherchions !",
      rating: 5,
      results: "20h/semaine économisées",
      industry: "RH"
    },
    {
      name: "David Chen",
      role: "CTO",
      company: "DataFlow",
      logo: "DF",
      content: "Solution technique impeccable. L'intégration avec notre infrastructure existante a été parfaite. Nos développeurs peuvent maintenant se concentrer sur l'innovation.",
      rating: 5,
      results: "Intégration parfaite",
      industry: "Tech"
    }
  ];

  const caseStudies = [
    {
      company: "TechStart",
      industry: "SaaS",
      challenge: "Gestion manuelle de 500+ tickets de support par jour",
      solution: "Chatbot IA + automatisation des réponses fréquentes",
      results: {
        timeReduction: "80%",
        responseTime: "15 minutes",
        satisfaction: "+25%",
        cost: "-60%"
      }
    },
    {
      company: "InnovCorp",
      industry: "Industrie",
      challenge: "Processus de validation client trop lent (5 jours)",
      solution: "Workflow automatisé avec approbations intelligentes",
      results: {
        timeReduction: "95%",
        responseTime: "2 heures",
        satisfaction: "+40%",
        cost: "-50%"
      }
    },
    {
      company: "GrowthLab",
      industry: "Marketing",
      challenge: "Gestion manuelle des campagnes multi-canaux",
      solution: "Automatisation complète du marketing automation",
      results: {
        timeReduction: "70%",
        responseTime: "Temps réel",
        satisfaction: "+35%",
        cost: "-45%"
      }
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-[#4382B1]/20 to-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-sora font-bold text-white mb-6">
              Témoignages Clients
            </h1>
            <p className="text-xl font-manrope text-gray-300 max-w-3xl mx-auto">
              Découvrez comment nos clients ont transformé leur entreprise grâce à nos solutions 
              d'automatisation IA et les résultats concrets qu'ils ont obtenus.
            </p>
          </div>
        </div>
      </section>

      {/* Témoignages principaux */}
      <section className="py-16 bg-gradient-to-b from-gray-900 via-gray-800 to-[#4382B1]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-900 p-6 rounded-lg hover:bg-gray-700 transition-colors">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.logo}
                  </div>
                  <div>
                    <h3 className="font-sora text-white font-semibold">{testimonial.name}</h3>
                    <p className="font-manrope text-gray-400 text-sm">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>
                
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <div className="relative mb-4">
                  <Quote className="h-6 w-6 text-blue-400 mb-2" />
                  <p className="font-manrope text-gray-300 italic">{testimonial.content}</p>
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                  <span className="font-sora text-blue-400 font-medium">{testimonial.results}</span>
                  <span className="font-manrope text-gray-400 text-sm">{testimonial.industry}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cas d'étude détaillés */}
      <section className="py-16 bg-gradient-to-b from-[#4382B1]/10 via-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-sora font-semibold text-white mb-4">
              Cas d'Étude Détaillés
            </h2>
            <p className="text-xl font-manrope text-gray-300">
              Découvrez les transformations concrètes réalisées pour nos clients
            </p>
          </div>
          
          <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <div className="flex items-center mb-6">
                      <Building className="h-8 w-8 text-blue-400 mr-3" />
                      <div>
                        <h3 className="text-2xl font-sora font-semibold text-white">{study.company}</h3>
                        <p className="font-manrope text-gray-400">{study.industry}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-sora text-red-400 font-semibold mb-2">Problème initial</h4>
                        <p className="font-manrope text-gray-300">{study.challenge}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-sora text-blue-400 font-semibold mb-2">Solution SYRROS</h4>
                        <p className="font-manrope text-gray-300">{study.solution}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-900 p-6 rounded-lg">
                    <h4 className="font-sora text-green-400 font-semibold mb-6 text-center">Résultats obtenus</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center">
                        <div className="text-2xl font-sora font-bold text-green-400 mb-1">
                          {study.results.timeReduction}
                        </div>
                        <div className="font-manrope text-gray-300 text-sm">Réduction du temps</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-sora font-bold text-green-400 mb-1">
                          {study.results.responseTime}
                        </div>
                        <div className="font-manrope text-gray-300 text-sm">Temps de réponse</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-sora font-bold text-green-400 mb-1">
                          {study.results.satisfaction}
                        </div>
                        <div className="font-manrope text-gray-300 text-sm">Satisfaction client</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-sora font-bold text-green-400 mb-1">
                          {study.results.cost}
                        </div>
                        <div className="font-manrope text-gray-300 text-sm">Réduction des coûts</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistiques globales */}
      <section className="py-16 bg-gradient-to-b from-gray-900 via-[#4382B1]/15 to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-sora font-semibold text-white mb-4">
              Nos Résultats en Chiffres
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-gray-900 p-6 rounded-lg">
                <TrendingUp className="h-8 w-8 text-blue-400 mx-auto mb-4" />
                <div className="text-3xl font-sora font-bold text-white mb-2">75%</div>
                <div className="font-manrope text-gray-300">Gain de productivité moyen</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-gray-900 p-6 rounded-lg">
                <Clock className="h-8 w-8 text-blue-400 mx-auto mb-4" />
                <div className="text-3xl font-sora font-bold text-white mb-2">15min</div>
                <div className="font-manrope text-gray-300">Temps de réponse moyen</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-gray-900 p-6 rounded-lg">
                <Users className="h-8 w-8 text-blue-400 mx-auto mb-4" />
                <div className="text-3xl font-sora font-bold text-white mb-2">99%</div>
                <div className="font-manrope text-gray-300">Clients satisfaits</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-gray-900 p-6 rounded-lg">
                <Star className="h-8 w-8 text-blue-400 mx-auto mb-4" />
                <div className="text-3xl font-sora font-bold text-white mb-2">4.9/5</div>
                <div className="font-manrope text-gray-300">Note moyenne</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#4382B1] via-[#326273] to-[#4382B1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-sora font-semibold text-white mb-4">
            Vous aussi, obtenez des résultats similaires
          </h2>
          <p className="text-xl font-manrope text-blue-100 mb-8">
            Rejoignez nos clients satisfaits et transformez votre entreprise avec l'automatisation IA
          </p>
          <Link
            to="/rendez-vous"
            className="inline-flex items-center px-8 py-3 bg-white text-blue-600 text-lg font-medium rounded-lg hover:bg-gray-100 transition-colors"
          >
            Je veux un résultat similaire
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;