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
 const PORT = process.env.PORT || 5500;

 app.use(express.json());
 app.use(express.urlencoded({ extended: true }));
 app.use(express.static(path.join(__dirname, 'public')));

 const hbs = exphbs.create({ helpers });

 const sess = {
  secret: 'Super secret secret',
  cookie: {
    maxAge: 300000,
    httpOnly: true,
    secure: false,
    sameSite: 'strict',
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
 };

 app.use(session(sess));

 app.engine('handlebars', hbs.engine);
 app.set('view engine', 'handlebars');

 app.use(routes)

<<<<<<< HEAD
 sequelize.sync({ force: false , alter : false }).then(() => {
=======
  //new
  const multer  = require('multer')
 
//   const storage = multer.diskStorage({
//    destination: function (req, file, cb) {
//      cb(null, './uploads')
//    },
//    filename: function (req, file, cb) {
//      cb(null, file.originalname)
//    }
//  })
 //const upload = multer({ storage: storage })
 
 app.use('/uploads', express.static('uploads'));
 
 //end new

 sequelize.sync({ force: false }).then(() => {
>>>>>>> e291b4c04d56d0128aec9809f6446069bf98e788
    app.listen(PORT, () => console.log('Now listening'));
  });
