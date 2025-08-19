// src/pages/products/Airbyte.tsx
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import CallToActionBlock from "../../components/CallToActionBlock";
import { ArrowLeft } from "lucide-react";
import {useEffect} from "react" 
const Airbyte = () => { 
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
          <img src="/src/assets/logos/airbyte.png" alt="Airbyte" className="w-20 h-20 rounded-xl shadow-md" />
          <h1 className="text-4xl font-sora font-bold">Airbyte</h1>
        </div>

        {/* Description principale */}
        <p className="text-lg leading-relaxed mb-12 font-manrope">
          Airbyte est une plateforme open-source spécialisée dans la gestion et la synchronisation de données entre différentes applications et bases de données. Elle permet aux entreprises de centraliser leurs données dispersées provenant de multiples outils (CRM, ERP, SaaS, bases de données internes) vers un entrepôt unique tel que Snowflake, BigQuery ou Redshift. Grâce à son large catalogue de connecteurs préconstruits et à la possibilité d’en créer sur mesure, Airbyte s’adapte parfaitement aux environnements complexes.

L’un de ses principaux atouts est son automatisation des flux de données : les synchronisations peuvent être planifiées et intégrées dans des workflows existants, garantissant que les informations soient toujours à jour et cohérentes. Pour les entreprises, cela représente un gain de temps considérable et une meilleure fiabilité des analyses.
Notre agence configure Airbyte pour optimiser vos pipelines de données, en assurant une intégration fluide avec vos outils actuels et en automatisant la collecte, la transformation et la mise à jour de vos données stratégiques.
        </p>

        {/* Use cases */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">  
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/20">
            <h1 className="text-xxl font-sora font-bold mb-2"> Cas d'usage </h1>
            <h2 className="text-xl font-sora font-semibold mb-2">Centralisation des données clients pour le marketing</h2>
            <p className="text-sm font-manrope">Synchroniser les données provenant du CRM, des plateformes d’emailing et des réseaux sociaux dans un entrepôt central afin de créer des tableaux de bord marketing unifiés et automatisés.</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/20">
            <h2 className="text-xl font-sora font-semibold mb-2">Suivi financier automatisé</h2>
            <p className="text-sm font-manrope">Connecter les systèmes de facturation, la comptabilité et les transactions bancaires pour fournir en temps réel des rapports financiers consolidés à la direction.</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/20">
            <h2 className="text-xl font-sora font-semibold mb-2">Analyse RH et productivité</h2>
            <p className="text-sm font-manrope">Rassembler automatiquement les données des outils RH (pointage, suivi des performances, absences) et des outils de collaboration pour produire des rapports sur la productivité et anticiper les besoins en ressources humaines.

</p>
          </div>
        </div> 
        </div>
    </section>
  <CallToActionBlock />
  </div>
  ); 
};

export default Airbyte;