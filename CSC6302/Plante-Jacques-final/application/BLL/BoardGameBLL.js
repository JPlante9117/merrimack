import { checkArguments, isString } from '../helpers.js';
import BoardGameDAL from '../DAL/BoardGameDAL.js';

class BoardGame {
    constructor({id, title, desc, publisher, expansion, players, timeToPlay, minAge, complexity, categories}) {
        this.id = id;
        this.title = title;
        this.description = desc;
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
        id, title, desc, publisherId, expansion, minPlayers, maxPlayers, timeToPlay, minAge, complexity, categories, userType
    }) {
        try {
            // Await the asynchronous operations to get student and class details
            let publisher     = await PublisherBLL.getPublisher(userType, publisherId),
                // Protect against minPlayers being larger than maxPlayers
                sortedPlayers = [minPlayers, maxPlayers].sort(),
                players       = `${sortedPlayers[0]}-${sortedPlayers[1]}`;

            if (minPlayers === maxPlayers) {
                players = `${minPlayers}`;
            }

            // Return a new instance of Class with the awaited data
            return new BoardGame({
                id,
                title,
                desc,
                publisher,
                expansion,
                players,
                timeToPlay,
                minAge,
                complexity,
                categories
            });
        } catch (err) {
            throw new Error("Error creating BoardGame instance: " + err.message);
        }
    }
}

class BoardGameBLL {
    async getAllGamesSimple(userType) {
        try {
            let bgResp = await BoardGameDAL.getAllSimple(userType),
                bgList = [];

            bgResp.forEach(async bg => {
                let currentBG = await BoardGame.create(Object.assign(bg, { userType }));
                bgList.push(currentBG);
            });

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
    
            let classResp = await ClassesDAL.add(userType, subject, teacherId, roomNumber),
                classId = classResp.insertId,
                thisClass = await this.getClass(classId)

            return thisClass;
        } catch (err) {
            throw err;
        }
    }
}

export default new BoardGameBLL();
