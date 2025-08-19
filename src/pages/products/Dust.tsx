// src/pages/products/Dust.tsx
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import CallToActionBlock from "../../components/CallToActionBlock";
import { ArrowLeft } from "lucide-react";
import {useEffect} from "react" 
const Dust = () => { 
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
          <img src="/src/assets/logos/Dust.png" alt="Dust" className="w-20 h-20 rounded-xl shadow-md" />
          <h1 className="text-4xl font-sora font-bold">Dust</h1>
        </div>

        {/* Description principale */}
        <p className="text-lg leading-relaxed mb-12 font-manrope">
          Dust est une plateforme conçue pour créer, personnaliser et déployer des assistants IA basés sur des modèles de langage (LLM) comme OpenAI ou Anthropic. Contrairement à une simple interface de chatbot, Dust permet aux entreprises de concevoir des workflows IA complexes : connecter plusieurs sources de données internes (Notion, Slack, Google Drive, CRM…), définir des comportements spécifiques et ajuster finement la logique conversationnelle.

Son point fort réside dans sa capacité d’intégration et d’orchestration : Dust sert d’intermédiaire entre les modèles d’IA et vos systèmes métier, facilitant la création d’assistants qui comprennent votre contexte et exécutent des actions concrètes (ex : recherche de documents internes, rédaction de réponses clients, génération de rapports). Notre agence configure Dust pour aligner l’assistant IA sur vos processus, en exploitant vos données tout en respectant les exigences de sécurité et de confidentialité (RGPD).
        </p>

        {/* Use cases */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">  
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/20">
            <h2 className="text-xl font-sora font-semibold mb-2">Assistant interne pour la documentation</h2>
            <p className="text-sm font-manrope">Connecter Dust à votre base de connaissances (Notion, Google Drive) afin que les collaborateurs puissent poser des questions et obtenir des réponses contextualisées en quelques secondes.</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/20">
            <h2 className="text-xl font-sora font-semibold mb-2">Support client intelligent</h2>
            <p className="text-sm font-manrope">Créer un assistant qui comprend les historiques de tickets, suggère des réponses adaptées et peut déclencher des actions (remboursement, envoi de documentation) directement depuis votre CRM.</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/20">
            <h2 className="text-xl font-sora font-semibold mb-2">Analyse et reporting automatisés</h2>
            <p className="text-sm font-manrope">Configurer un workflow où Dust interroge vos données (BigQuery, Airtable) et génère automatiquement des résumés hebdomadaires pour les équipes marketing ou produit.

</p>
          </div>
        </div> 
        </div>
    </section>
  <CallToActionBlock />
  </div>
  ); 
};

export default Dust;