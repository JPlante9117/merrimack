import mysql from 'mysql2/promise';
import { getConfig } from '../server/dbConfigs.js';

class BoardGamesDAL {
    async readSimple(userType, bg_id) {
        let sql = `
            SELECT bg.id, bg.title
            FROM BoardGames bg
            WHERE id = ?
        `,
        connection, connectionConfig;
        try {
            connectionConfig = getConfig(userType)
            connection = await mysql.createConnection(connectionConfig);

            let [results] = await connection.execute(sql, [bg_id]);
            return results[0];
        } catch (err) {
            console.error("BoardGames::read Database query error: ", err);
            throw err;
        } finally {
            if (connection) {
                await connection.end();
            }
        }
    }

    async readDetailed(userType, bg_id) {
        let sql = `CALL GetBoardGamesWithDetails('id = ?')`,
        connection, connectionConfig;
        try {
            connectionConfig = getConfig(userType)
            connection = await mysql.createConnection(connectionConfig);

            let [results] = await connection.execute(sql, [bg_id]);
            return results[0];
        } catch (err) {
            console.error("BoardGames::readDetailed Database query error: ", err);
            throw err;
        } finally {
            if (connection) {
                await connection.end();
            }
        }
    }

    async getAllSimple(userType) {
        let sql = `
            SELECT bg.id, bg.title
            FROM BoardGames bg
        `,
        connection, connectionConfig;
        try {
            connectionConfig = getConfig(userType)
            connection = await mysql.createConnection(connectionConfig);

            let [results] = await connection.execute(sql, []);
            return results;
        } catch (err) {
            console.error("BoardGames::getAllSimple Database query error: ", err);
            throw err;
        } finally {
            if (connection) {
                await connection.end();
            }
        }
    }

    async add(userType, title, description, publisherName, expansion, minPlayers, maxPlayers, timeToPlay, minAge, complexity, categoryNames){ 
        let sql = `CALL AddBoardGame(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        connection, connectionConfig;
        try {
            connectionConfig = getConfig(userType)
            connection = await mysql.createConnection(connectionConfig);

            let [results] = await connection.execute(
                sql,
                [title, description, publisherName, expansion, minPlayers, maxPlayers, timeToPlay, minAge, complexity, categoryNames]
            );
            return results;
        } catch (err) {
            console.error("BoardGames::add Database query error: ", err);
            throw err;
        } finally {
            if (connection) {
                await connection.end();
            }
        }
    }
}

export default new BoardGamesDAL();
