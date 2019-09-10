var express=require("express");
var route=express.Router();
var path=require("path");

var operations=require("../db/moduledao");

route.get("/all",function(request,response){
    console.log(request);
    operations.all(function(err,data){
        if(err){
            console.log(err);
            response.sendStatus(500);
        }
        else
            response.json(data);

    })
})

route.post("/add",function(request,response){
     let file= request.files.cimage;
     file.mv("D:/images/"+file.name);

    let module={
        mcode:request.body.mcode,
        mname:request.body.mname,
        price:request.body.price,
        duration:request.body.duration,
        description:request.body.description,
        filename: file.name
    }
    console.log(module);
    operations.insert(module,function(err,data){
      if(err){
        
         response.sendStatus(500);
    }
      else
         response.send("Data and File Stored");
    });
})
route.get("/images/:filename",function(request,response){
    console.log(request.params.filename);
    response.sendFile(path.join("D:/images",request.params.filename));
});

module.exports=route;