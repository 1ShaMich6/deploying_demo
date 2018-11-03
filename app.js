var express = require("express");
var app = express();

app.set("view engine", "ejs");

// ====== ROUTE DEFINITIONS =======
app.get("/", function(req, res) {
    res.render("home");
});


app.get("/about", function(req, res) {
    res.render("about");
});


// ====== START SERVER + LISTEN =======
app.listen(process.env.PORT, process.env.IP , function() {
    console.log("DeployingDemo server has started!");
});