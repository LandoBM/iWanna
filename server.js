 const express = require('express')
 const bcrypt = require('bcrypt')
 const session = require('express-session');
 const exphbs = require('express-handlebars');
 const routes = require('./controllers');
 const helpers = require('./utils/helpers');
 
 const sequelize = require('./config/connection');
 const SequelizeStore = require('connect-session-sequelize')(session.Store);