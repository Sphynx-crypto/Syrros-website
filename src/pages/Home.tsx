import React, { useEffect, useState, useRef } from 'react';
import { ClipboardList, Calculator, FlaskConical, Rocket, Wrench } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ArrowRight, Bot, Zap, Database, Clock, TrendingUp, Users, Star, CheckCircle } from 'lucide-react';
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import CallToActionBlock from "../components/CallToActionBlock";
import { useFadeOnScroll } from "../useFadeOnScroll";
import CountUp from "../components/CountUp";


const Home = () => {
 const [start, setStart] = React.useState(false);
  const hoverLift = { scale: 1.02, y: -4 };
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState(false);
    useFadeOnScroll();

useEffect(() => { 
  const timer = setTimeout(() => {
    setIsActive(true);
  }, 1000); // délai avant l'animation
  

  return () => clearTimeout(timer);
}, []);


  const kpis = [
  {
    value: 224,
    suffix: "%", 
    title: "Retour sur investissement",
    desc: "ROI obtenu sur 3 ans grâce à l’automatisation low-code déployée à grande échelle.",
    source: {
      name: "Forrester TEI",
      url: "https://tei.forrester.com/go/Microsoft/PowerPlatform2024/?utm_source=chatgpt.com"
    }
  },
  {
    value: 50,
    suffix: "%", 
    title: "Temps de traitement réduit",
    desc: "Réduction du temps de traitement d’un processus bancaire critique tout en éliminant presque toutes les erreurs.",
    source: {
      name: "McKinsey",
      url: "https://www.mckinsey.com/capabilities/mckinsey-digital/our-insights/automating-the-banks-back-office?utm_source=chatgpt.com"
    }
  },
{
  value: 95,
  suffix: "%", 
  title: "Interactions clients automatisées",
  desc: "D’ici fin 2025, 95 % des interactions clients devraient être automatisées grâce à l’IA. Chaque dollar investi dans ces solutions rapporte en moyenne 3,50 $, avec un potentiel allant jusqu’à ×8 pour les organisations les plus performantes.",
  source: {
    name: "Fullview",
    url: "https://www.fullview.io/blog/ai-customer-service-stats?utm_source=chatgpt.com"
  }
}

  
];
  const Kpicontainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const Kpiitem = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

  const services = [
    {
      icon: <Bot className="h-8 w-8 text-blue-400 font-sora" />,
      title: "Agents IA",
      description: "Chatbots intelligents, traitement automatique des emails et gestion des tickets de support"
    },
    {
      icon: <Zap className="h-8 w-8 text-blue-400 font-sora" />,
      title: "Automatisation",
      description: "Automatisation complète de vos processus métiers avec déclencheurs et synchronisation"
    },
    {
      icon: <Database className="h-8 w-8 text-blue-400" />,
      title: "Intégrations",
      description: "Connexions avec Airtable, Notion, Zapier, Make et vos outils préférés"
    }
  ];

  const benefits = [
    {
      icon: <Clock className="h-6 w-6 text-green-400" />,
      title: "Gain de temps",
      description: "Jusqu'à 70% de temps économisé sur vos tâches répétitives"
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-green-400" />,
      title: "Productivité",
      description: "Augmentation significative de votre efficacité opérationnelle"
    },
    {
      icon: <Users className="h-6 w-6 text-green-400" />,
      title: "Personnalisation",
      description: "Solutions sur mesure adaptées à vos besoins spécifiques"
    }
  ];

  const testimonials = [
    {
      name: "Marie Dubois",
      role: "CEO, TechStart",
      content: "Grâce à SYRROS, nous avons automatisé 80% de notre support client. Un gain de temps incroyable !",
      rating: 5
    },
    {
      name: "Pierre Martin",
      role: "Directeur Ops, InnovCorp",
      content: "L'intégration avec nos outils existants s'est faite en douceur. Équipe très professionnelle.",
      rating: 5
    },
    {
      name: "Sarah Johnson",
      role: "CMO, GrowthLab",
      content: "ROI positif dès le premier mois. Je recommande vivement leurs services d'automatisation.",
      rating: 5
    }
  ];

  const partners = [
    { title : "OpenAI",  
      image: "/src/assets/logos/OpenAI.png",
      route: "/openai"},
     { title : "Airtable",  
       image: "/src/assets/logos/airtable.png",
      route: "/airtable"},
     { title: "n8n",
      image: "/src/assets/logos/n8n.png",
      route: "/n8n"},
     {  title: "Ringover",
      image: "/src/assets/logos/Ringover.png",
      route: "/ringover"},
     {   title: "BigQuery",
      image: "/src/assets/logos/BigQuery.png",
      route: "/bigquery"}
  ];
 const container = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};
const steps = [
  {
    id: 1,
    title: "Diagnostic sur mesure",
    desc: "Audit de vos processus, irritants et objectifs. On cartographie les opportunités d'automatisation et on priorise les gains rapides et durables.",
    Icon: ClipboardList
  },
  {
    id: 2,
    title: "Étude de faisabilité",
    desc: "Sélection des outils adaptés et estimation transparente : coûts d'intégration initiaux + coûts mensuels d'API. Vous décidez en toute clarté.",
    Icon: Calculator
  },
  {
    id: 3,
    title: "Test en environnement simulé",
    desc: "Validation dans un bac à sable : comportements, précision, garde‑fous. Les risques sont éliminés avant le réel.",
    Icon: FlaskConical
  },
  {
    id: 4,
    title: "Déploiement & observation",
    desc: "Mise en action dans vos flux réels, sous monitoring fin. On mesure l'impact et on ajuste en douceur avec vos équipes.",
    Icon: Rocket
  },
  {
    id: 5,
    title: "Configuration finale & optimisation",
    desc: "Réglages de précision, sécurité et qualité. Vous repartez avec un agent IA stable, mesuré et aligné sur vos KPI.",
    Icon: Wrench
  }
];

  return (
    <div className = "home-background">  
      {/* Hero Section */}
      <div className="text-center min-h-screen flex flex-col justify-center items-center">
  {/* Titre principal avec animation */}
 <h1 className="text-4xl md:text-6xl font-sora font-bold text-white mb-6 relative">
  {/* Texte principal (gris éteint → blanc après délai plus court) */}
  <span
    className={`transition-all duration-1000 delay-300 ease-in-out ${
      isActive ? "text-white opacity-100" : "text-gray-800 opacity-30"
    }`}
  >
    Automatisez votre business avec{" "}
  </span>

  {/* Mot IA (s'allume en bleu avec zoom + glow) */}
  <span
    className={`transition-all duration-1000 ease-out ${
      isActive
        ? "bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(59,130,246,0.6)] scale-105"
        : "text-gray-800 scale-100"
    }`}
  >
    l'IA
  </span>

  {/* Spotlight derrière le texte */}
  <span
    className={`absolute inset-0 mx-auto w-[200px] h-[200px] rounded-full bg-gradient-radial from-blue-500/30 to-transparent blur-3xl transition-opacity duration-1000 ease-in-out ${
      isActive ? "opacity-100" : "opacity-0"
    }`}
  ></span>
</h1>



  {/* Paragraphe de description */}
  <p
    className={`text-xl font-manrope text-gray-300 mb-8 max-w-3xl mx-auto transition-opacity duration-1000 ${
      isActive ? "opacity-100" : "opacity-0"
    }`}
  >
    Transformez vos processus métiers avec nos solutions d'automatisation IA sur mesure.
    Gagnez en productivité et concentrez-vous sur ce qui compte vraiment.
  </p>

  {/* Boutons CTA */}
  <div className="flex justify-center mt-6">
  <Link
    to="/rendez-vous"
    className={`group px-10 py-4 bg-blue-500 text-white text-lg font-medium rounded-full hover:bg-blue-600 transition-all duration-1000 delay-700 shadow-md flex items-center justify-center gap-2 ${
      isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
    }`}
  >
    <span>Prendre un rendez-vous gratuit</span>
    <ArrowRight
      className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
    />
  </Link>
</div>


</div>
{/* Section Problème */}
<section className="py-20 bg-[#202124] text-white">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    
    {/* Accroche */}
   <motion.h2
  variants={item}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, amount: 0.3 }}
  className="text-3xl md:text-4xl font-sora font-bold mb-6"
>
  Et si vos plus gros freins disparaissaient ?
</motion.h2>
 <motion.p
  variants={item}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, amount: 0.3 }}
  transition={{ delay: 0.2 }} // Décalage pour arriver après le titre
  className="text-lg text-gray-300 max-w-2xl mx-auto mb-12"
>
  Vous faites face chaque jour à des problèmes qui freinent la croissance de votre entreprise :
</motion.p>

  
  {/* Liste des problèmes */}
<motion.div
  variants={container}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, amount: 0.3 }}
  className="grid grid-cols-1 md:grid-cols-3 gap-8"
>
  {/* Carte 1 */}
  <motion.div
    variants={item}
    className="p-6 bg-[#121212] rounded-xl shadow-md"
  >
    <span className="text-4xl mb-4 inline-block">⏳</span>
    <h3 className="text-xl font-semibold mb-2">Perte de temps</h3>
    <p className="text-gray-400">
      Des heures gaspillées sur des tâches répétitives et sans valeur ajoutée.
    </p>
  </motion.div>

  {/* Carte 2 */}
  <motion.div
    variants={item}
    className="p-6 bg-[#121212] rounded-xl shadow-md"
  >
    <span className="text-4xl mb-4 inline-block">⚠️</span>
    <h3 className="text-xl font-semibold mb-2">Erreurs manuelles</h3>
    <p className="text-gray-400">
      Des oublis et des erreurs qui coûtent cher à votre entreprise.
    </p>
  </motion.div>

  {/* Carte 3 */}
  <motion.div
    variants={item}
    className="p-6 bg-[#121212] rounded-xl shadow-md"
  >
    <span className="text-4xl mb-4 inline-block">📉</span>
    <h3 className="text-xl font-semibold mb-2">Manque de productivité</h3>
    <p className="text-gray-400">
      Votre équipe débordée sur l'opérationnel plutôt que l'essentiel.
    </p>
  </motion.div>
</motion.div>


{/* Transition vers la prochaine section */}
<div className="text-center mt-16">
  {/* Phrase bleue avec effet bandeau */}
  <div className="relative inline-block overflow-hidden">
    {/* Texte bleu */}
    <motion.h3
      initial={{ opacity: 0, y: 6 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true, amount: 0.2 }}
      className="text-xl font-semibold text-blue-400 mb-4 relative z-10 fade-target"
    >
      Imaginez si tout cela pouvait disparaître...
    </motion.h3>

    {/* Bandeau animé (révélation) */}
    <motion.div
      aria-hidden="true"
      initial={{ scaleX: 1 }}
      whileInView={{ scaleX: 0 }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true, amount: 0.2 }}
      className="absolute inset-0 origin-left z-20 bg-[#202124] transform-gpu will-change-transform"
    />
  </div>
</div>




 {/* Phrase descriptive qui apparaît ensuite */}
<motion.p
  initial={{ opacity: 0, y: 12 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
  viewport={{ once: true, amount: 0.2 }}  // <-- plus tôt, sans margin
  className="text-gray-300 max-w-2xl mx-auto mt-4 fade-target"
>
  Chez SYRROS, nous combinons IA, automatisation et accompagnement humain pour transformer votre quotidien.
</motion.p>

</div>
</section>
  

{/* ===== Section Processus — Timeline ===== */}
<section id="processus" className="py-20 mb-20 bg-[#202124] text-white">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm tracking-wide
                   bg-[#202124] border border-white/10 text-blue-300">
      Processus • Agents IA
    </span>
    <h2 className="font-sora font-bold text-3xl md:text-4xl mt-4">Notre méthode en 5 étapes</h2>
    <p className="text-gray-300 max-w-3xl mx-auto mt-3">
      Un parcours clair et sécurisé : on évalue, on teste, on déploie — vous gardez la maîtrise des coûts et des résultats.
    </p>
  </div>
  {/* Timeline */}
  <motion.div
    variants={container}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.3 }}
    className="relative max-w-5xl mx-auto mt-12 px-4"
  >
    {/* Ligne verticale */}
    <div
      aria-hidden
      className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-full w-px
                 bg-gradient-to-b from-transparent via-white/10 to-transparent"
    />

    <div className="space-y-10">
      {steps.map((step, idx) => (
        <motion.article
          key={step.id}
          variants={item}
          className={`
            relative md:w-1/2 ${idx % 2 === 0 ? "md:pr-12 md:ml-0 md:mr-auto" : "md:pl-12 md:ml-auto md:mr-0"}
            group
          `}
        >
       {/* Dot */}
<span
  aria-hidden
  className={`
    hidden md:block absolute top-1/2 -translate-y-1/2 h-4 w-4 rounded-full
    bg-gradient-to-br from-blue-400 to-violet-500
    shadow-[0_0_0_6px_rgba(59,130,246,0.12),0_0_22px_rgba(124,77,255,0.55)]
    animate-pulseDot
    ${idx % 2 === 0 ? "right-[-8px]" : "left-[-8px]"}
  `}
/>


          {/* Carte */}
          <motion.div
            whileHover={hoverLift}
            onMouseMove={(e) => {
              const el = e.currentTarget;
              const r = el.getBoundingClientRect();
              const x = ((e.clientX - r.left) / r.width) * 100;
              el.style.setProperty("--shine-x", `${x}%`);
            }}
            className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#151824]/90
                       shadow-[0_10px_30px_rgba(0,0,0,0.35)]
                       transition-transform duration-300 ease-out
                       before:pointer-events-none before:absolute before:inset-0
                       before:opacity-80 before:transition-opacity before:duration-300
                       before:[background:radial-gradient(300px_140px_at_var(--shine-x,80%)_-20%,rgba(59,130,246,0.10),transparent_60%),_radial-gradient(280px_120px_at_10%_120%,rgba(124,77,255,0.10),transparent_60%)]
                       group-hover:before:opacity-100"
          >
            <div className="flex items-start gap-4 p-6">
              <div className="h-11 w-11 rounded-xl border border-white/10 bg-gradient-to-br
                              from-blue-500/15 to-violet-500/15 grid place-items-center
                              shadow-inner">
                <step.Icon className="h-6 w-6 text-blue-300" />
              </div>
              <div>
                <h3 className="font-sora text-lg">{step.title}</h3>
                <p className="text-gray-300 mt-1">{step.desc}</p>
              </div>
            </div>
          </motion.div>
        </motion.article>
      ))}
    </div>
  </motion.div>
</section>

      {/* Kpi Section */}
   <motion.section
   className="py-16 mb-20 home-background text-white"
  onViewportEnter={() => setStart(true)}
  viewport={{ amount: 0.6, once: true }}  // 60% visible puis une seule fois
 >
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold font-sora mb-8">
          Chiffres clés — L'impact de l'IA et de l'automatisation
        </h2>

        <motion.div
          variants={Kpicontainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.7 }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {kpis.map((kpi, i) => (
            <motion.div
              key={i}
              variants={Kpiitem}
              whileHover={{ scale: 1.03 }}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#151824] p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              {/* Chiffre principal */}
              <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">
                <CountUp target={kpi.value} startOn={start} />{kpi.suffix}
              </div>
              {/* Titre + description */}
              <h3 className="text-lg font-semibold mb-1">{kpi.title}</h3>
              <p className="text-gray-300 text-sm mb-4">{kpi.desc}</p>
              {/* Source */}
              <a
                href={kpi.source.url}
                target="_blank"
                rel="noreferrer"
                className="text-xs text-gray-400 hover:text-blue-400 flex items-center gap-1"
              >
                {kpi.source.name}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 3h7v7m0-7L10 14" />
                </svg>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
           {/* Final CTA Section */}
    <section className = "pb-20 home-background">
        <CallToActionBlock />
    </section>
    </div>
  
  );
};
export default Home;