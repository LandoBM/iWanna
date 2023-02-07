 const express = require('express')
 const path = require('path')
 const bcrypt = require('bcrypt')
 const session = require('express-session');
 const exphbs = require('express-handlebars');
 const routes = require('./controllers');
 const helpers = require('./utils/helpers');
 
 const sequelize = require('./config/connection');
 const SequelizeStore = require('connect-session-sequelize')(session.Store);

 const app = express();
 const PORT = process.env.PORT || 3003;

 app.use(express.json());
 app.use(express.urlencoded({ extended: true }));
 app.use(express.static(path.join(__dirname, 'public')));

 app.use(routes)

 sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
  });
