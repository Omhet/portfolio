// HEAD DATA
export const headData = {
  title: 'Vladimir Ivanov | Fullstack Web-Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to Vladimir Ivanov portfolio page', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  img: 'profile.png',
  name: 'Vladimir Ivanov',
  ctaText: 'See my work',
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
  firstParagraph: 'I’m a fullstack web engineer, currently based in Moscow.',
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
      description: 'Enrolled in RSUH, Moscow',
      year: '2016',
    },
    {
      description: 'Started to learn web development',
      year: '2017',
    },
    {
      description: 'Internship in Align, frontend department',
      year: '2018',
    },
    {
      description: 'Became a full-time software engineer in Align',
      year: '2019',
    },
    {
      description: 'Got my bachelor in Computer Science',
      year: '2020',
    },
  ],
};

// PROJECTS DATA
export const projectsData = [
  {
    img: 'projects/daria-site.jpg',
    title: 'Airadavometra Photos',
    info: 'Daria Artemova photo portfolio site',
    url: 'https://airadavometra.space/',
  },
  {
    img: 'projects/watchlist.jpg',
    title: 'WannaWatch',
    info: 'IMDB inspired watchlist app',
    url: 'https://wannawatch.now.sh/',
    repo: 'https://github.com/Omhet/watchlist',
  },
  {
    img: 'projects/recycle.jpg',
    title: "Recycle: Don't get wasted",
    info: 'HTML5 game built with Phaser',
    url: 'https://omhet.github.io/recycle-game/',
    repo: 'https://github.com/Omhet/recycle-game',
  },
];

// CONTACT DATA
export const contactData = {
  textFirstLine: "Let's stay in",
  textSecondLine: "touch",
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
