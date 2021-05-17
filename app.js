const express = require("express");
const bodyParser  = require("body-parser");
const request = require("request");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req,res){
    res.sendFile(__dirname+"/signup.html");
});

app.post("/", function(req,res){
    var firstName = req.body.fName;
    var lastName = req.body.lName;
    var email = req.body.eMail;

    var data = {
        
    }
})

app.listen(3000, function(){
    console.log("Server is running on 3000");
});


// b0c876a1acad6d50b43a773159f4133e-us1

//defd742678