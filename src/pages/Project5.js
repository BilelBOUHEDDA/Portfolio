import React, { useState } from 'react';


const Project5 = () => {
  return (
    <div className="container project-detail">
      <h1>Développement du Jeu de Plateau Qwirkle</h1>

      <section className="section introduction">
        <h2>Introduction</h2>
        <p className="text-justify">
          Pour cette dernière SAE, nous avions pour mission de développer un jeu de plateau en utilisant Java et JavaFX, en appliquant le paradigme MVC et le framework Gamifier conçu par M. Domas. Le projet incluait également le développement et la comparaison de deux intelligences artificielles (IA) pour le jeu. En outre, nous devions répondre à une question juridique posée par un professeur sous forme de rapport.
        </p>
        <p className="text-justify">
          Notre groupe, composé de Dany Raphael, Teo Deconinck, Emile Espuche, Charlène Mbizi Kouendela, Shakiri Laabany, et moi-même, a choisi de développer le jeu du Qwirkle.
        </p>
      </section>

      <section className="section jeu-choisi">
        <h2>Jeu Choisi</h2>
        <h3>Qwirkle</h3>
        <p className="text-justify">
          Le Qwirkle est un jeu de plateau qui se joue avec des tuiles colorées. L'objectif est de créer des lignes de tuiles avec les mêmes formes ou couleurs. Le jeu combine des éléments de stratégie et de logique, ce qui en fait un excellent choix pour tester des IA.
        </p>
        <p className="text-justify">
          Le dossier compressé contenant le jeu et ses composants est disponible ici : <a href="URL_TO_SAE126.tar.gz" target="_blank" rel="noopener noreferrer">SAE126.tar.gz</a>
        </p>
      </section>

      <section className="section travail-realise">
        <h2>Travail Réalisé</h2>
        <p className="text-justify">
          Après avoir acquis une bonne compréhension des composantes de JavaFX, du paradigme MVC, et de Java, nous avons commencé le développement du jeu et des IA, ainsi que les tests associés. Nous avons également préparé un rapport technique en anglais pour comparer les intelligences artificielles et les stratégies mises en place.
        </p>
        <p className="text-justify">
          En parallèle, nous avons répondu à la question posée par un professeur concernant la mise en ligne d'un jeu. Ce travail a pris la forme d'un rapport juridique expliquant comment protéger un jeu vidéo et les réglementations associées.
        </p>
        <p>
          <a href="URL_TO_RAPPORT_TECHNIQUE" target="_blank" rel="noopener noreferrer">Rapport Technique</a>
        </p>
        <p>
          <a href="URL_TO_RAPPORT_JURIDIQUE" target="_blank" rel="noopener noreferrer">Rapport Juridique</a>
        </p>
      </section>

      <section className="section ressenti-personnel">
        <h2>Mon Ressenti Personnel</h2>
        <p className="text-justify">
          Personnellement, j'ai trouvé cette SAE particulièrement difficile. La complexité du développement du jeu était élevée, et je n'avais pas suffisamment de bases pour réaliser un jeu de cette envergure. De plus, j'ai été malade à cause du COVID, ce qui a compliqué ma réintégration dans le projet.
        </p>
      </section>

      <section className="section apport">
        <h2>Ce que Cette SAE m'a Apporté</h2>
        <p className="text-justify">
          Malgré les difficultés, cette SAE m'a permis d'acquérir une meilleure maîtrise du langage Java et de me familiariser avec la réalisation de tests en Java. J'ai amélioré mes compétences en développement et en test de méthodes, ce qui est précieux pour mes futurs projets.
        </p>
      </section>

      <section className="section competences-evaluees">
        <h2>Compétences Évaluées Durant Cette SAE</h2>
        <ul className="text-justify">
          <li><strong>Développement d'une application :</strong> Création d'un jeu de plateau en Java et JavaFX.</li>
          <li><strong>Exploration d'un problème :</strong> Analyse et développement d'IA pour le jeu, ainsi que la gestion des aspects juridiques liés à la mise en ligne d'un jeu.</li>
          <li><strong>Organisation d'un travail d'équipe :</strong> Coordination avec les membres du groupe pour mener à bien le projet.</li>
        </ul>
      </section>
    </div>
  );
};

export default Project5;