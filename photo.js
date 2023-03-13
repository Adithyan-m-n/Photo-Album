
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


document.querySelectorAll('.filter-btn').forEach(button => {
  button.addEventListener('click', () => {
    const color = button.getAttribute('data-color');
    filterImages(color);
  });
});


document.querySelector('#show-all-btn').addEventListener('click', () => {
  showAllImages();
});


function filterImages(color) {
  document.querySelectorAll('.img-fluid').forEach(img => {
    const canvas = document.createElement('canvas');
    canvas.width = img.width;
    canvas.height = img.height;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0);
    const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const pixels = imgData.data;
    let count = 0;
    for (let i = 0; i < pixels.length; i += 4) {
      const r = pixels[i];
      const g = pixels[i + 1];
      const b = pixels[i + 2];
      if (color === 'red' && r > g && r > b) {
        count++;
      } else if (color === 'green' && g > r && g > b) {
        count++;
      } else if (color === 'blue' && b > r && b > g) {
        count++;
      }
    }
    if (count / (pixels.length / 4) > 0.5) {
      img.parentElement.style.display = 'block';
    } else {
      img.parentElement.style.display = 'none';
    }
  });
}


function showAllImages() {
  document.querySelectorAll('.img-fluid').forEach(img => {
    img.parentElement.style.display = 'block';
  });
}

