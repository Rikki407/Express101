var express = require("express");
var app = express();
app.use(express.static("public"));
app.set("view engine","ejs");
app.get("/",function (req, res) {
    res.render("home.ejs");
});
app.get("/flowername/:name",function (req, res) {
   var name = req.params.name;
    res.render("flower.ejs",{flower_name : name});
});
app.get("/flowerlist",function (req, res) {
    var flist = [
        {
            color : "violet",
            flower : "daisy"
        },
        {
            color : "yellow",
            flower : "sunflower"
        },
        {
            color : "red",
            flower : "rose"
        },
        {
            color : "black",
            flower : "tulip"
        }
    ];
    res.render("flowerlist",{flowerlist : flist});
});
app.get("*",function (req,res) {
   res.send("Sorry, page not found... What are you doing with your life");
});
app.listen(3000,function () {
   console.log("Listening on the port 3000");
});