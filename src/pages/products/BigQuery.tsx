// src/pages/products/BigQuery.tsx
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import CallToActionBlock from "../../components/CallToActionBlock";
import { ArrowLeft } from "lucide-react";
import {useEffect} from "react" 
const BigQuery = () => { 
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
          <img src="/src/assets/logos/BigQuery.png" alt="BigQuery" className="w-20 h-20 rounded-xl shadow-md" />
          <h1 className="text-4xl font-sora font-bold">BigQuery</h1>
        </div>

        {/* Description principale */}
        <p className="text-lg leading-relaxed mb-12 font-manrope">
         Google BigQuery est une solution d’entrepôt de données cloud entièrement gérée, conçue pour traiter et analyser de très grands volumes de données en temps réel. En s’appuyant sur l’infrastructure de Google Cloud, BigQuery permet aux entreprises d’exécuter des requêtes SQL complexes sur des milliards de lignes en quelques secondes, sans avoir à gérer de serveurs ou d’infrastructures physiques.

BigQuery est idéal pour les organisations cherchant à centraliser leurs données issues de multiples sources (CRM, ERP, plateformes e-commerce, applications internes) afin de créer des analyses approfondies et des tableaux de bord décisionnels. Il s’intègre naturellement avec d’autres services Google Cloud (Looker, Data Studio, Vertex AI) et peut être connecté à des outils tiers via API. Notre agence met en place des pipelines automatisés pour alimenter BigQuery, garantissant des données toujours à jour et exploitables pour vos besoins d’analyse, reporting et machine learning.

 
        </p>

        {/* Use cases */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">  
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/20">
            <h2 className="text-xl font-sora font-semibold mb-2">Tableaux de bord marketing unifiés</h2>
            <p className="text-sm font-manrope">Agrégation automatique des données issues de campagnes publicitaires (Google Ads, Meta, TikTok) et génération de rapports consolidés pour suivre les performances en temps réel.</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/20">
            <h2 className="text-xl font-sora font-semibold mb-2">Prévisions financières automatisées</h2>
            <p className="text-sm font-manrope">Stockage et analyse des transactions comptables et bancaires pour produire des projections financières et des rapports budgétaires dynamiques.</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/20">
            <h2 className="text-xl font-sora font-semibold mb-2">Analyse avancée de données clients</h2>
            <p className="text-sm font-manrope">Centralisation des informations issues des ventes, du support et du CRM pour segmenter les clients, identifier les comportements et déclencher des actions marketing ciblées.

</p>
          </div>
        </div> 
        </div>
    </section>
  <CallToActionBlock />
  </div>
  ); 
};

export default BigQuery;