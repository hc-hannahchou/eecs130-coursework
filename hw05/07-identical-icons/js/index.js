const elem = document.getElementById('output');

// Todo: make
const className = 'fa-heart';

/* TODO: instead of repeating the line below
   over and over again, use a while loop to repeat it
   as many times as you like.
*/

let counter = 0;
while (counter < 1000) {
  elem.innerHTML += '<i class="fa ' + className + '"></i>';
  counter += 1;
}
