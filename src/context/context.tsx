import React from 'react';
import { heroData, aboutData, projectsData, contactData, footerData } from '../mock/data';


const PortfolioContext = React.createContext({
  hero: heroData,
  about: aboutData,
  projects: projectsData,
  contact: contactData,
  footer: footerData,
});

export const PortfolioProvider = PortfolioContext.Provider;
export const PortfolioConsumer = PortfolioContext.Consumer;

export default PortfolioContext;
