//import './sass/main.scss';
import menu from "./menu.json";
import creatMenuMarkup from "./templates/menu-item.hbs";
import Theme from "./js/theme";

const listCard = document.querySelector('.js-menu');
const switchBox = document.querySelector('#theme-switch-toggle');
const bodyColor = document.querySelector('body');


const cardsMenu = creatMenuMarkup(menu);

listCard.insertAdjacentHTML('beforeend', cardsMenu);
switchBox.addEventListener('change', themeChange);
switchBox.addEventListener('change', localThemeSave);

function themeChange() {
    
    if (switchBox.checked) {
        bodyColor.classList.add(Theme.DARK);
        bodyColor.classList.remove(Theme.LIGHT);
        localStorage.setItem('Theme', Theme.DARK);
    } else {
        bodyColor.classList.add(Theme.LIGHT);
        bodyColor.classList.remove(Theme.DARK);
        localStorage.setItem('Theme', Theme.LIGHT);
    }
   
};


function localThemeSave(){
    const themeLocalGet = localStorage.getItem('Theme');

    if (themeLocalGet === Theme.DARK) {
        bodyColor.classList.add(themeLocalGet);
        switchBox.checked = true;
    }
}
localThemeSave();