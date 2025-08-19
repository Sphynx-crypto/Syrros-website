import React from "react";
import CallToActionBlock from "../components/CallToActionBlock";
const Articles = () => {
  const articles = [
    {
      id: 1,
      title: "Comprendre l'IA générative",
      excerpt: "Découvrez comment l'IA générative transforme les entreprises et la création de contenu.",
      date: "25 Juillet 2025",
    },
    {
      id: 2,
      title: "Automatisation des processus métiers",
      excerpt: "Pourquoi et comment automatiser les tâches répétitives pour gagner en efficacité.",
      date: "15 Juillet 2025",
    },
    {
      id: 3,
      title: "RGPD et données personnelles",
      excerpt: "Tout savoir sur la conformité RGPD et son importance pour votre entreprise.",
      date: "10 Juillet 2025",
    },
  ];

  return (
    <div className ="articles-background">
    <section className="pt-20 pb-16">
    <div className="max-w-5xl mx-auto px-6 py-16 text-white text-center font-sora font-bold">
      {/* Titre */}
        <h1 className="text-4xl font-bold mb-4">
          Nous partageons notre expertise pour vous aider à tirer le meilleur parti de l’IA et de l’automatisation.
        </h1>

        {/* Description ajoutée */}
        <p className="text-lg text-gray-300 font-normal max-w-3xl mx-auto mb-24">
          Grâce à notre expérience en intelligence artificielle et en automatisation, nous vous aidons à optimiser vos processus,
          réduire vos coûts et améliorer l’efficacité globale de votre entreprise.
        </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 mb-16 ">
        {articles.map((article) => (
          <div
            key={article.id}
            className="p-6 bg-white/10 backdrop-blur-md rounded-lg shadow-md hover:bg-white/20 transition cursor-pointer  "
          >
            <h2 className="text-2xl font-semibold font-sora">{article.title}</h2>
            <p className="text-gray-300 text-sm font-manrope">{article.date}</p>
            <p className="mt-2">{article.excerpt}</p>
          </div>
        ))}
      </div>
    </div> 
      <CallToActionBlock />
    </section>
    </div>
  );
};

export default Articles;
