
var connection=require("./connection");

var operations={

   all:function(callback){
          connection.query("select * from moduledetails",callback);
    },

  insert:function(module,callback){
       connection.query("insert into moduledetails values(?,?,?,?,?,?)",
       [module.mcode,
      module.mname,module.duration,module.price,module.description,module.filename],
      callback);
  },
  update:function(){}
   
}

module.exports=operations;