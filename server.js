var express=require("express");
var app=express();


var server=app.listen(8080,"0.0.0.0");
var io=require("socket.io").listen(server);
var path=require("path");

io.sockets.on("connection",function(socket){
   socket.on("gonder",function(data){
       io.sockets.emit("alici",data);
       //socket.broadcast.emit("alici",data);
   });

   socket.on("send-image",function(image){
   	    io.sockets.emit("receiveImage",image);
   });
});


app.get("/index.html",function(req,resp){
   resp.sendFile(path.join(__dirname+"/index.html"));
});