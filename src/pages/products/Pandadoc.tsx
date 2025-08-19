// src/pages/products/Pandadoc.tsx
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import CallToActionBlock from "../../components/CallToActionBlock";
import { ArrowLeft } from "lucide-react";
import {useEffect} from "react" 
const Pandadoc = () => { 
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
          <img src="/src/assets/logos/pandadoc.png" alt="Pandadoc" className="w-20 h-20 rounded-xl shadow-md" />
          <h1 className="text-4xl font-sora font-bold">Pandadoc</h1>
        </div>

        {/* Description principale */}
        <p className="text-lg leading-relaxed mb-12 font-manrope">
          PandaDoc est une plateforme dédiée à la création, gestion et signature électronique de documents commerciaux. Elle simplifie l’élaboration de propositions, devis, contrats ou formulaires grâce à une interface intuitive et des modèles personnalisables. Les documents peuvent être signés en ligne de manière sécurisée, réduisant considérablement les délais de traitement et éliminant la paperasse.

Pour les entreprises, PandaDoc devient un levier stratégique d’automatisation : il se connecte directement à des CRM (HubSpot, Salesforce), des solutions de facturation ou des plateformes d’automatisation (n8n, Zapier). Ainsi, l’émission et le suivi des documents peuvent être déclenchés automatiquement lors d’événements clés, comme l’ajout d’un nouveau client ou la validation d’une opportunité commerciale.

Notre agence peut intégrer PandaDoc dans votre écosystème SaaS et créer des workflows sur mesure : génération de documents à partir des données CRM, suivi des signatures en temps réel et mise à jour automatique des bases clients.
        </p>

        {/* Use cases */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">  
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/20">
            <h2 className="text-xl font-sora font-semibold mb-2">Création automatique de devis</h2>
            <p className="text-sm font-manrope">Dès qu’un lead atteint une certaine étape dans le CRM, un devis personnalisé est généré via PandaDoc et envoyé directement au prospect pour signature.</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/20">
            <h2 className="text-xl font-sora font-semibold mb-2">Signature électronique intégrée au processus RH</h2>
            <p className="text-sm font-manrope">Les contrats d’embauche ou avenants sont préparés et envoyés automatiquement aux nouveaux collaborateurs, avec suivi en temps réel de l’avancement des signatures.

</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/20">
            <h2 className="text-xl font-sora font-semibold mb-2">Suivi des contrats et relances automatisées</h2>
            <p className="text-sm font-manrope">Lorsqu’un contrat reste non signé au-delà d’une certaine date, une relance automatique est envoyée au client et une notification est transmise à l’équipe commerciale.</p>
          </div>
        </div> 
        </div>
    </section>
  <CallToActionBlock />
  </div>
  ); 
};

export default Pandadoc;