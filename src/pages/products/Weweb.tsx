// src/pages/products/Weweb.tsx
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import CallToActionBlock from "../../components/CallToActionBlock";
import { ArrowLeft } from "lucide-react";
import {useEffect} from "react" 
const Weweb = () => { 
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
          <img src="/src/assets/logos/Weweb.png" alt="Weweb" className="w-20 h-20 rounded-xl shadow-md" />
          <h1 className="text-4xl font-sora font-bold">Weweb</h1>
        </div>

        {/* Description principale */}
        <p className="text-lg leading-relaxed mb-12 font-manrope">
         WeWeb est une plateforme no-code spécialisée dans la création d’applications web hautement personnalisables et performantes. Contrairement à d’autres outils no-code plus rigides, WeWeb permet une liberté totale sur le design et les interactions, tout en se connectant facilement à des bases de données et API externes (comme Supabase, Airtable ou des endpoints personnalisés).

Son atout majeur réside dans sa flexibilité et sa rapidité de déploiement : les entreprises peuvent concevoir des applications web ou portails clients complexes sans compétences en développement, tout en conservant une logique de données centralisées et sécurisées. Intégré avec n8n, WeWeb devient un point d’entrée visuel pour des workflows automatisés, permettant d’afficher, collecter et synchroniser des informations en temps réel dans un écosystème SaaS déjà en place. Notre agence configure et connecte WeWeb pour créer des interfaces sur mesure intégrées dans des processus métiers automatisés, favorisant la productivité et la scalabilité. 
        </p>

        {/* Use cases */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">  
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/20">
            <h2 className="text-xl font-sora font-semibold mb-2">Portail client sur mesure</h2>
            <p className="text-sm font-manrope">Création d’un espace client connecté en temps réel à Supabase ou Airtable, affichant l’état des commandes, factures et documents, mis à jour automatiquement via n8n.</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/20">
            <h2 className="text-xl font-sora font-semibold mb-2"> Application interne pour la gestion des stocks</h2>
            <p className="text-sm font-manrope">Mise en place d’une interface WeWeb pour suivre les niveaux de stock, déclencher des réapprovisionnements automatiques et générer des alertes vers Slack ou email.</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/20">
            <h2 className="text-xl font-sora font-semibold mb-2">Dashboard interactif multi-sources</h2>
            <p className="text-sm font-manrope">Construction d’un tableau de bord qui compile des données marketing, ventes et support depuis plusieurs API, avec synchronisation automatique des données pour une prise de décision en temps réel.</p>
          </div>
        </div> 
        </div>
    </section>
  <CallToActionBlock />
  </div>
  ); 
};

export default Weweb;