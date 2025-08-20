// src/pages/products/Jotform.tsx
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import CallToActionBlock from "../../components/CallToActionBlock";
import { ArrowLeft } from "lucide-react";
import jotformLogo from "../../assets/logos/jotform.png";
import {useEffect} from "react" 
const Jotform = () => { 
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
          <img src={jotformLogo} alt="Jotform" className="w-20 h-20 rounded-xl shadow-md" />
          <h1 className="text-4xl font-sora font-bold">Jotform</h1>
        </div>

        {/* Description principale */}
        <p className="text-lg leading-relaxed mb-12 font-manrope">
        Jotform est une plateforme de création de formulaires en ligne permettant aux entreprises de collecter et de gérer facilement des données issues de clients, prospects ou collaborateurs. Avec son interface drag-and-drop, il est possible de concevoir des formulaires personnalisés (inscriptions, sondages, demandes de devis, questionnaires RH) sans aucune compétence technique.

Ce qui rend Jotform particulièrement puissant dans une stratégie d’automatisation, c’est sa capacité d’intégration avec des outils tiers (CRM, bases de données, solutions de paiement, Google Drive, Airtable…) et son API. Une fois connecté via Zapier, n8n ou directement par webhooks, Jotform devient une porte d’entrée pour alimenter vos systèmes : les données collectées peuvent être stockées, traitées par une IA, puis utilisées pour déclencher des actions (envoi d’emails, génération de documents, notifications d’équipes). Notre agence configure ces intégrations pour transformer vos formulaires en véritables déclencheurs automatisés et fiables.  
        </p>

        {/* Use cases */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">  
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/20">
            <h2 className="text-xl font-sora font-semibold mb-2">Collecte automatisée de leads commerciaux</h2>
            <p className="text-sm font-manrope">Les soumissions de formulaires sont envoyées en temps réel dans HubSpot ou Airtable, déclenchant un workflow de qualification et un email de suivi automatique.

</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/20">
            <h2 className="text-xl font-sora font-semibold mb-2">Gestion des demandes internes (RH, IT)</h2>
            <p className="text-sm font-manrope">Les formulaires de demande de congés ou d’assistance technique créent automatiquement des tickets dans votre outil de gestion interne (ex : Jira, Slack).

</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/20">
            <h2 className="text-xl font-sora font-semibold mb-2">Inscription à des événements ou webinaires</h2>
            <p className="text-sm font-manrope">Les participants s’inscrivent via Jotform, les données sont synchronisées avec Google Calendar et un email de confirmation automatisé leur est envoyé.</p>
          </div>
        </div> 
        </div>
    </section>
  <CallToActionBlock />
  </div>
  ); 
};

export default Jotform;