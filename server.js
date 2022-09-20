const express = require('express')
const app = express()
const mongoose = require('mongoose')
const passport = require('passport')
const session = require("express-session")
const MongoStore = require("connect-mongo")(session)
const methodOverride = require('method-override')
const flash = require('express-flash')
const logger = require('morgan')
const connectDB = require('./config/database')
const mainRoutes = require('./routes/main')
const postRoutes = require('./routes/posts')
const commentsRoutes = require('./routes/comments')

// Use .env file in the config folder
require('dotenv').config({ path: './config/.env'})

// Config Passport
require('./config/passport')(passport)

// Connect to database
connectDB()

// Use EJS for views
app.set('view engine', 'ejs')

// Static folder
app.use(express.static('public'))

// Body Parsing
app.use(express.urlencoded({ extended: true}))
app.use(express.json())

// Logging
app.use(logger('dev'))

// Use forms for put / delete
app.use(methodOverride("_method"))

// Setting up sessions - MongoDB
app.use(
    session({
      secret: "keyboard cat",
      resave: false,
      saveUninitialized: false,
      store: new MongoStore({ mongooseConnection: mongoose.connection }),
    })
  );

// Passport Middleware

app.use(passport.initialize())
app.use(passport.session())

//Use flash messages for errors, info, ect...
app.use(flash());

//Setup Routes For Which The Server Is Listening
app.use("/", mainRoutes);
app.use("/post", postRoutes);
app.use("/comment", commentsRoutes)

//Server Running
app.listen(process.env.PORT, () => {
    console.log("Server is running, you better catch it!");
  });