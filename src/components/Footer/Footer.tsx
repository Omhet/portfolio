import React from 'react';
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <footer className="footer navbar-static-bottom">
      <span className="back-to-top">
        <Link to="hero" smooth duration={1000}>
          <i className="fa fa-angle-up fa-2x" aria-hidden="true" />
        </Link>
      </span>
      <hr />
      <p className="footer__text">
        © {new Date().getFullYear()} - Template developed by{' '}
        <a href="https://github.com/Omhet" target="_blank" rel="noopener noreferrer">
          Vladimir Ivanov
        </a>
      </p>
    </footer>
  );
};

export default Footer;
