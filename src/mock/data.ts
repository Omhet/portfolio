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

const Skills = {
  Figma: {
    name: 'Figma',
    img: 'skills/figma.png',
  },
  XD: {
    name: 'Adobe XD',
    img: 'skills/xd.png',
  },
  HTML: {
    name: 'HTML',
    img: 'skills/html.png',
  },
  CSS: {
    name: 'CSS',
    img: 'skills/css.png',
  },
  JS: {
    name: 'JS',
    img: 'skills/js.png',
  },
  TS: {
    name: 'TS',
    img: 'skills/ts.png',
  },
  React: {
    name: 'React',
    img: 'skills/react.png',
  },
  Redux: {
    name: 'Redux',
    img: 'skills/redux.png',
  },
  NodeJS: {
    name: 'NodeJS',
    img: 'skills/node.png',
  },
  GraphQL: {
    name: 'GraphQL',
    img: 'skills/graphql.png',
  },
};

// ABOUT DATA
export const aboutData = {
  firstParagraph: 'I’m a fullstack web engineer, currently based in Moscow.',
  secondParagraph: `Engaged in the development of data-intensive applications,
  participating in the whole proccess of app creation: 
  from UI design to server set-up and deployments`,
  skills: [
    [Skills.Figma, Skills.XD],
    [Skills.HTML, Skills.CSS, Skills.JS, Skills.TS, Skills.React, Skills.Redux],
    [Skills.NodeJS, Skills.GraphQL],
  ],
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
