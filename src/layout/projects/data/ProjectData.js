const projectList = [
  {
    id:1,
    name: `Reservations Application`,
    image: process.env.PUBLIC_URL + `/imgs/projectImages/restaurantApp.jpg`,
    type: '(Full-Stack)',
    description: `A retro styled, full-stack web application that allows a restaurant to create, search, and edit reservations as well as manage seating inside the restaurant as their guests arrive. `,
    tech: [`Javascript`,`React.js`,`HTML`,`Css`,`Knex.js`,`Express.js`],
    demo: `https://ms-finalcap-frontend.herokuapp.com/dashboard`,
    code: `https://github.com/michaelslaton/ms-restaurant-reservations`,
  },
  {
    id:1,
    name: `We Love Movies`,
    image: process.env.PUBLIC_URL + `/imgs/projectImages/weLoveMovies.jpg`,
    type: '(Back-End)',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    tech: [`Javascript`,`Knex.js`,`Express.js`],
    code: `https://github.com/michaelslaton/we-love-movies-capstone`,
  },
  {
    id:1,
    name: `Developer Portfolio`,
    image: process.env.PUBLIC_URL + `/imgs/projectImages/weLoveMovies.jpg`,
    type: '(Front-End)',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    tech: [`Javascript`,`React.js`, `HTML`, `Css`],
    code: `https://github.com/michaelslaton/dev-portfolio`,
  },
];

export default projectList;