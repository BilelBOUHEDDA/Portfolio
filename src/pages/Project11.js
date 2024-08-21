import React from 'react';
import zoning from '../assets/zoning_webedia.png'

const Project9 = () => {
  return (
    <div className="container project-detail">
      <h1>Présentation de la SAE : Site Web et Rapport Économique</h1>

      <section className="section introduction">
        <h2>Introduction</h2>
        <p className="text-justify">
          Pour cette SAE, notre objectif était de concevoir un site web pour une entreprise de notre choix, ainsi que de rédiger un rapport économique et écologique concernant cette entreprise. Le projet impliquait l'utilisation des langages HTML et CSS, avec la possibilité d'utiliser des extensions comme Bootstrap pour améliorer l'apparence du site.
        </p>
        <p className="text-justify">
          Notre groupe était composé de DESGRONTE Emmanuel, LAABANY Shakir, OUDINI Zinedine, et moi-même. Nous avons choisi de travailler sur Webedia, une entreprise française spécialisée dans les médias en ligne et filiale du groupe Fimalac.
        </p>
        <p className="text-justify">
          Vous pouvez consulter le site développé ici : <a href="https://slaabany-iut90.github.io/s1-2021-ihm/" target="_blank" rel="noopener noreferrer">Site Webedia</a>.
        </p>
      </section>

      <section className="section travail-realise">
        <h2>Travail Réalisé</h2>
        <p className="text-justify">
          La réalisation du site s'est déroulée en deux étapes principales. Tout d'abord, nous avons travaillé sur l'aspect esthétique du site. Nous avons créé un écran de zoning à l'aide de Photoshop, qui est un prototype graphique représentant la disposition finale des éléments sur le site.
        </p>
        <p className="text-justify">
          Après avoir défini le design, nous avons développé le site en HTML et CSS, en intégrant le framework Bootstrap pour améliorer l'apparence visuelle. Parallèlement, nous avons rédigé un rapport économique et écologique de l'entreprise Webedia, incluant une présentation de l'entreprise, ses stratégies, son statut économique, et ses perspectives d'avenir.
        </p>
        <p>
          <a href="URL_TO_REPORT" target="_blank" rel="noopener noreferrer">Voir le Rapport Économique et Écologique</a>
        </p>
      </section>

      <section>
      <h2>Ecran de zoning de l'application</h2>
      <figure>
            <img src={zoning} alt="Description de l'image" className="img" />
            <figcaption className="image-caption">Ecran de zoning de l'application</figcaption>
          </figure>
      </section>

      <section className="section ressenti-personnel">
        <h2>Mon Ressenti Personnel</h2>
        <p className="text-justify">
          J'ai beaucoup apprécié travailler sur cette SAE, car le développement web est une passion pour moi et je me sentais déjà assez à l'aise avec ce domaine. C'était l'une des premières SAE de l'année, et bien que nous ayons rencontré des défis, notamment avec le départ d'Emmanuel en cours de projet, nous avons réussi à bien nous organiser et à mener à bien le projet.
        </p>
      </section>

      <section className="section apport">
        <h2>Ce que Cette SAE m'a Apporté</h2>
        <p className="text-justify">
          Cette SAE m'a permis d'améliorer mes compétences en HTML et CSS, en particulier dans des aspects que je maîtrisais moins avant le projet. J'ai également appris à structurer un rapport de manière efficace et esthétique, en utilisant des outils comme LibreOffice Writer pour produire des documents complets et bien présentés.
        </p>
      </section>

      <section className="section competences-evaluees">
        <h2>Compétences Évaluées Durant Cette SAE</h2>
        <ul className="text-justify">
          <li><strong>Découverte de l'environnement économique et écologique :</strong> Compréhension des enjeux économiques et écologiques d'une entreprise.</li>
        </ul>
      </section>
    </div>
  );
};

export default Project9;