# feed

Tech Stack

1. [ExpressJs](https://expressjs.com/en/starter/installing.html) - a NodeJs framework
2. [ReactJs](https://reactjs.org/docs/getting-started.html) - ReactJs is a component based JavaScript library for building user interfaces 
3. [MySql](https://dev.mysql.com/doc/) - MySQL is an open-source relational database management system (RDBMS)



There are three folders in the root directory 
1. Backend - Where the API service is in place
2. Client - The frontend part using ReactJs & Redux(State Management package for ReaactJs)
3. Data - The mysql DB dump `feeds 25-07-20.sql`, import it to your database to get some dummy data and table structure.

## Runing the services

Need two terminals(command interface) to run two different services one is API service and other is ReactJs App.

### Runing API server

- `cd backend/` : to go to the api service folder.
- `cp .example.env .env` : it will create a copy of .env file and your DB credentials to make it secure

    you will need to add below credentials : 
    
    `DB_PASSWORD=""`
    
    `DB_HOST=""`
    
    `DB_DATABASE=""`

- `npm install` : to install all required packages.
- `npm start` OR `nodemon` : to run API service you will need to run this on different port as you are going to run two different services.
- `PORT=8080 npm start` OR `PORT=8080 nodemon` : to run with specific port. Running without specific port will run this on port 3000.

your API service is not up and runing

### Running reactJs app

- `cd client/` : to go to the client folder
- `npm install` : to install all required packages
- you will find `constance.js` file into `/client/src` directory and change `API_BASE_URL` as per your runing api service.
- `npm start` OR `yarn start` : to run client app. With specific port or it will run on 3000 port.

last command will automatically open browser with `http://localhost:3000` (P.s. with specified port).
