import React from "react";
import ImageGallery from "react-image-gallery";

const myPhotos = [
    {
      original: "images/the-book-barn-app-prototype.jpg",
      thumbnail: "images/the-book-barn-app-prototype.jpg",
      description: `The Book Barn App Prototype`,
      originalHeight: "450px",
    },
    {
        original: "images/the-book-barn-app-prototype-homepage.jpg",
        thumbnail: "images/the-book-barn-app-prototype-homepage.jpg",
        description: `The Book Barn App - Home`,
        originalHeight: "450px",
      },
    {
        original: "images/the-book-barn-app-prototype-my-books.jpg",
        thumbnail: "images/the-book-barn-app-prototype-my-books.jpg",
        description: `The Book Barn App - My Books`,
        originalHeight: "450px",
    },
    {
        original: "images/the-book-barn-app-prototype-rate-books.jpg",
        thumbnail: "images/the-book-barn-app-prototype-rate-books.jpg",
        description: `The Book Barn App - Rate Books`,
        originalHeight: "450px",
    },
    {
        original: "images/the-book-barn-app-prototype-settings.jpg",
        thumbnail: "images/the-book-barn-app-prototype-settings.jpg",
        description: `The Book Barn App - Settings`,
        originalHeight: "450px",
    },
    {
        original: "images/the-book-barn-app-prototype-my-profile.jpg",
        thumbnail: "images/the-book-barn-app-prototype-my-profile.jpg",
        description: `The Book Barn App - Profile`,
        originalHeight: "450px",
    },
    {
        original: "images/virtual-reality-UI.jpg",
        thumbnail: "images/virtual-reality-UI.jpg",
        description: `Virtual Reality UI`,
        originalHeight: "450px",
    },
    {
        original: "images/augmented-reality-UI.jpg",
        thumbnail: "images/augmented-reality-UI.jpg",
        description: `Augmented Reality UI`,
        originalHeight: "450px",
    },
    {
        original: "images/ducal-palace-of-urbino-italy.jpg",
        thumbnail: "images/ducal-palace-of-urbino-italy.jpg",
        description: `The Ducal Palace in Urbino, Italy`,
        originalHeight: "450px",
    },
    {
        original: "images/the-colosseum-rome-italy.jpg",
        thumbnail: "images/the-colosseum-rome-italy.jpg",
        description: `The Colosseum in Rome, Italy`,
        originalHeight: "450px",
    },
    {
        original: "images/monument-to-king-jose-lisbon-portugal.jpg",
        thumbnail: "images/monument-to-king-jose-lisbon-portugal.jpg",
        description: `King José I in Lisbon, Portugal`,
        originalHeight: "450px",
    },
    {
        original: "images/busch-gardens-christmas-town-williamsburg-virginia.jpg",
        thumbnail: "images/busch-gardens-christmas-town-williamsburg-virginia.jpg",
        description: `Busch Gardens in Williamsburg, VA`,
        originalHeight: "450px",
    },

    ]

function GalleryPage() {
  return (

    <>
        <h2>Gallery</h2>

        <p>Projects and Travels</p>

        <article>
            <ImageGallery items={myPhotos} />
        </article>
    </>
  );
}

export default GalleryPage;