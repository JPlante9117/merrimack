import mysql from 'mysql2/promise';
import { getConfig } from '../server/dbConfigs.js';

class PublisherDAL {
    async read(userType, id) {
        const sql = "SELECT * FROM Publishers WHERE id = ?";
        let connection, connectionConfig;
        try {
            connectionConfig = getConfig(userType)
            connection = await mysql.createConnection(connectionConfig);
    
            const [results] = await connection.execute(sql, [id]);
            return results;
        } catch (err) {
            console.error("Publisher::read Database query error: ", err);
            throw err;
        } finally {
            if (connection) {
                await connection.end();
            }
        }
    }

    async getByName(userType, name) {
        let sql = "SELECT * FROM Publishers WHERE name = ?",
        connection, connectionConfig;
        try {
            connectionConfig = getConfig(userType)
            connection = await mysql.createConnection(connectionConfig);
    
            const [results] = await connection.execute(sql, [name]);
            return results[0];
        } catch (err) {
            console.error("Publisher::read Database query error: ", err);
            throw err;
        } finally {
            if (connection) {
                await connection.end();
            }
        }
    }

    async getAll(userType) {
        let sql = "SELECT * FROM Publisher",
            connection, connectionConfig;

        try {
            connectionConfig = getConfig(userType)
            connection = await mysql.createConnection(connectionConfig);

            const [results] = await connection.execute(sql)
            return results;
        } catch (err) {
            console.error("Publisher::getAll Database query error: ", err);
            throw err;
        } finally {
            if (connection) {
                await connection.end();
            }
        }
    }

    async add(userType, name){ 
        let sql = "INSERT INTO Publishers (name) VALUES (?)",
            connection, connectionConfig;

        try {
            connectionConfig = getConfig(userType);
            connection = await mysql.createConnection(connectionConfig);

            const [results] = await connection.execute(sql, [name]);
            return results[0].id;
        } catch (err) {
            console.error("Publisher::add Database query error: ", err);
            throw err;
        } finally {
            if (connection) {
                await connection.end();
            }
        }
    }

    async getPublisherGames(userType, name) {
        let sql = `CALL GetPublisherGames('publisher_name = ?')`, connection, connectionConfig;

        try {
            connectionConfig = getConfig(userType)
            connection = await mysql.createConnection(connectionConfig);

            let [results] = await connection.execute(sql, [name]);
            return results;
        } catch (err) {
            console.error("Publisher::getPublisherGames Database query error: ", err);
            throw err;
        } finally {
            if (connection) {
                await connection.end();
            }
        }
    }
}

export default new PublisherDAL();
