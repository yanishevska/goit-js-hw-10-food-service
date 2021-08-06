import menu from "./menu.json";
import refs from "./js/refs";
import creatMenuMarkup from "./templates/menu-item.hbs";
import { themeChangeChecked } from "./js/theme-change";
import { localThemeSave } from "./js/theme-save";

//=======================================================================
refs.themeSwitchBox.addEventListener('change', themeChangeChecked);
refs.themeSwitchBox.addEventListener('change', localThemeSave);


//=======================================================================
const cardsMenu = creatMenuMarkup(menu);
refs.listCard.insertAdjacentHTML('beforeend', cardsMenu);






