const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const session = require("express-session");
const routes = require('./routes/routes')
const conn = require('./database/conn')



conn.authenticate().then(()=>{
    console.log('Database connected!')
}).catch(e => {
    console.error(`An error ocurred! [${e}]`)
})

// View engine
app.set('view engine','ejs');

app.use(session({
    secret: "qualquercoisa", cookie: { maxAge: 30000000},
    saveUninitialized: true,
    resave: true
}))

app.use(express.static('public'));

//Body parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(routes)

// Router

    // app.get("/", (req, res) => {
    //     res.render("index.ejs");
    // })

// End Router
app.listen(3333, () => {
    console.log("O servidor está rodando!")
})