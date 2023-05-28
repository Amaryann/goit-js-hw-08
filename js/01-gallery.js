// Add imports above this line
import { galleryItems } from './gallery-items.js';
// Change code below this line
// Описаний в документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";
const generateMarkup = (list) => {
    return list.map(element => `<li><a class="gallery__link" href="${element.original}"><img class="gallery__image" src="${element.preview}" alt="${element.description}"></li>`).join("")
}
let gallery = document.querySelector(".gallery")
gallery.insertAdjacentHTML("afterbegin", generateMarkup(galleryItems))

const handleClick = (e) => {
    if (e.target.nodeName === "UL"){
        return
     }
    e.preventDefault();
    let lightbox = new SimpleLightbox(e.target.parentElement, {captionDelay: 250, captionsData: "alt"})
    lightbox.open()

}
gallery.addEventListener("click", handleClick)
