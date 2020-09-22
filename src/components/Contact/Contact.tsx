import React, { useContext } from 'react';
import PortfolioContext from '../../context/context';

const Contact = () => {
  const { contact } = useContext(PortfolioContext);
  const { cta, email } = contact;

  return (
    <section id="contact">
      <div className="contact-wrapper">
        <p className="contact-wrapper__text">{cta}</p>
        <form className="contact-wrapper__form" action="">
          <input placeholder="Your name" type="text" />
          <input placeholder="Your email" type="email" />
          <textarea placeholder="What you want to say"></textarea>
          <button type="submit" className="cta-button">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
