// src/pages/products/Llama.tsx
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import CallToActionBlock from "../../components/CallToActionBlock";
import { ArrowLeft } from "lucide-react";
import llamaLogo from "../../assets/logos/Llama.png";
import {useEffect} from "react" 
const Llama = () => { 
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
          <img src={llamaLogo} alt="Llama" className="w-20 h-20 rounded-xl shadow-md" />
          <h1 className="text-4xl font-sora font-bold">Llama</h1>
        </div>

        {/* Description principale */}
        <p className="text-lg leading-relaxed mb-12 font-manrope">
          LLaMA (Large Language Model Meta AI) est une famille de modèles de langage développée par Meta, conçue pour fournir des performances avancées tout en restant optimisée pour une utilisation en entreprise. Contrairement à d’autres modèles de grande taille, LLaMA se distingue par son efficacité et sa flexibilité : il peut être déployé localement ou sur le cloud, offrant un contrôle total sur la confidentialité et la personnalisation des données.

Pour les entreprises, LLaMA est particulièrement adapté à la création d’agents IA spécialisés, à la génération de contenu multilingue ou à l’analyse automatisée de grandes quantités de données. Il s’intègre facilement dans des workflows utilisant des frameworks comme LangChain ou des orchestrateurs comme n8n ou Zapier, permettant d’automatiser des processus complexes (réponses clients, résumés de documents, analyse de feedbacks).

Notre agence peut entraîner et intégrer LLaMA selon vos besoins spécifiques, en optimisant le modèle pour vos données internes et en l’associant à vos systèmes existants (CRM, bases de données, outils collaboratifs).
        </p>

        {/* Use cases */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">  
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/20">
            <h2 className="text-xl font-sora font-semibold mb-2">Assistant interne multilingue</h2>
            <p className="text-sm font-manrope">Déploiement d’un chatbot interne basé sur LLaMA capable de répondre en plusieurs langues aux questions des employés sur les procédures, documents ou bases de connaissances internes.</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/20">
            <h2 className="text-xl font-sora font-semibold mb-2">Analyse automatisée de feedback client</h2>
            <p className="text-sm font-manrope">Traitement des avis clients en masse pour détecter les tendances, catégoriser les problèmes et générer des rapports d’amélioration pour les équipes produit.</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/20">
            <h2 className="text-xl font-sora font-semibold mb-2">Rédaction et personnalisation de contenu marketing</h2>
            <p className="text-sm font-manrope">Automatisation de la création de campagnes marketing personnalisées (emails, posts réseaux sociaux) en fonction des profils clients et de leurs préférences.

</p>
          </div>
        </div> 
        </div>
    </section>
  <CallToActionBlock />
  </div>
  ); 
};

export default Llama;