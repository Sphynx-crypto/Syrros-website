// src/pages/products/Retool.tsx
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import CallToActionBlock from "../../components/CallToActionBlock";
import { ArrowLeft } from "lucide-react";
import {useEffect} from "react" 
const Retool = () => { 
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
          <img src="/src/assets/logos/Retool.png" alt="Retool" className="w-20 h-20 rounded-xl shadow-md" />
          <h1 className="text-4xl font-sora font-bold">Retool</h1>
        </div>

        {/* Description principale */}
        <p className="text-lg leading-relaxed mb-12 font-manrope">
         Retool est une plateforme de développement low-code qui permet aux entreprises de créer rapidement des applications internes personnalisées. Grâce à son interface visuelle et à ses composants préconstruits (tableaux, formulaires, graphiques…), Retool réduit considérablement le temps nécessaire pour concevoir des outils adaptés aux besoins spécifiques d’une équipe : gestion des stocks, suivi client, dashboards financiers, etc.

L’un des principaux atouts de Retool est sa capacité à se connecter à de nombreuses sources de données (bases SQL, API, Google Sheets, Airtable, CRM…) et à automatiser les flux de travail sans nécessiter de compétences de développement avancées. Il devient ainsi un hub central où toutes les informations de l’entreprise convergent et sont exploitées en temps réel. Notre agence intègre Retool dans votre écosystème pour centraliser vos données, automatiser vos processus internes et fournir des interfaces sur mesure qui améliorent la productivité et la réactivité de vos équipes. 
        </p>

        {/* Use cases */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">  
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/20">
            <h2 className="text-xl font-sora font-semibold mb-2">Dashboard de suivi des commandes</h2>
            <p className="text-sm font-manrope">Création d’une interface en temps réel connectée à votre ERP et CRM pour visualiser le statut des commandes, déclencher des notifications automatiques en cas de retard et synchroniser les données avec l’équipe logistique.</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/20">
            <h2 className="text-xl font-sora font-semibold mb-2">Outil interne de support client</h2>
            <p className="text-sm font-manrope">Développement d’un tableau de bord regroupant tickets support, informations clients et historique des échanges. Les agents peuvent automatiser certaines actions (remboursement, envoi d’email) directement depuis Retool.</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/20">
            <h2 className="text-xl font-sora font-semibold mb-2">Gestion automatisée des stocks</h2>
            <p className="text-sm font-manrope">Connexion à vos bases de données produits pour suivre les niveaux de stock, générer des alertes en cas de rupture et déclencher automatiquement les réapprovisionnements via des API fournisseurs.

</p>
          </div>
        </div> 
        </div>
    </section>
  <CallToActionBlock />
  </div>
  ); 
};

export default Retool;