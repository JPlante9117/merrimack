import { checkArguments, isString } from '../helpers.js';
import BoardGameDAL from '../DAL/BoardGameDAL.js';
import PublisherBLL from './PublisherBLL.js';

export class BoardGame {
    constructor({id, title, description, publisher, expansion, players, timeToPlay, minAge, complexity, categories}) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.publisher = publisher;
        this.isExpansion = expansion;
        this.players = players;
        this.timeToPlay = timeToPlay;
        this.minAge = minAge;
        this.complexity = complexity;
        this.categories = categories;
    }

    // Static method to handle async operations and create an instance
    static async create({
        id, title, description, publisher_name, expansion, min_players, max_players, time_to_play, min_age, complexity, categories, userType
    }) {
        try {
            // Await the asynchronous operations to get publisher
            let publisher     = await PublisherBLL.getPublisherByName(userType, publisher_name),
                // Protect against min_players being larger than max_players
                sortedPlayers = [min_players, max_players].sort((a, b) => a < b ? -1 : 1),
                players       = `${sortedPlayers[0]}-${sortedPlayers[1]}`;

            if (min_players === max_players) {
                players = `${min_players}`;
            }

            // Return a new instance of Class with the awaited data
            return new BoardGame({
                id,
                title,
                description,
                publisher,
                expansion,
                players,
                timeToPlay: time_to_play,
                minAge: min_age,
                complexity,
                categories
            });
        } catch (err) {
            throw new Error("Error creating BoardGame instance: " + err.message);
        }
    }
}

class BoardGameBLL {
    async getAllGames(userType) {
        try {
            let bgResp = await BoardGameDAL.getAllDetailed(userType),
                bgList = [];

            for (let bg of bgResp) {
                let currentBG = await BoardGame.create(Object.assign(bg, { userType }));
                bgList.push(currentBG);
            }

            return bgList;
        } catch (err) {
            throw err;
        }
    }

    async getBoardGame(userType, id) {
        try {
            if (!id) {
                return new Error("ID required for search");
            }
    
            let bgResp = await BoardGameDAL.readDetailed(userType, id),
                bg = await BoardGame.create(Object.assign(bgResp, { userType }));
    
            return bg;
        } catch (err) {
            throw err;
        }
    }

    async createBoardGame(userType, title, description, publisherName, expansion, minPlayers, maxPlayers, timeToPlay, minAge, complexity, categoryNames) {
        try {
            let allArgumentsValid = checkArguments({
                title,
                description,
                publisherName,
                expansion,
                minPlayers,
                maxPlayers,
                timeToPlay,
                minAge,
                complexity,
                categoryNames
            });
    
            if (isString(allArgumentsValid)) {
                return new Error(`${allArgumentsValid} is required.`);
            }
    
            const bgResp = await BoardGameDAL.add(userType, title, description, publisherName, expansion, minPlayers, maxPlayers, timeToPlay, minAge, complexity, categoryNames);
            const game = await BoardGame.create({
                    id: bgResp,
                    title,
                    description,
                    publisher_name: publisherName,
                    expansion,
                    min_players: minPlayers,
                    max_players: maxPlayers,
                    time_to_play: timeToPlay,
                    complexity,
                    categories: categoryNames,
                    userType
                });

            return game;
        } catch (err) {
            throw err;
        }
    }
}

export default new BoardGameBLL();
