DROP PROCEDURE IF EXISTS ssss;

DELIMITER //

CREATE PROCEDURE ssss(publisher_name VARCHAR(50))
READS SQL DATA
BEGIN
    CALL GetBoardGamesWithDetails(CONCAT('LENGTH(publisher_name) = LENGTH(\'', publisher_name, '\')
    AND publisher_name = \'', publisher_name, '\''));
END//

DELIMITER ;

CALL ssss('s');