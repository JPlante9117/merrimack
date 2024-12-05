import CategoryDAL from '../DAL/CategoryDAL.js';
import { BoardGame } from './BoardGameBLL.js';
import { checkArguments, isString } from '../helpers.js';

export class Category {
    constructor({id, name}) {
        this.id = id;
        this.name = name
    }
}
class CategoryBLL {
    async getCategory(userType, id) {
        try {
            if (!id) {
                return new Error("ID required for search");
            }
    
            let categoryResp = await CategoryDAL.read(userType, id),
                category = new Category(categoryResp);
    
            return category;
        } catch (err) {
            throw new Error(`CategoryBLL::getCategory::Error: ${err}`);
        }
    }

    async createCategory(userType, name) {
        try {
            let allArgumentsValid = checkArguments({
                name
            });
    
            if (isString(allArgumentsValid)) {
                return new Error(`${allArgumentsValid} is required.`);
            }
    
            let categoryResp = await CategoryDAL.add(userType, name),
                categoryId = categoryResp.insertId,
                category = await this.getCategory(categoryId);
    
            return category;
        } catch (err) {
            throw new Error(`CategoryBLL::createCategory::Error: ${err}`);
        }
    }

    async getGames(userType, name) {
        try {
            let allArgumentsValid = checkArguments({
                name
            });
    
            if (isString(allArgumentsValid)) {
                return new Error(`${allArgumentsValid} is required`);
            }
    
            let gamesResp = await CategoryDAL.getGames(userType, name),
                gamesArr = [];
    
            for (let game of gamesResp) {
                const payload = Object.assign(game, { userType }),
                    gameObj = await BoardGame.create(payload);

                gamesArr.push(gameObj)
            }
    
            return gamesArr;
        } catch (err) {
            throw err;
        } 
    }

    async getCategories(userType) {
        try {
            let categoriesResp = await CategoryDAL.getAll(userType),
                categories = []

            for (let category of categoriesResp) {
                categories.push(new Category(category));
            }

            return categories;
        } catch (err) {
            throw err;
        }
    }
}

export default new CategoryBLL();
