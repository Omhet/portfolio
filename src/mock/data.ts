// HEAD DATA
export const headData = {
  title: 'Vladimir Ivanov | Frontend Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to Vladimir Ivanov portfolio page', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  img: 'profile.png',
  name: 'Vladimir Ivanov',
  ctaText: 'See my work',
  titles: ['UI', 'Frontend', 'A pinch of Backend'],
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
    name: 'JavaScript',
    img: 'skills/js.png',
  },
  TS: {
    name: 'TypeScript',
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
  firstParagraph: 'I’m a frontend developer, currently based in Moscow.',
  secondParagraph: `Engaged in the development of data-intensive applications,
  participating in the whole proccess of app creation: 
  from UI design to server set-up and deployments.`,
  skills: [
    [Skills.Figma, Skills.XD],
    [Skills.HTML, Skills.CSS, Skills.JS, Skills.TS, Skills.React, Skills.Redux],
    [Skills.NodeJS, Skills.GraphQL],
  ],
  timeline: [
    {
      description: 'Started to learn web',
      year: '2017',
    },
    {
      description: 'Started as an intern, then became a full-time frontend engineer in Align',
      year: '2018',
    },
    {
      description: 'Got my bachelor in Computer Science',
      year: '2020',
    },
    {
      description: 'Joined Tinkoff as a fullstack engineer with incline to frontend',
      year: '2021',
    },
    {
      description: 'Started to work as a contractor for Scentbird',
      year: '2022',
    },
  ],
};

// PROJECTS DATA
export const projectsData = [
  {
    img: 'projects/family-tree.webp',
    title: 'Family Tree',
    info: "(2022) My wife's family tree. Made in collaboration with Daria Artemova",
    url: 'https://github.com/airadavometra/family-tree',
    repo: 'https://github.com/Omhet/watchlist',
  },
  {
    img: 'projects/secret-ingredient.png',
    title: 'Secret Ingredient',
    info:
      '(2022) HTML5 game built with React and Pixi for GamedevJS-2022. Made in collaboration with Daria Artemova',
    url: 'https://rhythm-game-eight.vercel.app/',
    repo: 'https://github.com/Omhet/secret-ingredient',
  },
  {
    img: 'projects/watchlist.jpg',
    title: 'WannaWatch',
    info: '(2019) IMDB inspired watchlist app',
    url: 'https://wannawatch.now.sh/',
    repo: 'https://github.com/Omhet/watchlist',
  },
];

// CONTACT DATA
export const contactData = {
  textFirstLine: "Let's stay in",
  textSecondLine: 'touch',
  cta: 'Submit',
  email: '',
};

// SOCIAL DATA
export const socialData = {
  networks: [
    {
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/vlivanoff/',
    },
    {
      name: 'github',
      url: 'https://github.com/Omhet',
    },
    {
      name: 'twitter',
      url: 'https://twitter.com/omhetehmo',
    },
  ],
};
