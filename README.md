1-ida bdit project jdid, rigel berk ur new db infos f env file

2-.env file fih sensitive information, used that method for security

3-if u create .env file, add '.env' da5el .gitignore file

4-to access the stored infos li rahom f .env, read config.js file

//type npm init -y f server

//dir f package.json inside scripts ==> "start": "node index.js"

//npm start

//create the .gitignore file w semih manually w ekteb da5lo node_modules

//npm i nodemon -D (live server chghol)

//f scripts bedel hdik start ==> "start": "nodemon index.js"

//npm install cors / express / node-cron / mongoose / mongodb /
//npm install jsonwebtoken / nodemailer

//after changing my local dns to 8.8.8.8 / 8.8.4.4, it connected to db

//npm install firebase (client + server)
//npm install -g firebase-tools (server)
//to setup firebase, new project, storage get started, region europe, rules = true instead of false
//roh project settings, general, lta7t dir l sdk configuration w copiyi kolech and paste it f index.js
//add these: import {getStorage} from 'firebase/storage'
const storage = getStorage(app);
//ne7i analystic function

//if env vars are undefined, make sure gitignore is inside the root directory
