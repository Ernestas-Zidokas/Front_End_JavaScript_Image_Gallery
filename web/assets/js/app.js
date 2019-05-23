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
      if(document.querySelector('#gallery-fullscreen').contains(document.querySelector('.fullscreen-div'))) {
        document.querySelector('#gallery-fullscreen').removeChild(document.querySelector('.fullscreen-div'));
      }

      if(photo.fullscreen){
        let divFullScreen = document.createElement('div');
        divFullScreen.classList.add('fullscreen-div');

        let imgFullScreen = document.createElement('img');
        imgFullScreen.src = 'assets/images/' + photo.link;
        imgFullScreen.classList.add('fullscreen');

        let beforeImg = document.createElement('img');
        beforeImg.src = 'assets/images/' + photoArray[index == 0 ? photoArray.length - 1 : index - 1].link;
        beforeImg.classList.add('before-img');

        let afterImg = document.createElement('img');
        afterImg.src = 'assets/images/' + photoArray[index == photoArray.length - 1 ? 0 : index + 1].link;
        afterImg.classList.add('after-img');

        let arrowLeft = document.createElement('div');
        arrowLeft.classList.add('arrow-left');

        arrowLeft.addEventListener('click', event => {
          if(index == 0){
            index = photoArray.length - 1
          } else {
            index--;
          }
          document.querySelector('.fullscreen-div').removeChild(document.querySelector('.fullscreen'));
          document.querySelector('.fullscreen-div').removeChild(document.querySelector('.before-img'));
          document.querySelector('.fullscreen-div').removeChild(document.querySelector('.after-img'));

          let imgFullScreen = document.createElement('img');
          imgFullScreen.src = 'assets/images/' + photoArray[index].link;
          imgFullScreen.classList.add('fullscreen');

          let beforeImg = document.createElement('img');
          beforeImg.src = 'assets/images/' + photoArray[index == 0 ? photoArray.length - 1 : index - 1].link;
          beforeImg.classList.add('before-img');

          let afterImg = document.createElement('img');
          afterImg.src = 'assets/images/' + photoArray[index == photoArray.length - 1 ? 0 : index + 1].link;
          afterImg.classList.add('after-img');

          imgFullScreen.addEventListener('click', event => {
            photo.fullscreen = !photo.fullscreen;
            document.querySelector('#gallery-fullscreen').removeChild(divFullScreen);
          })

          divFullScreen.appendChild(beforeImg);
          divFullScreen.appendChild(afterImg);
          divFullScreen.appendChild(imgFullScreen);
        });

        let arrowRight = document.createElement('div');
        arrowRight.classList.add('arrow-right');

        arrowRight.addEventListener('click', event => {
          if(index == photoArray.length - 1){
            index = 0;
          } else {
            index++;
          }
          document.querySelector('.fullscreen-div').removeChild(document.querySelector('.fullscreen'));
          document.querySelector('.fullscreen-div').removeChild(document.querySelector('.before-img'));
          document.querySelector('.fullscreen-div').removeChild(document.querySelector('.after-img'));

          let imgFullScreen = document.createElement('img');
          imgFullScreen.src = 'assets/images/' + photoArray[index].link;
          imgFullScreen.classList.add('fullscreen');

          imgFullScreen.addEventListener('click', event => {
            photo.fullscreen = !photo.fullscreen;
            document.querySelector('#gallery-fullscreen').removeChild(divFullScreen);
          });

          let beforeImg = document.createElement('img');
          beforeImg.src = 'assets/images/' + photoArray[index == 0 ? photoArray.length - 1 : index - 1].link;
          beforeImg.classList.add('before-img');

          let afterImg = document.createElement('img');
          afterImg.src = 'assets/images/' + photoArray[index == photoArray.length - 1 ? 0 : index + 1].link;
          afterImg.classList.add('after-img');

          divFullScreen.appendChild(beforeImg);
          divFullScreen.appendChild(afterImg);
          divFullScreen.appendChild(imgFullScreen);
        });

        imgFullScreen.addEventListener('click', event => {
          photo.fullscreen = !photo.fullscreen;
          document.querySelector('#gallery-fullscreen').removeChild(divFullScreen);
        });

        divFullScreen.appendChild(beforeImg);
        divFullScreen.appendChild(afterImg);
        divFullScreen.appendChild(arrowLeft);
        divFullScreen.appendChild(imgFullScreen);
        divFullScreen.appendChild(arrowRight);
        document.querySelector('#gallery-fullscreen').appendChild(divFullScreen);
      }
    });

    div.appendChild(img);
    document.querySelector('#gallery').appendChild(div);
  });
}
