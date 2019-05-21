const photoArray = [{link: 'banana.gif', fullscreen: false}, {link: 'bananas.jpg', fullscreen: false}, {link: 'friends.gif', fullscreen: false}, {link: 'noballs.jpg', fullscreen: false}, {link: 'tits.gif', fullscreen: false}];

window.addEventListener('load', (event)=>{
  clearGallery();
  createGallery();
});

function createGallery() {
  photoArray.forEach((photo, index) => {
    let div = document.createElement('div');
    let img = document.createElement('img');
    img.src = 'assets/images/' + photo.link;
    if(!photo.fullscreen){
      img.classList.add('photo');
    } else {
      img.classList.add('fullscreen');
    }

    img.addEventListener('click', event => {
      photo.fullscreen = !photo.fullscreen;
      clearGallery();
      createGallery();
    });

    div.appendChild(img);
    document.querySelector('#gallery').appendChild(div)
  });
}

function clearGallery() {
  document.querySelector('#gallery').innerHTML = '';
}
