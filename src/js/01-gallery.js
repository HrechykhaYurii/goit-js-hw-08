// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line
const list = document.querySelector('.gallery');
const listImages = createImagesMarkup(galleryItems);

list.insertAdjacentHTML("afterbegin", listImages);

function createImagesMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => 
`<a class="gallery__item" href="${original}">
<img class="gallery__image" src="${preview}" alt="${description}" />
</a>`
).join('');
}

new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250
});

