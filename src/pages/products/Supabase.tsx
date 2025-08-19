// src/pages/products/Supabase.tsx
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import CallToActionBlock from "../../components/CallToActionBlock";
import { ArrowLeft } from "lucide-react";
import {useEffect} from "react" 
const Supabase = () => { 
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
          <img src="/src/assets/logos/supabase.png" alt="Supabase" className="w-20 h-20 rounded-xl shadow-md" />
          <h1 className="text-4xl font-sora font-bold">Supabase</h1>
        </div>

        {/* Description principale */}
        <p className="text-lg leading-relaxed mb-12 font-manrope">
          Supabase est une plateforme open-source qui propose une alternative complète à Firebase, permettant aux entreprises de créer des applications modernes et scalables avec une base de données PostgreSQL, une authentification intégrée et des APIs générées automatiquement. Elle fournit également des fonctionnalités avancées comme le stockage de fichiers, la gestion en temps réel et la sécurité basée sur des règles (Row-Level Security).

Supabase se distingue par sa flexibilité et sa compatibilité avec l’écosystème SQL, offrant aux développeurs et aux entreprises un contrôle total sur leurs données tout en bénéficiant d’outils prêts à l’emploi pour accélérer le développement. Connecté à des outils comme n8n ou des frontends no-code/low-code (Softr, Retool), Supabase devient la base de données centrale pour automatiser les workflows et synchroniser les informations entre plusieurs services SaaS. Notre agence intègre Supabase dans des projets d’automatisation sur mesure, garantissant performance, évolutivité et sécurité des données pour les équipes.


        </p>

        {/* Use cases */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">  
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/20">
            <h2 className="text-xl font-sora font-semibold mb-2">Base de données centralisée pour application interne</h2>
            <p className="text-sm font-manrope">Création d’une base PostgreSQL sur Supabase pour centraliser toutes les données opérationnelles, alimentée automatiquement via n8n à partir de CRM, ERP et formulaires internes.</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/20">
            <h2 className="text-xl font-sora font-semibold mb-2"> Authentification et gestion des utilisateurs</h2>
            <p className="text-sm font-manrope">Mise en place d’un système d’authentification sécurisé pour une application interne ou un portail client, avec gestion des rôles et permissions directement dans Supabase.

</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/20">
            <h2 className="text-xl font-sora font-semibold mb-2">Notifications et mises à jour en temps réel</h2>
            <p className="text-sm font-manrope">Utilisation de la fonctionnalité “Realtime” de Supabase pour déclencher des mises à jour instantanées sur des tableaux de bord internes ou des interfaces utilisateurs connectées.</p>
          </div>
        </div> 
        </div>
    </section>
  <CallToActionBlock />
  </div>
  ); 
};

export default Supabase;