// src/pages/products/GoogleDrive.tsx
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import CallToActionBlock from "../../components/CallToActionBlock";
import { ArrowLeft } from "lucide-react";
import googleDriveLogo from "../../assets/logos/google-drive.png";
import {useEffect} from "react" 
const GoogleDrive = () => { 
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
          <img src={googleDriveLogo} alt="Google Drive" className="w-20 h-20 rounded-xl shadow-md" />
          <h1 className="text-4xl font-sora font-bold">Google Drive</h1>
        </div>

        {/* Description principale */}
        <p className="text-lg leading-relaxed mb-12 font-manrope">
          Google Drive est une plateforme de stockage et de partage de fichiers dans le cloud qui permet aux entreprises de centraliser leurs documents et de les rendre accessibles en temps réel depuis n’importe quel appareil. Grâce à sa compatibilité avec l’écosystème Google Workspace (Docs, Sheets, Slides) et à ses options de collaboration avancées, Google Drive facilite le travail d’équipe et la gestion des ressources internes.

Pour une agence d’automatisation, Google Drive est une brique essentielle dans les workflows : il peut servir de référentiel central où les données ou fichiers générés par d’autres outils sont stockés, puis exploités automatiquement par des processus IA (analyse de documents, génération de rapports) ou des automatisations (déclenchement d’alertes, archivage, mise à jour de bases). Intégré via API, n8n, Zapier ou Dust, Drive devient un hub stratégique pour relier vos systèmes, réduire la duplication de fichiers et maintenir une traçabilité conforme au RGPD.
        </p>

        {/* Use cases */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">  
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/20">
            <h2 className="text-xl font-sora font-semibold mb-2">Archivage automatisé de documents commerciaux</h2>
            <p className="text-sm font-manrope">Stocker automatiquement les factures et devis générés par un CRM ou un ERP dans des dossiers organisés sur Google Drive, avec notifications à l’équipe comptable.</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/20">
            <h2 className="text-xl font-sora font-semibold mb-2">Centralisation des fichiers pour l’IA</h2>
            <p className="text-sm font-manrope">Connecter Google Drive à un assistant IA (via Dust ou LangChain) pour qu’il puisse rechercher et résumer des documents internes comme des manuels, procédures ou rapports de projet.</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/20">
            <h2 className="text-xl font-sora font-semibold mb-2">Gestion collaborative de projets</h2>
            <p className="text-sm font-manrope">Automatiser la création de dossiers Drive lors de l’ouverture de nouveaux projets (avec sous-dossiers prédéfinis) et partager automatiquement les accès aux membres de l’équipe concernés.</p>
          </div>
        </div> 
        </div>
    </section>
  <CallToActionBlock />
  </div>
  ); 
};

export default GoogleDrive;