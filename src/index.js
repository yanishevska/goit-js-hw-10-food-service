//import './sass/main.scss';
import menu from "./menu.json";
import creatMenuMarkup from "./templates/menu-item.hbs";

const listCard = document.querySelector('.js-menu');
const cardsMenu = creatMenuMarkup(menu);

listCard.insertAdjacentHTML('beforeend', cardsMenu);
console.log(listCard);