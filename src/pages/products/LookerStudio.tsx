// src/pages/products/LookerStudio.tsx
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import CallToActionBlock from "../../components/CallToActionBlock";
import { ArrowLeft } from "lucide-react";
import lookerStudioLogo from "../../assets/logos/looker-studio.png";
import {useEffect} from "react" 
const LookerStudio = () => { 
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
          <img src={lookerStudioLogo} alt="Looker Studio" className="w-20 h-20 rounded-xl shadow-md" />
          <h1 className="text-4xl font-sora font-bold">Looker Studio</h1>
        </div>

        {/* Description principale */}
        <p className="text-lg leading-relaxed mb-12 font-manrope">
          Looker Studio est une plateforme de visualisation et de reporting développée par Google, permettant de transformer des données brutes en tableaux de bord interactifs et dynamiques. Elle se connecte facilement à une multitude de sources (Google Analytics, BigQuery, Sheets, CRM, bases de données externes) pour centraliser et analyser les indicateurs clés en temps réel.

Pensée pour les équipes marketing, financières et opérationnelles, Looker Studio facilite la prise de décision rapide et éclairée en rendant les données accessibles et compréhensibles pour tous. Ses fonctionnalités de partage et de collaboration permettent aux équipes de travailler sur des rapports actualisés en permanence, réduisant le besoin d’exportations manuelles.

Intégrée dans un processus d’automatisation, Looker Studio devient un pivot stratégique : les données peuvent être mises à jour automatiquement, enrichies via des scripts ou des intégrations (n8n, Zapier) et utilisées pour déclencher des actions comme l’envoi d’alertes ou la génération de rapports périodiques. Notre agence peut concevoir et connecter vos tableaux de bord pour qu’ils s’intègrent parfaitement à votre écosystème SaaS.
        </p>

        {/* Use cases */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">  
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/20">
            <h2 className="text-xl font-sora font-semibold mb-2">Tableaux de bord marketing automatisés</h2>
            <p className="text-sm font-manrope">Centralisation des données publicitaires (Google Ads, Meta Ads, LinkedIn) pour offrir une vue consolidée des performances en temps réel et détecter les campagnes les plus rentables.</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/20">
            <h2 className="text-xl font-sora font-semibold mb-2">Reporting financier en temps réel</h2>
            <p className="text-sm font-manrope">Connexion des données comptables ou transactionnelles pour générer des rapports financiers automatiques, mis à jour sans intervention manuelle.

</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/20">
            <h2 className="text-xl font-sora font-semibold mb-2">Suivi des KPIs opérationnels</h2>
            <p className="text-sm font-manrope">Création de dashboards interactifs pour suivre les performances logistiques, support ou ventes, avec alertes automatiques en cas de dépassement de seuils.</p>
          </div>
        </div> 
        </div>
    </section>
  <CallToActionBlock />
  </div>
  ); 
};

export default LookerStudio;