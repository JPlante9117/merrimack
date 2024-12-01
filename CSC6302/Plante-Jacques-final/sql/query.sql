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
        WHERE c.id = 3
        GROUP BY bg.id;