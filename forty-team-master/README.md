<img src="https://github.com/jeaanca/fort-team/blob/master/app/src/assets/img/logo-full.png"><br>

### Forty Team is a real-time conversation project

## About
This project has the ambition to build a chat in real time using socket.io in javascript.

The appearance is related to several studies that I conducted where it resulted in a project with the following stacks:

**Vue.js**: Framework used in the view layer
**Node.js**: Used to build the other two layers, Controller and Model.

The data is stored in a **postgres** database and the entire cache is made by **redis**, in redis the database user Id is linked to the socket id.

## Clone
Clone this repo to your local machine using https://github.com/peangelo/forty-team-master <br>
cd forty-team <br>

## Configuration 
Must have installed [**postgres**](https://www.postgresql.org/download/) and [**redis**](https://redis.io/download) on the machine

### server
  cp .env.example .env <br>
  In the .env file add the key that will be used in the JWT.
  Add postgres configuration data to server <i>/forty-team/server/knexfile.js</i>
  must be create a folder named **images** in server directory
```bash
  npm install
  npx knex migrate:latest
  npm start
```
### app  
  cp .env.example .env <br>
  In the .env file add the url to API.
```bash  
  npm install
  npm run serve
```
