// src/pages/products/NotebookLM.tsx
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import CallToActionBlock from "../../components/CallToActionBlock";
import { ArrowLeft } from "lucide-react";
import {useEffect} from "react" 
const NotebookLM = () => { 
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
          <img src="/src/assets/logos/notebooklm.png" alt="NotebookLM" className="w-20 h-20 rounded-xl shadow-md" />
          <h1 className="text-4xl font-sora font-bold">NotebookLM</h1>
        </div>

        {/* Description principale */}
        <p className="text-lg leading-relaxed mb-12 font-manrope">
          NotebookLM est un outil d’intelligence artificielle développé par Google qui permet de transformer des notes, documents et sources diverses en un assistant de recherche personnalisé. Il s’appuie sur les modèles de langage avancés de Google pour analyser vos contenus, en extraire les points clés et générer des synthèses, questions-réponses ou résumés adaptés à vos besoins.

Pour les entreprises, NotebookLM est idéal pour centraliser et exploiter la connaissance interne : notes de réunions, comptes rendus de projets, rapports clients ou bases documentaires peuvent être transformés en un assistant intelligent accessible à toute l’équipe. Intégré à d’autres outils SaaS (Drive, Notion, Slack), il devient une composante essentielle d’un workflow automatisé pour accélérer la prise de décision et améliorer la collaboration.

Notre agence peut intégrer NotebookLM dans vos systèmes existants, en connectant vos bases de données internes et en configurant des scénarios automatisés (alertes, génération de résumés, mise à jour de CRM).


        </p>

        {/* Use cases */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">  
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/20">
            <h2 className="text-xl font-sora font-semibold mb-2">Assistant de réunion intelligent</h2>
            <p className="text-sm font-manrope">Transformation automatique des comptes rendus de réunions en résumés clairs et extraction des actions à entreprendre, envoyées directement aux équipes concernées via Slack ou email.</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/20">
            <h2 className="text-xl font-sora font-semibold mb-2">Base de connaissances interne augmentée
</h2>
            <p className="text-sm font-manrope">Création d’une FAQ intelligente alimentée par vos documents internes pour permettre aux collaborateurs de poser des questions et obtenir des réponses précises en temps réel.</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/20">
            <h2 className="text-xl font-sora font-semibold mb-2">Briefings clients automatisés</h2>
            <p className="text-sm font-manrope">Génération de fiches synthétiques personnalisées pour chaque client (historique, projets en cours, besoins) à partir des notes et documents partagés dans Drive ou Notion.

</p>
          </div>
        </div> 
        </div>
    </section>
  <CallToActionBlock />
  </div>
  ); 
};

export default NotebookLM;