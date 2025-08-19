// src/pages/products/Ringover.tsx
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import CallToActionBlock from "../../components/CallToActionBlock";
import { ArrowLeft } from "lucide-react";
import {useEffect} from "react" 
const Ringover = () => { 
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
          <img src="/src/assets/logos/Ringover.png" alt="Ringover" className="w-20 h-20 rounded-xl shadow-md" />
          <h1 className="text-4xl font-sora font-bold">Ringover</h1>
        </div>

        {/* Description principale */}
        <p className="text-lg leading-relaxed mb-12 font-manrope">
          Ringover est une solution de téléphonie cloud conçue pour les entreprises souhaitant centraliser et moderniser leurs communications. Elle permet de gérer les appels entrants et sortants via une interface en ligne ou une application mobile, sans nécessiter d’infrastructure téléphonique complexe. Les fonctionnalités incluent la gestion des numéros internationaux, l’enregistrement des appels, la messagerie vocale, la création de files d’attente personnalisées et l’intégration directe avec des CRM tels que HubSpot, Salesforce ou Pipedrive.

Pour les entreprises cherchant à automatiser leurs processus, Ringover s’impose comme un outil clé : il permet d’analyser les performances des équipes commerciales ou support, de déclencher des workflows automatisés après chaque appel (suivi client, mise à jour CRM) et d’améliorer la collaboration entre services. Notre agence configure et connecte Ringover à votre stack SaaS existante pour transformer la téléphonie en un levier stratégique d’efficacité et de productivité.
        </p>

        {/* Use cases */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">  
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/20">
            <h2 className="text-xl font-sora font-semibold mb-2">Automatisation du suivi commercial</h2>
            <p className="text-sm font-manrope">Chaque appel effectué via Ringover met automatiquement à jour la fiche du client dans le CRM (HubSpot, Salesforce) et déclenche l’envoi d’un email de suivi ou la création d’une tâche pour le commercial.</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/20">
            <h2 className="text-xl font-sora font-semibold mb-2">Support client centralisé et traçable</h2>
            <p className="text-sm font-manrope">Mise en place d’un système où les appels entrants génèrent des tickets dans un outil comme Zendesk ou Freshdesk, avec enregistrement et historisation des échanges pour un meilleur suivi.</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/20">
            <h2 className="text-xl font-sora font-semibold mb-2">Analyse des performances d’équipe</h2>
            <p className="text-sm font-manrope">Création de rapports automatisés connectant Ringover à des tableaux de bord (Notion, Google Data Studio) afin de suivre les KPIs d’appels, la répartition des volumes et l’efficacité des agents en temps réel.

</p>
          </div>
        </div> 
        </div>
    </section>
  <CallToActionBlock />
  </div>
  ); 
};

export default Ringover;