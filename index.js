var express=require('express');
var path=require("path");
var froute=require("./server/routes/filedata");
var mroute=require("./server/routes/moduledata");
var bodyParser=require("body-parser");
var app=express();

app.use(express.static(path.join(__dirname,"public/static/css")));
app.use(express.static(path.join(__dirname,"public/static/js")));
app.use(express.static(path.join(__dirname,"public/static/pages")));
app.use(express.static(path.join(__dirname,"node_modules/jquery/dist")));

app.use(bodyParser.urlencoded()); //to parse the data in the request

app.use("/filedata",froute);
app.use("/moduledata",mroute);

app.set('views', path.join(__dirname, 'public/views'));
app.set('view engine', 'pug');

app.get("/Home",function(request,response){
    response.sendFile(path.join(__dirname,"public/static/index.html"));
})
app.get("/Hello",function(request,response){
    response.send("Hello from the app....!!!")
});
app.get("/",function(request,response){
    response.send("Node Express listener is working...!!!!!!");

})

app.listen("5600",function(){
   console.log("Server started and running in 5600");
});