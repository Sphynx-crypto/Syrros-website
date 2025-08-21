import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Bot, Zap, Database, Mail, MessageSquare, Settings, ChevronDown, ChevronUp, Play,  BarChart3, Brain, DollarSign, Rocket, Send as SendIcon } from 'lucide-react';
import { useNavigate } from "react-router-dom";
import CallToActionBlock from "../components/CallToActionBlock";
import { ChevronDoubleRightIcon } from "@heroicons/react/24/solid";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { motion, useInView } from "framer-motion";
// Charge automatiquement tous les logos et renvoie l’URL finale
const logos = import.meta.glob("../assets/logos/*.{png,jpg,svg}", {
  eager: true,
  import: "default",
}) as Record<string, string>;

// utilitaire pour récupérer un logo par nom de fichier
const logo = (name: string) => logos[`../assets/logos/${name}`];
  {/*ecriture automatique*/}

// Animation variants for Framer Motion
const sectionVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    } 
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

const listVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  show: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.4,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

function Typewriter({
  text,
  start,
  speed = 18,
  onDone,
}: {
  text: string;
  start: boolean;
  speed?: number;
  onDone?: () => void;
}) {
  const [out, setOut] = React.useState("");

  // onDone stable
  const onDoneRef = React.useRef(onDone);
  React.useEffect(() => { onDoneRef.current = onDone; }, [onDone]);

  // garde anti faux-départ
  const startedRef = React.useRef(false);

  // >>> AJOUT IMPORTANT : réarmer quand la ligne change
  React.useEffect(() => {
    startedRef.current = false;
  }, [text]);

  React.useEffect(() => {
    if (!start) return;
    if (startedRef.current) return;   // déjà lancé ? on ne relance pas
    startedRef.current = true;

    setOut("");
    let i = 0;
    const id = setInterval(() => {
      i++;
      setOut(text.slice(0, i));
      if (i >= text.length) {
        clearInterval(id);
        onDoneRef.current?.();
      }
    }, speed);

    return () => clearInterval(id);
  }, [text, start, speed]); // onDone NON inclus

  return <>{out}</>;
}

function FeatureList({
  features,
  inView,
  onComplete,
}: {
  features: string[];
  inView: boolean;
  onComplete?:()=> void;
}) {
  const [activeFeature, setActiveFeature] = React.useState(0);
  const [startTyping, setStartTyping] = React.useState(false);
  const completedRef = React.useRef(false);

  // Quand la liste devient visible, on reset et on arme le départ
  React.useEffect(() => {
    if (inView) {
      setActiveFeature(0);
      setStartTyping(true);
      completedRef.current = false;
    }
  }, [inView]);

  const uniqueFeatures = React.useMemo(
    () => [...new Set(features)],     // évite les doublons éventuels
    [features]
  );
React.useEffect(() => {
  if (!inView) return;
  if (completedRef.current) return;
  if (activeFeature >= uniqueFeatures.length) {
    completedRef.current = true;
    onComplete?.(); // notifie le parent (Services)
  }
}, [inView, activeFeature, uniqueFeatures.length, onComplete]);
  return (
    <motion.ul
      className="space-y-2"
      variants={listVariants}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
    >
      {uniqueFeatures.map((feature, idx) => (
        <motion.li key={idx} className="flex items-start" variants={itemVariants}>
          <span className="text-blue-400 mr-2">•</span>

          <span className="font-manrope text-gray-300">
            {/* Déjà écrites */}
            {idx < activeFeature && feature}

            {/* En cours : démarre UNIQUEMENT si c'est la ligne active ET que startTyping est vrai */}
            {idx === activeFeature && (
              <Typewriter
                key={idx} 
                text={feature}
                start={startTyping}          // <-- important : on ne dépend pas d'un inView instable
                speed={20}
                onDone={() => setActiveFeature((n) => n + 1)}
              />
            )}

            {/* À venir : rien */}
            {idx > activeFeature && ""}
          </span>
        </motion.li>
      ))}
    </motion.ul>
  );
}


const Services = () => {

  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-30% 0px" });
  const [activeTab, setActiveTab] = useState(0);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const navigate = useNavigate();


  const services = [
    {
      icon: <Bot className="h-12 w-12 text-blue-400" />,
      title: "Agents IA",
      description: "Créez des assistants virtuels capables de comprendre et traiter les demandes complexes",
      features: [
     
        "Chatbots de service client alimentés par l’IA",
        "Scoring et qualification des leads",
        "Campagnes marketing personnalisées – Automatiser la personnalisation des messages/offres clients.",
        "Prévision de la demande & optimisation des stocks",
        "IA en cybersécurité (détection & réponse)",
        "Moteurs de recommandation produits (IA)"
        
      ]
    },
    {
      icon: <Zap className="h-12 w-12 text-blue-400" />,
      title: "Automatisation de Processus",
      description: "Automatisez vos workflows métiers pour une efficacité maximale",
      features: [
        "Automatisation du traitement des factures",
        "Automatiser l’ensemble du processus achats → facturation → paiement.",
        "Automatiser relances, rappels, rapprochements et priorisation des créances.",
        "Automatisation du support IT (Service Desk)",
        "Automatisation de l’onboarding client",
        "Automatisation de la saisie des données",
      
      ]
    },
    {
      icon: <Database className="h-12 w-12 text-blue-400" />,
      title: "Intégrations & Données",
      description: "Connectez tous vos outils et exploitez vos données pour un écosystème unifié.",
      features: [
  "Intégration de vos outils SaaS (Notion, Airtable, Slack, Trello, etc.)",
  "Synchronisation de bases de données en temps réel",
  "Migration de données sécurisée (anciens systèmes → nouveaux outils)",
  "Centralisation et nettoyage de données (unifier plusieurs sources)",
  "Création de datasets sur mesure",
  "Extraction et transformation de données (ETL automatisé)",
 
]
    }
  ];

  const casesStudies = [
    {
      title: "E-commerce : Automatisation du Support",
      problem: "Gestion manuelle de 500+ tickets par jour",
      solution: "Agent IA pour le premier niveau de support",
      results: "80% de réduction du temps de traitement, satisfaction client +25%"
    },
    {
      title: "Agence Marketing : Workflow Automatisé",
      problem: "Processus de validation client chronophage",
      solution: "Automatisation complète du pipeline d'approbation",
      results: "Temps de validation réduit de 5 jours à 2 heures"
    },
    {
      title: "SaaS : Intégration Multi-Outils",
      problem: "Données dispersées dans 8 applications",
      solution: "Hub central avec synchronisation automatique",
      results: "Vision unifiée des données, productivité +40%"
    }
  ];

  const faqs = [
    {
      question: "Combien de temps faut-il pour mettre en place une automatisation ?",
      answer: "En moyenne, nos solutions sont opérationnelles en 2-4 semaines selon la complexité. Nous commençons toujours par un audit gratuit pour évaluer vos besoins spécifiques."
    },
    {
      question: "Vos solutions s'intègrent-elles avec nos outils existants ?",
      answer: "Absolument ! Nous travaillons avec plus de 50 applications populaires (Airtable, Notion, Slack, etc.) et pouvons créer des intégrations personnalisées si nécessaire."
    },
    {
      question: "Quel est le ROI typique d'une automatisation ?",
      answer: "Nos clients constatent généralement un ROI positif dès le premier mois, avec une économie de 60-80% sur les tâches automatisées et une amélioration de la productivité de 40% en moyenne."
    },
    {
      question: "Proposez-vous de la maintenance et du support ?",
      answer: "Oui, nous offrons un support continu avec maintenance, mises à jour et optimisations. Notre équipe reste disponible pour faire évoluer vos automatisations selon vos besoins."
    },
    {
      question: "Comment garantissez-vous la sécurité des données ?",
      answer: "Nous appliquons les standards de sécurité les plus élevés (chiffrement, authentification, conformité RGPD) et travaillons uniquement avec des fournisseurs certifiés."
    }
  ];
const [visibleCount, setVisibleCount] = useState(6); // 6 applis visibles par défaut

const loadMore = () => {
  setVisibleCount(prev => prev + 6); // Affiche 6 de plus à chaque clic
};

  const productCards = [
    {
      title: "OpenAI",
      description: "Créez, automatisez et optimisez grâce à l'IA générative.",
      image: logo("OpenAI.png"),
      route: "/openai",
    },
    {
      title: "Notion",
      description: "Centralisez vos documents, tâches et automatisations.",
      image: logo("Notion.png"),
      route: "/notion",
    },
    {
      title: "n8n",
      description: "Automatisez vos workflows avec cette plateforme open-source.",
      image: logo("n8n.png"),
      route: "/n8n",
    },
    {
      title: "Supabase",
      description: "Backend-as-a-Service avec base de données PostgreSQL.",
      image: logo("supabase.png"),
      route: "/supabase",
    },
    {
      title: "NotebookLM",
      description: "Assistant IA pour la recherche et l'analyse de documents.",
      image: logo("notebooklm.png"),
      route: "/notebooklm",
    },
    {
      title: "Pandadoc",
      description: "Créez et gérez vos documents et contrats numériques.",
      image: logo("pandadoc.png"),
      route: "/pandadoc",
    },
    {
      title: "Pennylane",
      description: "Simplifiez votre comptabilité et gestion financière.",
      image: logo("pennylane.png"),
      route: "/pennylane",
    },
    {
      title: "PowerBI",
      description: "Créez des tableaux de bord et analyses de données.",
      image: logo("PowerBI.png"),
      route: "/powerbi",
    },
    {
      title: "Pytorch",
      description: "Framework de machine learning et intelligence artificielle.",
      image: logo("pytorch.png"),
      route: "/pytorch",
    },
    {
      title: "Qonto",
      description: "Banque en ligne pour entreprises et freelances.",
      image: logo("qonto.png"),
      route: "/qonto",
    },
    {
      title: "Retool",
      description: "Créez rapidement des applications internes.",
      image: logo("Retool.png"),
      route: "/retool",
    },
    {
      title: "Ringover",
      description: "Solution de téléphonie cloud pour entreprises.",
      image: logo("Ringover.png"),
      route: "/ringover",
    },
    {
      title: "Slack",
      description: "Plateforme de communication et collaboration d'équipe.",
      image: logo("slack.png"),
      route: "/slack",
    },
    
    {
      title: "Tableau",
      description: "Plateforme de visualisation et analyse de données.",
      image: logo("Tableau.png"),
      route: "/tableau",
    },
    {
      title: "Weweb",
      description: "Créez des applications web visuellement.",
      image: logo("Weweb.png"),
      route: "/weweb",
    },
    {
      title: "Whalesync",
      description: "Synchronisez vos données entre différentes applications.",
      image: logo("Whalesync.png"),
      route: "/whalesync",
    },
    {
      title: "Zendesk",
      description: "Plateforme de service client et support.",
      image: logo("Zendesk.png"), 
      route: "/zendesk",
    },
    {
      title: "Airbyte",
      description: "Plateforme d'intégration et synchronisation de données.",
      image: logo("airbyte.png"),
      route: "/airbyte",
    },
    {
      title: "Airtable",
      description: "Base de données collaborative et flexible.",
      image: logo("airtable.png"),
      route: "/airtable",
    },
    {
      title: "Anthropic",
      description: "IA conversationnelle avancée avec Claude.",
      image: logo("anthropic.png"),
      route: "/anthropic",
    },
    {
      title: "BigQuery",
      description: "Entrepôt de données cloud de Google.",
      image: logo("BigQuery.png"),
      route: "/bigquery",
    },
    {
      title: "DBT",
      description: "Transformez vos données avec des modèles SQL.",
      image: logo("DBT.png"),
      route: "/dbt",
    },
    {
      title: "Dust",
      description: "Plateforme d'IA pour automatiser vos workflows.",
      image: logo("Dust.png"),
      route: "/dust",
    },
    {
      title: "Fivetran",
      description: "Intégration automatisée de données cloud.",
      image: logo("fivetran.png"),
      route: "/fivetran",
    },
    {
      title: "Google Drive",
      description: "Stockage et partage de fichiers dans le cloud.",
      image: logo("google-drive.png"),
      route: "/googledrive",
    },
    {
      title: "Hubspot",
      description: "CRM et plateforme marketing tout-en-un.",
      image: logo("Hubspot.png"),
      route: "/hubspot",
    },
    {
      title: "Jotform",
      description: "Créez des formulaires en ligne facilement.",
      image: logo("jotform.png"),
      route: "/jotform",
    },
    {
      title: "Klaviyo",
      description: "Plateforme d'email marketing et automation.",
      image: logo("klaviyo.png"),
      route: "/klaviyo",
    },
    {
      title: "LangChain",
      description: "Framework pour développer des applications IA.",
      image: logo("langchain.png"),
      route: "/langchain",
    },
    {
      title: "Leadbay",
      description: "Génération et gestion de leads qualifiés.",
      image: logo("Leadbay.png"),
      route: "/leadbay",
    },
    {
      title: "Leexi",
      description: "Assistant IA pour optimiser vos conversations.",
      image: logo("Leexi.png"),
      route: "/leexi",
    },
    {
      title: "Llama",
      description: "Modèles de langage open-source de Meta.",
      image: logo("Llama.png"),
      route: "/llama",
    },
    {
      title: "Sellsy",
      description: "CRM et gestion commerciale française.",
      image: logo("Logo_Sellsy.png"),
      route: "/sellsy",
    },
    {
      title: "Looker Studio",
      description: "Créez des rapports et tableaux de bord interactifs.",
      image: logo("looker-studio.png"),
      route: "/lookerstudio",
    },
    {
      title: "MODULR",
      description: "Plateforme de paiements et services financiers.",
      image: logo("MODULR.png"),
      route: "/modulr",
    }
  ];
 const sectionsIA = [
    {
      icon: <Bot className="w-6 h-6 text-blue-600 font sora" />,
      title: " Comment il fonctionne",
      content: [
      "Notre agent s’appuie sur une base de connaissances spécialisée (IA, automatisation, outils digitaux) et, à chaque question, réalise une analyse sémantique pour comprendre l’intention, rechercher l’information pertinente et formuler une réponse en temps réel. En parallèle, un indice de confiance est calculé uniquement pour l’agent : ce score alimente son moteur de décision. Si le seuil de confiance n’est pas atteint, la requête est automatiquement transmise à un conseiller humain"
      ],
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-green-600" />,
      title: " L’indice de confiance",
      content: [
        "Lorsque le seuil de confiance n’est pas atteint, l’agent ne prend aucun risque : il transmet automatiquement la requête de l’utilisateur, accompagnée de la réponse qu’il avait initialement formulée mais jugée insuffisamment fiable, à un conseiller humain. Ce dernier rédige alors la version définitive de la réponse, garantissant une précision totale. En parallèle, l’agent informe l’utilisateur par un message générique indiquant qu’il n’est pas certain de sa réponse et qu’un expert humain a été sollicité pour prendre le relais. Ce mécanisme crée une continuité fluide entre intelligence artificielle et intervention humaine, assurant à la fois rapidité et fiabilité.",
      ],
    },
    {
      icon: <Brain className="w-6 h-6 text-purple-600" />,
      title: " L’apprentissage supervisé",
      content: [
        "Chaque fois qu’un conseiller humain corrige ou complète une réponse, cette nouvelle information est immédiatement intégrée par l’agent. L’IA enregistre la solution validée et enrichit automatiquement sa base de connaissances, créant ainsi un cercle vertueux d’amélioration continue. Au fil des interactions, l’agent apprend de ses ajustements, gagne en précision et en autonomie, jusqu’à être capable de fournir lui-même, à l’avenir, la bonne réponse sans intervention humaine.", 
      ],
    },
    {
      icon: <DollarSign className="w-6 h-6 text-yellow-600" />,
      title: " Un avantage économique décisif",
      content: [
        "Un salarié dédié au support client représente en moyenne un coût d’environ 2 800 € par mois, pour environ 140 heures de travail effectif, soit près de 20 € par heure. En comparaison, un agent IA peut répondre à vos clients sans interruption, 24h/24 et 7j/7. Chaque interaction coûte environ 0,005 €, ce qui signifie que 1 000 demandes clients ne reviennent qu’à 5 €. Ainsi, alors qu’un salarié ne peut traiter qu’un nombre limité de requêtes, l’IA est capable de gérer un volume quasi illimité, instantanément et à une fraction du coût.",
      ],
    },
    {
      icon: <Rocket className="w-6 h-6 text-red-600" />,
      title: " Testez-le dès maintenant",
      content: [
        "Vous trouverez juste en dessous un bloc interactif pour poser vos questions et voir comment l’agent réagit en temps réel.",
        "Essayez, et observez par vous-même !",
      ],
    },
  ];
const total = services.length;
const [titlesDone, setTitlesDone] = React.useState(0);
const [descsDone, setDescsDone] = React.useState(0);
const [listsDone, setListsDone] = React.useState(0);
const allDone = titlesDone === total && descsDone === total && listsDone === total;

  // Fonction pour envoyer un message dans le chat
  const sendMessage = () => {
    const input = document.getElementById('messageInput') as HTMLInputElement;
    const messagesContainer = document.getElementById('chatMessages');
    
    if (!input || !messagesContainer || !input.value.trim()) return;
    
    const message = input.value.trim();
    
    // Ajouter le message de l'utilisateur
    const userMessageDiv = document.createElement('div');
    userMessageDiv.className = 'flex items-start space-x-3 justify-end';
    userMessageDiv.innerHTML = `
      <div class="bg-blue-600 rounded-2xl rounded-tr-sm px-4 py-3 max-w-xs">
        <p class="text-white text-sm font-manrope">${message}</p>
      </div>
      <div class="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center flex-shrink-0">
        <span class="text-white text-xs font-bold">U</span>
      </div>
    `;
    
    messagesContainer.appendChild(userMessageDiv);
    input.value = '';
    
    // Scroll vers le bas
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
    
    // Simuler une réponse de l'IA après un délai
    setTimeout(() => {
      const responses = [
        "Excellente question ! Nos solutions d'automatisation peuvent réduire jusqu'à 80% des tâches répétitives. Souhaitez-vous en savoir plus sur un domaine spécifique ?",
        "Nous utilisons des technologies comme OpenAI, n8n et Airtable pour créer des workflows intelligents. Quel est votre principal défi actuellement ?",
        "L'IA peut transformer votre business de nombreuses façons : support client automatisé, analyse de données, génération de contenu... Que souhaitez-vous automatiser en priorité ?",
        "Nos clients voient généralement un ROI positif dès le premier mois. Voulez-vous que nous analysions votre cas spécifique lors d'un audit gratuit ?",
        "C'est une question très pertinente ! Chaque projet est unique. Je vous recommande de prendre rendez-vous avec nos experts pour une analyse personnalisée.",
        "Nos solutions s'intègrent parfaitement avec vos outils existants. Quels logiciels utilisez-vous actuellement dans votre entreprise ?"
      ];
      
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      
      const botMessageDiv = document.createElement('div');
      botMessageDiv.className = 'flex items-start space-x-3';
      botMessageDiv.innerHTML = `
        <div class="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
          <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
          </svg>
        </div>
        <div class="bg-gray-700 rounded-2xl rounded-tl-sm px-4 py-3 max-w-xs">
          <p class="text-white text-sm font-manrope">${randomResponse}</p>
        </div>
      `;
      
      messagesContainer.appendChild(botMessageDiv);
      messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }, 1000 + Math.random() * 2000); // Délai aléatoire entre 1-3 secondes
  };

  
  return (
    <div className="pt-16 home-background">
      {/* Hero Section */}
   <section className="py-16" ref={ref}>
  <div className="text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h1 className="text-4xl md:text-5xl font-sora font-bold text-white mb-6">
      Nos Services d’Automatisation IA
    </h1>
    <p className="text-xl font-manrope text-gray-300 max-w-3xl mx-auto">
      Découvrez comment nos solutions sur mesure peuvent transformer votre
      entreprise et optimiser vos processus métiers grâce à l’intelligence
      artificielle.
    </p>
  </div>


      {/* Grille des services avec stagger */}
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8"
        variants={sectionVariants}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            className="bg-gray-900 p-8 rounded-lg hover:bg-gray-700 transition-colors"
          >
            <div className="mb-6">{service.icon}</div>

            {/* Titre avec écriture */}
         <h3 className="text-2xl font-sora font-semibold text-white mb-4">
  <Typewriter text={service.title} start={inView} onDone={() => setTitlesDone(n => n + 1)} />
</h3>
  {/* Description avec écriture */}
<p className="font-manrope text-gray-300 mb-6">
  <Typewriter text={service.description} start={inView} speed={15} onDone={() => setDescsDone(n => n + 1)} /> 
</p>

{<FeatureList features={service.features} inView={inView} onComplete={() => setListsDone(n => n + 1)} />}
          </motion.div>
        ))}
      </motion.div>
    {allDone && (
 <>
       {/*Bloc de transition avec bouton rendez-vous */}
<div className="max-w-3xl mx-auto px-4 pt-40">
  {/* Divider with chip */}
  <div className="relative flex items-center justify-center mb-8">
    <div className="h-px w-full bg-white/10" />
    <span className="absolute px-3 py-1 text-sm capitalize tracking-wider bg-slate-800 text-white/70 rounded-full border border-white/10 font sora font semi-bold">
      {/* ✏️ Change label */}
      Lancez le diagnostic
    </span>
  </div>

  {/* CTA copy */} 
  <p className="text-center text-lg md:text-xl text-white/90 mb-6">
    {/* ✏️ Change text */}
    Ce n’est qu’un aperçu de ce que nous automatisons. Voyons ensemble comment l’IA peut créer de la valeur dans votre activité.
  </p>

     {/* CTA Button */}
  <div className="text-center">
        <Link
  to="/rendez-vous"
  className="relative group inline-flex items-center px-12 py-3 rounded-lg  bg-gradient-to-r from-orange-500 to-orange-600 backdrop-blur-md text-white text-sm font-sora font-medium overflow-hidden transition-all duration-300 hover: bg-blue-600"
>
  {/* Texte animé */}
  <span className="ml-2 whitespace-nowrap transition-transform duration-1000 ease-in-out group-hover:-translate-x-4">
    Prendre rendez vous 
  </span>


  {/* Flèche avec fond flou */}
  <span
    className="absolute top-1/2 -translate-y-1/2 left-3 w-8 h-7 rounded-md  bg-white/20 backdrop-blur-sm flex items-center justify-center transition-all duration-1000 ease-in-out group-hover:left-[80%]"
  >
    <ArrowRightIcon className="w-5 h-5 text-white" />
  </span>
</Link>
  </div>
</div>
     </>
)}
   </section>
      
      {/* Products Section */}
      <section className="py-16">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-sora font-semibold text-white mb-4">
        Nos Outils Partenaires
      </h2>
    </div>
    {/* Grille de produits */}
    <div className="grid gap-8 grid-cols-2 sm:grid-cols-3 lg:grid-cols-3">
      {productCards.slice(0, visibleCount).map((product, index) => (
        <div
          key={index}
          onClick={() => navigate(product.route)}
          className="cursor-pointer bg-gray-900 hover:bg-gray-700 transition-all duration-300 rounded-xl p-6 shadow-lg flex flex-col items-center text-center"
        >
          <img
            src={product.image}
            alt={product.title}
            className="w-16 h-16 mb-4"
          />
          <h3 className="text-xl font-sora font-semibold text-white">
            {product.title}
          </h3>
          <p className="text-sm font-manrope text-gray-300 mt-2">
            {product.description}
          </p>
        <button className= "mt-4 flex items-center gap-2 text-sm font-semibold text-white hover:text-blue-300 transition">
        En savoir plus 
          <ArrowRightIcon className="w-4 h-4" /> 
        </button>
        </div>
      ))}
    </div>

    {/* Bouton Charger plus */}
    {visibleCount < productCards.length && (
      <div className="mt-8 flex justify-center">
        <button
          onClick={loadMore}
        
          className="relative group flex justify-center items-center px-12 py-3 rounded-lg bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold overflow-hidden"
        >  
           <span
    className="ml-2 text-sm whitespace-nowrap transition-transform duration-1000 ease-in-out group-hover:-translate-x-6"
  >
    Afficher plus
  </span>
           <span
    className="absolute top-1/2 -translate-y-1/2 left-3 w-8 h-8 rounded-md bg-white/20 backdrop-blur-sm flex items-center justify-center transition-all duration-1000 ease-in-out group-hover:left-[75%]"
  > 
             <ChevronDoubleRightIcon className="w-5 h-5" />
              
  </span>
        </button> 
      </div>
     
    )}
  </div>

</section>

      {/* Cas d'étude */}
      <section className="py-16 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-sora font-semibold text-white mb-4">
              Cas d'Usage Concrets
            </h2>
            <p className="text-xl font-manrope text-gray-300">
              Imaginez un agent de support client disponible 24/7, capable non seulement de répondre instantanément à vos questions, mais aussi de s’améliorer après chaque échange. C’est exactement ce que nous vous présentons ici.
            </p>
              <div className="max-w-4xl mx-auto px-6 py-12 space-y-10">
    {sectionsIA.map((s, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: i * 0.2 }}
          className="bg-gray-900 rounded-2xl shadow-lg p-6 border border-gray-700"
        >
          <div className="flex items-center gap-3 mb-4">
            {s.icon}
            <h2 className="text-xl font-bold bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent font-sora font-bold">
              {s.title}
            </h2>
          </div>
          <ul className="text-justify space-y-2 text-white leading-relaxed font-manrope">
            {s.content.map((line, j) => (
              <li key={j}>{line}</li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
          </div>
        </div>
   
      </section>

      {/* Section Messagerie Interactive */}
      <section className="py-8 ">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-sora font-semibold text-white mb-4">
              Testez notre Agent IA
            </h2>
            <p className="text-xl font-manrope text-gray-300">
              Posez vos questions et découvrez comment notre IA peut vous aider
            </p>
          </div>
          
          <div className="bg-gray-900 rounded-2xl shadow-2xl overflow-hidden">
            {/* Header de la messagerie */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-4">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-pulse"></div>
                <h3 className="text-white font-sora font-semibold">Agent IA</h3>
                <span className="ml-auto text-blue-100 text-sm">En ligne</span>
              </div>
            </div>
            
            {/* Zone de messages */}
            <div 
              id="chatMessages" 
              className="h-96 overflow-y-auto p-6 space-y-4 bg-gray-900"
              style={{ scrollBehavior: 'smooth' }}
            >
              {/* Message de bienvenue */}
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Bot className="w-4 h-4 text-white" />
                </div>
                <div className="bg-gray-700 rounded-2xl rounded-tl-sm px-4 py-3 max-w-xs">
                  <p className="text-white text-sm font-manrope">
                    Bonjour ! Je suis votre assistant IA. Posez-moi vos questions sur l'automatisation, l'IA ou nos services. 🤖
                  </p>
                </div>
              </div>
            </div>
            
            {/* Zone de saisie */}
            <div className="border-t border-gray-700 p-4">
              <div className="flex space-x-3">
                <input
                  id="messageInput"
                  type="text"
                  placeholder="Tapez votre message..."
                  className="flex-1 bg-gray-800 border border-gray-600 rounded-full px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent font-manrope"
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      sendMessage();
                    }
                  }}
                />
                <button
                  id="sendButton"
                  onClick={() => sendMessage()}
                  className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6 py-3 font-sora font-medium transition-colors duration-200 flex items-center space-x-2"
                >
                  <SendIcon className="w-4 h-4" />
                  <span className="hidden sm:inline">Envoyer</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
     

      {/* CTA Section */}
      <section className ="pb-16 home-background">
    <CallToActionBlock/>
      </section>
    </div>
  
  );
};

export default Services;
