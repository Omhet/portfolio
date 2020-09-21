import React, { useContext } from 'react';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';

const About = () => {
  const { about } = useContext(PortfolioContext);
  const { firstParagraph, secondParagraph } = about;

  return (
    <section id="about">
      <div className="about-info">
        <Title title="About" />
        <p>{firstParagraph}</p>
        <p>{secondParagraph}</p>
      </div>
    </section>
  );
};

export default About;
