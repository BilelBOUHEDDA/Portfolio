import React, { useState } from 'react';

import img1 from '../assets/commerce_1.png'
import img2 from '../assets/commerce_2.png'
import img3 from '../assets/commerce_3.png'
import img4 from '../assets/commerce_4.png'
import img5 from '../assets/commerce_5.png'
import img6 from '../assets/commerce_6.png'

const images = [img1, img2, img3, img4, img5, img6];

const Project6 = () => {

  const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

  return (
    <div className="container project-detail">
      <h1>Développement d'un Site de E-Commerce</h1>

      <section className="section introduction">
        <h2>Introduction</h2>
        <p className="text-justify">
          Cette SAE était divisée en trois sous-projets, formant un ensemble cohérent. Nous avions pour objectif de créer un site de e-commerce en passant par toutes les étapes, du MCD à la réalisation de la base de données, jusqu'à l'implémentation sur le web en utilisant le framework Flask et le logiciel PyCharm.
        </p>
        <p className="text-justify">
          En plus du développement du site, nous devions rédiger plusieurs rapports et un dossier de gestion de projet, puis créer une machine virtuelle pour déployer notre application. Mon groupe était composé de Laabany Shakir, Oudini Zinedine, et moi-même.
        </p>
      </section>

      <section className="section travail-realise-s2-03">
        <h2>Travail Réalisé | SAE S2.03</h2>
        <p className="text-justify">
          Pour cette partie de la SAE, nous avons développé un site de e-commerce entièrement fonctionnel. Nous avons d'abord élaboré un MCD pour structurer notre base de données, puis nous avons créé le fichier SQL correspondant.
        </p>
        <p className="text-justify">
          Le site était centré sur la vente de chaussures et incluait des fonctionnalités telles que des filtres, la gestion des stocks, et le suivi des commandes. Chaque membre du groupe avait des tâches spécifiques, notamment la gestion des avis produits et des fonctionnalités pour les administrateurs.
        </p>
        <p className="text-justify">
          Le site a été hébergé sur PythonAnywhere, un environnement de développement intégré en ligne et un service d'hébergement web basé sur Python.
        </p>
      </section>

      <section>
      <h2>Quelques images du site de e-commerce</h2>
      <div className="carousel">
            <div className="carousel-inner">
                <img src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} />
            </div>
            <button className="carousel-control prev" onClick={goToPrevious}>
                &#8249;
            </button>
            <button className="carousel-control next" onClick={goToNext}>
                &#8250;
            </button>
        </div>
      </section>

      <section className="section travail-realise-s2-05">
        <h2>Travail Réalisé | SAE S2.05</h2>
        <p className="text-justify">
          Nous avons rédigé quatre rapports distincts : un rapport sur le cahier des charges du site de e-commerce, un rapport économique, un plan d'assurance qualité du projet, et un dossier de gestion de projet.
        </p>
        <p className="text-justify">
          Le rapport économique, rédigé en anglais, présentait les ressources disponibles, le projet lui-même, et les coûts additionnels. Le rapport de gestion de projet incluait une évaluation du budget et des ressources.
        </p>
        <p>
          <a href="URL_TO_4_REPORTS" target="_blank" rel="noopener noreferrer">Dossier compressé des 4 rapports</a>
        </p>
      </section>

      <section className="section travail-realise-s2-03">
        <h2>Travail Réalisé | SAE S2.03</h2>
        <p className="text-justify">
          Cette partie consistait à installer et configurer des services réseau pour héberger notre site de e-commerce. Nous avons rédigé un dossier de définition des besoins pour expliquer nos choix de services et un compte-rendu détaillant nos choix pour l'hébergement de l'application.
        </p>
        <p className="text-justify">
          Nous avons également créé une machine virtuelle, installé un serveur web, et déployé notre application web sur cette machine virtuelle.
        </p>
        <p>
          <a href="URL_TO_DOSSIER_ET_COMPTE_REND" target="_blank" rel="noopener noreferrer">Dossier et Compte-Rendu</a>
        </p>
      </section>

      <section className="section ressenti-personnel">
        <h2>Mon Ressenti Personnel</h2>
        <p className="text-justify">
          J'ai beaucoup apprécié cette SAE car elle m'a permis de voir toutes les étapes du déploiement d'un site web. Avant cette SAE, ma vision du processus de publication d'un site web était très différente. La cohésion au sein du groupe a été excellente, ce qui a facilité la réalisation des livrables dans les délais.
        </p>
      </section>

      <section className="section apport">
        <h2>Ce que Cette SAE m'a Apporté</h2>
        <p className="text-justify">
          Cette SAE m'a apporté une compréhension approfondie du développement complet d'une application web, y compris la configuration des serveurs web et la création de machines virtuelles. Cela a enrichi mes compétences en gestion de projet et en déploiement d'applications.
        </p>
      </section>

      <section className="section competences-evaluees">
        <h2>Compétences Évaluées Durant Cette SAE</h2>
        <ul className="text-justify">
          <li><strong>Exploitation d'une base de données :</strong> Création et gestion de la base de données pour le site de e-commerce.</li>
          <li><strong>Installation de services réseau :</strong> Configuration des services nécessaires pour héberger le site.</li>
          <li><strong>Gestion de projet :</strong> Rédaction des rapports et dossier de gestion de projet, ainsi que coordination des tâches au sein du groupe.</li>
        </ul>
      </section>
    </div>
  );
};

export default Project6;