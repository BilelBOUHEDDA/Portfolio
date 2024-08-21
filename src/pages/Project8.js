import React from 'react';

const Project8 = () => {
  return (
    <div className="container project-detail">
      <h1>Développement du Jeu "Le Jeton Manquant"</h1>

      <section className="section introduction">
        <h2>Introduction</h2>
        <p className="text-justify">
          Cette SAE était une combinaison des SAE S101 et S2102, et avait pour objectif de créer un jeu à deux joueurs nommé "Le Jeton Manquant". Le projet était divisé en deux parties distinctes : la première partie concernait le développement de l'interface interactive du jeu, et la deuxième partie était dédiée à la conception, l'implémentation, et la comparaison de deux algorithmes d'intelligence artificielle permettant de jouer contre l'ordinateur.
        </p>
        <p className="text-justify">
          Mon partenaire pour ce projet était Simon Nguyen, et nous avons utilisé le langage de programmation JAVA. Nous disposions de quatre semaines pour réaliser toutes les tâches demandées.
        </p>
      </section>

      <section className="section travail-realise-s1-01">
        <h2>Travail Réalisé | SAE S1.01</h2>
        <p className="text-justify">
          Dans cette partie, nous avons travaillé sur le squelette JAVA fourni pour écrire le corps des fonctions nécessaires au fonctionnement du jeu. Nous avons complété la fonction main() pour structurer et faire fonctionner le jeu. Après cette phase de développement, nous avons effectué des jeux de test pour vérifier le bon fonctionnement du jeu sous toutes ses configurations possibles.
        </p>
        <p>
          <a href="URL_TO_VIDEO" target="_blank" rel="noopener noreferrer">Vidéo d'une partie du jeu</a>
        </p>
        <p>
          <a href="URL_TO_JETON_JAVA" target="_blank" rel="noopener noreferrer">Code source du jeu (Jeton.java)</a>
        </p>
      </section>

      <section className="section travail-realise-s1-02">
        <h2>Travail Réalisé | SAE S1.02</h2>
        <p className="text-justify">
          Après le développement du jeu, nous avons créé deux intelligences artificielles pour permettre aux utilisateurs de jouer contre l'ordinateur. Nous avons élaboré et implémenté des stratégies pour chaque IA, puis modifié la fonction main() pour intégrer ces nouvelles fonctionnalités.
        </p>
        <p className="text-justify">
          Nous avons testé les intelligences artificielles, généré des graphiques pour comparer leurs performances, et rédigé un rapport détaillé en anglais présentant les deux IA et leur fonctionnement.
        </p>
        <p>
          <a href="URL_TO_RAPPORT_S1_02" target="_blank" rel="noopener noreferrer">Rapport SAE S1.02</a>
        </p>
      </section>

      <section className="section ressenti-personnel">
        <h2>Mon Ressenti Personnel</h2>
        <p className="text-justify">
          J'ai beaucoup apprécié cette SAE car elle m'a permis de plonger dans le monde des jeux informatiques, une de mes passions. J'ai aimé élaborer des stratégies et résoudre des problèmes tout en travaillant en anglais, une matière que j'affectionne particulièrement. Travailler avec Simon, qui est à la fois sympathique et assidu, a été une expérience très enrichissante.
        </p>
      </section>

      <section className="section apport">
        <h2>Ce que Cette SAE m'a Apporté</h2>
        <p className="text-justify">
          Cette SAE m'a permis de mieux comprendre le langage de programmation JAVA et de surmonter des aspects du code que je maîtrisais mal auparavant. Elle a également renforcé mes compétences en programmation et en organisation. Avant cette SAE, j'étais plus intéressé par les bases de données, mais cette expérience a changé mon opinion et éveillé un réel intérêt pour le développement.
        </p>
      </section>

      <section className="section orientation">
        <h2>Influence sur Mon Choix d'Orientation</h2>
        <p className="text-justify">
          Cette SAE a significativement influencé mon choix d'orientation. Avant le projet, j'avais une aversion pour le développement en raison de ma compréhension limitée du langage. Cependant, après avoir réalisé ce projet, j'ai découvert un réel intérêt pour le développement logiciel et je souhaite désormais poursuivre dans cette voie plutôt que dans les bases de données.
        </p>
      </section>

      <section className="section competences-evaluees">
        <h2>Compétences Évaluées Durant Cette SAE</h2>
        <ul className="text-justify">
          <li><strong>Implémentation d'un besoin client :</strong> Développement d'un jeu interactif en réponse à un besoin spécifié.</li>
          <li><strong>Comparaison d'approches algorithmiques :</strong> Création et évaluation de différentes intelligences artificielles pour le jeu.</li>
        </ul>
      </section>
    </div>
  );
};

export default Project8;