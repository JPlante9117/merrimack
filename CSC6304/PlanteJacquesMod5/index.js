const BASE_API = 'http://swapi.dev/api';

const getPeople = (page = 1) => {
    fetch(`${BASE_API}/people/?page=${page}`).then(async resp => {
        console.log(resp)
        if (resp.ok) {
            let json = await resp.json(),
                next = json.next || null,
                prev = json.previous || null,
                jsonPeople = json.results || [],
                people = [];

            for (let person of jsonPeople) {
                people.push({
                    name : person.name,
                    url  : person.url
                });
            }

            console.log(people)
            return people;
        }
    })
}

const getPersonByURL = (url = '') => {
    fetch(url).then(async resp => {
        if (resp.ok) {
            let json = await resp.json();

            return json;
        }
    })
}

const getPlanets = ({ page = 1 }) => {
    fetch(`${BASE_API}/planets?page=${page}`).then(resp => {
        if (resp.ok) {
            let json = resp.json(),
                next = json.next || null,
                prev = json.previous || null,
                jsonPeople = json.results || [],
                people = [];

            for (let person in jsonPeople) {
                people.push({
                    name : person.name,
                    url  : person.url
                });
            }

            return people;
        }
    })
}

// INITIAL MAIN

setTimeout(() => {
    let maincontent = document.getElementById('maincontent');

    if (maincontent) {
        maincontent.innerHTML = `
        <button class="menu_button" onclick="getPeople()">People</button>
        <button class="menu_button" onclick="getSpecies()">Species</button>
        <button class="menu_button" onclick="getPlanets()">Planets</button>
        <button class="menu_button" onclick="getStarships()">Starships</button>
        <button class="menu_button" onclick="getVehicles()">Vehicles</button>
        `
    }
}, 3000);