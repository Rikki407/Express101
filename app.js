var express = require("express");
var app = express();
app.get("/",function (req,res) {
   res.send("Hi There!");
});
app.get("/bye",function (req,res) {
   res.send("GoodBye!")
});
app.get("*",function (req,res) {
   res.send("uh Oh....page not found");
});
app.listen(3000, function () {
    console.log("Server started on port 3000")
});