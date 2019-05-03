const makeBigger = () => {
  document.querySelector('.content').style.fontSize = '36px';
};

const makeSmaller = () => {
  document.querySelector('.content').style.fontSize = '8px';
};


document.querySelector('.a1').onclick = makeBigger;
document.querySelector('.a2').onclick = makeSmaller;
