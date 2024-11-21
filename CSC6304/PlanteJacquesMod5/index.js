const BASE_API = 'http://swapi.dev/api',
    LOADING_HTML = `Retrieving Data . . .`,
    MAIN_MENU = `
        <h1>Jedi Archives</h1>
        <button class="menu_button" onclick="getPeople()"><span>People</span></button>
        <button class="menu_button" onclick="getSpecies()"><span>Species</span></button>
        <button class="menu_button" onclick="getPlanets()"><span>Planets</span></button>
        <button class="menu_button" onclick="getStarships()"><span>Starships</span></button>
    `;

const toggleMenuButton = (show = false) => {
    let menu_button = document.getElementById('return_to_menu');
    
    if (menu_button && !show) {
        menu_button.classList.remove('show');
    } else if (menu_button && show) {
        menu_button.classList.add('show');
    }
}

const goToMainMenu = () => {
    toggleMenuButton(false);
    replaceMainContent(MAIN_MENU, 'buttons');
}

const replaceMainContent = (html, type) => {
    let maincontent = document.getElementById('maincontent')
        isButtons = type === 'buttons',
        isLoading = type === 'loading',
        isContent = type === 'content';

    if (maincontent && isButtons) {
        maincontent.innerHTML = `<div class="menu_button_container">${html}</div>`;
    } else if (maincontent && isContent) {
        maincontent.innerHTML = `<div class="content_container">${html}</div>`;
    } else if (maincontent && isLoading) {
        maincontent.innerHTML = `
            <div class="loading">
                <div class="inner-anim abs-center"></div>
                <div class="typing-container abs-center">
                    <div class="typed-out">
                        ${html}
                    </div>
                </div>
            </div>
        `
    }
}

const getPeople = () => {
    toggleMenuButton(true);
    replaceMainContent(LOADING_HTML, 'loading');
    fetch(`${BASE_API}/people/`).then(async resp => {
        if (resp.ok) {
            return await resp.json();
        } else {
            goToMainMenu();
        }
    }).then(json => {
        let jsonPeople = json.results || [],
            html = '';

            for (let person of jsonPeople) {
                html += `<div class="menu_button" onclick="getPersonByURL('${person.url}')">${person.name}</div>`
            }

            replaceMainContent(html, 'buttons');
    });
}

const getPersonByURL = (url = '') => {
    toggleMenuButton(true);
    replaceMainContent(LOADING_HTML, 'loading');
    fetch(url).then(async resp => {
        if (resp.ok) {
            return await resp.json();
        } else {
            goToMainMenu()
        }
    }).then(json => {
        html = `
            <h1>${json.name}</h1>
            <table>
                <tr>
                    <td class="category">Gender</td>
                    <td>
                        <div class="typing-container">
                            <div class="typed-out">${json.gender}</div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td class="category">Born</td>
                    <td>
                        <div class="typing-container">
                            <div class="typed-out">${json.birth_year}</div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td class="category">Eye Color</td>
                    <td>
                        <div class="typing-container">
                            <div class="typed-out">${json.eye_color}</div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td class="category">Hair Color</td>
                    <td>
                        <div class="typing-container">
                            <div class="typed-out">${json.hair_color}</div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td class="category">Height</td>
                    <td>
                        <div class="typing-container">
                            <div class="typed-out">${json.height}cm</div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td class="category">Weight</td>
                    <td>
                        <div class="typing-container">
                            <div class="typed-out">${json.mass}kg</div>
                        </div>
                    </td>
                </tr>
            </table>
        `;

        replaceMainContent(html, 'content');
    });
}

const getPlanets = () => {
    toggleMenuButton(true);
    replaceMainContent(LOADING_HTML, 'loading');
    fetch(`${BASE_API}/planets`).then(async resp => {
        if (resp.ok) {
            return await resp.json();
        } else {
            goToMainMenu();
        }
    }).then(json => {
        let jsonPlanets = json.results || [],
            html = '';

            for (let planet of jsonPlanets) {
                html += `<div class="menu_button" onclick="getPlanetByURL('${planet.url}')">${planet.name}</div>`
            }

            replaceMainContent(html, 'buttons');
    })
}

const getPlanetByURL = (url = '') => {
    toggleMenuButton(true);
    replaceMainContent(LOADING_HTML, 'loading');
    fetch(url).then(async resp => {
        if (resp.ok) {
            return await resp.json();
        } else {
            goToMainMenu()
        }
    }).then(json => {
        html = `
            <h1>${json.name}</h1>
            <table>
                <tr>
                    <td class="category">Climate</td>
                    <td>
                        <div class="typing-container">
                            <div class="typed-out">${json.climate}</div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td class="category">Terrain</td>
                    <td>
                        <div class="typing-container">
                            <div class="typed-out">${json.terrain}</div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td class="category">Population</td>
                    <td>
                        <div class="typing-container">
                            <div class="typed-out">${json.population}</div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td class="category">Diameter</td>
                    <td>
                        <div class="typing-container">
                            <div class="typed-out">${json.diameter}km</div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td class="category">Gravity</td>
                    <td>
                        <div class="typing-container">
                            <div class="typed-out">${json.gravity}</div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td class="category">Orbital Period</td>
                    <td>
                        <div class="typing-container">
                            <div class="typed-out">${json.orbital_period} days</div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td class="category">Rotation Period</td>
                    <td>
                        <div class="typing-container">
                            <div class="typed-out">${json.rotation_period} hours</div>
                        </div>
                    </td>
                </tr>
            </table>
        `;

        replaceMainContent(html, 'content');
    });
}

const getSpecies = () => {
    toggleMenuButton(true);
    replaceMainContent(LOADING_HTML, 'loading');
    fetch(`${BASE_API}/species`).then(async resp => {
        if (resp.ok) {
            return await resp.json();
        } else {
            goToMainMenu();
        }
    }).then(json => {
        let jsonSpecies = json.results || [],
            html = '';

            for (let species of jsonSpecies) {
                html += `<div class="menu_button" onclick="getSpeciesByURL('${species.url}')">${species.name}</div>`
            }

            replaceMainContent(html, 'buttons');
    })
}

const getSpeciesByURL = (url = '') => {
    toggleMenuButton(true);
    replaceMainContent(LOADING_HTML, 'loading');
    fetch(url).then(async resp => {
        if (resp.ok) {
            return await resp.json();
        } else {
            goToMainMenu()
        }
    }).then(json => {
        html = `
            <h1>${json.name}</h1>
            <table>
                <tr>
                    <td class="category">Classification</td>
                    <td>
                        <div class="typing-container">
                            <div class="typed-out">${json.classification}</div>
                        </div>
                    </td>
                </tr>
                <tr>
                <tr>
                    <td class="category">Designation</td>
                    <td>
                        <div class="typing-container">
                            <div class="typed-out">${json.designation}</div>
                        </div>
                    </td>
                </tr>
                    <td class="category">Avg Height</td>
                    <td>
                        <div class="typing-container">
                            <div class="typed-out">${json.average_height}cm</div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td class="category">Avg Lifespan</td>
                    <td>
                        <div class="typing-container">
                            <div class="typed-out">${json.average_lifespan} years</div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td class="category">Language</td>
                    <td>
                        <div class="typing-container">
                            <div class="typed-out">${json.language}</div>
                        </div>
                    </td>
                </tr>
            </table>
        `;

        replaceMainContent(html, 'content');
    });
}

const getStarships = () => {
    toggleMenuButton(true);
    replaceMainContent(LOADING_HTML, 'loading');
    fetch(`${BASE_API}/starships`).then(async resp => {
        if (resp.ok) {
            return await resp.json();
        } else {
            goToMainMenu();
        }
    }).then(json => {
        let jsonShips = json.results || [],
            html = '';

            for (let ship of jsonShips) {
                html += `<div class="menu_button" onclick="getStarshipsByURL('${ship.url}')">${ship.name}</div>`
            }

            replaceMainContent(html, 'buttons');
    })
}

const getStarshipsByURL = (url = '') => {
    toggleMenuButton(true);
    replaceMainContent(LOADING_HTML, 'loading');
    fetch(url).then(async resp => {
        if (resp.ok) {
            return await resp.json();
        } else {
            goToMainMenu()
        }
    }).then(json => {
        html = `
            <h1>${json.model}</h1>
            <table>
                <tr>
                    <td class="category">Class</td>
                    <td>
                        <div class="typing-container">
                            <div class="typed-out">${json.starship_class}</div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td class="category">Manufacturer</td>
                    <td>
                        <div class="typing-container">
                            <div class="typed-out">${json.manufacturer}</div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td class="category">Cost</td>
                    <td>
                        <div class="typing-container">
                            <div class="typed-out">${json.cost_in_credits} credits</div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td class="category">Length</td>
                    <td>
                        <div class="typing-container">
                            <div class="typed-out">${json.length}m</div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td class="category">Hyperdrive Rating</td>
                    <td>
                        <div class="typing-container">
                            <div class="typed-out">${json.hyperdrive_rating}</div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td class="category">Max Atmospheric Speed</td>
                    <td>
                        <div class="typing-container">
                            <div class="typed-out">${json.max_atmosphering_speed}km/h</div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td class="category">Crew Size</td>
                    <td>
                        <div class="typing-container">
                            <div class="typed-out">${json.crew}</div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td class="category">Passengers</td>
                    <td>
                        <div class="typing-container">
                            <div class="typed-out">${json.passengers}</div>
                        </div>
                    </td>
                </tr>
            </table>
        `;

        replaceMainContent(html, 'content');
    });
}

// INITIAL MAIN

setTimeout(() => {
    goToMainMenu();
}, 5000);