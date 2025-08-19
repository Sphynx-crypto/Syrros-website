// src/pages/products/Qonto.tsx
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import CallToActionBlock from "../../components/CallToActionBlock";
import { ArrowLeft } from "lucide-react";
import {useEffect} from "react" 
const Qonto = () => { 
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
          <img src="/src/assets/logos/qonto.png" alt="Qonto" className="w-20 h-20 rounded-xl shadow-md" />
          <h1 className="text-4xl font-sora font-bold">Qonto</h1>
        </div>

        {/* Description principale */}
        <p className="text-lg leading-relaxed mb-12 font-manrope">
        Qonto est une solution bancaire en ligne conçue spécifiquement pour les entreprises, freelances et startups. Cette plateforme simplifie la gestion financière grâce à une interface intuitive et des fonctionnalités adaptées aux besoins professionnels, comme la gestion des comptes multi-utilisateurs, l’émission de cartes physiques et virtuelles, et la catégorisation automatique des dépenses. Qonto s’intègre facilement avec des outils comptables et de gestion (ex : QuickBooks, Pennylane) et permet de centraliser toutes les opérations financières dans un seul espace sécurisé.

Pour une entreprise cherchant à automatiser ses processus, Qonto devient un pivot stratégique : il réduit la charge administrative liée à la comptabilité, accélère la validation des paiements et facilite le suivi des budgets en temps réel. Notre agence peut configurer des workflows automatisés reliant Qonto à d’autres outils SaaS (ERP, CRM, logiciels de paie) afin d’optimiser la trésorerie, automatiser les rapports financiers et améliorer la prise de décision.  
        </p>

        {/* Use cases */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">  
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/20">
            <h2 className="text-xl font-sora font-semibold mb-2">Automatisation de la comptabilité</h2>
            <p className="text-sm font-manrope">Connexion de Qonto à des logiciels comptables (Pennylane, QuickBooks) pour synchroniser automatiquement les transactions, générer des écritures comptables et réduire les tâches manuelles du service finance.</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/20">
            <h2 className="text-xl font-sora font-semibold mb-2">Gestion des notes de frais en temps réel</h2>
            <p className="text-sm font-manrope">Mise en place d’un flux automatisé où chaque dépense effectuée avec une carte Qonto est directement classée, validée et archivée dans un outil interne (Notion, Google Drive) ou une solution RH.</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/20">
            <h2 className="text-xl font-sora font-semibold mb-2"> Suivi budgétaire et alertes financières</h2>
            <p className="text-sm font-manrope">Création de scénarios automatisés envoyant des alertes via Slack ou email dès qu’un seuil budgétaire est atteint, permettant au management d’agir immédiatement sur la trésorerie.</p>
          </div>
        </div> 
        </div>
    </section>
  <CallToActionBlock />
  </div>
  ); 
};

export default Qonto;