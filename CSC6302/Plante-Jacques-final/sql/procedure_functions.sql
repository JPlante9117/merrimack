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
MODIFIES SQL DATA
BEGIN
    DECLARE v_publisher_id INT;
    DECLARE v_bg_id INT;

    -- Insert or retrieve publisher ID
    INSERT INTO Publishers (name)
    SELECT p_publisher_name
    WHERE NOT EXISTS (SELECT 1 FROM Publishers WHERE name = p_publisher_name)
    LIMIT 1;
    
    IF ROW_COUNT() > 0 THEN
        SET v_publisher_id = LAST_INSERT_ID();
    ELSE
        -- Retrieve existing publisher ID
        SET v_publisher_id = (SELECT id FROM Publishers WHERE name = p_publisher_name);
    END IF;

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
    SET @category_names = p_categories;
    WHILE LENGTH(@category_names) > 0 DO
        SET @category_name = SUBSTRING_INDEX(@category_names, ',', 1);
        SET @category_names = SUBSTRING(@category_names, LENGTH(@category_name) + 2);

        INSERT INTO Categories (name)
        VALUES (@category_name)
        ON DUPLICATE KEY UPDATE id = id;

        SET @category_id = (SELECT id FROM Categories WHERE name = @category_name);

        INSERT INTO BoardGamesCategories
            (bg_id, cat_id)
        VALUES
            (v_bg_id, @category_id);
    END WHILE;
END//

CREATE PROCEDURE GetBoardGamesWithDetails(have_statement VARCHAR(100))
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
    GROUP BY bg.id ');
    
    IF have_statement IS NOT NULL THEN
		SET @sql = CONCAT(@sql, 'HAVING ', have_statement);
        PREPARE stmt FROM @sql;
        EXECUTE stmt;
        DEALLOCATE PREPARE stmt;
	END IF;
	PREPARE stmt FROM @sql;
	EXECUTE stmt;
	DEALLOCATE PREPARE stmt;
END//

CREATE PROCEDURE GetCategoryGames(category_name VARCHAR(50))
READS SQL DATA
BEGIN
  CALL GetBoardGamesWithDetails(CONCAT('categories LIKE \'%', category_name, '%\''));
END//

CREATE PROCEDURE GetPublisherGames(publisher_name VARCHAR(50))
READS SQL DATA
BEGIN
    CALL GetBoardGamesWithDetails(CONCAT('publisher_name LIKE \'%', publisher_name, '%\''));
END//

DELIMITER ;