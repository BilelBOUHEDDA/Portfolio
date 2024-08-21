import React from 'react';

const Project9 = () => {
  return (
    <div className="container project-detail">
      <h1>Conception et Réalisation d'un Site de Gestion d'un Écoquartier</h1>

      <section className="section introduction">
        <h2>Introduction</h2>
        <p className="text-justify">
          L'objectif de cette SAE était de concevoir et réaliser un site de gestion pour un écoquartier. Nous avons d'abord réalisé un rapport d'analyse des besoins pour le site, puis modélisé le site en utilisant différents outils. Le site devait gérer les informations sur les bâtiments, les locataires, et d'autres aspects du quartier.
        </p>
        <p className="text-justify">
          Mon groupe était composé de LAABANY Shakir, OUDINI Zinedine et moi-même.
        </p>
      </section>

      <section className="section travail-realise">
        <h2>Travail Réalisé</h2>
        <p className="text-justify">
          Le premier travail a consisté en la réalisation d'un rapport sur la gestion locative d'un écoquartier. Ce rapport incluait une présentation des écoquartiers et des principes de gestion locative. Nous avons aussi conçu un Modèle Conceptuel de Données (MCD) pour structurer les informations concernant l'écoquartier, et avons justifié notre choix de modélisation en expliquant la structure du MCD.
        </p>
        <p className="text-justify">
          Après cela, nous avons modélisé notre MCD sur un site web en utilisant le framework Flask, le langage HTML, et le fichier SQL généré à partir du MCD. J'ai personnellement développé la partie concernant les quartiers et les bâtiments. Mon travail incluait la création de fonctionnalités permettant d'ajouter, de modifier et de supprimer des quartiers, des bâtiments et leurs composants.
        </p>
        <p>
          <a href="URL_TO_REPORT" target="_blank" rel="noopener noreferrer">Détails du Rapport</a>
        </p>
      </section>

      <section className="section ressenti-personnel">
        <h2>Mon Ressenti Personnel</h2>
        <p className="text-justify">
          Personnellement, je n'ai pas particulièrement apprécié cette SAE. Ce projet ne correspondait pas à mes passions, bien que j'ai acquis de nouvelles compétences importantes. J'ai cependant appris à utiliser le framework Flask et à créer des sites web avec Pycharm, ce qui a été une expérience enrichissante.
        </p>
      </section>

      <section className="section apport">
        <h2>Ce que Cette SAE m'a Apporté</h2>
        <p className="text-justify">
          Cette SAE m'a permis de développer mes compétences dans l'utilisation du framework Flask et dans la création de sites web en général. J'ai aussi appris à gérer des bases de données dans un contexte web, ce qui est une compétence précieuse pour le développement de sites interactifs.
        </p>
      </section>

      <section className="section competences-evaluees">
        <h2>Compétences Évaluées Durant Cette SAE</h2>
        <ul className="text-justify">
          <li><strong>Création d'une base de données :</strong> Développement d'un site de gestion avec une base de données pour l'écoquartier.</li>
        </ul>
      </section>
    </div>
  );
};

export default Project9;