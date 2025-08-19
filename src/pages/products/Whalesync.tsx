// src/pages/products/Whalesync.tsx
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import CallToActionBlock from "../../components/CallToActionBlock";
import { ArrowLeft } from "lucide-react";
import {useEffect} from "react" 
const Whalesync = () => { 
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
          <img src="/src/assets/logos/Whalesync.png" alt="Whalesync" className="w-20 h-20 rounded-xl shadow-md" />
          <h1 className="text-4xl font-sora font-bold">Whalesync</h1>
        </div>

        {/* Description principale */}
        <p className="text-lg leading-relaxed mb-12 font-manrope">
          Whalesync est un outil d’intégration qui permet de synchroniser en temps réel des données entre plusieurs bases ou applications SaaS, sans avoir besoin de coder. Contrairement aux intégrateurs traditionnels qui envoient des données dans une seule direction (ex. Zapier), Whalesync offre une synchronisation bidirectionnelle : les modifications effectuées dans une source (Airtable, Notion, Postgres, etc.) sont immédiatement reflétées dans les autres.

Cette approche est idéale pour les entreprises qui utilisent plusieurs outils dans leur écosystème et souhaitent maintenir une cohérence des données sans duplication manuelle. Relié à n8n, Whalesync peut devenir le pont entre différentes bases de données et automatisations complexes : il garde les données alignées tandis que n8n gère les workflows déclenchés par ces changements. Notre agence exploite Whalesync pour créer des écosystèmes interconnectés, assurant une fluidité et une fiabilité maximale des données au sein des processus métiers.
        </p>

        {/* Use cases */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">  
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/20">
            <h2 className="text-xl font-sora font-semibold mb-2">Synchronisation Airtable ↔ Notion</h2>
            <p className="text-sm font-manrope">Mettre en place une synchronisation bidirectionnelle entre une base Airtable utilisée par l’équipe commerciale et un espace Notion utilisé par l’équipe marketing, garantissant que les deux équipes travaillent toujours avec des données à jour.</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/20">
            <h2 className="text-xl font-sora font-semibold mb-2">Alignement des bases de production et reporting</h2>
            <p className="text-sm font-manrope">Synchroniser une base Postgres (production) avec Airtable pour offrir un tableau de suivi simplifié aux équipes opérationnelles, tout en automatisant les alertes et rapports via n8n.</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/20">
            <h2 className="text-xl font-sora font-semibold mb-2"> Mise à jour multi-plateformes en temps réel</h2>
            <p className="text-sm font-manrope">Relier plusieurs outils (Supabase, Notion, Google Sheets) via Whalesync pour qu’une modification dans l’un mette à jour instantanément les autres, évitant tout décalage dans les données affichées aux clients ou en interne.

</p>
          </div>
        </div> 
        </div>
    </section>
  <CallToActionBlock />
  </div>
  ); 
};

export default Whalesync;