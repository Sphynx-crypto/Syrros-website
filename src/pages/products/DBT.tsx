// src/pages/products/DBT.tsx
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import CallToActionBlock from "../../components/CallToActionBlock";
import { ArrowLeft } from "lucide-react";
import dbtLogo from "../../assets/logos/DBT.png";
import {useEffect} from "react" 
const DBT = () => { 
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
          <img src={dbtLogo} alt="DBT" className="w-20 h-20 rounded-xl shadow-md" />
          <h1 className="text-4xl font-sora font-bold">DBT</h1>
        </div>

        {/* Description principale */}
        <p className="text-lg leading-relaxed mb-12 font-manrope">
          dbt (Data Build Tool) est un outil open-source conçu pour transformer et modéliser des données directement dans votre entrepôt de données (comme BigQuery, Snowflake ou Redshift). Plutôt que d’extraire les données pour les transformer ailleurs, dbt applique les transformations dans le cloud, ce qui améliore la performance et réduit les coûts liés au transfert de données.

Avec dbt, les équipes peuvent écrire des transformations en SQL, les organiser en modèles réutilisables et gérer la logique métier de manière versionnée via Git. Il offre également des fonctionnalités de tests automatisés, documentation et monitoring, garantissant une qualité de données élevée et une meilleure collaboration entre les équipes data et métier.

Intégré à un workflow automatisé, dbt devient un maillon clé dans la chaîne ETL/ELT : Airbyte ou Fivetran alimentent l’entrepôt, dbt transforme les données, et des outils comme Looker ou Tableau exploitent les données finalisées. Notre agence configure et optimise dbt pour créer des pipelines robustes, maintenables et alignés sur vos objectifs analytiques.


        </p>

        {/* Use cases */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">  
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/20">
            <h2 className="text-xl font-sora font-semibold mb-2">Nettoyage et normalisation des données marketing</h2>
            <p className="text-sm font-manrope">Appliquer des règles de nettoyage et de déduplication des leads provenant de plusieurs plateformes publicitaires afin d’obtenir des tableaux de bord cohérents.</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/20">
            <h2 className="text-xl font-sora font-semibold mb-2">Création de modèles financiers réutilisables</h2>
            <p className="text-sm font-manrope">Construire des modèles de marge, de prévisions et de suivi budgétaire directement dans l’entrepôt pour permettre une analyse rapide par la direction.</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/20">
            <h2 className="text-xl font-sora font-semibold mb-2">Industrialisation des analyses RH</h2>
            <p className="text-sm font-manrope">Transformer les données issues des systèmes RH (absences, performances, turnover) pour générer automatiquement des rapports mensuels fiables et prêts à être diffusés.

</p>
          </div>
        </div> 
        </div>
    </section>
  <CallToActionBlock />
  </div>
  ); 
};

export default DBT;