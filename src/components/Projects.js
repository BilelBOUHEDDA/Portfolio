import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ title, description, link }) => {
  return (
    <div className="project-card">
      <h5>{title}</h5>
      <p>{description}</p>
      <Link to={link} className="btn btn-primary">En savoir plus</Link>
    </div>
  );
};

const Projects = () => {
  return (
      <div className="container">
        <h2 className="text-start">Mes projets</h2>
        <div className="project-category">
          <h3 className="text-start">Mes projets de ma troisième année de BUT Informatique</h3>
          <ProjectCard
            title="Application multi-architecturale"
            description="Développement d'une application avec plusieurs architectures intégrées pour améliorer la flexibilité et la scalabilité."
            link="/project-details/1"
          />
          <ProjectCard
            title="Optimisation de l’application BKLink"
            description="Maintenance et amélioration des performances de l'application BKLink utilisée par la société Inolam."
            link="/project-details/2"
          />
        </div>
        <div className="project-category mt-5">
          <h3 className="text-start">Mes projets de ma deuxième année de BUT Informatique</h3>
          <ProjectCard
            title="Application événementielle, partie 1"
            description="Conception et développement de la première partie d'une application dédiée à la gestion d'événements."
            link="/project-details/3"
          />
          <ProjectCard
            title="Application événementielle, partie 2"
            description="Finalisation et ajout de fonctionnalités supplémentaires à la seconde partie de l'application événementielle."
            link="/project-details/4"
          />
        </div>
        <div className="project-category mt-5">
          <h3 className="text-start">Mes projets de ma première année de BUT Informatique</h3>
          <ProjectCard
            title="Jeu de plateau en JAVA et JAVAFX"
            description="Développement d'un jeu de plateau codé en JAVA et JAVAFX, incluant la conception des règles et de l'interface."
            link="/project-details/5"
          />
          <ProjectCard
            title="Site de e-commerce"
            description="Conception et mise en place d'une plateforme de commerce électronique pour la vente de produits en ligne."
            link="/project-details/6"
          />
          <ProjectCard
            title="Machine virtuelle avec conditions spécifiques"
            description="Création d'une machine virtuelle répondant à des exigences techniques spécifiques imposées par les enseignants."
            link="/project-details/7"
          />
          <ProjectCard
            title="Jeu à deux joueurs : Le Jeton Manquant"
            description="Développement d'un jeu de société pour deux joueurs, axé sur la stratégie et la logique."
            link="/project-details/8"
          />
          <ProjectCard
            title="Site de gestion"
            description="Réalisation d'un site web pour la gestion de diverses opérations administratives et fonctionnelles."
            link="/project-details/9"
          />
          <ProjectCard
            title="Organisation d'un événement pour Belfort"
            description="Planification et gestion d'un événement à but lucratif pour la ville de Belfort."
            link="/project-details/10"
          />
          <ProjectCard
            title="Site de présentation d'entreprise"
            description="Création d'un site web pour présenter une entreprise, incluant ses services et son histoire."
            link="/project-details/11"
          />
        </div>
      </div>
  );
};

export default Projects;