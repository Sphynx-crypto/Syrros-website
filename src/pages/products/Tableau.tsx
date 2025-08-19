// src/pages/products/Tableau.tsx
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import CallToActionBlock from "../../components/CallToActionBlock";
import { ArrowLeft } from "lucide-react";
import {useEffect} from "react" 
const Tableau = () => { 
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
          <img src="/src/assets/logos/Tableau.png" alt="Tableau" className="w-20 h-20 rounded-xl shadow-md" />
          <h1 className="text-4xl font-sora font-bold">Tableau</h1>
        </div>

        {/* Description principale */}
        <p className="text-lg leading-relaxed mb-12 font-manrope">
          Tableau est une plateforme d’analyse et de visualisation de données leader sur le marché, conçue pour aider les entreprises à transformer leurs données brutes en insights exploitables. Grâce à son interface intuitive et ses puissantes capacités de visualisation, Tableau permet de créer des tableaux de bord interactifs, des rapports dynamiques et des analyses approfondies sans nécessiter de compétences avancées en programmation.

L’un des principaux avantages de Tableau est sa connectivité étendue : il se relie facilement à une multitude de sources de données (bases SQL, fichiers Excel, APIs, services cloud comme Supabase ou Airtable) et peut être intégré dans des workflows automatisés via n8n. Pour les entreprises, cela signifie la possibilité de centraliser l’analyse de données, d’automatiser la mise à jour des dashboards et de diffuser des rapports en temps réel à différents départements. Notre agence configure et connecte Tableau pour transformer vos données en un outil stratégique de prise de décision automatisée et collaborative.


        </p>

        {/* Use cases */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">  
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/20">
            <h2 className="text-xl font-sora font-semibold mb-2">Reporting automatisé des ventes</h2>
            <p className="text-sm font-manrope">Connexion de Tableau à un CRM (ex : Sellsy) et mise en place d’un flux n8n pour actualiser automatiquement les dashboards de performance commerciale après chaque transaction.</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/20">
            <h2 className="text-xl font-sora font-semibold mb-2">Suivi en temps réel des opérations</h2>
            <p className="text-sm font-manrope">Création d’un tableau de bord centralisé qui compile les données logistiques et financières provenant de plusieurs systèmes (ERP, bases SQL) avec mise à jour instantanée via l’API.

</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/20">
            <h2 className="text-xl font-sora font-semibold mb-2">Analyse RH et prévisionnel</h2>
            <p className="text-sm font-manrope">Utilisation de Tableau pour visualiser les données RH (absentéisme, turnover, coûts salariaux) avec automatisation de la collecte via n8n depuis différents outils RH ou feuilles de calcul.</p>
          </div>
        </div> 
        </div>
    </section>
  <CallToActionBlock />
  </div>
  ); 
};

export default Tableau;