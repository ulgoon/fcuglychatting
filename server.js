var express = require("express");

var app = express();


var http = require("http").Server(app);

app.set("port", process.env.PORT || 3030);

app.get("/", function(req, res){
    res.type("text/plain");
    res.send("This is chat server.");
});

http.listen(app.get("port"), function(){
    console.log("Express chat server is running at localhost:" + app.get("port"));
});
