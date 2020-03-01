const port=process.env.PORT || 1000
var express= require('express');
var app=express();


app.use(express.static(__dirname+"/public"));


app.set("view engine","ejs");

app.get("/",(req,res)=>{
    res.render("home")
})

app.get("/contact",(req,res)=>{
    res.render("contact")
})

app.get("/catalog",(req,res)=>{
    res.render("catalog")
})

app.get("/works",(req,res)=>{
    res.render("works")
})

app.get("/whoare",(req,res)=>{
    res.render("whoare")
})


//////////////////////////////////
app.listen(port,()=>console.log('Server on port ' + port))