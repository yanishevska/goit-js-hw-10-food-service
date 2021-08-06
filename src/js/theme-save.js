import refs from "./refs";
import Theme from "./theme";

export function localThemeSave() {
    const themeLocalGet = localStorage.getItem('Theme');

    if (themeLocalGet === Theme.DARK) {
        refs.bodyColor.classList.add(themeLocalGet);
        refs.themeSwitchBox.checked = true;
    }
}
localThemeSave();