-- -- Admin User
-- CREATE USER IF NOT EXISTS 'admin_user'@'%'
-- IDENTIFIED WITH mysql_native_password BY 'admin1234';

-- -- Read Only User
-- CREATE USER IF NOT EXISTS 'read_only'@'%'
-- IDENTIFIED WITH mysql_native_password BY 'read1234';

-- -- Modify User
-- CREATE USER IF NOT EXISTS 'modify_user'@'%'
-- IDENTIFIED WITH mysql_native_password BY 'modify1234';

-- Admin User
CREATE USER IF NOT EXISTS 'admin_user'@'%'
IDENTIFIED BY 'admin1234';

-- Read Only User
CREATE USER IF NOT EXISTS 'read_only'@'%'
IDENTIFIED BY 'read1234';

-- Modify User
CREATE USER IF NOT EXISTS 'modify_user'@'%'
IDENTIFIED BY 'modify1234';