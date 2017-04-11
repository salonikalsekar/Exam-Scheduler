const express = require("express");
const exhbs = require("express-handlebars");
const bodyParser = require("body-parser");
const passport = require("passport");

const path = require("path");

//Initialize App
const app = express();


//Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

//Set View Engine
app.set("views",path.join(__dirname,"views"));
app.engine("handlebars",exhbs({defaultLayout : "main"}));
app.set("view engine","handlebars");

//Set Static Folders
const static = express.static(__dirname + "/public");
app.use("/public",static);

const configRoutes = require("./routes");
configRoutes(app);

app.listen(3000, () => {
    console.log("We now have a server");
    console.log("Your routes will be running on http:/localhost:3000");
});
