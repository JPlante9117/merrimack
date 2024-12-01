USE GAMES;

DELIMITER //

CREATE PROCEDURE AddBoardGame(
    IN p_title VARCHAR(50),
    IN p_description VARCHAR(500),
    IN p_publisher_name VARCHAR(50),
    IN p_expansion BOOLEAN,
    IN p_min_players INT,
    IN p_max_players INT,
    IN p_time_to_play INT,
    IN p_min_age INT,
    IN p_complexity ENUM('Light', 'Medium Light', 'Medium', 'Medium Heavy', 'Heavy'),
    IN p_categories VARCHAR(255)
)
BEGIN
    DECLARE v_publisher_id INT;
    DECLARE v_category_ids VARCHAR(255);
    DECLARE v_category_id INT;
    DECLARE v_category_name VARCHAR(50);
    DECLARE v_bg_id INT;

    -- Insert or retrieve publisher ID
    INSERT INTO Publishers (name)
    SELECT p_publisher_name
    WHERE NOT EXISTS (SELECT 1 FROM Publishers WHERE name = p_publisher_name)
    LIMIT 1;
    SET v_publisher_id = LAST_INSERT_ID();

    -- Insert board game
    INSERT INTO BoardGames (
        title,
        description,
        publisher_id,
        expansion,
        min_players,
        max_players,
        time_to_play,
        min_age,
        complexity
    ) VALUES (
        p_title,
        p_description,
        v_publisher_id,
        p_expansion,
        p_min_players,
        p_max_players,
        p_time_to_play,
        p_min_age,
        p_complexity
    );
    SET v_bg_id = LAST_INSERT_ID();

    -- Insert categories
    SET v_category_ids = p_categories;
    WHILE v_category_ids <> '' DO
        SET v_category_name = SUBSTRING_INDEX(v_category_ids, ',', 1);
        SET v_category_ids = SUBSTRING(v_category_ids, LENGTH(v_category_name) + 1);

        INSERT INTO Categories (name)
        SELECT v_category_name
        WHERE NOT EXISTS (SELECT 1 FROM Categories WHERE name = v_category_name)
        LIMIT 1;
        SET v_category_id = LAST_INSERT_ID();

        INSERT INTO BoardGamesCategories
            (bg_id, cat_id)
        VALUES (v_bg_id, v_category_id);
    END WHILE;
END//

CREATE PROCEDURE GetBoardGames()
BEGIN
    SELECT
        bg.id, 
        bg.title, 
        bg.description, 
        bg.expansion, 
        bg.min_players, 
        bg.max_players, 
        bg.time_to_play, 
        bg.min_age, 
        bg.complexity,
        p.name AS publisher_name,
        GROUP_CONCAT(c.name SEPARATOR ', ') AS categories
    FROM BoardGames bg
    JOIN Publishers p ON bg.publisher_id = p.id
    JOIN BoardGamesCategories bgc ON bg.id = bgc.bg_id
    JOIN Categories c ON bgc.cat_id = c.id
    GROUP BY bg.id;
END//

CREATE PROCEDURE GetCategoryGames(category_id INT)
READS SQL DATA
BEGIN
    SET @sql = CONCAT('SELECT
        bg.id, 
        bg.title, 
        bg.description, 
        bg.expansion, 
        bg.min_players, 
        bg.max_players, 
        bg.time_to_play, 
        bg.min_age, 
        bg.complexity,
        p.name AS publisher_name,
        GROUP_CONCAT(c.name SEPARATOR \', \') AS categories
    FROM BoardGames bg
    JOIN Publishers p ON bg.publisher_id = p.id
    JOIN BoardGamesCategories bgc ON bg.id = bgc.bg_id
    JOIN Categories c ON bgc.cat_id = c.id
    WHERE bgc.cat_id = ?
    GROUP BY bg.id;');
    PREPARE stmt FROM @sql;
    SET @category_id = category_id;
    EXECUTE stmt USING @category_id;
    DEALLOCATE PREPARE stmt;
END//

CREATE PROCEDURE GetPublisherGames(publisher_id INT)
READS SQL DATA
BEGIN
    SET @sql = CONCAT('SELECT
        bg.id, 
        bg.title, 
        bg.description, 
        bg.expansion, 
        bg.min_players, 
        bg.max_players, 
        bg.time_to_play, 
        bg.min_age, 
        bg.complexity,
        p.name AS publisher_name,
        GROUP_CONCAT(c.name SEPARATOR \', \') AS categories
    FROM BoardGames bg
    JOIN Publishers p ON bg.publisher_id = p.id
    JOIN BoardGamesCategories bgc ON bg.id = bgc.bg_id
    JOIN Categories c ON bgc.cat_id = c.id
    WHERE p.id = ?
    GROUP BY bg.id;');

    PREPARE stmt FROM @sql;
    SET @publisher_id = publisher_id;
    EXECUTE stmt USING @publisher_id;
    DEALLOCATE PREPARE stmt;
END//

DELIMITER ;