// src/pages/products/Sellsy.tsx
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import CallToActionBlock from "../../components/CallToActionBlock";
import { ArrowLeft } from "lucide-react";
import sellsyLogo from "../../assets/logos/Logo_Sellsy.png";
import {useEffect} from "react" 
const Sellsy = () => { 
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
         <img src={sellsyLogo} alt="Sellsy" className="w-20 h-20 rounded-xl shadow-md" />
          <h1 className="text-4xl font-sora font-bold">Sellsy</h1>
        </div>

        {/* Description principale */}
        <p className="text-lg leading-relaxed mb-12 font-manrope">
          Sellsy est une plateforme CRM et ERP française tout-en-un qui permet aux entreprises de centraliser leur gestion commerciale, de la prospection à la facturation. Elle propose des fonctionnalités couvrant la gestion des ventes, le suivi des prospects et clients, la facturation, la gestion des devis et même la gestion des stocks. Sellsy se distingue par sa capacité à unifier plusieurs processus critiques dans une interface unique, tout en s’intégrant avec de nombreux outils tiers comme Slack, Google Workspace ou encore des passerelles de paiement.

Pour les entreprises souhaitant automatiser leurs processus, Sellsy devient un véritable hub opérationnel. Il facilite la synchronisation entre les départements marketing, commercial et financier, tout en réduisant les tâches manuelles grâce à des automatisations ciblées (mises à jour de leads, relances automatiques, génération de documents). Notre agence configure et connecte Sellsy à vos outils SaaS existants pour fluidifier votre cycle de vente et améliorer la productivité des équipes tout en offrant une vision globale des performances.
        </p>

        {/* Use cases */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">  
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/20">
            <h2 className="text-xl font-sora font-semibold mb-2">Relances clients automatisées</h2>
            <p className="text-sm font-manrope">Connexion de Sellsy à un outil d’emailing (Mailchimp, Brevo) pour envoyer automatiquement des rappels personnalisés lorsque des devis restent sans réponse ou qu’une facture arrive à échéance.</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/20">
            <h2 className="text-xl font-sora font-semibold mb-2">Synchronisation commerciale et comptable</h2>
            <p className="text-sm font-manrope">Intégration de Sellsy avec un logiciel de comptabilité pour que chaque vente ou facture générée soit automatiquement transmise au service financier, évitant les ressaisies et erreurs humaines.</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/20">
            <h2 className="text-xl font-sora font-semibold mb-2">Gestion des leads multi-sources</h2>
            <p className="text-sm font-manrope">Automatisation de la création de leads dans Sellsy à partir de formulaires web, publicités Facebook/LinkedIn et campagnes emailing, permettant un suivi centralisé et immédiat des prospects entrants.</p>
          </div>
        </div> 
        </div>
    </section>
  <CallToActionBlock />
  </div>
  ); 
};

export default Sellsy;