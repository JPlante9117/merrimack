const COMPLEXITIES = ['Light', 'Medium Light', 'Medium', 'Medium Heavy', 'Heavy'];

const displayAllGames = () => {
    let table = document.getElementById('game_table'),
        tbody = table.getElementsByTagName('tbody')[0];
    fetch('http://localhost:3000/api/boardgames').then(resp => {
        if (resp.ok) {
            return resp.json();
        } else {
            console.error(resp)
        }
    }).then(boardgames => {
        for (let boardgame of boardgames) {
            let publisher = boardgame.publisher || {};

            tbody.innerHTML += `
                <tr>
                    <td>
                        ${boardgame.isExpansion ? `
                            <div class="expansion-badge" aria-label="Expansion">exp</div>
                        ` : ''}
                        ${boardgame.title}
                    </td>
                    <td class="text-left" colspan="2">
                        ${boardgame.description}
                    </td>
                    <td>
                        ${publisher.name}
                    </td>
                    <td>
                        ${boardgame.timeToPlay} minutes
                    </td>
                    <td>
                        ${boardgame.players} Players
                    </td>
                    <td>
                        ${boardgame.minAge}+
                    </td>
                    <td>
                        ${boardgame.complexity}
                    </td>
                    <td>
                        ${boardgame.categories}
                    </td>
                </tr>
            `;
        }
    });
}

const insertGameIntoTable = (title, description, publisherName, expansion, timeToPlay, players, minAge, complexity, categories) => {    
    let table = document.getElementById('game_table');
    table.innerHTML += `
        <tr>
            <td>
                ${expansion ? `
                    <div class="expansion-badge" aria-label="Expansion">exp</div>
                ` : ''}
                ${title}
            </td>
            <td class="text-left" colspan="2">
                ${description}
            </td>
            <td>
                ${publisherName}
            </td>
            <td>
                ${timeToPlay}
            </td>
            <td>
                ${players} Players
            </td>
            <td>
                ${minAge}+
            </td>
            <td>
                ${complexity}
            </td>
            <td>
                ${categories}
            </td>
        </tr>
    `;
}

const validateNewGame = ({title, description, publisherName, minPlayers, maxPlayers, timeToPlay, minAge, complexity, categories = []}) => {
    let hasErrors = false,
        errorList = {
        title         : [],
        description   : [],
        publisherName : [],
        minPlayers    : [],
        maxPlayers    : [],
        timeToPlay    : [],
        minAge        : [],
        complexity    : [],
        categories    : []
    };

    // Title
    if (!title) {
        hasErrors = true;
        errorList.title.push('Board Game must have a title');
    }

    if (title.length > 100) {
        hasErrors = true;
        errorList.title.push('Board Game title exceeds max length of 100 characters');
    }

    // Description
    if (!description) {
        hasErrors = true;
        errorList.description.push('Board Game must have a description');
    }

    if (description.length > 500) {
        hasErrors = true;
        errorList.description.push('Board Game description exceeds max length of 500 characters');
    }

    if (!publisherName) {
        hasErrors = true;
        errorList.publisherName.push('Board Game must have a publisher');
    }

    if (!minPlayers){
        hasErrors = true;
        errorList.minPlayers.push('Board Game must have minimum players set. Can be same as max if fixed amount');
    }
    
    if (!maxPlayers) {
        hasErrors = true;
        errorList.maxPlayers.push('Board Game must have maximum players set. Can be same as minimum if fixed amount');
    }

    if (minPlayers > maxPlayers) {
        hasErrors = true;
        errorList.minPlayers.push('Minimum players must be less than or equal to maximum players')
        errorList.maxPlayers.push('Maximum players must be greater than or equal to minimum players')
    }

    if (!timeToPlay) {
        hasErrors = true;
        errorList.timeToPlay.push('Board Game must have a time to play');
    }

    if (!minAge) {
        hasErrors = true;
        errorList.minAge.push('Board Game must have a minimum age requirement');
    }

    if (!complexity) {
        hasErrors = true;
        errorList.timeToPlay.push('Board Game must have some level of complexity');
    }

    if (!COMPLEXITIES.includes(complexity)) {
        hasError = true;
        errorList.complexity.push('Invalid complexity provided');
    }

    if (categories.length === 0) {
        hasErrors = true;
        errorList.categories.push('Board Game must belong to at least 1 category');
    }

    return {hasErrors, errorList};
}

const getBadRespErrors = (err) => {
    let errorList = {
        primary : []
    }

    if (err.status == 403) {
        errorList.primary.push('Permission Denied: You appear to not have access to this functionality');
    } else if (err.status == 409) {
        errorList.primary.push('Duplicate Game: This game either is already in the database.');
    }

    return errorList;
}

const displayFormErrors = (errorList) => {
    Object.keys(errorList).forEach(key => {
        let thisErrorList = errorList[key],
            hasErrors     = thisErrorList.length > 0,
            input         = document.querySelector(`input[name="${key}"]`),
            errorField    = document.getElementById(`errors_${key}`);

        if (hasErrors) {
            let errorMsg = '';
            if (input) {
                input.classList.add('error_input');
            }
            thisErrorList.forEach(err => {
                errorMsg += `<span>${err}</span>`;
            });
            errorField.innerHTML = errorMsg;
        } else {
            if (input) {
                input.classList.remove('error_input');
            }
            errorField.innerHTML = '';
        }
    })
}

const parseCategoryTags = (containerNode) => {
    const tags = containerNode.querySelectorAll('.tag');
    const catArr = [];

    for (let tag of tags) {
        const label = tag.querySelector('span');
        const cleanedLabel = label.innerText.replace(',', ' ');
        catArr.push(cleanedLabel);
    }

    return catArr.join(',');
}

const addGame = (event) => {
    event.preventDefault();
    const form        = event.target,
        title         = form.querySelector('input[name="title"]').value,
        description   = form.querySelector('input[name="description"]').value,
        publisherName = form.querySelector('select[name="publisherName"]').value,
        expansion     = form.querySelector('input[name="expansion"]').checked,
        minPlayers    = form.querySelector('input[name="minPlayers"]').value,
        maxPlayers    = form.querySelector('input[name="maxPlayers"]').value,
        timeToPlay    = form.querySelector('input[name="timeToPlay"]').value,
        minAge        = form.querySelector('input[name="minAge"]').value,
        complexity    = form.querySelector('select[name="complexity"]').value,
        categories    = form.querySelector('#categories-tag-container');

    categoriesSubmitValue = parseCategoryTags(categories);

    let {hasErrors, errorList} = validateNewGame({
        title,
        description,
        publisherName,
        minPlayers,
        maxPlayers,
        timeToPlay,
        minAge,
        complexity,
        categories: categoriesSubmitValue
    });

    if (hasErrors) {
        displayFormErrors(errorList);
        return;
    }

    fetch('/api/boardgames', {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify({
            title,
            description,
            publisherName,
            expansion,
            minPlayers,
            maxPlayers,
            timeToPlay,
            minAge,
            complexity,
            categories: categoriesSubmitValue
        })
    }).then(async resp => {
        if (!resp.ok) {
            errorList = getBadRespErrors(resp);
            displayFormErrors(errorList)
            throw new Error(resp.status, resp.statusText)
        }
        closeBoardGameModal()
        
        console.log("Board Game added successfully!");

        let sortedPlayers = [minPlayers, maxPlayers].sort(),
            players       = `${sortedPlayers[0]}-${sortedPlayers[1]}`;

        if (minPlayers === maxPlayers) {
            players = `${minPlayers}`;
        }

        insertGameIntoTable(title, description, publisherName, expansion, timeToPlay, players, minAge, complexity, categoriesSubmitValue);
    }).catch(error => {
        console.error("Error Adding Game: ", error);
    });
}

const closeBoardGameModal = () => {
    const modal = document.getElementById('add-game-modal'),
        modalContainer = modal.parentNode;

    document.body.removeChild(modalContainer);
}

const closeSimpleModal = () => {
    const modal = document.getElementById('add-simple-modal'),
        modalContainer = modal.parentNode;

    document.body.removeChild(modalContainer);
}

const removeTag = (e) => {
    const tag = e.target.parentNode;
    const container = tag.parentNode;

    if (tag && container) {
        container.removeChild(tag); 
    }
}

const appendTag = (selection, fixedValue = "") => {
    const tagInput = document.getElementById(`${selection}-tag-input`);
    const tagContainer = document.getElementById(`${selection}-tag-container`);
    const allExistingTags = tagContainer.querySelectorAll('.tag');
    const inputVal = fixedValue || tagInput && tagInput.value || '';
    let tagExists = false;

    if (inputVal === `new_${selection}`) {
        openAddSimpleModal(selection);
    } else {
        for (let existingTag of allExistingTags) {
            let label = existingTag.querySelector('span');
            if (label.textContent.toLowerCase() === inputVal.toLowerCase()) {
                tagExists = true;
                break;
            }
        }
    
        if (!tagExists && inputVal) {
            const tagElement = document.createElement('div');
            tagElement.classList.add('tag');
            tagElement.innerHTML = `
                <span>${inputVal}</span>
                <span role="button" class="close" onclick="removeTag(event)">x</span>
            `;
            tagContainer.appendChild(tagElement);
        }
    }

    tagInput.value = '';
}

const onPublisherChange = () => {
    const input = document.querySelector(`select[name="publisherName"`);
    const inputVal = input && input.value || '';

    if (inputVal === 'new_publisherName') {
        openAddSimpleModal('publisherName');
    }
}

const addSelection = (event, selection) => {
    event.preventDefault();
    const form = event.target;
    const name = form.querySelector('input[name="name"]').value;

    if (selection === 'categories') {
        appendTag(selection, name);
    } else {
        const select = document.querySelector(`select[name="${selection}"]`);
        const options = select.getElementsByTagName('option');

        for (let opt of options) {
            opt.selected = false;
        }

        select.innerHTML += `
            <option value="${name}" selected>${name}</option>
        `;
    }

    closeSimpleModal();
}

const openAddSimpleModal = (selection) => {
    const modal = document.createElement('div');
    const title = selection === 'publisherName' ? 'Publisher' : 'Category';
    modal.classList.add('modal_container');

    let existingModal = document.getElementById('add-simple-modal');

    if (existingModal) {
        // Do not add another modal.
        return;
    }

    modal.innerHTML = `
        <div id="add-simple-modal" class="modal" role="modal">
            <h1>Add New ${title}</h1>
            <form id="add-simple-form">
                <label for="name">Name:</label>
                <input type="text" name="name" />
                <div class="modal_button_container">
                    <button type="submit">Add</button>
                    <button onclick="closeSimpleModal()">Cancel</button>
                </div>
            </form>
        </div>
    `;

    document.body.appendChild(modal);
    let form = modal.querySelector('#add-simple-form');
    form.addEventListener('submit', event => addSelection(event, selection))
}

const openGameModal = () => {
    let modal = document.createElement('div');
    modal.classList.add('modal_container');

    let existingModal = document.getElementById('add-game-modal');

    if (existingModal) {
        // Do not add another modal.
        return;
    }

    modal.innerHTML = `
        <div id="add-game-modal" class="modal" role="modal">
            <h1>Add a Board Game</h1>
            <form id="add-game-form">
                <div id="errors_primary" class="input_errors"></div>
                <label for="title">Title:</label>
                <input type="text" name="title" placeholder="Ex: Settlers of Catan" />
                <div id="errors_title" class="input_errors"></div>
                <label for="description">Description:</label>
                <input type="textarea" name="description" placeholder="Ex: An economic, tile-laying game where players . . ." />
                <div id="errors_description" class="input_errors"></div>
                <label for="publisherName">Publisher:</label>
                <select name="publisherName" onchange="onPublisherChange()">
                    <option value="">Select a Publisher</option>
                    <option value="new_publisherName">New Publisher</option>
                    <!-- will be populated by js -->
                </select>
                <div id="errors_publisherName" class="input_errors"></div>
                <label for="expansion">Expansion?</label>
                <input type="checkbox" name="expansion" />
                <label for="minPlayers">Minimum Players:</label>
                <input type="number" name="minPlayers" min="1" />
                <div id="errors_minPlayers" class="input_errors"></div>
                <label for="maxPlayers">Maximum Players:</label>
                <input type="number" name="maxPlayers" min="1" />
                <div id="errors_maxPlayers" class="input_errors"></div>
                <label for="timeToPlay">Time To Play (minutes):</label>
                <input type="number" name="timeToPlay" min="1" />
                <div id="errors_timeToPlay" class="input_errors"></div>
                <label for="minAge">Minimum Age:</label>
                <input type="number" name="minAge" min="1" />
                <div id="errors_minAge" class="input_errors"></div>
                <label for="complexity">Weight:</label>
                <select id="complexity" name="complexity">
                    <option value="">How 'Heavy' is this game?</option>
                    <option value="Light">Light</option>
                    <option value="Medium Light">Medium Light</option>
                    <option value="Medium">Medium</option>
                    <option value="Medium Heavy">Medium Heavy</option>
                    <option value="Heavy">Heavy</option>
                </select>
                <div id="errors_complexity" class="input_errors"></div>
                <label for="categories">Categories:</label>
                <div id="categories-tag-container"></div>
                <select id="categories-tag-input" onchange="appendTag('categories')" name="categories">
                    <option value="">Select Categories</option>
                    <option value="new_categories">Add New Category</option>
                    <!-- will be populated by js -->
                </select>
                <div id="categories-suggestions"></div>
                <div id="errors_categories" class="input_errors"></div>
                <div class="modal_button_container">
                    <button type="submit">Add Game</button>
                    <button onclick="closeBoardGameModal()">Cancel</button>
                </div>
            </form>
        </div>
    `;

    document.body.appendChild(modal);
    let form = modal.querySelector('#add-game-form');
    form.addEventListener('submit', addGame);

    // Populate Selects
    fetch('http://localhost:3000/api/publishers').then(resp => {
        if (resp.ok) {
            return resp.json();
        } else {
            console.error(resp)
        }
    }).then(publishers => {
        let select = document.querySelector('select[name="publisherName"]');
        for (let publisher of publishers) {
            select.innerHTML += `
                <option value="${publisher.name}">${publisher.name}</option>
            `
        }
    });

    fetch('http://localhost:3000/api/categories').then(resp => {
        if (resp.ok) {
            return resp.json();
        } else {
            console.error(resp)
        }
    }).then(categories => {
        let select = document.querySelector('select[name="categories"]');
        for (let category of categories) {
            select.innerHTML += `
                <option value="${category.name}">${category.name}</option>
            `
        }
    });
}

document.addEventListener('DOMContentLoaded', (e) => {
    displayAllGames();
});