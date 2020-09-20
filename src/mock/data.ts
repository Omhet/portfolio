import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Vladimir Ivanov', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to Vladimir Ivanov portfolio website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  img: 'profile.png',
  name: 'Vladimir Ivanov',
  titles: ['UI', 'Frontend', 'Backend'],
};

// ABOUT DATA
export const aboutData = {
  text: `I’m a fullstack web engineer, currently based in Moscow.
  Engaged in the development of data-intensive applications,
  participating in the whole proccess of app creation: 
  from UI design to server set-up and deployments`,
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'AIRADAVOMETRA',
    info: 'Daria Artemova photo portfolio site',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio',
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'WannaWatch',
    info: 'IMDB inspired watchlist app',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio',
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Recycle',
    info: 'HTML5 game built with Phaser',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio',
  },
];

// CONTACT DATA
export const contactData = {
  cta: "Let's stay in touch",
  email: '',
};

// SOCIAL DATA
export const socialData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
  ],
};
