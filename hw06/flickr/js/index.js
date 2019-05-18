const search = (ev) => {
    //console.log(document.querySelector('input').value);
    let term = (document.querySelector('input').value);
    let url = `https://www.apitutor.org/flickr/simple/?tags=${term}`;
    fetch(url)
        .then(response => response.json())
        .then(displayResults);
};

const displayResults = (data) => {
    console.log(data);
    document.querySelector('#output').innerHTML = "";
    for (item of data) {
      const template = `
        <div class = "card">
          <div class= "photo" style="background-image: url('${item.img_url}')"></div>
          <p>${item.title}</p>
          </div>
          `;
          document.querySelector('#output').innerHTML += template;
    }
};

document.querySelector('#search').onclick = search;
