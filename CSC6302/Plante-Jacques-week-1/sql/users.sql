-- Admin User
CREATE USER 'admin_user'@'%'
IDENTIFIED BY 'admin1234';

-- Read Only User
CREATE USER 'read_only'@'%'
IDENTIFIED BY 'read1234';

-- Modify User
CREATE USER 'modify_user'@'%'
IDENTIFIED BY 'modify1234';