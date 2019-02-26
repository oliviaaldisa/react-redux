require('dotenv').config({path:__dirname+'/../../.env'}); //instatiate environment variables


let CONFIG = {} //Make this global to use all over the application

CONFIG.API_URL          = process.env.REACT_APP_API_URL   || '';

module.exports = CONFIG;