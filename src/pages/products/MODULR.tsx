// src/pages/products/MODULR.tsx
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import CallToActionBlock from "../../components/CallToActionBlock";
import { ArrowLeft } from "lucide-react";
import {useEffect} from "react" 
const MODULR = () => { 
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
          <img src="/src/assets/logos/MODULR.png" alt="MODULR" className="w-20 h-20 rounded-xl shadow-md" />
          <h1 className="text-4xl font-sora font-bold">MODULR</h1>
        </div>

        {/* Description principale */}
        <p className="text-lg leading-relaxed mb-12 font-manrope">
          Modulr est une plateforme de paiement et de gestion financière conçue pour les entreprises souhaitant automatiser leurs flux monétaires. Elle permet de créer des comptes de paiement virtuels, d’émettre et recevoir des virements en temps réel, et de gérer des cartes de paiement personnalisées. Grâce à son API robuste, Modulr s’intègre facilement dans les systèmes existants (ERP, CRM, marketplaces) et devient une infrastructure clé pour tout processus nécessitant des paiements rapides et fiables.

Pour les entreprises, l’avantage principal réside dans la réduction des tâches manuelles liées aux paiements : plus besoin d’exporter des fichiers ou de gérer des virements un par un. Modulr offre aussi des fonctionnalités avancées telles que la réconciliation automatique, la gestion des fonds clients en conformité avec les réglementations et l’automatisation des notifications financières.

Notre agence peut implémenter Modulr dans vos workflows pour connecter vos outils de gestion, automatiser vos paiements récurrents et optimiser votre suivi financier en temps réel.


        </p>

        {/* Use cases */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">  
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/20">
            <h2 className="text-xl font-sora font-semibold mb-2">Automatisation des paiements fournisseurs</h2>
            <p className="text-sm font-manrope">Connexion de Modulr à l’ERP pour déclencher automatiquement les virements dès validation des factures, avec suivi en temps réel des paiements effectués.</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/20">
            <h2 className="text-xl font-sora font-semibold mb-2">Gestion des portefeuilles clients dans une marketplace</h2>
            <p className="text-sm font-manrope">Création de sous-comptes dédiés pour chaque vendeur et automatisation des paiements entrants/sortants pour fluidifier la gestion financière de la plateforme.

</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/20">
            <h2 className="text-xl font-sora font-semibold mb-2">Émission de cartes de paiement virtuelles</h2>
            <p className="text-sm font-manrope">Mise en place de cartes virtuelles pour les équipes internes ou les partenaires, permettant un contrôle granulaire des dépenses et des plafonds.

</p>
          </div>
        </div> 
        </div>
    </section>
  <CallToActionBlock />
  </div>
  ); 
};

export default MODULR;