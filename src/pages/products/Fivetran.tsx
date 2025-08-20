// src/pages/products/Fivetran.tsx
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import CallToActionBlock from "../../components/CallToActionBlock";
import { ArrowLeft } from "lucide-react";
import fivetranLogo from "../../assets/logos/fivetran.png";
import {useEffect} from "react" 
const Fivetran = () => { 
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
          <img src={fivetranLogo} alt="Fivetran" className="w-20 h-20 rounded-xl shadow-md" />
          <h1 className="text-4xl font-sora font-bold">Fivetran</h1>
        </div>

        {/* Description principale */}
        <p className="text-lg leading-relaxed mb-12 font-manrope">
         Fivetran est une solution ETL/ELT managée qui permet de connecter et synchroniser automatiquement des données issues de multiples sources (CRM, ERP, e-commerce, marketing, bases SQL…) vers des entrepôts de données tels que BigQuery, Snowflake ou Redshift. Contrairement à des solutions open-source comme Airbyte, Fivetran se distingue par sa simplicité d’utilisation et sa maintenance entièrement gérée : aucune infrastructure à héberger, mises à jour automatiques des connecteurs et surveillance continue des flux de données.

Avec Fivetran, les entreprises peuvent centraliser leurs données en temps réel sans effort technique important et les rendre exploitables pour des analyses ou des modèles IA. Grâce à son approche “no-code” et son intégration avec des outils BI (Looker, Tableau, Power BI), il accélère le déploiement de tableaux de bord et reporting automatisés. Notre agence configure Fivetran pour mettre en place des pipelines fiables, optimiser les coûts et garantir la conformité des données avec les exigences légales (RGPD, souveraineté des données). 
        </p>

        {/* Use cases */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">  
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/20">
            <h2 className="text-xl font-sora font-semibold mb-2">Centralisation des données marketing</h2>
            <p className="text-sm font-manrope">Rassembler les données publicitaires (Google Ads, Facebook Ads, TikTok) et les synchroniser automatiquement vers un data warehouse pour analyser la performance multi-canal.</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/20">
            <h2 className="text-xl font-sora font-semibold mb-2">Reporting financier consolidé</h2>
            <p className="text-sm font-manrope">Synchroniser les données comptables (QuickBooks, Stripe, banques) vers un entrepôt pour générer des rapports financiers en temps réel et automatiser les prévisions budgétaires.</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/20">
            <h2 className="text-xl font-sora font-semibold mb-2">Suivi produit et expérience client</h2>
            <p className="text-sm font-manrope">Connecter les données e-commerce (Shopify, Zendesk) pour analyser les comportements clients et détecter rapidement les problèmes liés aux commandes ou retours.

</p>
          </div>
        </div> 
        </div>
    </section>
  <CallToActionBlock />
  </div>
  ); 
};

export default Fivetran;