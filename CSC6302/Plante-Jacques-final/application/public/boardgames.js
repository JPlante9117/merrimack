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
        console.log(boardgames)
        for (let boardgame of boardgames) {
            tbody.innerHTML += `
                <tr>
                    <td>
                        ${boardgame.title}
                    </td>
                </tr>
            `;
        }
    });
}

const insertGameIntoTable = (title) => {
    let table = document.getElementById('student_table');
    table.innerHTML += `
        <tr>
            <td>
                ${title}
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
        errorList.minPlayers.push('Board Game must have maximum players set. Can be same as minimum if fixed amount');
    }

    if (typeof minPlayers !== 'number') {
        hasErrors = true;
        errorList.minPlayers.push('Minimum players must be a number');
    }

    if (typeof maxPlayers !== 'number') {
        hasErrors = true;
        errorList.maxPlayers.push('Maximum players must be a number');
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

    if (typeof timeToPlay !== 'number') {
        hasErrors = true;
        errorList.timeToPlay.push('Time to play should be a number');
    }

    if (!minAge) {
        hasErrors = true;
        errorList.minAge.push('Board Game must have a minimum age requirement');
    }

    if (typeof minAge !== 'number') {
        hasErrors = true;
        errorList.minAge.push('Minimum age should be a number');
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
        errorList.primary.push('Duplicate Student: This student either is already in the database, or the email address is shared with another student.');
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

const addGame = (event) => {
    event.preventDefault();
    const form        = event.target,
        title         = form.querySelector('input[name="title"]').value,
        description   = form.querySelector('input[name="description"').value,
        publisherName = form.querySelector('input[name="publisherName"').value,
        expansion     = form.querySelector('input[name="expansion"').value,
        minPlayers    = form.querySelector('input[name="minPlayers"').value,
        maxPlayers    = form.querySelector('input[name="maxPlayers"').value,
        timeToPlay    = form.querySelector('input[name="timeToPlay"').value,
        minAge        = form.querySelector('input[name="minAge"').value,
        complexity    = form.querySelector('input[name="complexity"').value,
        categories    = form.querySelector('input[name="categories"').value;

    let {hasErrors, errorList} = validateNewGame({
        title,
        description,
        publisherName,
        minPlayers,
        maxPlayers,
        timeToPlay,
        minAge,
        complexity,
        categories
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
            categories
        })
    }).then(async resp => {
        if (!resp.ok) {
            errorList = getBadRespErrors(resp);
            displayFormErrors(errorList)
            throw new Error(resp.status, resp.statusText)
        }
        closeBoardGameModal()
    
        console.log("Board Game added successfully!");

        insertGameIntoTable(title);
    }).catch(error => {
        console.error("Error Adding Game: ", error);
    });
}

const closeBoardGameModal = () => {
    let modal = document.getElementsByClassName('modal_container')[0];

    document.body.removeChild(modal);
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
            <h1>Add a Student</h1>
            <form id="add-game-form">
                <div id="errors_primary" class="input_errors"></div>
                <label for="title">Title:</label>
                <input type="text" name="title" placeholder="Ex: Settlers of Catan" />
                <div id="errors_title" class="input_errors"></div>
                <label for="description">Description:</label>
                <input type="textarea" name="description" placeholder="Ex: An economic, tile-laying game where players . . ." />
                <div id="errors_description" class="input_errors"></div>
                <label for="publisherName">Publisher:</label>
                <select name="publisherName">
                    <!-- populate with publishers -->
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
                <select name="complexity">
                    <option value="">How 'Heavy' is this game?</option>
                    <option value="Light">Light</option>
                    <option value="Medium Light">Medium Light</option>
                    <option value="Medium">Medium</option>
                    <option value="Medium Heavy">Medium Heavy</option>
                    <option value="Heavy">Heavy</option>
                </select>
                <div id="errors_complexity" class="input_errors"></div>
                <label for="categories">Categories:</label>
                <input type="input" name="categories" placeholder="Categories . . ." />
                <div id="errors_categories" class="input_errors"></div>
                <div class="modal_button_container">
                    <button type="submit">Add Student</button>
                    <button onclick="closeBoardGameModal()">Cancel</button>
                </div>
            </form>
        </div>
    `;

    document.body.appendChild(modal);
    let form = modal.querySelector('#add-student-form');
    form.addEventListener('submit', addStudent)
}

document.addEventListener('DOMContentLoaded', (e) => {
    displayAllGames();
});