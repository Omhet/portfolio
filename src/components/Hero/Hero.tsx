import React, { useContext, useState } from 'react';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';
import ProfileImg from '../Image/ProfileImg';

const Header = () => {
  const { hero } = useContext(PortfolioContext);
  const { titles, name, img } = hero;

  return (
    <section id="hero" className="jumbotron">
      <ProfileImg alt="profile image" filename={img} />
      <h1 className="hero-title">
        <span className="text-color-main">{name}</span>
        {titles.map((title) => (
          <span key={title}>{title}</span>
        ))}
      </h1>
      <p className="hero-cta">
        <span className="cta-btn cta-btn--hero">
          <Link to="about" smooth duration={1000}>
            See my work
          </Link>
        </span>
      </p>
    </section>
  );
};

export default Header;
