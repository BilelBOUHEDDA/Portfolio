import React from 'react';
import netbeans from '../assets/Netbeans.png'

const Project2 = () => {
  return (
    <div className="container project-detail">
      <h1>Application BKLink pour la gestion des transactions bancaires</h1>

      <section className="section introduction">
        <h2>Introduction</h2>
        <p className="text-justify">
          Inolam, en partenariat avec Numerilis SAS, a développé l'application BKLink, un progiciel bancaire modulaire. Ce dernier est conçu pour gérer et automatiser les échanges entre les petites banques et les grandes institutions financières, telles que la Caisse d’Épargne et la Société Générale. BKLink sert d’intermédiaire, permettant aux petites banques de traiter efficacement les transactions en utilisant des informations bancaires cruciales, comme le BIC et l'IBAN.
        </p>
        <p className="text-justify">
          Dans le cadre de mon stage chez Inolam, j'ai été chargé de contribuer à la maintenance et à l'optimisation de l'application BKLink, en me concentrant particulièrement sur la fonctionnalité d'émission des données. Cette fonctionnalité est essentielle, car elle permet de récupérer les transactions rejetées, de les intégrer dans la base de données, et de les transmettre aux grandes banques sous un format XML conforme.
        </p>
      </section>

      <section className="section presentation">
        <h2>Présentation du sujet de stage</h2>
        <p className="text-justify">
          Mon stage chez Inolam s'est concentré sur la maintenance et l'optimisation de BKLink. Plus précisément, j'ai travaillé sur la fonctionnalité d'émission RSDD (Réception et Suivi des Débits Directs). Cette partie de l'application est essentielle pour traiter les transactions rejetées, un problème qui, s'il n'est pas bien géré, peut entraîner des retards et des erreurs dans les échanges financiers entre les différentes banques. L'application existait déjà avant mon stage, mais elle présentait des problèmes de performance et de fiabilité. Cela rendait nécessaire une refonte pour améliorer l'intégration des transactions rejetées dans la base de données et leur transmission aux grandes banques via un fichier XML conforme aux normes SEPA.
        </p>
        <p className="text-justify">
          Mon rôle dans ce projet a donc été de diagnostiquer les problèmes existants, d'identifier les points d'amélioration, et de mettre en œuvre des solutions techniques permettant de fiabiliser et d'optimiser l’application. Cette mission était essentielle pour assurer le bon fonctionnement de l’application BKLink.
        </p>
      </section>

      <section className="section cahier-des-charges">
        <h2>Cahier des charges</h2>
        <p className="text-justify">
          BKLink est une application bancaire développée pour faciliter les transactions entre les petites banques et les grandes institutions bancaires telles que la Caisse d'Épargne et la Société Générale. L'application sert d'intermédiaire entre les clients et les banques, en assurant la gestion des informations bancaires dans le respect des normes SEPA (Espace unique de paiement en euros). Une fonctionnalité clé, "Emission RSDD", permet de gérer les transactions rejetées, de les intégrer dans la base de données, et de les transmettre aux grandes banques via un fichier XML.
        </p>

        <h3>1. Contraintes Techniques</h3>
        <ul className="text-justify">
          <li><strong>Langage de programmation :</strong> Le développement de l'application sera réalisé en Java, offrant une robustesse et une fiabilité adaptées aux exigences bancaires.</li>
          <li><strong>Base de données :</strong> La gestion des données sera assurée par SQL, garantissant une structure solide et une gestion efficace des transactions.</li>
          <li><strong>Conformité SEPA :</strong> Toutes les transactions doivent respecter les standards SEPA pour assurer une intégration fluide avec les systèmes bancaires européens.</li>
          <li><strong>Format XML :</strong> Les échanges de données avec les systèmes bancaires se feront via des fichiers XML, assurant une interopérabilité et une structuration claire.</li>
          <li><strong>Outils de développement :</strong> Le projet sera développé sous NetBeans IDE, avec SQL Server pour la gestion des bases de données.</li>
        </ul>

        <h3>2. Fonctionnalités de l'Application "Emission RSDD"</h3>
        <ul className="text-justify">
          <li><strong>Intégration des Transactions Rejetées :</strong>
            <ul>
              <li>Récupération des transactions rejetées depuis la table RSDD_NON_INTGR.</li>
              <li>Validation des conditions de rejet conformément aux règles établies.</li>
              <li>Intégration des transactions validées dans les tables ALLER_SEPA et ALLER_SEPA_ALL.</li>
            </ul>
          </li>
          <li><strong>Mise à Jour des Données :</strong>
            <ul>
              <li>Développement d'une fonctionnalité permettant la mise à jour des champs spécifiques des tables de l'application, en fonction des transactions rejetées.</li>
            </ul>
          </li>
          <li><strong>Transmission des Données via XML :</strong>
            <ul>
              <li>Génération d'un fichier XML conforme aux spécifications SEPA pour la transmission des transactions rejetées aux grandes banques.</li>
              <li>Validation du format XML pour assurer la compatibilité avec les systèmes des banques partenaires.</li>
            </ul>
          </li>
          <li><strong>Optimisation et Correction de Bugs :</strong>
            <ul>
              <li>Identification et correction des méthodes défaillantes pour renforcer la stabilité et la fiabilité du système.</li>
              <li>Refactorisation du code existant pour améliorer les performances.</li>
              <li>Réduction de la complexité du code par l'application des meilleures pratiques de développement, telles que la modularisation et l'utilisation de modèles de conception appropriés.</li>
            </ul>
          </li>
        </ul>
      </section>

      <section className="section architecture">
        <h2>Architecture du projet BKLink</h2>
        <p className="text-justify">
          Le projet BKLink est conçu pour gérer efficacement les transactions bancaires, en particulier celles qui sont rejetées, à travers une architecture modulaire et bien structurée. Voici un aperçu détaillé de l'architecture du projet :
        </p>

        <h3>1. Bases de Données</h3>
        <ul className="text-justify">
          <li><strong>aller_sepa.sql :</strong> Gère les transactions SEPA intégrées.</li>
          <li><strong>aller_sepa_all.sql :</strong> Stocke les transactions SEPA avec un suivi étendu.</li>
          <li><strong>operation_sepa_rejet.sql :</strong> Gère les opérations rejetées, en fournissant un espace dédié pour leur traitement.</li>
          <li><strong>paramgen.sql :</strong> Contient les paramètres généraux nécessaires au processus, permettant une configuration flexible de l'application.</li>
          <li><strong>rsdd_non_intgr.sql :</strong> Stocke les transactions rejetées qui ne sont pas encore intégrées, servant de tampon avant leur traitement final.</li>
        </ul>

        <h3>2. Structure Modulaire</h3>
        <p className="text-justify">
          Le projet "EmissionRSDD" est structuré de manière à faciliter la gestion et la maintenance, en regroupant les composants dans des modules clairs et bien définis. Voici les principaux éléments de cette structure :
        </p>
        <ul className="text-justify">
          <li><strong>Source Packages :</strong> Ce dossier contient les différents modules Java, organisés en plusieurs packages, chacun ayant une responsabilité spécifique :</li>
          <li><strong>Controller :</strong>
            <ul>
              <li><strong>EmissionRSDD.java :</strong> C'est la classe principale qui contient la logique centrale de l'application. Elle gère les opérations de traitement des transactions rejetées, assurant leur intégration dans le système.</li>
            </ul>
          </li>
          <li><strong>Main :</strong>
            <ul>
              <li><strong>Main.java :</strong> Ce fichier sert de point d'entrée de l'application. L'exécution du programme commence ici, initialisant les différentes composantes et lançant le processus principal.</li>
            </ul>
          </li>
          <li><strong>Outils :</strong>
            <ul>
              <li><strong>ConnexionBD.java :</strong> Gère la connexion à la base de données SQL, en assurant une communication sécurisée et fiable entre l'application et les bases de données.</li>
              <li><strong>Dates.java :</strong> Offre des méthodes pour manipuler les dates, ce qui est crucial pour le traitement des transactions bancaires qui dépendent souvent de critères temporels précis.</li>
              <li><strong>INIHandler.java :</strong> Gère la lecture et l'écriture des fichiers INI, qui sont utilisés pour la configuration de l'application. Cela permet une personnalisation et une adaptation aisée aux différentes configurations d'environnement.</li>
              <li><strong>Retour_Dao.java :</strong> Contient les méthodes pour interagir avec les bases de données de manière sécurisée et efficace, en gérant notamment la récupération et l'insertion des données.</li>
            </ul>
          </li>
          <li><strong>Libraries et Test Libraries :</strong> Ces dossiers incluent les bibliothèques externes nécessaires au bon fonctionnement de l'application, ainsi que les bibliothèques de tests pour vérifier et valider le comportement du code.</li>
        </ul>
      </section>

      <section className="section environnement">
        <h2>Aperçu de mon environnement de travail</h2>
        <div className="image-container">
          <figure>
            <img src={netbeans} alt="Description de l'image" className="img" />
            <figcaption className="image-caption">Apercu de l'IDE Netbeans</figcaption>
          </figure>
        </div>
      </section>

      <section className="section competences">
        <h2>Compétences acquises</h2>
        <ul className="text-justify">
          <li><strong>Compétence 1 :</strong> Réaliser un développement d’application - Ce projet m'a permis de développer mes compétences en programmation Java, notamment en travaillant sur des fonctionnalités complexes comme l'intégration des transactions rejetées dans une base de données et la génération de fichiers XML conformes aux spécifications SEPA. J'ai acquis une meilleure compréhension des architectures modulaire et multi-base de données, en particulier pour des applications critiques comme celles utilisées dans le secteur bancaire. La gestion de l'application via des modules distincts a renforcé ma capacité à concevoir des systèmes robustes, maintenables, et évolutifs.</li>
          <li><strong>Compétence 2 :</strong> Optimiser des applications - En travaillant sur l'optimisation du code et la correction des bugs, j'ai pu identifier les méthodes qui posaient des problèmes de performance ou de stabilité. J'ai appris à appliquer des meilleures pratiques de développement, telles que la refactorisation et la modularisation du code, ce qui a permis de rendre l'application plus performante et plus fiable. L'utilisation des bibliothèques appropriées pour le traitement des données et la gestion des transactions m'a également permis d'améliorer l'efficacité globale de l'application.</li>
          <li><strong>Compétence 3 :</strong> Collaborer au sein d’une équipe - La collaboration a été un aspect crucial de ce projet. J'ai participé à de nombreuses réunions avec ma tutrice et d'autres membres de l'équipe pour discuter de l'avancement du projet, résoudre des problèmes et ajuster nos stratégies en fonction des retours. Cette expérience m'a permis d'améliorer ma communication et ma capacité à travailler en équipe, tout en m'assurant que les objectifs du projet étaient alignés avec les attentes de toutes les parties prenantes. J'ai également utilisé des outils de gestion de projet pour suivre les tâches, organiser le travail en équipe, et maintenir un rythme de travail soutenu.</li>
        </ul>
      </section>

      <section className="section ameliorations">
        <h2>Ce qui aurait pu être amélioré</h2>
        <p className="text-justify">
          Si je devais refaire ce stage, je changerais ma manière d'aborder les problèmes. J'ai souvent tenté de les résoudre seul, ce qui a parfois conduit à une perte de temps significative. Une approche plus collaborative avec ma tutrice m'aurait probablement permis de surmonter certains obstacles plus rapidement et d'éviter des blocages prolongés. Demander son avis dès les premiers signes de difficulté aurait été plus efficace et m'aurait aidé à gagner du temps.
        </p>
        <p className="text-justify">
          Bien que j'aie initialement bien géré mon temps, des interruptions liées à des problèmes administratifs ont ralenti l'avancement du projet. À l'avenir, il serait judicieux d'anticiper ces imprévus et de prévoir une planification plus flexible pour pouvoir les gérer plus efficacement. Une meilleure anticipation aurait permis de maintenir un rythme de travail constant, même face à des aléas extérieurs.
        </p>
        <p className="text-justify">
          J'aurais également pu améliorer ma capacité à identifier les problèmes potentiels avant qu'ils ne deviennent critiques. Par exemple, en gérant mieux les interruptions ou en prenant des mesures préventives, j'aurais pu éviter certains retards. Une vigilance accrue dès les premières étapes du projet aurait permis de mieux prévenir les obstacles et d'assurer une progression plus fluide du projet.
        </p>
      </section>

      <section className="section taches-restantes">
        <h2>Ce qu'il reste à faire</h2>
        <p className="text-justify">
          Une des tâches restantes est l'amélioration de la fonction d'exportation en fichier XML, spécifiquement dans le fichier RetourDAO.java. Actuellement, cette fonction doit être optimisée pour garantir une génération de fichiers XML plus efficace et conforme aux spécifications SEPA.
        </p>
      </section>

      <section className="section bilan">
        <h2>Bilan général du stage</h2>
        <p className="text-justify">
          Ce stage a été une expérience extrêmement bénéfique, me permettant d'acquérir des compétences pratiques en UML et dans l'utilisation de nouveaux outils de développement. Il a renforcé ma détermination à poursuivre une carrière dans le développement informatique, en confirmant mon intérêt pour ce domaine. De plus, la découverte du secteur bancaire a été particulièrement enrichissante, me permettant d'explorer les défis spécifiques liés à la gestion des transactions financières et la conformité aux normes SEPA.
        </p>
      </section>
    </div>
    
  );
};

export default Project2;