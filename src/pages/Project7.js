import React from 'react';

const Project7 = () => {
  return (
    <div className="container project-detail">
      <h1>Installation d'un Poste Informatique et Création d'une Machine Virtuelle</h1>

      <section className="section introduction">
        <h2>Introduction</h2>
        <p className="text-justify">
          Cette SAE fait partie d'une SAE commune avec la SAE S1.04. L'objectif principal était de réaliser un rapport résumant nos choix techniques en fonction de la demande d'un client, puis de créer une machine virtuelle selon des conditions imposées par les professeurs, et enfin, de présenter cette machine virtuelle.
        </p>
        <p className="text-justify">
          Mon groupe était composé de Laabany Shakir, Oudini Zinedine, et moi-même.
        </p>
      </section>

      <section className="section travail-realise-rapport">
        <h2>Travail Réalisé | Rapport d'Installation</h2>
        <p className="text-justify">
          Nous avons d'abord rédigé un rapport d'installation d'un poste informatique répondant aux exigences du client. Celui-ci souhaitait un ordinateur professionnel, et nous avons proposé un ordinateur sur mesure en décrivant les architectures matérielles et les logiciels sélectionnés.
        </p>
        <p className="text-justify">
          Le rapport détaillait les raisons de nos choix techniques pour répondre aux besoins spécifiques du client, y compris les spécifications matérielles et logicielles.
        </p>
        <p>
          <a href="URL_TO_RAPPORT_INSTALLATION" target="_blank" rel="noopener noreferrer">Détails du Rapport d'Installation</a>
        </p>
      </section>

      <section className="section travail-realise-machine-virtuelle">
        <h2>Travail Réalisé | Machine Virtuelle</h2>
        <p className="text-justify">
          La seconde partie de cette SAE consistait à créer une machine virtuelle de A à Z à l'aide d'Oracle VM VirtualBox. Nous avons configuré la machine, installé les logiciels nécessaires, et optimisé le système. Un rapport détaillé a été rédigé pour expliquer toutes les commandes et configurations effectuées.
        </p>
        <p className="text-justify">
          Après la création de la machine virtuelle, nous avons dû la présenter à un professeur et effectuer certaines manipulations pour démontrer notre compréhension du sujet.
        </p>
        <p>
          <a href="URL_TO_RAPPORT_MACHINE_VIRTUELLE" target="_blank" rel="noopener noreferrer">Détails du Rapport de la Machine Virtuelle</a>
        </p>
      </section>

      <section className="section ressenti-personnel">
        <h2>Mon Ressenti Personnel</h2>
        <p className="text-justify">
          J'ai beaucoup apprécié travailler sur cette SAE. La première partie nécessitait une réflexion approfondie pour répondre aux besoins du client de manière optimale. La seconde partie, qui consistait à appliquer des commandes vues en TP pour créer la machine virtuelle, a été satisfaisante et gratifiante lorsque les commandes réussissaient.
        </p>
      </section>

      <section className="section apport">
        <h2>Ce que Cette SAE m'a Apporté</h2>
        <p className="text-justify">
          Cette SAE m'a permis de mieux comprendre et appliquer une demande client, en mettant en évidence l'importance de bien saisir les besoins pour proposer des solutions adaptées. Elle m'a également renforcé dans l'installation et la configuration de machines virtuelles.
        </p>
      </section>

      <section className="section competences">
        <h2>Compétences Mises en Jeu</h2>
        <ul className="text-justify">
          <li><strong>Installation d'un poste pour le développement :</strong> Création et configuration d'une machine virtuelle répondant aux exigences spécifiques du client.</li>
        </ul>
      </section>
    </div>
  );
};

export default Project7;