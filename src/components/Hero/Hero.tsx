import React, { useContext, useState } from 'react';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';
import ProfileImg from '../Image/ProfileImg';

const Header = () => {
  const { hero } = useContext(PortfolioContext);
  const { titles, name, img } = hero;

  return (
    <section id="hero">
      <ProfileImg alt="profile image" filename={img} />
      <h1 className="hero-title">
        <span className="text-color-main">{name}</span>
        {titles.map((title) => (
          <span key={title}>{title}</span>
        ))}
      </h1>
      <Link to="about" smooth duration={1000}>
        See my work
      </Link>
    </section>
  );
};

export default Header;
