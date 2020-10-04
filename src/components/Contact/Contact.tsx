import React, { useCallback, useContext, useState } from 'react';
import PortfolioContext from '../../context/context';
import Blob from '../../images/icons/blob-3.svg';
import ArrowHorizIcon from '../../images/icons/arrow-h.svg';
import Loader from '../Loader';

const Contact = () => {
  const { contact } = useContext(PortfolioContext);
  const { textFirstLine, textSecondLine, cta } = contact;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      setIsLoading(true);
      const messageWithLineBreaks = message.replace('\n', '%0A');
      await fetch(
        `https://excessive-grape-dry.glitch.me/send?name=${name}&email=${email}&message=${messageWithLineBreaks}`,
        { mode: 'no-cors' }
      );
      setIsLoading(false);
    },
    [name, email, message]
  );

  return (
    <section id="contact">
      <div className="contacts-left-line"></div>
      <div className="contact-wrapper">
        <form onSubmit={handleSubmit} className="contact-wrapper__form" action="">
          <input
            onChange={({ target: { value } }) => setName(value)}
            value={name}
            placeholder="Your name"
            type="text"
            required
          />
          <input
            onChange={({ target: { value } }) => setEmail(value)}
            value={email}
            placeholder="Your email"
            type="email"
            required
          />
          <div className="textarea-wrapper">
            <textarea
              onChange={({ target: { value } }) => setMessage(value)}
              value={message}
              placeholder="What you want to say"
              required
            ></textarea>
          </div>
          <button type="submit" className="cta-button submit-button">
            {isLoading ? <Loader /> : cta}
          </button>
        </form>
        <div className="contact-wrapper__text-container">
          <p className="contact-wrapper__text">
            <span>{textFirstLine}</span>
            <span>{textSecondLine}</span>
            <ArrowHorizIcon className="arrow-h" />
          </p>
          <Blob className="blob" />
        </div>
      </div>
    </section>
  );
};

export default Contact;
