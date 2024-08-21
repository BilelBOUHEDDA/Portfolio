import React from 'react';
import exampleImage from '../assets/architechtureSAE.png';
import img_arduino from '../assets/maquette_arduino.png'
import code_arduino from '../assets/code_arduino.png'


const Project1 = () => {
  return (
    <div className="container project-detail">
      <h1>Application multi-architecturale</h1>

      <section className="project-section">
        <h2>Introduction</h2>
        <p style={{ textAlign: 'justify' }}>
          Cette année nous avons eu l’opportunité de travailler sur un projet plus ambitieux. En effet, au cours de cette troisième année du BUT Informatique, notre défi était de concevoir un parcours de golf intelligent.
        </p>
        <p style={{ textAlign: 'justify' }}>
          Ce projet impliquait la mise en place de microcontrôleurs pour mesurer diverses données liées au parcours de golf. Nous avons dû créer une base de données pour stocker ces informations, ainsi qu’un serveur central, une API et un serveur d’analyse pour faciliter la gestion et la modification de la base de données. De plus, nous avons développé une application mobile et un site web pour exploiter et visualiser les données collectées.
        </p>
        <p style={{ textAlign: 'justify' }}>
          Notre groupe, composé de cinq personnes, s’est pleinement investi dans la réalisation de ce projet complexe, combinant matériel et développement logiciel pour offrir une solution intégrée et innovante pour les passionnés de golf.
        </p>
      </section>

      <section className="project-section">
        <h2>Présentation du sujet</h2>
        <p style={{ textAlign: 'justify' }}>
          Le projet présenté ici s'étend sur une année et se concentre sur l'amélioration d'une architecture existante pour développer un parcours de golf intelligent. L'objectif principal est de moderniser et d'enrichir l'expérience des golfeurs grâce à une combinaison innovante de technologies matérielles et logicielles.
        </p>
        <p style={{ textAlign: 'justify' }}>
          La réalisation de ce projet repose sur une approche multi-architecturale intégrée. Au cœur de cette initiative se trouvent des microcontrôleurs Arduino, qui sont utilisés pour recueillir des données cruciales sur le parcours de golf. Ces microcontrôleurs permettent de mesurer divers paramètres environnementaux et de transmettre ces informations à un serveur central. Ce serveur, soutenu par une base de données, joue un rôle essentiel dans la collecte et la gestion des données, facilitant ainsi l'accès à une vaste gamme d'informations. Les informations récoltées par les microcontrôleurs ainsi que les informations de la BDD sont disponibles sur un site WEB.
        </p>
        <p style={{ textAlign: 'justify' }}>
          Nous avons aussi décidé de créer une application qui va faire du traitement d'images. On s'est dit que beaucoup de golfeurs aimeraient connaître la distance entre eux et le drapeau, et c'est pour cela qu'une application a été créée pour permettre aux golfeurs de connaître cette donnée.
        </p>
      </section>

      <section className="project-section">
        <h2>Cahier des charges</h2>
        <ol>
          <li>
            <h3 className='h3'>API en NodeJS</h3>
            <p style={{ textAlign: 'justify' }}>
              Rôle : L'API est le point central de communication entre les différentes parties du projet.
            </p>
            <ul>
              <li>Connexion à MongoDB : Réception et envoi de données à la base de données MongoDB.</li>
              <li>Interface avec le Serveur Central Java : Reçoit des requêtes du serveur central via des routes définies pour gérer les interactions client-serveur.</li>
            </ul>
          </li>
          <li>
          <h3 className='h3'>Serveur Central Java</h3>
            <p style={{ textAlign: 'justify' }}>
              Architecture : Utilise l'architecture TCP pour établir une connexion client-serveur avec l'API ou directement avec la base de données.
            </p>
            <p style={{ textAlign: 'justify' }}>
              Fonctionnalités : Permet la connexion à l'API pour envoyer et recevoir des requêtes, facilitant ainsi la gestion des données.
            </p>
          </li>
          <li>
            <h3 className='h3'>Application Mobile en SwiftUI</h3>
            <p style={{ textAlign: 'justify' }}>
              Développement : Créée avec SwiftUI dans l'IDE xCode.
            </p>
            <p style={{ textAlign: 'justify' }}>
              Objectif : Permet à l'utilisateur de :
            </p>
            <ul>
              <li>Prendre une photo ou choisir une image depuis la galerie.</li>
              <li>Estimer la distance entre la prise de photo et un drapeau situé au centre de l'image.</li>
            </ul>
            <p style={{ textAlign: 'justify' }}>
              Fonctionnement : L'image est envoyée au serveur d'analyse multimédia via le serveur Flask. Le serveur d'analyse retourne la distance estimée, qui est ensuite affichée dans l'application.
            </p>
          </li>
          <li>
            <h3>Site Web</h3>
            <p style={{ textAlign: 'justify' }}>
              Objectif : Fournir des informations détaillées sur la base de données.
            </p>
            <p style={{ textAlign: 'justify' }}>
              Fonctionnalités :
            </p>
            <ul>
              <li>Informations sur les Terrains : Visualisation des terrains de golf, y compris l'évolution des conditions météorologiques (température, humidité, vitesse du vent).</li>
              <li>Données des Utilisateurs : Affichage des distances des photos prises par les utilisateurs de l'application mobile pour évaluer la pertinence des mesures.</li>
              <li>Statistiques des Golfeurs : Possibilité future d'ajouter une page pour afficher les statistiques des golfeurs, une fois les capteurs appropriés installés.</li>
            </ul>
          </li>
        </ol>
      </section>

      <section className="project-section">
        <h2>Architecture du projet</h2>
        <p style={{ textAlign: 'justify' }}>
          L'application comporte plusieurs infrastructures complexes interconnectées :
        </p>
        <ul>
          <li><strong>Application mobile :</strong> Développée pour iOS, elle permet de prendre des photos et de les envoyer à un serveur d'analyse.</li>
          <li><strong>Serveur d'analyse :</strong> Analyse les vidéos reçues et envoie les résultats à un serveur de centralisation.</li>
          <li><strong>Serveur de centralisation :</strong> Codé en Java, il reçoit des données à la fois du serveur d'analyse et des microcontrôleurs. Il communique avec une API réalisée en Node.js pour stocker les données dans une base de données MongoDB, bien qu'il puisse également interagir directement avec la base de données.</li>
          <li><strong>Frontend Web :</strong> Développé en Vue.js, il affiche les données sous forme de statistiques.</li>
        </ul>
        <div className="image-container">
      <figure>
        <img src={exampleImage} alt="Description de l'image" className="img" />
        <figcaption className="image-caption">Architecture de l'application</figcaption>
      </figure>
    </div>
      </section>

      <section className="project-section">
        <h2>Travail Réalisé</h2>
        <p style={{ textAlign: 'justify' }}>
          Notre groupe, composé de cinq personnes, a su répartir les tâches de manière équitable tout en collaborant étroitement sur certains aspects clés du projet. Nous avons adopté une méthodologie de travail agile, ce qui nous a permis de progresser efficacement tout en assurant une bonne coordination entre les différents membres de l'équipe. Voici les contributions spécifiques que j'ai apportées au projet :
        </p>
        <ul>
          <li>Participation aux maquetages de l'application</li>
          <li>Modélisation du MCD et de la base de données</li>
          <li>Compréhension et intégration des microcontrôleurs</li>
          <li>Liaison des microcontrôleurs à l'API</li>
          <li>Réalisation de l’API serveur en NodeJS</li>
        </ul>
        <p style={{ textAlign: 'justify' }}>
          En parallèle de ces réalisations techniques, nous avons géré notre projet de manière agile, en utilisant des outils comme Trello pour la gestion des tâches, et en suivant la méthodologie Scrum pour organiser notre travail en sprints. Cela nous a permis d'itérer régulièrement et de livrer des fonctionnalités à chaque cycle.
        </p>
        <p style={{ textAlign: 'justify' }}>
          Enfin, à la fin de l'année, nous avons présenté notre travail devant un jury au cours d'une soutenance, pour laquelle nous avons préparé un diaporama. Nous avons également rédigé un rapport technique détaillé afin de faciliter une éventuelle reprise du projet par d'autres équipes.
        </p>
      </section>

      <section className="project-section">
        <h2>Maquette de nos composants Arduino</h2>
        <div className="image-container">
      <figure>
        <img src={img_arduino} alt="Description de l'image" className="img" />
        <figcaption className="image-caption">Maquette Arduino</figcaption>
      </figure>
    </div>
      </section>

      <section className="project-section">
        <h2>Extrait du code qui s'occupe des microcontrôleurs</h2>
        <div className="image-container">
          <figure>
            <img src={code_arduino} alt="Description de l'image" className="img" />
            <figcaption className="image-caption">Maquette Arduino</figcaption>
          </figure>
        </div>
      </section>

      <section className="project-section">
        <h2>Compétences acquises</h2>
        <p style={{ textAlign: 'justify' }}>
          Comme l'année précédente, ce projet m'a permis de mettre en pratique les six compétences générales requises dans notre formation. Voici comment j'ai pu développer ces compétences spécifiques au cours de ce projet :
        </p>
        <ul>
          <li><strong>C1 :</strong> Réaliser le développement d'une application - En participant activement au développement de l'API serveur en NodeJS ainsi qu'à l'intégration des microcontrôleurs, j'ai renforcé mes compétences en programmation et en développement d'applications.</li>
          <li><strong>C2 :</strong> Optimiser des applications - L'optimisation des performances de l'application a été un aspect crucial du projet. J'ai contribué à la modélisation de la base de données et à la gestion des communications entre l'API et les microcontrôleurs, en veillant à ce que les échanges de données soient fluides et rapides. J'ai également participé à l'optimisation du code pour garantir que l'application réponde de manière efficace aux besoins des utilisateurs finaux, en termes de rapidité et de fiabilité.</li>
          <li><strong>C3 :</strong> Collaborer au sein d’une équipe - Le travail en groupe a été central dans ce projet. Nous avons appliqué la méthodologie Scrum, ce qui nous a permis de travailler de manière agile et organisée.</li>
        </ul>
      </section>

      <section className="project-section">
        <h2>Ce qui aurait pu être amélioré</h2>
        <p style={{ textAlign: 'justify' }}>
          Bien que nous ayons réussi à boucler le projet dans les délais, nous avons parfois mal géré notre temps. Pendant les périodes plus calmes, nous avons eu tendance à prendre les choses trop à la légère. Cependant, à l'approche de la date limite, la panique s'est installée, et nous avons dû nous précipiter pour finir certaines tâches.
        </p>
        <p style={{ textAlign: 'justify' }}>
          Un autre point à améliorer aurait été de réaliser davantage de tests pour l'application. Les tests auraient permis de détecter plus tôt des bugs ou des incohérences, assurant ainsi une meilleure qualité du produit final.
        </p>
        <p style={{ textAlign: 'justify' }}>
          Les microcontrôleurs que nous avons utilisés n'étaient pas totalement adaptés à notre situation. Avec un choix plus judicieux de microcontrôleurs, nous aurions pu obtenir de meilleures performances et une intégration plus fluide avec le reste du système.
        </p>
        <p style={{ textAlign: 'justify' }}>
          Le front-end de notre site web, développé en Vue.js, n'a pas atteint le niveau de qualité que nous souhaitions. Une optimisation du code et du design aurait permis de rendre l'interface plus attrayante et plus fonctionnelle.
        </p>
      </section>

      <section className="project-section">
        <h2>Ce qu'il reste à faire</h2>
        <p style={{ textAlign: 'justify' }}>
          Nous avons réussi à bien nous organiser et à respecter les délais du projet. Cependant, il reste encore un point important à traiter : la dockerisation de l'application. Dockeriser l'application consiste à la rendre portable et facilement déployable en la contenant dans des environnements virtuels isolés appelés conteneurs.
        </p>
      </section>

      <section className="project-section">
        <h2>Bilan général de la SAE</h2>
        <p style={{ textAlign: 'justify' }}>
          Ce projet a été une expérience extrêmement enrichissante pour moi. Sa complexité et sa diversité ont fait de lui un véritable défi, le rendant à la fois difficile et captivant. C'était la première fois que je m'engageais dans un projet de cette envergure, ce qui m'a permis de développer de nouvelles compétences et de confirmer mon orientation professionnelle. Ce projet a renforcé ma conviction de poursuivre dans le domaine du développement informatique, qui est clairement la branche dans laquelle je souhaite évoluer professionnellement.
        </p>
      </section>

    </div>
  );
};

export default Project1;