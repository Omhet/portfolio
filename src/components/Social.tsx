import React, { useContext } from 'react';
import PortfolioContext from '../context/context';
import { getIcon } from '../utils';

const Social = () => {
  const { social } = useContext(PortfolioContext);

  return (
    <div className="social">
      {social.networks.map(({ id, url, name }) => {
        const Icon = getIcon(name);
        return (
          <a
            key={id}
            href={url}
            target="_blank"
            aria-label={`Social icon: ${name}`}
            rel="noopener noreferrer"
          >
            <Icon className="social-icon" />
          </a>
        );
      })}
    </div>
  );
};

export default Social;
