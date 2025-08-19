// src/pages/products/Leexi.tsx
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import CallToActionBlock from "../../components/CallToActionBlock";
import { ArrowLeft } from "lucide-react";
import {useEffect} from "react" 
const Leexi = () => { 
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
          <img src="/src/assets/logos/Leexi.png" alt="Leexi" className="w-20 h-20 rounded-xl shadow-md" />
          <h1 className="text-4xl font-sora font-bold">Leexi</h1>
        </div>

        {/* Description principale */}
        <p className="text-lg leading-relaxed mb-12 font-manrope">
         Leexi est une plateforme spécialisée dans l’analyse et l’optimisation des conversations clients, principalement destinée aux équipes commerciales et support. Elle enregistre, transcrit et analyse les appels téléphoniques ou visioconférences afin d’identifier des tendances, détecter les points d’amélioration et améliorer la performance des équipes. Grâce à l’intelligence artificielle, Leexi permet d’extraire des insights précis : mots-clés récurrents, objections fréquentes, taux de conversion par argumentaire, etc.

Son intégration avec des outils CRM (HubSpot, Salesforce) et des plateformes de communication (Zoom, Teams) en fait un allié puissant pour automatiser le suivi des interactions clients. Les données collectées peuvent déclencher des actions automatiques : envoi de résumés, mise à jour des fiches prospects ou alertes en cas d’opportunités détectées.

Notre agence peut configurer et intégrer Leexi dans votre workflow existant, en reliant vos appels à vos outils internes et en créant des tableaux de bord personnalisés pour un suivi clair et actionnable.

 
        </p>

        {/* Use cases */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">  
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/20">
            <h2 className="text-xl font-sora font-semibold mb-2">Analyse des appels de vente en temps réel</h2>
            <p className="text-sm font-manrope">Les appels sont automatiquement transcrits et analysés pour fournir des recommandations immédiates aux commerciaux et améliorer leur taux de closing.</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/20">
            <h2 className="text-xl font-sora font-semibold mb-2">Suivi automatisé des objections clients</h2>
            <p className="text-sm font-manrope">Chaque objection relevée lors des conversations est catégorisée et envoyée au marketing pour adapter les campagnes et créer du contenu pertinent.</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/20">
            <h2 className="text-xl font-sora font-semibold mb-2">Mise à jour automatique du CRM</h2>
            <p className="text-sm font-manrope">Après chaque appel, les informations clés (statut du deal, prochaines étapes) sont automatiquement intégrées dans Salesforce ou HubSpot sans intervention manuelle.</p>
          </div>
        </div> 
        </div>
    </section>
  <CallToActionBlock />
  </div>
  ); 
};

export default Leexi;