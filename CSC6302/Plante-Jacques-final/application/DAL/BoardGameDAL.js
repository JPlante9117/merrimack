import mysql from 'mysql2/promise';
import { getConfig } from '../server/dbConfigs.js';

class BoardGamesDAL {
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

    async getAllDetailed(userType) {
        let sql = `CALL GetBoardGamesWithDetails(NULL)`,
        connection, connectionConfig;
        try {
            connectionConfig = getConfig(userType)
            connection = await mysql.createConnection(connectionConfig);

            let [results] = await connection.execute(sql, []);
            return results[0];
        } catch (err) {
            console.error("BoardGames::getAllDetailed Database query error: ", err);
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
