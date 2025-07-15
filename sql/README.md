<img width="316" height="38" alt="image" src="https://github.com/user-attachments/assets/d0caf546-c804-4466-83f8-f366a8f5e4bc" /># Moffat Bay Lodge – SQL Database Setup

This project sets up a relational database for Moffat Bay Lodge — a high-end lodge and marina. It includes user management, reservations, rooms, and contact forms.

Files named in sequential order of operations. Process described below.

## Files

| File | Purpose |
|------|---------|
| `moffat_bay_lodge_schema.sql` | Creates all tables for the Moffat Bay Lodge system |
| `insert_sample_data.sql` | Seeds the database with sample records for testing |
| `verify_contents.sql` | SELECTs all records so you can screenshot for documentation |

## How to Run

### From the command line:
#### Navigate to the folder containing the SQL files.
#### Login to MySQL as root. ```mysql -u root -p```

At the `mysql>` prompt:

#### Create the database tables by running:
```
source moffat_bay_lodge_schema.sql
```

#### Insert sample data for demonstration purposes by running:
```
source insert_sample_data.sql
```

#### To verify the success of the previous operations, run:
```
source verify_contents.sql
```

#### To create a database user for the Moffat Bay Lodge website using test credentials, run:
```
source create_db_user.sql
```
This script creates a user `mblodge`@`localhost` and grants DELETE, EXECUTE, INSERT, SELECT, SHOW VIEW, UPDATE
ON moffat_bay_lodge.*

#### The database user credentials should be changed for any publicly facing installation.
#### The database configuration is stored in webapp/META-INF/context.xml
