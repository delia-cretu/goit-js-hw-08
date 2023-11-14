import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { galleryItems } from './gallery-items';

const gallery = document.querySelector('ul');

galleryItems.forEach(galleryItem => {
  gallery.insertAdjacentHTML(
    'afterbegin',
    `<li class="gallery__item"><a class="gallery__link" href="${galleryItem.original}"><img class="gallery__image" src = "${galleryItem.preview}" alt = "${galleryItem.description}"></img></a></li>`
  );
});

// Simple Lightbox

var lightbox = new SimpleLightbox('.gallery__link', {
  captionsData: 'alt',
  captionDelay: '250',
});

gallery.addEventListener('click', openImageInLightbox);
function openImageInLightbox(event) {
  if (event.target.getAttribute('class') !== 'gallery__link') {
    return;
  }
  event.preventDefault();
  lightbox.open();
}

document.addEventListener('keydown', escImage);
function escImage(e) {
  if (e.key === 'Escape') {
    lightbox.close();
    document.removeEventListener('keydown', escImage);
  }
}
