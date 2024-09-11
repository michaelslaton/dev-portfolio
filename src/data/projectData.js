import devPort from '../assets/imgs/projectImages/devPortfolio.jpg';
import resApp from '../assets/imgs/projectImages/restaurantApp.jpg';
import weLoveMovies from '../assets/imgs/projectImages/weLoveMovies.jpg';
import notflix from '../assets/imgs/projectImages/notflixr.jpg';
import remazon from '../assets/imgs/projectImages/remazon.jpg';


const projectList = [
  {
    id: 1,
    show: true,
    name: 'We Love Movies',
    img: weLoveMovies,
    type: '(Back-End)',
    description: 'A back-end application intended to return data on movies, movie reviews, and theaters a movie is playing at.',
    tech: ['JavaScript', 'Node.js', 'Knex.js','Express.js', 'PostgreSQL',],
    code: 'https://github.com/michaelslaton/we-love-movies-capstone',
  },
  {
    id: 2,
    show: true,
    name: 'Reservations Application',
    img: resApp,
    type: '(Full-Stack)',
    description: 'A retro styled, full-stack web application that allows a restaurant to create, search, and edit reservations as well as manage seating inside the restaurant as their guests arrive.',
    tech: ['JavaScript','React.js','HTML','Css', 'Node.js', 'Knex.js','Express.js', 'PostgreSQL',],
    code: 'https://github.com/michaelslaton/ms-restaurant-reservations-front',
    codeb: 'https://github.com/michaelslaton/ms-restaurant-reservations-back',
  },
  {
    id: 3,
    show: true,
    name: 'Developer Portfolio',
    img: devPort,
    type: '(Front-End)',
    description: 'I learned a lot while building this portfolio, and I intend to continue learning as I update it throughout my career as a software developer. I have designed this portfolio to be easy to customize and add data to as I acquire new skills and create or contribute to new projects.',
    tech: ['JavaScript','React.js', 'HTML', 'Css'],
    code: 'https://github.com/michaelslaton/dev-portfolio',
  },
  {
    id: 4,
    show: true,
    name: 'Notflix',
    img: notflix,
    type: '(Full-Stack)',
    description: 'A web app dedicated to delivering information on your favorite movies & media. Users can create accounts with secure login and authorization provided by firebase, customize profiles, save bookmarks as well as generate ratings and comments. My position on this team was Front-End Developer.',
    tech: ['JavaScript','React.js', 'Firebase', 'HTML', 'Css', 'Node.js', 'Express.js', 'Knex.js', 'PostgreSQL', ],
    code: 'https://github.com/GolamHossain9355/notflix-front',
    codeb: 'https://github.com/GolamHossain9355/notflix-back',
  },
  {
    id: 5,
    show: true,
    name: 'Remazon Prime',
    img: remazon,
    type: '(Front-End)',
    description: 'A web application for managing a Discord community, allowing users to create and display events on a calendar, track points for friendly competition, and enabling community leaders to communicate directly via messages of the day and notifications.',
    tech: ['TypeScript', 'JavaScript','React.js', 'Firebase', 'HTML', 'Css', 'Node.js', 'Express.js', 'Knex.js', 'PostgreSQL',],
    code: 'https://github.com/michaelslaton/remazon',
  },
];

export default projectList;