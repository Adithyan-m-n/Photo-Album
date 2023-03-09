// Select all images in the photo album
const images = document.querySelectorAll('.row img');

// Add a click event listener to each image
images.forEach(image => {
  image.addEventListener('click', () => {
    // Toggle the zoom class on the clicked image
    image.classList.toggle('zoom');

    // Blur the background images
    images.forEach(otherImage => {
      if (otherImage !== image) {
        otherImage.classList.toggle('blur');
      }
    });
  });
});
