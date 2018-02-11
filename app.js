var express = require("express");
var app = express();
app.get("/",function (req,res) {
    res.send("Hi There Welcome to my assignment");
});
app.get("/speak/:animal",function (req,res) {
   var animal = req.params.animal;
   var voice = "hmm";
   switch (animal)
   {
       case "cat": voice = "Meow";
           break;
       case "dog": voice = "WOOF WOOF";
           break;
       case "cow": voice = "Moo";
           break;
   }
   res.send("The " + animal+" says "+voice);
});
app.get("/repeat/:say_what/:num",function (req, res) {
    var say_what = req.params.say_what;
    var num = req.params.num;
    var empty ="";
    for(var i=0;i<num;i++)
    {
        empty = empty + " " +say_what;
    }
    res.send(empty);
});
app.get("*",function (req,res) {
   res.send("Sorry, page not found... What are you doing with your life");
});
app.listen(3000,function () {
   console.log("Listening on the port 3000");
});