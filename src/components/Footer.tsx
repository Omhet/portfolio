import React, { useContext } from 'react';
import HeartIcon from '../images/icons/heart.svg';
import PortfolioContext from '../context/context';
import LinkWithArrow from './LinkWithArrow';

const Footer = () => {
  const { hero } = useContext(PortfolioContext);
  const { name: authorName } = hero;

  return (
    <footer>
      <LinkWithArrow to="hero" className="go-back" text="Go back" isArrowOnTheLeft />
      <div className="made-by">
        <span>
          Made by
          <a
            href="https://github.com/Omhet"
            target="_blank"
            aria-label="Author Github Link"
            rel="noopener noreferrer"
          >
            {authorName}
          </a>
          with
          <a
            href="https://www.gatsbyjs.com/"
            target="_blank"
            aria-label="Gatsby Link"
            rel="noopener noreferrer"
          >
            Gatsby
          </a>
          and
        </span>
        <HeartIcon />
      </div>
    </footer>
  );
};

export default Footer;
