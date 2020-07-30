//LOADING EXPRESS
var express = require("express");

//INITIALIZING EXPRESS
var app = express();

//LOADING REQUEST
var request = require("request");

//GRANTING EXPRESS ACCESS TO PUBLIC FOLDER WHEN NEEDED
app.use(express.static("public"));

//LET EXPRESS KNOW WE'RE USING EJS FILES AHEAD OF TIME, SO .EJS NOT REQ ON ROUTES
app.set("view engine","ejs");

//HOME PG ROUTE
app.get("/",function(req,res){
    res.render("todo");
});


//SERVER LISTENING FOR LOCAL, OR PORT FOR WHEN DEPLOYED...
app.listen(process.env.PORT || 3000,function(){
    console.log("Server listening on port 3000.")
});