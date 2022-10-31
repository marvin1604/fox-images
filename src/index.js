/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

import {registerImage} from "./lazy";

console.log('Happy hacking :)')
//ref url : https://randomfox.ca/images/120.jpg
const appNode =document.querySelector("#app");

const maximum = 122;
const minimum = 1;
const random = () => Math.floor(Math.random()*(maximum-minimum))+minimum;

const createImageNode = () =>{

    const container = document.createElement("div")
    container.className = "container-image";

    const imagen = document.createElement("img");
    imagen.className = "image-all";
    imagen.dataset.src = `https://randomfox.ca/images/${random()}.jpg`

    //wraper
    const imageWrapper = document.createElement("div");
    imageWrapper.className = "bg-gray-300";
    imageWrapper.style.minHeight = "100px";
    imageWrapper.style.display = "inline-block";

    imageWrapper.appendChild(imagen);
    container.appendChild(imageWrapper);

    // appendedImages++;
    // printlog();

    return container;
};
const addButton = document.querySelector(".addButton");
const cleanButton = document.querySelector(".cleanButton")

const addImages = () => {
    const newImages = createImageNode();
    appNode.append(newImages);
    registerImage(newImages);
};

const cleanImages = () => {

    console.log(appNode.childNodes);

    [...appNode.childNodes].forEach(child => {
        child.remove();
    }) 

}

addButton.addEventListener("click", addImages);
cleanButton.addEventListener("click", cleanImages);

