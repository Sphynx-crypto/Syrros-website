// src/pages/products/Airtable.tsx
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import CallToActionBlock from "../../components/CallToActionBlock";
import { ArrowLeft } from "lucide-react";
import {useEffect} from "react" 
const Airtable = () => { 
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
          <img src="/src/assets/logos/airtable.png" alt="Airtable" className="w-20 h-20 rounded-xl shadow-md" />
          <h1 className="text-4xl font-sora font-bold">Airtable</h1>
        </div>

        {/* Description principale */}
        <p className="text-lg leading-relaxed mb-12 font-manrope">
          Airtable est une plateforme hybride combinant les fonctionnalités d’une base de données relationnelle et la simplicité d’un tableur collaboratif. Elle permet aux entreprises de centraliser leurs informations, de les structurer sous forme de tableaux personnalisés et d’y associer des automatisations et intégrations avec d’autres outils SaaS. Grâce à son interface intuitive et à ses nombreuses vues (grille, calendrier, kanban, galerie), Airtable s’adapte aussi bien à la gestion de projets qu’au suivi de clients, d’inventaires ou de campagnes marketing.

Un des principaux atouts d’Airtable est sa connectivité : via son API ou des plateformes comme Zapier et n8n, il s’intègre facilement à des CRM, logiciels de comptabilité, outils de communication interne ou services cloud. Les entreprises peuvent ainsi créer des workflows automatisés où les données circulent en temps réel entre leurs différents systèmes, évitant les doublons et les mises à jour manuelles chronophages. Notre agence configure et optimise Airtable pour transformer vos processus métiers en bases de données vivantes et dynamiques, parfaitement adaptées à vos besoins.
        </p>

        {/* Use cases */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">  
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/20">
            <h2 className="text-xl font-sora font-semibold mb-2">Gestion automatisée des leads commerciaux</h2>
            <p className="text-sm font-manrope">Centraliser les leads provenant des formulaires web, emails et réseaux sociaux dans Airtable, déclencher des notifications automatiques à l’équipe commerciale et assigner les prospects selon leur priorité.</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/20">
            <h2 className="text-xl font-sora font-semibold mb-2">Suivi de projet inter-équipes</h2>
            <p className="text-sm font-manrope">Synchroniser les tâches entre Airtable, Slack et Notion pour avoir une visibilité en temps réel sur l’avancement des projets, tout en automatisant les rappels et échéances.</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/20">
            <h2 className="text-xl font-sora font-semibold mb-2">Inventaire et logistique connectés</h2>
            <p className="text-sm font-manrope">Relier Airtable aux plateformes e-commerce et aux systèmes de gestion d’entrepôt pour mettre à jour automatiquement les stocks, déclencher des réapprovisionnements et générer des rapports d’analyse.</p>
          </div>
        </div> 
        </div>
    </section>
  <CallToActionBlock />
  </div>
  ); 
};

export default Airtable;