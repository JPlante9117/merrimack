-- Create roles
CREATE ROLE 'admin_role';
GRANT ALL PRIVILEGES ON *.* TO 'admin_role' WITH GRANT OPTION;

CREATE ROLE 'read_role';
GRANT SELECT ON *.* TO 'read_role';

CREATE ROLE 'modify_role';
GRANT SELECT, INSERT, UPDATE, DELETE ON *.* TO 'modify_role';

-- Assign Roles
GRANT 'admin_role' TO 'admin_user';
SET DEFAULT ROLE 'admin_role' TO 'admin_user';
GRANT 'read_role' TO 'read_only';
SET DEFAULT ROLE 'read_role' TO 'read_only';
GRANT 'modify_role' TO 'modify_user';
SET DEFAULT ROLE 'modify_role' TO 'modify_user';