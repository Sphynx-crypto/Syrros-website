// src/pages/products/Pytorch.tsx
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import CallToActionBlock from "../../components/CallToActionBlock";
import { ArrowLeft } from "lucide-react";
import pytorchLogo from "../../assets/logos/pytorch.png";
import {useEffect} from "react" 
const Pytorch = () => { 
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
          <img src={pytorchLogo} alt="Pytorch" className="w-20 h-20 rounded-xl shadow-md" />

          <h1 className="text-4xl font-sora font-bold">Pytorch</h1>
        </div>

        {/* Description principale */}
        <p className="text-lg leading-relaxed mb-12 font-manrope">
          PyTorch est une bibliothèque open source de machine learning largement utilisée par les chercheurs et les entreprises pour développer des modèles d’intelligence artificielle avancés. Elle se distingue par sa flexibilité et sa facilité d’utilisation, permettant de concevoir, entraîner et déployer des réseaux neuronaux complexes avec un haut degré de personnalisation. PyTorch est particulièrement apprécié pour son mode dynamique (dynamic computation graph), qui facilite les expérimentations rapides et l’optimisation des modèles en temps réel.

Pour les entreprises, PyTorch ouvre la voie à des projets d’automatisation et d’IA sur mesure, tels que la prédiction de la demande, l’analyse de données clients, ou encore l’automatisation des décisions via des modèles prédictifs. Il s’intègre aisément dans des workflows existants grâce à ses nombreuses API et sa compatibilité avec d’autres frameworks et services cloud. Notre agence exploite PyTorch pour concevoir, entraîner et déployer des modèles optimisés, tout en assurant leur intégration fluide avec vos outils SaaS existants, afin de transformer la donnée brute en leviers de croissance automatisés.
        </p>

        {/* Use cases */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">  
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/20">
            <h2 className="text-xl font-sora font-semibold mb-2">Prédiction des ventes pour le département commercial</h2>
            <p className="text-sm font-manrope">Création d’un modèle prédictif entraîné avec PyTorch pour anticiper la demande des clients. Intégration directe avec votre CRM (ex : HubSpot, Salesforce) afin d’ajuster automatiquement les stocks et campagnes marketing en temps réel.</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/20">
            <h2 className="text-xl font-sora font-semibold mb-2">Automatisation du support client</h2>
            <p className="text-sm font-manrope">Développement d’un modèle de traitement du langage naturel (NLP) pour analyser les tickets entrants et proposer des réponses automatiques ou rediriger les demandes vers le bon service. Connecté à des outils comme Zendesk ou Slack pour fluidifier le support.</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/20">
            <h2 className="text-xl font-sora font-semibold mb-2">Détection des fraudes en finance</h2>
            <p className="text-sm font-manrope">Mise en place d’un réseau neuronal entraîné sur l’historique des transactions pour identifier les comportements suspects. Le système déclenche automatiquement des alertes ou bloque les opérations anormales en s’intégrant avec les systèmes financiers internes.</p>
          </div>
        </div> 
        </div>
    </section>
  <CallToActionBlock />
  </div>
  ); 
};

export default Pytorch;