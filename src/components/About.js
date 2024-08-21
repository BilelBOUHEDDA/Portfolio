// src/components/About.js
import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import {
  DiJavascript1,
  DiNodejs,
  DiReact,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from 'react-icons/di';
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiPostgresql,
} from 'react-icons/si';
import { CgCPlusPlus } from 'react-icons/cg';

const skills = [
  { icon: DiJavascript1, title: 'JavaScript' },
  { icon: DiNodejs, title: 'Node.js' },
  { icon: DiReact, title: 'React' },
  { icon: DiMongodb, title: 'MongoDB' },
  { icon: SiNextdotjs, title: 'Next.js' },
  { icon: DiGit, title: 'Git' },
  { icon: SiFirebase, title: 'Firebase' },
  { icon: SiRedis, title: 'Redis' },
  { icon: CgCPlusPlus, title: 'C++' },
  { icon: SiPostgresql, title: 'PostgreSQL' },
  { icon: DiPython, title: 'Python' },
  { icon: DiJava, title: 'Java' },
];

const About = () => {
  return (
    <Container className="my-5">
      <h1>Qui suis-je ?</h1>
      <p>
        Je suis <strong>BOUHEDDA Bilel</strong>. Développeur mordu d’informatique, j’ai appris à coder dans divers langages informatiques (Javascript, Python, React...).
      </p>
      <p>
        Polyvalent, je maîtrise les différentes étapes techniques de la création d’un site ou d’une application web ; de la compréhension des besoins utilisateurs, au développement frontend et backend en passant par la maintenance.
      </p>
      <p>À part le développement informatique, j'aime aussi :</p>
      <ul>
        <li>Faire du sport</li>
        <li>Voyager</li>
        <li>Apprendre de nouvelles choses</li>
      </ul>
      <h2>Mes compétences techniques</h2>
      <Row className="text-center">
        {skills.map((skill, index) => (
          <Col xs={6} md={4} lg={3} key={index} className="mb-4">
            <div className="d-flex flex-column align-items-center">
              <skill.icon size={50} />
              <p>{skill.title}</p>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default About;