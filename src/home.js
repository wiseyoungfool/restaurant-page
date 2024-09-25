// greeting.js
import menu from './menu.js';

export default function initHome() {
    console.log("Entering Home Page");
    const content = document.getElementById("content");
    content.innerHTML = "";

    const image = document.createElement('div');
    image.classList.add('image');

    content.appendChild(image);

    const about = document.createElement('div');
    about.classList.add('about')
    
    about.textContent = "Welcome to Benny's Dine and Dash! Do you want to be chased by lions and wolves while enjoying a delicious meal? Then order today!"
    content.appendChild(about);

    const viewMenu = document.createElement("button");
    viewMenu.classList.add("menu-view-btn");
    viewMenu.textContent="View Menu";
    content.appendChild(viewMenu);

    viewMenu.addEventListener("click", menu);
}
