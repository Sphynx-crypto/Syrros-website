// src/pages/products/Zendesk.tsx
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import CallToActionBlock from "../../components/CallToActionBlock";
import { ArrowLeft } from "lucide-react";
import zendeskLogo from "../../assets/logos/Zendesk.png";
import {useEffect} from "react" 
const Zendesk = () => { 
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
         <img src={zendeskLogo} alt="Zendesk" className="w-20 h-20 rounded-xl shadow-md" />
          <h1 className="text-4xl font-sora font-bold">Zendesk</h1>
        </div>

        {/* Description principale */}
        <p className="text-lg leading-relaxed mb-12 font-manrope">
        Zendesk est une plateforme de service client et de support qui aide les entreprises à centraliser et automatiser la gestion des tickets, des conversations et des demandes clients. Conçu pour améliorer l’expérience utilisateur, Zendesk regroupe plusieurs canaux de communication (email, chat, téléphone, réseaux sociaux) dans une interface unifiée et propose des outils de suivi, reporting et automatisation.

Ses fonctionnalités incluent la création automatique de tickets, la priorisation intelligente des demandes, des workflows personnalisables et des rapports détaillés sur la performance du support. Relié à n8n, Zendesk devient un pivot pour automatiser des processus complexes : mise à jour des CRM après résolution d’un ticket, envoi d’alertes dans Slack, ou encore génération automatique de réponses basées sur des modèles IA. Notre agence configure et intègre Zendesk pour fluidifier vos interactions clients et optimiser la réactivité de vos équipes support.

  
        </p>

        {/* Use cases */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">  
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/20">
            <h2 className="text-xl font-sora font-semibold mb-2"> Centralisation des tickets multi-canaux</h2>
            <p className="text-sm font-manrope">Toutes les demandes issues d’email, chat et réseaux sociaux sont transformées en tickets Zendesk, automatiquement catégorisées et attribuées au bon agent via des règles définies dans n8n.</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/20">
            <h2 className="text-xl font-sora font-semibold mb-2">Alertes internes automatisées</h2>
            <p className="text-sm font-manrope">Lorsqu’un ticket urgent est créé (ex : incident critique), une alerte est envoyée en temps réel à un canal Slack ou par SMS aux responsables, déclenchant un workflow d’escalade automatisé.

</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/20">
            <h2 className="text-xl font-sora font-semibold mb-2">Mise à jour automatique du CRM</h2>
            <p className="text-sm font-manrope">Chaque ticket résolu synchronise automatiquement les informations dans le CRM (comme Sellsy ou HubSpot) pour garder l’historique client complet et à jour sans double saisie.

</p>
          </div>
        </div> 
        </div>
    </section>
  <CallToActionBlock />
  </div>
  ); 
};

export default Zendesk;