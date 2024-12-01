-- Create roles
CREATE ROLE IF NOT EXISTS 'admin_role';
-- Gives all privilages
GRANT ALL PRIVILEGES
-- Anywhere
ON GAMES.*
TO 'admin_role'
-- Allow to grant permissions to other users
WITH GRANT OPTION;

CREATE ROLE IF NOT EXISTS 'read_role';
-- Can read from the db
GRANT SELECT
-- anywhere
ON GAMES.*
TO 'read_role';
-- Allow them to specifically execute the getTeacherStudents stored procedure
GRANT EXECUTE ON PROCEDURE getCategoryGames TO 'read_role';
GRANT EXECUTE ON PROCEDURE getPublisherGames TO 'read_role';

CREATE ROLE IF NOT EXISTS 'modify_role';
-- Can read, write, update, and delete from the db
GRANT SELECT, INSERT, UPDATE, DELETE
-- Anywhere
ON GAMES.*
TO 'modify_role';
GRANT EXECUTE ON PROCEDURE getCategoryGames TO 'modify_role';
GRANT EXECUTE ON PROCEDURE getPublisherGames TO 'modify_role';
GRANT EXECUTE ON PROCEDURE AddBoardGame TO 'modify_role';

-- Assign Roles
GRANT 'admin_role' TO 'admin_user';
SET DEFAULT ROLE 'admin_role' TO 'admin_user';
GRANT 'read_role' TO 'read_only';
SET DEFAULT ROLE 'read_role' TO 'read_only';
GRANT 'modify_role' TO 'modify_user';
SET DEFAULT ROLE 'modify_role' TO 'modify_user';