var express=require("express");
var route=express.Router();
var fs=require("fs");

route.post("/add",function(request,response){
    let sno=request.body.sno;
    let name=request.body.name;
    let city=request.body.city;

    fs.readFile("Data/data.json","utf8",function(err,data){
        if(err){
            console.log(err);
           response.sendStatus(500);
        }
        else{
            let people=JSON.parse(data);
            let person={sno:sno,name:name,city:city};
            people.push(person);
            fs.writeFile("Data/data.json",JSON.stringify(people),function(err){
                if(err)
                  response.sendStatus(500);
                else
                  response.send("DATA STORED IN FILE");
            });
        }

    })
    
   
});

route.get("/report",function(request,response){
     fs.readFile("Data/data.json","utf8",function(err,data){
        if(err){
            console.log(err);
           response.sendStatus(500);
        }
        else{
            console.log(data);
            response.render("people",{people:JSON.parse(data),programmer:"George"})
        }
});
});

module.exports=route;