let clickedElement = document.querySelector('.card');

const showPhoto = (e) => {

    clickedElement = e.target;

    const imgURL = clickedElement.style.backgroundImage;
    console.log(imgURL);
    document.querySelector('.featured_image').style.backgroundImage = imgURL;
    document.querySelector('.preview_box').className = 'preview_box active';

};


 const cards = document.querySelectorAll('.card');
 for (card of cards) {
     card.onclick = showPhoto;
 }
