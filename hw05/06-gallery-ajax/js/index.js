const serverURL = 'https://raw.githubusercontent.com/eecs130/spring2019/master/course-files/homework/hw05/data/';
const loadCards = (photos) => {
    document.querySelector('.cards').innerHTML = '';

    // load new ones (based on photos list)
    for (photo of photos) {
        const template = `
            <li class="card">
                <div class="image" style="background-image:url('${photo}')"></div>
            </li>`;
        document.querySelector('.cards').innerHTML += template;
    }
    initCarousel();
};

const loadFlowers = () => {
    fetch(serverURL + 'flowers.json')
        .then((response) => {
            return response.json();
        })
        .then(loadCards);
};

const loadCars = () => {
    // your job:
    console.log('fetch data from', serverURL + 'cars.json', 'and display it...');
};

const loadBikes = () => {
    // your job:
    console.log('fetch data from', serverURL + 'bikes.json', 'and display it...');
};

document.querySelector('#flowers-button').onclick = loadFlowers;
document.querySelector('#cars-button').onclick = loadCars;
document.querySelector('#bikes-button').onclick = loadBikes;

// default to the flowers:
loadFlowers();
