// src/pages/products/Leadbay.tsx
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import CallToActionBlock from "../../components/CallToActionBlock";
import { ArrowLeft } from "lucide-react";
import {useEffect} from "react" 
const Leadbay = () => { 
  const location = useLocation();
  const navigate = useNavigate();
   return (
  <div className="products-background">   
    <section className="relative pt-20 pb-32 max-w-7xl mx-auto text-white">
    
      {location.pathname !== "/" && (
  <button
    onClick={() => navigate(-1)}
    className="absolute top-20 left-1 z-50 flex items-center justify-center px-2 py-1 gap-2 bg-blue-900 hover:bg-blue-700 rounded shadow text-white transition font-manrope"
  >
    <ArrowLeft className="h-4 w-4" />
    <span className = "text-sm">Retour</span>
  </button>
)}

        <div className="px-16 py-12">
        {/* Titre et logo */}
        <div className="flex items-center gap-6 mb-10">
          <img src="/src/assets/logos/Leadbay.png" alt="Leadbay" className="w-20 h-20 rounded-xl shadow-md" />
          <h1 className="text-4xl font-sora font-bold">Leadbay</h1>
        </div>

        {/* Description principale */}
        <p className="text-lg leading-relaxed mb-12 font-manrope">
          Leadbay est une plateforme spécialisée dans la génération et la gestion de leads qualifiés pour les entreprises. Elle permet aux équipes marketing et commerciales d’identifier, centraliser et suivre des prospects provenant de différentes sources (publicités, réseaux sociaux, formulaires web, événements, etc.). Grâce à son tableau de bord intuitif et ses options de segmentation avancées, Leadbay facilite la qualification des leads et optimise les campagnes d’acquisition.

L’un de ses atouts majeurs réside dans sa connectivité avec d’autres outils SaaS : CRM, plateformes emailing, solutions d’automatisation comme n8n ou Zapier. Cela en fait un élément clé dans une stratégie d’automatisation, permettant de déclencher des workflows personnalisés (envoi automatique d’emails, notifications aux commerciaux, enrichissement des fiches prospects) dès qu’un nouveau lead entre dans le système.

Notre agence peut intégrer Leadbay dans votre écosystème existant et créer des scénarios sur mesure pour transformer vos prospects en clients plus rapidement, tout en réduisant le temps passé sur des tâches manuelles.


        </p>

        {/* Use cases */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">  
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/20">
            <h2 className="text-xl font-sora font-semibold mb-2"> Attribution automatique des leads aux commerciaux</h2>
            <p className="text-sm font-manrope">Les leads collectés via Leadbay sont automatiquement répartis entre les commerciaux selon des critères prédéfinis (zone géographique, secteur d’activité, volume d’achat potentiel).

</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/20">
            <h2 className="text-xl font-sora font-semibold mb-2">Nurturing par email automatisé</h2>
            <p className="text-sm font-manrope">Les prospects entrants sont immédiatement intégrés dans une séquence d’emails automatisée via HubSpot ou Mailchimp pour les engager avant un suivi téléphonique.</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/20">
            <h2 className="text-xl font-sora font-semibold mb-2"> Enrichissement et scoring des leads</h2>
            <p className="text-sm font-manrope">Chaque lead est enrichi avec des données supplémentaires (LinkedIn, entreprise, chiffre d’affaires) et reçoit un score automatique pour prioriser les prospects les plus prometteurs.</p>
          </div>
        </div> 
        </div>
    </section>
  <CallToActionBlock />
  </div>
  ); 
};

export default Leadbay;