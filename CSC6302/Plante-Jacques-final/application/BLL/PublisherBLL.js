import PublisherDAL from '../DAL/PublisherDAL.js';
import { checkArguments, isString } from '../helpers.js';
import { BoardGame } from './BoardGameBLL.js';

export class Publisher {
    constructor({id, name}) {
        this.id = id;
        this.name = name;
    }
}

class PublisherBLL {
    async getPublisher(userType, id) {
        try {
            if (!id) {
                throw new Error("ID required for search");
            }
    
            let publisherResp = await PublisherDAL.read(userType, id),
                publisher = new Publisher(publisherResp);
    
            return publisher;
        } catch (err) {
            throw err;
        }
    }

    async getPublisherByName(userType, name) {
        try {
            if (!name) {
                throw new Error("Name required for search");
            }
    
            let publisherResp = await PublisherDAL.getByName(userType, name),
                publisher = new Publisher(publisherResp);
    
            return publisher;
        } catch (err) {
            throw err;
        }
    }

    // May not be used, as we create publishers with board games
    async createPublisher(userType, name) {
        try {
            let allArgumentsValid = checkArguments({
                name
            });
    
            if (isString(allArgumentsValid)) {
                throw new Error(`${allArgumentsValid} is required.`);
            }
    
            let publisherResp = await PublisherDAL.add(userType, name);
            let publisher = await this.getPublisher(userType, publisherResp);
    
            return publisher;
        } catch (err) {
            throw err;
        }
    }

    async getAllPublishers(userType) {
        try {
            let allPublishersResp = await PublisherDAL.getAll(userType),
                publishers = [];

            allPublishersResp.forEach(p => {
                publishers.push(new Publisher(p));
            });

            return publishers;
        } catch (err) {
            throw err;
        }
    }

    async getGames(userType, name) {
        try {
            let gamesResp = await PublisherDAL.getPublisherGames(userType, name),
                gamesList = [];
            for (let game of gamesResp) {
                let gameObj = await BoardGame.create(Object.assign(game, {userType}));
                gamesList.push(gameObj);
            }

            return gamesList;
        } catch (err) {
            throw err;
        }
    }
}

export default new PublisherBLL();
