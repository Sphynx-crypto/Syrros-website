// src/pages/products/Hubspot.tsx
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import CallToActionBlock from "../../components/CallToActionBlock";
import { ArrowLeft } from "lucide-react";
import {useEffect} from "react" 
const Hubspot = () => { 
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
          <img src="/src/assets/logos/Hubspot.png" alt="Hubspot" className="w-20 h-20 rounded-xl shadow-md" />
          <h1 className="text-4xl font-sora font-bold">Hubspot</h1>
        </div>

        {/* Description principale */}
        <p className="text-lg leading-relaxed mb-12 font-manrope">
         HubSpot est une plateforme CRM (Customer Relationship Management) tout-en-un conçue pour centraliser la gestion des prospects, clients et campagnes marketing. Elle regroupe plusieurs modules : marketing automation, ventes, service client et gestion de contenu. HubSpot permet de suivre l’ensemble du cycle de vie d’un client — de la génération de leads à la fidélisation — tout en offrant une interface intuitive et des rapports détaillés.

Grâce à ses nombreuses intégrations (Slack, Gmail, Google Ads, etc.) et à son API ouverte, HubSpot devient un pivot stratégique dans les workflows automatisés. Combiné à des outils comme n8n, Zapier ou des assistants IA, il peut déclencher des actions (envoi d’emails, mises à jour de données, scoring automatisé des leads) et alimenter d’autres systèmes en temps réel. Notre agence configure et optimise HubSpot pour fluidifier les processus marketing et commerciaux, améliorer la visibilité sur les performances et réduire les tâches manuelles répétitives. 
        </p>

        {/* Use cases */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">  
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/20">
            <h2 className="text-xl font-sora font-semibold mb-2">Automatisation du suivi des leads</h2>
            <p className="text-sm font-manrope">Connecter les formulaires web ou les campagnes publicitaires à HubSpot pour enregistrer automatiquement les nouveaux leads, les qualifier et déclencher un suivi personnalisé par l’équipe commerciale.</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/20">
            <h2 className="text-xl font-sora font-semibold mb-2">Reporting marketing centralisé</h2>
            <p className="text-sm font-manrope">Synchroniser les données des campagnes (Google Ads, Facebook Ads) dans HubSpot pour générer des rapports consolidés et mesurer le retour sur investissement en temps réel.</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/20">
            <h2 className="text-xl font-sora font-semibold mb-2">Service client amélioré</h2>
            <p className="text-sm font-manrope">Automatiser la création de tickets et les réponses de premier niveau grâce à l’intégration d’assistants IA, tout en permettant aux équipes support de se concentrer sur les cas complexes.

</p>
          </div>
        </div> 
        </div>
    </section>
  <CallToActionBlock />
  </div>
  ); 
};

export default Hubspot;