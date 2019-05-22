const photoArray = [{link: 'banana.gif', fullscreen: false}, {link: 'bananas.jpg', fullscreen: false}, {link: 'friends.gif', fullscreen: false}, {link: 'noballs.jpg', fullscreen: false}, {link: 'tits.gif', fullscreen: false}];

window.addEventListener('load', (event)=>{
  createGallery();
});

function createGallery() {
  photoArray.forEach((photo, index) => {
    let div = document.createElement('div');
    let img = document.createElement('img');
    img.src = 'assets/images/' + photo.link;
    img.classList.add('photo');

    img.addEventListener('click', event => {
      photo.fullscreen = !photo.fullscreen;

      if(photo.fullscreen){
        let divFullScreen = document.createElement('div');
        divFullScreen.classList.add('fullscreen-div');

        let imgFullScreen = document.createElement('img');
        imgFullScreen.src = 'assets/images/' + photo.link;
        imgFullScreen.classList.add('fullscreen');

        let arrowLeft = document.createElement('div');
        arrowLeft.classList.add('arrow-left');
        arrowLeft.addEventListener('click', event => {
          console.log('kaire');
        })

        let arrowRight = document.createElement('div');
        arrowRight.classList.add('arrow-right');

        arrowRight.addEventListener('click', event => {
          console.log('desine');
          document.querySelector('.fullscreen-div').removeChild(document.querySelector('.fullscreen'));
          let imgFullScreen = document.createElement('img');
          index++;
          imgFullScreen.src = 'assets/images/' + photoArray[index].link;
          imgFullScreen.classList.add('fullscreen');
          divFullScreen.appendChild(imgFullScreen);
        })

        imgFullScreen.addEventListener('click', event => {
          photo.fullscreen = !photo.fullscreen;
          document.querySelector('#gallery').removeChild(divFullScreen);
        })

        divFullScreen.appendChild(arrowLeft);
        divFullScreen.appendChild(imgFullScreen);
        divFullScreen.appendChild(arrowRight);
        document.querySelector('#gallery').appendChild(divFullScreen);
      }
    });

    div.appendChild(img);
    document.querySelector('#gallery').appendChild(div);
  });
}

function clearGallery() {
  document.querySelector('#gallery').innerHTML = '';
}
