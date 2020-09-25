import React, { useContext } from 'react';
import PortfolioContext from '../context/context';
import LinkedinIcon from '../images/icons/social/linkedin.svg';
import GithubIcon from '../images/icons/social/github.svg';
import TwitterIcon from '../images/icons/social/twitter.svg';

const getIcon = (name: string) => {
  switch (name) {
    case 'linkedin':
      return LinkedinIcon;
    case 'github':
      return GithubIcon;
    case 'twitter':
      return TwitterIcon;
    default:
      return LinkedinIcon;
  }
};

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
