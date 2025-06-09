I used pgAdmin to create the database by first importing the entire CSV as text fields. Then I loaded the data into each table, casting columns to the required data types. Any values that exceeded a VARCHAR length limit were set to NULL so the import would succeed without errors.

How to run the code:
1.Install packages:
npm install express sequelize pg pg-hstore jsonwebtoken dotenv
npm install --save-dev typescript ts-node-dev @types/node @types/express @types/jsonwebtoken @types/dotenv @types/pg

2.Start the server:
npm run dev

3.Verify connections
You should see in the terminal:
Database connection established successfully.
Server is listening on port 3000.

4.Public GET endpoints (no token required)
Get all hotels (GET), URL: http://localhost:3000/hotels
Get a hotel by name (GET), URL: http://localhost:3000/hotels/name
name example Melbourne%20Suites

5.Obtain a JWT token
POST, URL: http://localhost:3000/login
Configure Authorization in Postman and with the token from login
Body (raw JSON): { "username": "admin", "password": "parola123" }


6.Protected endpoints (require token in Authorization header)
Create a hotel (POST), URL: http://localhost:3000/hotels
Body (raw JSON): include at least globalPropertyID, globalPropertyName, cityID, sourceGroupCode, plus any other fields you want

Update a hotel (PUT), URL: http://localhost:3000/hotels/id
Body (raw JSON): fields to update (e.g. { "globalPropertyName": "New Name" })

Delete a hotel (DELETE), URL: http://localhost:3000/hotels/id