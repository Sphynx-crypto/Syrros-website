// src/pages/products/Slack.tsx
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import CallToActionBlock from "../../components/CallToActionBlock";
import { ArrowLeft } from "lucide-react";
import {useEffect} from "react" 
const Slack = () => { 
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
          <img src="/src/assets/logos/slack.png" alt="Slack" className="w-20 h-20 rounded-xl shadow-md" />
          <h1 className="text-4xl font-sora font-bold">Slack</h1>
        </div>

        {/* Description principale */}
        <p className="text-lg leading-relaxed mb-12 font-manrope">
        Description
Slack est une plateforme de messagerie collaborative qui centralise les communications internes des entreprises. Elle permet aux équipes de travailler en temps réel, de créer des canaux thématiques (par projet, client ou service), d’échanger des fichiers et d’intégrer de nombreux outils tiers comme Google Drive, Trello ou Notion. Grâce à ses API et webhooks, Slack peut devenir bien plus qu’un simple outil de chat : il peut servir de centre de pilotage pour les automatisations en recevant ou en déclenchant des actions dans d’autres applications (alertes, mises à jour, notifications).

Pour les entreprises cherchant à fluidifier leur collaboration, Slack améliore la réactivité des équipes, réduit la dépendance aux emails et offre une traçabilité des échanges. Connecté à des outils d’automatisation comme Make, Zapier ou n8n, Slack devient un hub stratégique pour diffuser des informations critiques (alertes financières, suivi des ventes, incidents techniques) et exécuter des workflows automatisés. Notre agence configure ces intégrations pour transformer Slack en véritable tableau de bord opérationnel adapté à votre organisation.  
        </p>

        {/* Use cases */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">  
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/20">
            <h2 className="text-xl font-sora font-semibold mb-2">Alertes automatisées de performance</h2>
            <p className="text-sm font-manrope">Envoi d’alertes en temps réel dans un canal Slack dédié lorsque certains KPIs (ventes, trafic web, incidents techniques) atteignent un seuil prédéfini, relié à des tableaux de bord analytiques.</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/20">
            <h2 className="text-xl font-sora font-semibold mb-2">Centralisation des tickets support</h2>
            <p className="text-sm font-manrope">Création d’un canal où chaque nouveau ticket généré dans Zendesk ou Freshdesk est publié automatiquement dans Slack, permettant une réaction rapide des équipes support.</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/20">
            <h2 className="text-xl font-sora font-semibold mb-2">Notifications de workflow financier</h2>
            <p className="text-sm font-manrope">Automatisation des notifications lors de nouvelles factures générées dans un ERP ou un CRM (comme Sellsy), avec possibilité de valider ou commenter directement depuis Slack.</p>
          </div>
        </div> 
        </div>
    </section>
  <CallToActionBlock />
  </div>
  ); 
};

export default Slack;