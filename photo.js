
const images = document.querySelectorAll('.row img');


images.forEach(image => {
  image.addEventListener('click', () => {
    
    image.classList.toggle('zoom');
    images.forEach(otherImage => {
      if (otherImage !== image) {
        otherImage.classList.toggle('blur');
      }
    });

    
    if (image.classList.contains('zoom')) {
      
      images.forEach(otherImage => {
        if (otherImage !== image) {
          otherImage.style.pointerEvents = 'none';
        }
      });

      
      const button = document.createElement('button');
      button.innerText = 'Open editor';
      button.addEventListener('click', () => {
        
        window.location.href = `editor.html?src=${image.src}`;
      });
      image.parentElement.appendChild(button);
    } else {
      
      
      images.forEach(otherImage => {
        otherImage.style.pointerEvents = 'auto';
      });

      
      const button = image.parentElement.querySelector('button');
      if (button) {
        button.remove();
      }
    }
  });
});
