// src/pages/products/PowerBI.tsx
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import CallToActionBlock from "../../components/CallToActionBlock";
import { ArrowLeft } from "lucide-react";
import powerbiLogo from "../../assets/logos/PowerBI.png";
import {useEffect} from "react" 
const PowerBI = () => { 
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
          <img src={powerbiLogo} alt="PowerBI" className="w-20 h-20 rounded-xl shadow-md" />
          <h1 className="text-4xl font-sora font-bold">PowerBI</h1>
        </div>

        {/* Description principale */}
        <p className="text-lg leading-relaxed mb-12 font-manrope">
          Power BI est une solution de business intelligence développée par Microsoft, permettant de transformer des données complexes en tableaux de bord visuels et interactifs. Elle se connecte à une multitude de sources (ERP, CRM, bases SQL, fichiers Excel, services cloud) pour fournir une vision centralisée et en temps réel des indicateurs clés de l’entreprise.

Grâce à ses capacités de modélisation et de visualisation avancées, Power BI aide les équipes à prendre des décisions éclairées en analysant les tendances et en anticipant les besoins. L’intégration avec l’écosystème Microsoft (Teams, SharePoint, Azure) et d’autres services SaaS en fait un outil puissant pour automatiser la collecte et la diffusion des données.

Notre agence peut concevoir des tableaux de bord personnalisés et automatisés sous Power BI, intégrés à vos flux existants. Nous optimisons vos rapports pour qu’ils s’actualisent automatiquement et déclenchent des actions dans vos autres outils métiers (alertes, exportations, prévisions).
        </p>

        {/* Use cases */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">  
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/20">
            <h2 className="text-xl font-sora font-semibold mb-2">Tableaux de bord financiers automatisés</h2>
            <p className="text-sm font-manrope">Connexion des données bancaires, comptables et CRM pour générer des rapports financiers mis à jour automatiquement et accessibles aux dirigeants.</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/20">
            <h2 className="text-xl font-sora font-semibold mb-2">Analyse des performances commerciales</h2>
            <p className="text-sm font-manrope">Suivi en temps réel des ventes, marges et prévisions avec segmentation par produits, zones géographiques ou commerciaux.</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/20">
            <h2 className="text-xl font-sora font-semibold mb-2">Monitoring des opérations et de la logistique</h2>
            <p className="text-sm font-manrope">Centralisation des données de production et livraison pour détecter rapidement les retards, optimiser les stocks et déclencher des alertes automatiques.

</p>
          </div>
        </div> 
        </div>
    </section>
  <CallToActionBlock />
  </div>
  ); 
};

export default PowerBI;