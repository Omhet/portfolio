import React, { useState, useEffect } from 'react';
import Hero from './Hero';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';

import { PortfolioProvider } from '../context/context';

import { heroData, aboutData, projectsData, contactData, socialData } from '../mock/data';
import Social from './Social';
import Footer from './Footer';

function App() {
  const [hero, setHero] = useState(heroData);
  const [about, setAbout] = useState(aboutData);
  const [projects, setProjects] = useState(projectsData);
  const [contact, setContact] = useState(contactData);
  const [social, setSocial] = useState(socialData);

  useEffect(() => {
    setHero({ ...heroData });
    setAbout({ ...aboutData });
    setProjects([...projectsData]);
    setContact({ ...contactData });
    setSocial({ ...socialData });
  }, []);

  return (
    <PortfolioProvider value={{ hero, about, projects, contact, social }}>
      <div className="root">
        <Social />
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </PortfolioProvider>
  );
}

export default App;
