// src/pages/products/OpenAI.tsx
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import CallToActionBlock from "../../components/CallToActionBlock";
import { ArrowLeft } from "lucide-react";
import {useEffect} from "react" 
const OpenAI = () => { 
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
          <img src="/src/assets/logos/OpenAI.png" alt="OpenAI" className="w-20 h-20 rounded-xl shadow-md" />
          <h1 className="text-4xl font-sora font-bold">OpenAI - ChatGPT</h1>
        </div>

        {/* Description principale */}
        <p className="text-lg leading-relaxed mb-12 font-manrope">
         ChatGPT est une solution d’intelligence artificielle avancée permettant de générer du texte, automatiser des conversations et assister les entreprises dans de multiples tâches quotidiennes. Basé sur des modèles de langage performants, ChatGPT peut répondre aux clients en temps réel, rédiger des documents professionnels, analyser des données ou encore fournir une assistance interne aux équipes.
Son principal atout réside dans sa polyvalence et sa capacité d’intégration avec d’autres outils SaaS (Slack, Notion, CRM, ERP…), ce qui en fait un élément clé pour automatiser des processus métiers variés. Connecté via API ou intégré dans des workflows automatisés, ChatGPT permet de réduire la charge de travail répétitive, d’accroître la productivité des collaborateurs et d’améliorer l’expérience client grâce à des réponses rapides et personnalisées.
Notre agence configure et adapte ChatGPT pour répondre aux besoins spécifiques de chaque entreprise : intégration dans vos outils existants, création de scénarios automatisés et mise en place de systèmes intelligents adaptés à vos processus internes.
        </p>

        {/* Use cases */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">  
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/20">
            <h2 className="text-xl font-sora font-semibold mb-2">Support client automatisé</h2>
            <p className="text-sm font-manrope">Mise en place d’un chatbot intelligent sur votre site ou application pour répondre instantanément aux questions fréquentes, qualifier les demandes et transférer les cas complexes vers un agent humain.</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/20">
            <h2 className="text-xl font-sora font-semibold mb-2">Génération de documents et rapports</h2>
            <p className="text-sm font-manrope">Automatisation de la rédaction de comptes rendus, emails commerciaux, rapports d’activité ou contenus marketing à partir de données internes déjà disponibles.</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/20">
            <h2 className="text-xl font-sora font-semibold mb-2">Analyse et synthèse des données en temps réel</h2>
            <p className="text-sm font-manrope">ChatGPT peut être connecté à vos bases de données ou tableaux de bord pour fournir des résumés intelligents des indicateurs clés. Par exemple, il peut analyser en continu les tickets du support client et envoyer un rapport clair sur les problèmes récurrents, aidant ainsi les équipes à prioriser les actions correctives.

</p>
          </div>
        </div> 
        </div>
    </section>
  <CallToActionBlock />
  </div>
  ); 
};


export default OpenAI;


