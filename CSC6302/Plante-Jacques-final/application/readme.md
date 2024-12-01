# Jacques Plante CSC6302 Database Application

## Running instructions
To run the app, simply put
```
npm install && npm start
```
in the terminal

Then hit http://localhost:3000/login for your baseline.
This will prompt you to choose either the read_only or modify_role user type.
Later you can swap between the credentials easily by pressing the button in the upper right to swap accounts.

## DB Setup
In the SQL folder, run the files in the following order:
```
ddl.sql
users.sql
procedure_functions.sql
permissions.sql
dml.sql
```
This should start your database cleanly and add some baseline data to play with