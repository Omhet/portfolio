import React, { useContext } from 'react';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';

const Contact = () => {
  const { contact } = useContext(PortfolioContext);
  const { cta, email } = contact;

  return (
    <section id="contact">
      <Title title="Contact" />
      <div className="contact-wrapper">
        <p className="contact-wrapper__text">{cta}</p>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="cta-btn cta-btn--resume"
          href={email ? `mailto:${email}` : 'https://github.com/cobidev/react-simplefolio'}
        >
          Submit
        </a>
      </div>
    </section>
  );
};

export default Contact;
