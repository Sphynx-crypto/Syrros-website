// src/pages/products/Anthropic.tsx
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import CallToActionBlock from "../../components/CallToActionBlock";
import { ArrowLeft } from "lucide-react";
import anthropicLogo from "../../assets/logos/anthropic.png";
import {useEffect} from "react" 
const Anthropic = () => { 
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
          <img src={anthropicLogo} alt="Anthropic" className="w-20 h-20 rounded-xl shadow-md" />
          <h1 className="text-4xl font-sora font-bold">Anthropic</h1>
        </div>

        {/* Description principale */}
        <p className="text-lg leading-relaxed mb-12 font-manrope">
          Claude, développé par Anthropic, est un modèle d’intelligence artificielle conversationnelle conçu pour offrir des réponses précises, sûres et alignées sur les besoins des entreprises. Reconnu pour sa capacité à traiter de longs contextes et à maintenir des interactions cohérentes, Claude est particulièrement adapté aux tâches complexes telles que l’analyse documentaire, la rédaction assistée et la gestion de données sensibles.

Grâce à son architecture axée sur la sécurité et l’interprétabilité, Claude se distingue dans les environnements où la fiabilité et la conformité sont essentielles (juridique, finance, santé, etc.). Il peut être intégré dans vos workflows existants via API et combiné à d’autres outils SaaS pour automatiser des processus critiques comme la génération de rapports, la classification de données ou l’assistance client à grande échelle.
Notre agence configure Claude pour vos besoins spécifiques, en l’intégrant à vos systèmes et en créant des scénarios automatisés exploitant ses capacités de traitement avancé du langage et son haut niveau de personnalisation.
        </p>

        {/* Use cases */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">  
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/20">
            <h2 className="text-xl font-sora font-semibold mb-2">Analyse documentaire juridique ou réglementaire</h2>
            <p className="text-sm font-manrope">Automatiser la lecture et la synthèse de contrats ou de textes réglementaires volumineux, et générer des résumés clairs ou des points d’alerte pour les équipes juridiques.</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/20">
            <h2 className="text-xl font-sora font-semibold mb-2">Support client avec gestion de contexte étendu</h2>
            <p className="text-sm font-manrope">Utiliser Claude comme chatbot capable de comprendre l’historique complet des échanges clients afin de fournir des réponses personnalisées et cohérentes sur plusieurs interactions.</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/20">
            <h2 className="text-xl font-sora font-semibold mb-2">Assistance à la rédaction interne</h2>
            <p className="text-sm font-manrope">Faciliter la création de rapports détaillés, notes stratégiques ou comptes rendus de réunion en transformant des données brutes en documents clairs et professionnels.

</p>
          </div>
        </div> 
        </div>
    </section>
  <CallToActionBlock />
  </div>
  ); 
};

export default Anthropic;