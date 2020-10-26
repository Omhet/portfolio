import React, { useContext } from 'react';
import PortfolioContext from '../context/context';
import SkillImg from './Image/SkillImg';
import Title from './Title';

const SkillItem = ({ img, name }: { img: string; name: string }) => (
  <div aria-label={name} title={name} className="about-skills__item">
    <SkillImg className="about-skills__item-img" alt={name} filename={img} />
  </div>
);

const About = () => {
  const { about } = useContext(PortfolioContext);
  const { firstParagraph, secondParagraph, skills, timeline } = about;

  return (
    <section id="about">
      <div className="about-info-container">
        <div className="about-info">
          <Title title="About" />
          <p>{firstParagraph}</p>
          <p>{secondParagraph}</p>
        </div>
        <div className="about-skills">
          <Title title="Skills" />
          <div className="about-skills__items">
            {skills.map((row, index) => (
              <div key={index} className="about-skills__items-row">
                {row.map((skill) => (
                  <SkillItem key={skill.name} {...skill} />
                ))}
              </div>
            ))}
          </div>
        </div>
        <Title className="projects-title" title="Projects" />
      </div>
      <div aria-label="timeline" className="about-timeline">
        {timeline.map(({ description, year }, index) => (
          <div aria-label={`${year}. ${description }`} key={index} className="about-timeline__item">
            <div className="about-timeline__year">{year}</div>
            <div>{description}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
