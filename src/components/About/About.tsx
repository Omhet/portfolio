import React, { useContext } from 'react';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';

const About = () => {
  const { about } = useContext(PortfolioContext);
  const { text } = about;

  return (
    <section id="about">
      <Title title="About Me" />
      <div className="about-wrapper__info">
        <p className="about-wrapper__info-text">{text}</p>
      </div>
    </section>
  );
};

export default About;
