// src/pages/products/Klaviyo.tsx
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import CallToActionBlock from "../../components/CallToActionBlock";
import { ArrowLeft } from "lucide-react";
import klaviyoLogo from "../../assets/logos/klaviyo.png";
import {useEffect} from "react" 
const Klaviyo = () => { 
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
          <img src={klaviyoLogo} alt="Klaviyo" className="w-20 h-20 rounded-xl shadow-md" />
          <h1 className="text-4xl font-sora font-bold">Klaviyo</h1>
        </div>

        {/* Description principale */}
        <p className="text-lg leading-relaxed mb-12 font-manrope">
          Klaviyo est une plateforme spécialisée dans l’email marketing et le SMS marketing orientée e-commerce. Elle permet aux entreprises de segmenter leurs audiences, de créer des campagnes personnalisées et d’automatiser l’envoi de messages en fonction du comportement des utilisateurs (achats, abandons de panier, visites de site…). Grâce à son intégration native avec les principales plateformes e-commerce (Shopify, WooCommerce, Magento) et de nombreux autres outils marketing et CRM, Klaviyo centralise les données clients pour des campagnes plus pertinentes et rentables.

Ce qui distingue Klaviyo, c’est sa puissante gestion des segments dynamiques : les données sont mises à jour en temps réel et permettent de déclencher des scénarios marketing sophistiqués (relances automatiques, offres personnalisées). Combiné à des solutions comme n8n, Zapier ou Airbyte, Klaviyo peut devenir une brique clé d’un écosystème marketing automatisé, où les données circulent entre e-commerce, CRM, BI et IA pour maximiser la conversion et la fidélisation.


        </p>

        {/* Use cases */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">  
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/20">
            <h2 className="text-xl font-sora font-semibold mb-2">Relance automatique des paniers abandonnés</h2>
            <p className="text-sm font-manrope">Lorsqu’un client quitte un panier sans valider son achat, Klaviyo envoie automatiquement une série d’emails ou SMS personnalisés incitant à finaliser la commande.

</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/20">
            <h2 className="text-xl font-sora font-semibold mb-2">Segmentation et campagnes ciblées</h2>
            <p className="text-sm font-manrope">Créer des segments dynamiques (ex : clients inactifs depuis 3 mois) et automatiser l’envoi de campagnes adaptées, comme des réductions exclusives ou des recommandations produits</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/20">
            <h2 className="text-xl font-sora font-semibold mb-2">Intégration avec l’IA pour des messages personnalisés</h2>
            <p className="text-sm font-manrope">Connecter Klaviyo à un modèle IA (via Dust ou n8n) pour générer automatiquement des textes marketing optimisés selon le profil et les comportements des clients.</p>
          </div>
        </div> 
        </div>
    </section>
  <CallToActionBlock />
  </div>
  ); 
};

export default Klaviyo;