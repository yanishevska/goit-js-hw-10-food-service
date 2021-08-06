import refs from "./refs";
import Theme from "./theme";

export function themeChangeChecked() {

    if (refs.themeSwitchBox.checked) {
        refs.bodyColor.classList.add(Theme.DARK);
        refs.bodyColor.classList.remove(Theme.LIGHT);
        localStorage.setItem('Theme', Theme.DARK);
    } else {
        refs.bodyColor.classList.add(Theme.LIGHT);
        refs.bodyColor.classList.remove(Theme.DARK);
        localStorage.setItem('Theme', Theme.LIGHT);
    }
   
};