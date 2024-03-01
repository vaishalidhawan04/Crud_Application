const express = require("express"); //loads the express.js module into out application
const app = express(); //creates an instance of the application..it has basically set up our express application..now we can define routes etc.
const mongoose  = require("mongoose");
const session = require("express-session"); //it is a session middleware
const routes = require('./routes/myRoutes')

const DB_URI = "mongodb://localhost:27017/crud_application";
mongoose.connect(DB_URI)
  .then(() => console.log('Connected!'))
  .catch((err)=>{
    console.log(err)
  });

  //set template engine
app.set('view engine', 'ejs');

//middlewares
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(session({
    secret: "my secret key",
    saveUninitialized: true,
    resave: false,
}));//middleware for storing session messages

app.use((req, res, next) =>{
    res.locals.message = req.session.message;
    delete req.session.message;
    next();
})





// app.get('/', (req, res)=>{
//     res.send("Hello World");
// })

//---------------------------

app.use(express.static("uploads"));

//route prefix
app.use(routes);
//---------------------------













const PORT = 8080;
app.listen(PORT, ()=>{
    console.log(`Server connected to port ${PORT}`);
})