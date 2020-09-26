import LinkedinIcon from '../images/icons/social/linkedin.svg';
import GithubIcon from '../images/icons/social/github.svg';
import TwitterIcon from '../images/icons/social/twitter.svg';

export const getIcon = (name: string) => {
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