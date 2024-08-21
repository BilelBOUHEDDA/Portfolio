import React, { useState } from 'react';
import Trello from '../assets/Trello.png'
import MCD from '../assets/MCD_Belfunfaire.png'
import img1 from '../assets/img1.png'
import img2 from '../assets/img2.png'
import img3 from '../assets/img3.png'
import img4 from '../assets/img4.png'
import img5 from '../assets/img5.png'
import img6 from '../assets/img6.png'
import img7  from '../assets/img7.png'

const images = [img1, img2, img3, img4, img5, img6, img7];


const Project3 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

  return (
    <div className="container project-detail">
      <h1>Développement d'une Application Web pour une Fête Foraine</h1>

      <section className="section introduction">
        <h2>Introduction</h2>
        <p className="text-justify">
          Contrairement à la première année de BUT Informatique, où nous avions une seule SAE générale à réaliser, cette fois-ci, nous avons travaillé sur un projet plus spécifique au cours du premier semestre de la deuxième année. Nous devions créer une application web pour une manifestation, avec diverses fonctionnalités et des droits d'accès distincts pour les utilisateurs publics, les prestataires et les organisateurs.
        </p>
        <p className="text-justify">
          Notre groupe de quatre personnes a décidé de développer un site web dédié à une fête foraine. Nous nous sommes investis pleinement dans la création de ce site, en nous concentrant sur la mise en place d'une interface conviviale et fonctionnelle pour tous les types d'utilisateurs concernés.
        </p>
      </section>

      <section className="section cahier-des-charges">
        <h2>Cahier des charges</h2>
        <p className="text-justify">
          L'application devait offrir plusieurs fonctionnalités clés, comme une page principale pour présenter la manifestation, une carte interactive des emplacements des prestataires, une liste de prestataires avec une fonction de recherche, et des fonctionnalités d'authentification. L'authentification devait être non sécurisée à des fins pédagogiques, et la carte interactive devait afficher les emplacements en fonction des besoins logistiques des prestataires.
        </p>
        <p className="text-justify">
          L'application devait également être disponible en français et en anglais, et offrir des fonctionnalités de type CRUD (Create, Read, Update, Delete) pour interagir avec la base de données. Les fonctionnalités statistiques basées sur les services publiés et les données collectées étaient également requises.
        </p>
      </section>

      <section className="section travail-realise">
        <h2>Travail réalisé</h2>
        <p className="text-justify">
          En tant que groupe, nous avons réparti les tâches et collaboré sur certaines d'entre elles. Voici les tâches que j'ai réalisées :
        </p>
        <ul className="text-justify">
          <li>Participation aux maquetages de l'application.</li>
          <li>Modélisation du MCD (Modèle Conceptuel de Données) et de la base de données.</li>
          <li>Création du service d'authentification de l'application.</li>
          <li>Développement des différents composants de l'application.</li>
          <li>Mise en place des fonctionnalités spécifiques pour chaque niveau d'accès, comme les pages permettant aux organisateurs d'ajouter, modifier et supprimer des employés.</li>
          <li>Contribution à la mise en place de la carte interactive.</li>
          <li>Écriture de l'API et de ses fonctions avec Sequelize pour la liaison avec PostgreSQL.</li>
          <li>Participation à la mise en forme de l'application avec VueJS, HTML, et des bibliothèques CSS.</li>
        </ul>
        <p className="text-justify">
          Nous avons organisé notre projet en utilisant Trello et la méthodologie Scrum, découpant le projet en sprints pour une gestion efficace. En fin de semestre, nous avons présenté notre travail devant un jury sous la forme d'un diaporama.
        </p>
      </section>

      <section className="section travail-realise">
        <h2>Trello</h2>
        <div className="image-container">
          <figure>
            <img src={Trello} alt="Description de l'image" className="img" />
            <figcaption className="image-caption">Trello du projet</figcaption>
          </figure>
        </div>
      </section>

      <section className="section travail-realise">
        <h2>MCD de l'application</h2>
        <div className="image-container">
          <figure>
            <img src={MCD} alt="Description de l'image" className="img" />
            <figcaption className="image-caption">MCD de l'application</figcaption>
          </figure>
        </div>
      </section>

      <section className="section travail-realise">
        <h2>Quelques images présentant l'application</h2>
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

      <section className="section competences-acquises">
        <h2>Compétences acquises</h2>
        <p className="text-justify">
          Ce projet a permis de mettre en pratique les six compétences générales requises :
        </p>
        <ul className="text-justify">
          <li><strong>C1 :</strong> Développement d'une application web avec NodeJS et VueJS.</li>
          <li><strong>C2 :</strong> Optimisation des performances et utilisation efficace des ressources.</li>
          <li><strong>C3 :</strong> Administration de systèmes informatiques communicants.</li>
          <li><strong>C4 :</strong> Gestion des données avec PostgreSQL.</li>
          <li><strong>C5 :</strong> Conduite de projet avec des outils de gestion tels que Trello et des diagrammes de Gantt.</li>
          <li><strong>C6 :</strong> Collaboration efficace en équipe, organisation des tâches et préparation de la soutenance.</li>
        </ul>
      </section>

      <section className="section ameliorations">
        <h2>Ce qui aurait pu être amélioré</h2>
        <p className="text-justify">
          Nous n'avons pas pleinement exploité les fonctionnalités des outils de gestion du temps, ce qui aurait permis une meilleure organisation. L'intégration de tests aurait également été bénéfique pour détecter plus rapidement les erreurs et améliorer la qualité du travail. De plus, une meilleure compréhension des langages et bibliothèques utilisés aurait augmenté notre efficacité, en particulier pour la réalisation du MCD.
        </p>
      </section>

      <section className="section taches-restantes">
        <h2>Ce qu'il reste à faire</h2>
        <p className="text-justify">
          En raison des contraintes de temps, certaines fonctionnalités étaient manquantes à la fin du semestre, comme la billetterie. Ces fonctionnalités spécifiques aux différents niveaux d'accès devront encore être implémentées.
        </p>
      </section>

      <section className="section bilan">
        <h2>Bilan personnel et conclusion</h2>
        <p className="text-justify">
          Le développement de cette application web a considérablement renforcé mes compétences dans le domaine du développement logiciel. Ce projet a offert une vue complète du processus de développement d'une application web et a été extrêmement enrichissant. J'ai particulièrement apprécié travailler sur ce projet, car il correspond à ce que j'aimerais réaliser dans le futur dans le domaine de l'informatique.
        </p>
      </section>

      <section className="section lien-github">
        <h2>Lien du projet</h2>
        <p>
          Vous pouvez consulter le projet hébergé sur GitHub à l'adresse suivante : <a href="https://github.com/Maxime90100/Belfunfair" target="_blank" rel="noopener noreferrer">Belfunfair</a>
        </p>
      </section>
    </div>
  );
};

export default Project3;