$(document).ready(
    function(){
        $.get("http://localhost:5600/moduledata/all",function(modules){
            console.log(modules);
            let code="";
            for(let x in modules){
               code+="<div class='box'>";
               code+="<div class='image'>"+
               "<img src='http://localhost:5600/moduledata/images/"+modules[x].filename+"'>"+
               "</div><div class='content'>";
               code+="<h3>"+modules[x].modulename+"</h3>";
               code+="<h5> Price:: INR. "+modules[x].price+"</h5>";
               code+="<h6> Duration:: "+modules[x].duration+"</h6></div></div>";

            }
            console.log(code);
            $('#courses').html(code);
        })
    }
);