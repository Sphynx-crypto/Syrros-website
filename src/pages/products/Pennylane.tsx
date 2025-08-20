// src/pages/products/Pennylane.tsx
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import CallToActionBlock from "../../components/CallToActionBlock";
import { ArrowLeft } from "lucide-react";
import pennylaneLogo from "../../assets/logos/pennylane.png";
import {useEffect} from "react" 
const Pennylane = () => { 
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
         <img src={pennylaneLogo} alt="Pennylane" className="w-20 h-20 rounded-xl shadow-md" />

          <h1 className="text-4xl font-sora font-bold">Pennylane</h1>
        </div>

        {/* Description principale */}
        <p className="text-lg leading-relaxed mb-12 font-manrope">
        Pennylane est une plateforme française de gestion financière et comptable qui centralise la comptabilité, la facturation et le pilotage de trésorerie dans un seul outil. Conçue pour les PME et startups, elle permet de collaborer en temps réel avec l’expert-comptable, d’automatiser la saisie des factures et d’obtenir une visibilité claire sur la situation financière de l’entreprise.

Grâce à ses intégrations natives avec les banques, solutions de paiement et outils de facturation, Pennylane devient un pivot stratégique pour l’automatisation des processus financiers. Les transactions bancaires sont synchronisées en continu, les justificatifs sont automatiquement rapprochés et les tableaux de bord se mettent à jour en temps réel.

Notre agence peut connecter Pennylane à vos autres outils SaaS (CRM, ERP, plateformes e-commerce) et mettre en place des workflows automatisés comme l’envoi de rapports financiers, la génération de prévisions ou la création automatique de factures à partir des ventes.  
        </p>

        {/* Use cases */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">  
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/20">
            <h2 className="text-xl font-sora font-semibold mb-2">Rapprochement bancaire automatisé</h2>
            <p className="text-sm font-manrope">Synchronisation des comptes bancaires et catégorisation automatique des transactions pour réduire le temps de traitement comptable et éviter les erreurs.</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/20">
            <h2 className="text-xl font-sora font-semibold mb-2">Facturation connectée au CRM</h2>
            <p className="text-sm font-manrope">Création automatique de factures dans Pennylane dès qu’une opportunité est clôturée dans le CRM, avec envoi direct au client et suivi du paiement.

</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/20">
            <h2 className="text-xl font-sora font-semibold mb-2">Rapports financiers en temps réel
</h2>
            <p className="text-sm font-manrope">Mise en place d’un tableau de bord qui compile les ventes, dépenses et marges pour fournir une vision instantanée et actualisée de la santé financière de l’entreprise.</p>
          </div>
        </div> 
        </div>
    </section>
  <CallToActionBlock />
  </div>
  ); 
};

export default Pennylane;