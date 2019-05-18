const search = (ev) => {
    let term = (document.querySelector('input').value);
    let url = `https://www.apitutor.org/yelp/simple/v3/businesses/search?location=${term}`;
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

        <img class= "photo" src = "${item.image_url}"/>
          <p>${item.name}</p>
          <p>${item.price || ""}</p>
          <p>${item.rating}</p>
          </div>
          `;
      document.querySelector('#output').innerHTML += template;


    }
    //<img src = "${item.image_url}"/>
    //console.log(data);
    //document.querySelector('#output').innerHTML = JSON.stringify(data, null, 4);
};

document.querySelector('#search').onclick = search;
