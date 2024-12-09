import mysql from 'mysql2/promise';
import { getConfig } from '../server/dbConfigs.js';

class CategoryDAL {
    async read(userType, id) {
        let sql = `
        SELECT *
        FROM Categories
        WHERE id = ?`,
        connection, connectionConfig;

        try {
            connectionConfig = getConfig(userType);
            connection = await mysql.createConnection(connectionConfig);

            let [results] = await connection.execute(sql, [id]);
            return results[0];
        } catch (err) {
            console.error("Categories::read Database query error: ", err);
            throw err;
        } finally {
            if (connection) {
                await connection.end();
            }
        }
    }

    async add(userType, name){ 
        let sql = `INSERT INTO Categories (name) VALUES (?)`,
            connection, connectionConfig;

        try {
            connectionConfig = getConfig(userType);
            connection = await mysql.createConnection(connectionConfig);

            let [results] = await connection.execute(sql, [name]);
            return results;
        } catch (err) {
            console.error("Categories::add Database query error: ", err);
            throw err;
        } finally {
            if (connection) {
                await connection.end();
            }
        }
    }

    async getGames(userType, id) {
        let sql = `CALL GetCategoryGames(?)`,
            connection, connectionConfig;

        try {
            connectionConfig = getConfig(userType);
            connection = await mysql.createConnection(connectionConfig);

            let [results] = await connection.execute(sql, [id]);
            console.log("CATEGORIESDAL::", results[0])
            return results[0];
        } catch (err) {
            console.error("Categories::getGames Database query error: ", err);
            throw err;
        } finally {
            if (connection) {
                await connection.end();
            }
        }
    }

    async getAll(userType) {
        let sql = "SELECT * FROM Categories",
            connection, connectionConfig;

        try {
            connectionConfig = getConfig(userType);
            connection = await mysql.createConnection(connectionConfig);

            let [results] = await connection.execute(sql);
            return results;
        } catch (err) {
            console.error("Categories::getAll Database query error: ", err);
            throw err;
        } finally {
            if (connection) {
                await connection.end();
            }
        }
    }
}

export default new CategoryDAL();
