// src/pages/products/Notion.tsx
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import CallToActionBlock from "../../components/CallToActionBlock";
import { ArrowLeft } from "lucide-react";
import notionLogo from "../../assets/logos/Notion.png";
import {useEffect} from "react" 
const Notion = () => { 
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
         <img src={notionLogo} alt="Notion" className="w-20 h-20 rounded-xl shadow-md" />
          <h1 className="text-4xl font-sora font-bold">Notion</h1>
        </div>

        {/* Description principale */}
        <p className="text-lg leading-relaxed mb-12 font-manrope">
         Notion est une plateforme tout-en-un de gestion de contenu et de collaboration qui combine prise de notes, bases de données, gestion de projet et documentation dans une seule interface flexible. Son atout majeur réside dans sa modularité : chaque équipe peut créer ses propres espaces adaptés à ses besoins (roadmaps, CRM, wiki interne, tableaux de suivi).

Pour les entreprises, Notion devient un hub central où toutes les informations sont organisées et accessibles. Il s’intègre avec de nombreux autres outils (Slack, Google Drive, Airtable, Zapier, n8n) et permet d’automatiser des tâches répétitives : mise à jour des fiches clients, synchronisation des données ou notifications automatisées. Cette flexibilité en fait un outil idéal pour centraliser les flux de travail et améliorer la productivité des équipes.

Notre agence peut construire et intégrer des systèmes complets sur Notion, en connectant vos workflows existants (CRM, marketing, support) et en mettant en place des automatisations qui réduisent le travail manuel et facilitent la collaboration.

 
        </p>

        {/* Use cases */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">  
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/20">
            <h2 className="text-xl font-sora font-semibold mb-2">Gestion centralisée des projets</h2>
            <p className="text-sm font-manrope">Création d’un espace Notion relié à vos outils de communication (Slack, Google Calendar) pour suivre les étapes clés, assigner des tâches et envoyer des rappels automatisés.</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/20">
            <h2 className="text-xl font-sora font-semibold mb-2">Base de connaissances interne dynamique</h2>
            <p className="text-sm font-manrope">Transformation de Notion en wiki d’entreprise alimenté automatiquement par les documents des équipes et mis à jour via des intégrations (Google Drive, CRM).</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/20">
            <h2 className="text-xl font-sora font-semibold mb-2">Suivi automatisé des leads et clients</h2>
            <p className="text-sm font-manrope">Connexion de Notion à vos formulaires et CRM pour créer automatiquement des fiches prospects enrichies et suivre l’évolution du cycle de vente en temps réel.</p>
          </div>
        </div> 
        </div>
    </section>
  <CallToActionBlock />
  </div>
  ); 
};

export default Notion;