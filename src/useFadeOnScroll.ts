import { useEffect } from "react";

export function useFadeOnScroll() {
  useEffect(() => {
    const fadeTargets = document.querySelectorAll(".fade-target");

    function handleScroll() {
      // Seuil de 40% du défilement vertical
      const scrollPosition = window.scrollY + window.innerHeight;
      const triggerPoint = document.documentElement.scrollHeight * 0.4;

      if (scrollPosition >= triggerPoint) {
        // Apparition de la première phrase
        fadeTargets[0]?.classList.add("fade-in");

        // Apparition de la deuxième phrase avec un délai
        setTimeout(() => {
          fadeTargets[1]?.classList.add("fade-in");
        }, 500);

        // Retire l'écouteur une fois déclenché
        window.removeEventListener("scroll", handleScroll);
      }
    }

    window.addEventListener("scroll", handleScroll);

    // Nettoyage si le composant est démonté
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
}