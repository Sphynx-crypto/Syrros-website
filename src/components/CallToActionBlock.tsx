import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import {UseEffect} from "react"
const CallToActionBlock = () => {
  const [animate, setAnimate] = useState(false); 
  const navigate = useNavigate();
  const [hovering, setHovering] = useState(false);
  const [key, setKey] = useState(0);
  const handleClick = () => {setAnimate(true)}; 
  return (
    <section className="relative w-full max-w-[1000px] mx-auto overflow-hidden bg-[radial-gradient(ellipse_at_center,_#252B48_0%,_#1A1C2C_100%)] py-20"
>
      {/* Lignes décoratives */}
      <div 
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
 <svg className="absolute inset-0 w-full h-full hidden sm:block" viewBox="0 0 1440 600" fill="none" xmlns="http://www.w3.org/2000/svg">
  {/* Lignes droite */}
 <g className={`animated-lines ${animate ? 'animate-glow' : ''}`} stroke="rgba(255,255,255,0.05)">
    <path d="M 1680 0 C 1580 200 1580 400 1600 600" />
    <path d="M 1620 0 C 1520 200 1520 400 1540 600" />
    <path d="M 1560 0 C 1460 200 1460 400 1480 600" />
    <path d="M 1500 0 C 1400 200 1400 400 1420 600" />
    <path d="M 1440 0 C 1340 200 1340 400 1360 600" />
    <path d="M 1380 0 C 1280 200 1280 400 1300 600" />
  </g>
    {/* Lignes gauche */}
  <g className={`animated-lines ${animate ? 'animate-glow' : ''}`} stroke="rgba(255,255,255,0.05)">
 <path d="M -120 0 C -20 200 -20 400 -40 600" />
    <path d="M -60 0 C 40 200 40 400 20 600" />
    <path d="M 0 0 C 100 200 100 400 80 600" />
    <path d="M 60 0 C 160 200 160 400 140 600" />
    <path d="M -180 0 C -80 200 -80 400 -100 600" />
    <path d="M -240 0 C -140 200 -140 400 -160 600" />
   
  </g>
</svg>
      </div>

      {/* Contenu principal */}
      <div className="relative max-w-5xl mx-auto px-6 text-center text-white">
        <h2 className="text-4xl font-extrabold mb-4">
          Prêt à transformer votre business ?
        </h2>
        <p className="text-lg mb-8 text-gray-300">
          Discutez avec un expert et planifiez votre audit gratuit !
        </p>
        <div className="flex justify-center mt-10">
        <button
          onClick={() => navigate("/rendez-vous")}
           onMouseEnter={() => {
  setAnimate(false);
  setTimeout(() => setAnimate(true), 10); 
  setHovering(true);
}}
          onMouseLeave={() => {
            setAnimate(false);
            setHovering(false);
        }}
          className=" flex items-center gap-2
        px-6 py-3
        rounded-lg 
        font-semibold text-white 
        transition-all duration-300 
        bg-gradient-to-r from-orange-500 to-orange-600 
        hover:from-orange-600 hover:to-orange-700 
        shadow-md hover:shadow-lg"> 
           <span>Passez au niveau supérieur</span>
      <FaArrowRight
        className={`
          transition-transform duration-300 
          ${hovering ? "translate-x-1 text-orange-100" : "text-white"}
        `}
      />
  
</button>
</div>
      </div>
    </section>
  );
};

export default CallToActionBlock;
