const search = (ev) => {
    console.log(document.querySelector('input').value);
    let url = 'https://www.apitutor.org/youtube/simple/?q=skateboarding+dog+&type=video';
    fetch(url)
        .then(response => response.json())
        .then(displayResults);
};

const displayResults = (data) => {
    console.log(data);
    document.querySelector('#output').innerHTML = JSON.stringify(data, null, 4);
};
    
document.querySelector('#search').onclick = search;