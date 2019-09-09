
var connection=require("./connection");

var operations={

   all:function(callback){
          connection.query("select * from moduledetails",callback);
    },

  insert:function(){},
  update:function(){}
   
}

module.exports=operations;