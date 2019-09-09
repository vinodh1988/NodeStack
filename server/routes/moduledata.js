var express=require("express");
var route=express.Router();
var path=require("path");

var operations=require("../db/moduledao");

route.get("/all",function(request,response){
    operations.all(function(err,data){
        if(err)
            response.sendStatus(500);
        else
            response.json(data);

    })
})

route.get("/images/:filename",function(request,response){
    console.log(request.params.filename)
    response.sendFile(path.join("D:/images",request.params.filename));
});

module.exports=route;