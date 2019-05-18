const search = (ev) => {
    console.log(document.querySelector('input').value);
    let url = 'https://www.apitutor.org/spotify/simple/v1/search?q=beyonce&type=track';
    fetch(url)
        .then(response => response.json())
        .then(displayResults);
};

const displayResults = (data) => {
    for (item of data){
      let template = `<p>${item.name}`;
      document.querySelector('#container').innerHTML += template;
    }
    //console.log(data);
    //document.querySelector('#output').innerHTML = JSON.stringify(data, null, 4);
};

document.querySelector('#search').onclick = search;
