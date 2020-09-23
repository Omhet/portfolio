import React, { useContext } from 'react';
import PortfolioContext from '../../context/context';
import SkillImg from '../Image/SkillImg';
import Title from '../Title/Title';

const SkillItem = ({ img, name }: { img: string; name: string }) => (
  <div className="about-skills__item">
    <SkillImg alt={name} filename={img} />
    <span className="about-skills__item-text">{name}</span>
  </div>
);

const About = () => {
  const { about } = useContext(PortfolioContext);
  const { firstParagraph, secondParagraph, skills, timeline } = about;

  return (
    <section id="about">
      <div>
        <div className="about-info">
          <Title title="About" />
          <p>{firstParagraph}</p>
          <p>{secondParagraph}</p>
        </div>
        <div className="about-skills">
          <Title title="Skills" />
          <div className="about-skills__items">
            {skills.map((row) => (
              <div className="about-skills__items-row">
                {row.map((skill) => (
                  <SkillItem {...skill} />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="about-timeline">
        {timeline.map(({ description, year }) => (
          <>
            <div className="about-timeline__item">
              <span>{description}</span>
              <span className="about-timeline__year">{year}</span>
            </div>
          </>
        ))}
      </div>
    </section>
  );
};

export default About;
