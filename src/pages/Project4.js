import React, { useState } from 'react';

import img1 from '../assets/img_1_1.jpg'
import img2 from '../assets/img_1_2.jpg'
import img3 from '../assets/img_1_3.jpg'

const images = [img1, img2, img3];

const Project4 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };
  return (
    
    <div className="container project-detail">
      <h1>Développement d'une Application Mobile pour une Fête Foraine</h1>

      <section className="section introduction">
        <h2>Introduction</h2>
        <p className="text-justify">
          La SAE du semestre 4 a poursuivi le projet commencé au semestre 3, avec pour objectif de développer une application mobile basée sur l'application web précédemment créée. Contrairement au semestre 3, cette SAE a été réalisée par une équipe réduite à deux personnes, ce qui a conduit à des ajustements du cahier des charges pour rendre le projet réalisable dans le cadre de nos capacités.
        </p>
        <p className="text-justify">
          Le développement mobile était une nouveauté pour nous, ajoutant une complexité supplémentaire. Nous avions deux mois pour adapter l'application web pour les appareils mobiles, ce qui a nécessité une réévaluation de nos objectifs et une gestion rigoureuse du temps.
        </p>
      </section>

      <section className="section cahier-des-charges">
        <h2>Cahier des charges</h2>
        <p className="text-justify">
          L'application mobile devait inclure trois pages principales :
        </p>
        <ul className="text-justify">
          <li>Page d'accueil présentant la manifestation.</li>
          <li>Page affichant la carte interactive.</li>
          <li>Page détaillant les prestations proposées.</li>
        </ul>
        <p className="text-justify">
          Contrairement à l'application web, cette version mobile ne nécessitait pas d'interaction avec une base de données. Les informations devaient être saisies manuellement, ce qui simplifiait la partie backend mais augmentait la charge de travail pour le développement mobile. Cette adaptation est d'autant plus significative étant donné notre équipe réduite et le temps limité.
        </p>
      </section>

      <section className="section travail-realise">
        <h2>Travail réalisé</h2>
        <p className="text-justify">
          En tant que binôme, nous avons partagé les tâches et travaillé ensemble sur la plupart des aspects du développement. Voici les tâches spécifiques que j'ai réalisées :
        </p>
        <ul className="text-justify">
          <li>Création des maquettes de l'application mobile.</li>
          <li>Sélection et intégration des informations pertinentes pour chaque page.</li>
          <li>Développement d'un bouton pour changer le thème de l'application.</li>
          <li>Conception des différentes pages de l'application.</li>
          <li>Mise en place d'une barre de navigation pour faciliter l'accès entre les pages.</li>
          <li>Création de la carte interactive au format SVG.</li>
        </ul>
        <p className="text-justify">
          Nous avons utilisé Trello et la méthodologie Scrum pour organiser notre travail en sprints, permettant une gestion agile du projet. À la fin du semestre, nous avons présenté notre travail devant un jury sous forme de diaporama.
        </p>
      </section>
        <h2>Quelques images de l'application</h2>
        <div className="carousel">
            <div className="carousel-inner-2">
                <img src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} />
            </div>
            <button className="carousel-control prev" onClick={goToPrevious}>
                &#8249;
            </button>
            <button className="carousel-control next" onClick={goToNext}>
                &#8250;
            </button>
        </div>

      <section>

      </section>
      <section className="section competences-acquises">
        <h2>Compétences acquises</h2>
        <p className="text-justify">
          Comme pour le semestre 3, cette SAE a permis de mettre en pratique les six compétences générales requises :
        </p>
        <ul className="text-justify">
          <li><strong>C1 :</strong> Développement d'une application mobile avec Android Studio et Kotlin.</li>
          <li><strong>C2 :</strong> Optimisation des performances et gestion efficace des ressources sur une plateforme mobile.</li>
          <li><strong>C3 :</strong> Administration des systèmes mobiles et gestion des interactions entre les différents composants de l'application.</li>
          <li><strong>C4 :</strong> Gestion des données, bien que cette version ne nécessitait pas de base de données.</li>
          <li><strong>C5 :</strong> Conduite de projet avec des outils de gestion comme Trello et des diagrammes de suivi.</li>
          <li><strong>C6 :</strong> Collaboration efficace en binôme, organisation des tâches et préparation de la soutenance.</li>
        </ul>
      </section>

      <section className="section ameliorations">
        <h2>Ce qui aurait pu être amélioré</h2>
        <p className="text-justify">
          En dépit de nos efforts, nous avons rencontré des difficultés d'organisation en tant que petite équipe. L'apprentissage de Kotlin et d'Android Studio a pris plus de temps que prévu, impactant le développement des fonctionnalités. De plus, le design de l'application pourrait être amélioré pour offrir une apparence plus soignée et professionnelle.
        </p>
      </section>

      <section className="section taches-restantes">
        <h2>Ce qu'il reste à faire</h2>
        <p className="text-justify">
          Plusieurs aspects importants doivent encore être abordés :
        </p>
        <ul className="text-justify">
          <li>Implémentation d'une base de données pour automatiser la gestion des informations.</li>
          <li>Création des fonctionnalités CRUD (Create, Read, Update, Delete) pour gérer les données de l'application.</li>
          <li>Développement du système de connexion pour gérer les différents niveaux d'accès des utilisateurs.</li>
        </ul>
      </section>

      <section className="section bilan">
        <h2>Bilan personnel et conclusion</h2>
        <p className="text-justify">
          Le développement de cette application mobile a significativement amélioré mes compétences techniques et en gestion de projet. Travailler en binôme a présenté des défis uniques, mais aussi des opportunités d'apprentissage précieuses. Bien que le développement mobile ne soit pas mon domaine de prédilection, cette expérience a été enrichissante et m'a préparé à faire face à des situations inattendues dans le domaine de l'informatique.
        </p>
      </section>

      <section className="section lien-github">
        <h2>Lien du projet</h2>
        <p>
          Vous pouvez consulter le projet hébergé sur GitHub à l'adresse suivante : <a href="https://github.com/Maxime90100/KotlinApp_Belfunfair" target="_blank" rel="noopener noreferrer">KotlinApp_Belfunfair</a>
        </p>
      </section>
    </div>
  );
};

export default Project4;