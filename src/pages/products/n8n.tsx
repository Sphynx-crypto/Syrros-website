// src/pages/products/n8n.tsx
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import CallToActionBlock from "../../components/CallToActionBlock";
import { ArrowLeft } from "lucide-react";
import {useEffect} from "react" 
const n8n = () => { 
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
          <img src="/src/assets/logos/n8n.png" alt="n8n" className="w-20 h-20 rounded-xl shadow-md" />
          <h1 className="text-4xl font-sora font-bold">n8n</h1>
        </div>

        {/* Description principale */}
        <p className="text-lg leading-relaxed mb-12 font-manrope">
        n8n est une plateforme d’automatisation open-source qui permet de créer des workflows visuels reliant des centaines d’applications et services SaaS. Contrairement à des solutions propriétaires comme Zapier, n8n offre une flexibilité totale : hébergement auto-géré ou cloud, personnalisation des scénarios et exécution de scripts avancés directement dans les workflows.

Grâce à son interface graphique, n8n permet de connecter facilement des outils disparates (CRM, ERP, messageries, bases de données, API internes) pour automatiser des processus complexes : génération de leads, synchronisation des données, alertes personnalisées ou traitement d’événements en temps réel. L’approche modulaire d’n8n permet également d’intégrer des modèles d’IA (OpenAI, Anthropic, Hugging Face) pour créer des automatisations intelligentes.

Notre agence peut concevoir, héberger et maintenir vos workflows n8n, en les intégrant à votre infrastructure existante afin de centraliser vos automatisations et réduire les tâches répétitives dans tous vos départements.  
        </p>

        {/* Use cases */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">  
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/20">
            <h2 className="text-xl font-sora font-semibold mb-2">Synchronisation des leads entre plusieurs outils</h2>
            <p className="text-sm font-manrope">Automatisation du transfert des données entre un formulaire web (Jotform) et un CRM (HubSpot), avec enrichissement automatique via LinkedIn ou Clearbit.</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/20">
            <h2 className="text-xl font-sora font-semibold mb-2">Rapports hebdomadaires automatisés</h2>
            <p className="text-sm font-manrope">Génération et envoi d’un rapport combinant données Google Analytics, ventes e-commerce et feedback clients vers Google Drive ou Notion chaque semaine.

</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/20">
            <h2 className="text-xl font-sora font-semibold mb-2">Email de bienvenue personnalisé aux nouveaux leads</h2>
            <p className="text-sm font-manrope">Création d’un workflow qui envoie automatiquement un email hautement personnalisé dès qu’un nouveau lead entre dans le CRM, incluant son nom, la source de provenance et une offre adaptée à son profil pour amorcer la relation commerciale.

</p>
          </div>
        </div> 
        </div>
    </section>
  <CallToActionBlock />
  </div>
  ); 
};

export default n8n;