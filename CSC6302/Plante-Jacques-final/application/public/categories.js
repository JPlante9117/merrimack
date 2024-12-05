const displayAllCategories = () => {
    let select = document.getElementById('category_select');
    fetch('http://localhost:3000/api/categories').then(resp => {
        if (resp.ok) {
            return resp.json();
        } else {
            console.error(resp)
        }
    }).then(categories => {
        for (let category of categories) {
            select.innerHTML += `
                <option value="${category.name}">${category.name}</option>
            `
        }
    });
}

const displayCategoryGames = () => {
    let select = document.getElementById('category_select');

    if (select.value !== "") {
        let name = select.value;
        fetch(`http://localhost:3000/api/getCategoryGames?name=${name}`).then(resp => {
            if (resp.ok) {
                return resp.json();
            } else {
                console.error(resp);
            }
        }).then(games => {
            let table = document.getElementById('game_table'),
                tbody = table.getElementsByTagName('tbody')[0],
                newHTML = [];

            for (let game of games) {
                newHTML += `
                    <tr>
                        <td>
                            ${game.isExpansion ? `
                                <div class="expansion-badge" aria-label="Expansion">exp</div>
                            ` : ''}
                            ${game.title}
                        </td>
                        <td class="text-left" colspan="2">
                            ${game.description}
                        </td>
                        <td>
                            ${game.publisher.name}
                        </td>
                        <td>
                            ${game.timeToPlay} minutes
                        </td>
                        <td>
                            ${game.players} Players
                        </td>
                        <td>
                            ${game.minAge}+
                        </td>
                        <td>
                            ${game.complexity}
                        </td>
                        <td>
                            ${game.categories}
                        </td>
                    </tr>
                `;
            }

            if (!newHTML.length) {
                newHTML = `
                    <tr>
                        <td colspan="8">No Games in Category</td>
                    </tr>
                `;
            }

            tbody.innerHTML = newHTML;
        })
    }
}

document.addEventListener('DOMContentLoaded', (e) => {
    displayAllCategories();
});