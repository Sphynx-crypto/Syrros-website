import React from 'react';
import { Link } from 'react-router-dom';
import { Target, Eye, Heart, Award, Users, TrendingUp, Linkedin } from 'lucide-react';
import CallToActionBlock from "../components/CallToActionBlock";
import {usEffect} from "react"

const About = () => {
  const timeline = [
    {
      year: "2023",
      title: "Création de SYRROS",
      description: "Lancement de l'agence avec pour mission de démocratiser l'automatisation IA pour les PME"
    },
    {
      year: "2024",
      title: "Croissance et Innovation",
      description: "Plus de 50 clients accompagnés et développement de solutions propriétaires"
    },
    {
      year: "2025",
      title: "Expansion et Expertise",
      description: "Équipe renforcée et nouveaux partenariats technologiques stratégiques"
    }
  ];

  const values = [
    {
      icon: <Target className="h-8 w-8 text-blue-400" />,
      title: "Excellence",
      description: "Nous visons l'excellence dans chaque projet, en utilisant les dernières technologies et les meilleures pratiques."
    },
    {
      icon: <Users className="h-8 w-8 text-blue-400" />,
      title: "Proximité",
      description: "Nous privilégions une relation de confiance et un accompagnement personnalisé avec nos clients."
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-blue-400" />,
      title: "Innovation",
      description: "Nous restons à la pointe de l'innovation IA pour proposer des solutions toujours plus performantes."
    },
    {
      icon: <Heart className="h-8 w-8 text-blue-400" />,
      title: "Passion",
      description: "Notre passion pour l'automatisation nous pousse à créer des solutions qui transforment vraiment les entreprises."
    }
  ];

  return (
    <div className ="home-background">
   {/* Section break with labeled divider */}
<div className="max-w-3xl mx-auto px-4 pt-40">
  {/* Divider with chip */}
  <div className="relative flex items-center justify-center mb-8">
    <div className="h-px w-full bg-white/10" />
    <span className="absolute px-3 py-1 text-xs uppercase tracking-wider bg-slate-800 text-white/70 rounded-full border border-white/10">
      {/* ✏️ Change label */}
       Continuons la conversation
    </span>
  </div>

  {/* CTA copy */} 
  <p className="text-center text-lg md:text-xl text-white/90 mb-6">
    {/* ✏️ Change text */}
    Ce n’est qu’un aperçu de ce que nous automatisons. Voyons ensemble comment l’IA peut créer de la valeur dans votre activité.
  </p>

  {/* Button */}
  <div className="text-center">
    <a
      href="/rendez-vous"
      className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition"
    >
      Prendre rendez-vous
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeWidth="2" d="M5 12h14M13 5l7 7-7 7" />
      </svg>
    </a>
  </div>
</div>

    {/* Soft band CTA */}
<section className="relative mt-12">
  <div className="mx-auto max-w-5xl rounded-2xl bg-white/[0.03] border border-white/10 px-6 py-10">
    <h4 className="text-center text-xl md:text-2xl font-sora text-white mb-3">
      {/* ✏️ Headline */}
      Continuons la conversation
    </h4>

    <p className="text-center text-white/80 max-w-3xl mx-auto mb-6">
      Ce n’est qu’un aperçu de ce que nous automatisons. Voyons ensemble comment l’IA peut créer de la valeur dans votre activité.
    </p>

    <div className="text-center">
      <a
        href="/rendez-vous"
        className="inline-flex items-center gap-2 rounded-lg bg-blue-600 hover:bg-blue-700 px-6 py-3 text-white font-medium transition"
      >
        Prendre rendez-vous
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeWidth="2" d="M5 12h14M13 5l7 7-7 7" />
        </svg>
      </a>
    </div>
  </div>
</section>
     
{/* Wave separator */}
<div className="mt-10">
  <svg
    className="w-full h-8 text-white/5"
    viewBox="0 0 1440 100"
    preserveAspectRatio="none"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M0,50 C240,120 480,-20 720,50 C960,120 1200,-20 1440,50 L1440,100 L0,100 Z" />
  </svg>
</div>

{/* CTA after wave */}
<section className="max-w-3xl mx-auto px-4 py-8 text-center">
  <p className="text-lg md:text-xl text-white/90 mb-6">
     Ce n’est qu’un aperçu de ce que nous automatisons. Voyons ensemble comment l’IA peut créer de la valeur dans votre activité.
  </p>
  <a
    href="/rendez-vous"
    className="inline-flex items-center gap-2 rounded-lg bg-blue-600 hover:bg-blue-700 px-6 py-3 text-white font-medium transition"
  >
    Prendre rendez-vous
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path strokeWidth="2" d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  </a>
</section>

    </div>
    );
}
export default About;