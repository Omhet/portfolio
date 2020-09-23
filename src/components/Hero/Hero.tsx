import React, { useContext, useState } from 'react';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';
import ProfileImg from '../Image/ProfileImg';
import LogoImg from '../Image/LogoImg';

const Header = () => {
  const { hero } = useContext(PortfolioContext);
  const { titles, name, img } = hero;

  return (
    <section id="hero">
      <div className="hero-top">
        <div className="hero-logo">
          <LogoImg alt={name} filename="logo.png" />
        </div>
        <nav>
          <ul className="hero-nav">
            <li>
              <Link to="about" smooth duration={1000}>
                about
              </Link>
            </li>
            <li>
              <Link to="projects" smooth duration={1000}>
                projects
              </Link>
            </li>
            <li>
              <Link to="contact" smooth duration={1000}>
                contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="hero-bottom">
        <div className="hero-info">
          <h1 className="hero-name">{name}</h1>
          <ul className="hero-titles-list">
            {titles.map((title) => (
              <li key={title}>{title}</li>
            ))}
          </ul>
        </div>
        <Link className="hero-cta" to="projects" smooth duration={1000}>
          See my work
        </Link>
      </div>
      <div className="hero-bottom-line"></div>
      <ProfileImg className="hero-img" alt="profile image" filename={img} />
      <div className="hero-watermark">{name}</div>
    </section>
  );
};

export default Header;
