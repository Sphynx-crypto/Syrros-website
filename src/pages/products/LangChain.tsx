// src/pages/products/LangChain.tsx
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import CallToActionBlock from "../../components/CallToActionBlock";
import { ArrowLeft } from "lucide-react";
import langchainLogo from "../../assets/logos/langchain.png";
import {useEffect} from "react" 
const LangChain = () => { 
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
         <img src={langchainLogo} alt="LangChain" className="w-20 h-20 rounded-xl shadow-md" />
          <h1 className="text-4xl font-sora font-bold">LangChain</h1>
        </div>

        {/* Description principale */}
        <p className="text-lg leading-relaxed mb-12 font-manrope">
         LangChain est un framework open-source conçu pour développer des applications d’intelligence artificielle basées sur les grands modèles de langage (LLM). Il offre une structure modulaire permettant de connecter facilement différents modèles IA (OpenAI, Anthropic, etc.) et des sources de données internes (bases de données, API, documents). Son objectif est de créer des workflows intelligents capables de raisonner, générer du texte, ou interagir avec des systèmes existants.

Pour une entreprise, LangChain constitue une brique essentielle pour l’automatisation avancée : il facilite la création d’agents IA capables de prendre des décisions, de répondre aux clients en temps réel ou d’automatiser la gestion documentaire. L’outil s’intègre parfaitement avec des solutions telles que Notion, Slack, HubSpot ou Airtable, ce qui permet d’orchestrer des scénarios complexes de manière fluide et scalable.

Grâce à notre expertise, nous pouvons concevoir et déployer des solutions sur-mesure avec LangChain, adaptées à vos besoins métiers : de l’analyse de données en temps réel à la génération automatisée de rapports ou d’emails personnalisés. 
        </p>

        {/* Use cases */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">  
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/20">
            <h2 className="text-xl font-sora font-semibold mb-2">Support client automatisé</h2>
            <p className="text-sm font-manrope">Création d’un agent LangChain connecté à votre base de connaissances (FAQ, documentation interne). Il répond aux questions des clients via chat en temps réel sur votre site ou Slack, réduisant la charge des équipes support.</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/20">
            <h2 className="text-xl font-sora font-semibold mb-2">Génération de rapports financiers</h2>
            <p className="text-sm font-manrope">Automatisation de l’analyse des données comptables via LangChain et génération de rapports mensuels en langage naturel, envoyés directement aux responsables financiers.</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/20">
            <h2 className="text-xl font-sora font-semibold mb-2">Recherche documentaire intelligente</h2>
            <p className="text-sm font-manrope">Intégration de LangChain avec vos fichiers internes (Google Drive, Notion) pour permettre une recherche sémantique avancée et fournir des résumés instantanés aux équipes marketing ou R&D.

</p>
          </div>
        </div> 
        </div>
    </section>
  <CallToActionBlock />
  </div>
  ); 
};

export default LangChain;