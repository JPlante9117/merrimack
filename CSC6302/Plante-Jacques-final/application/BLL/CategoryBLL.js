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
                first_name: firstName,
                last_name: lastName
            });
    
            if (isString(allArgumentsValid)) {
                return new Error(`${allArgumentsValid} is required`);
            }
    
            let gamesResp = await CategoryDAL.getGames(userType, name),
                gamesArr = [];
    
            gamesResp.forEach(async payload => {
                payload = Object.assign(payload, { userType });

                let game = await BoardGame.create(payload);
                gamesArr.push(game)
            });
    
            return gamesArr;
        } catch (err) {
            throw err;
        } 
    }

    async getCategories(userType) {
        try {
            let categoriesResp = await CategoryDAL.getCategories(userType),
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
